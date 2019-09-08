import Crawler from "crawler";
import { CIUDAD_SEVA } from "../URLS";
import controller from './domController';
const ciudadCrawler = new Crawler({
  maxConnections: 10
});

const retrieveAuthorsWithStories = async () => {
  return new Promise((resolve, reject) => {
    ciudadCrawler.queue({
      uri: `${CIUDAD_SEVA}/biblioteca/indice-autor-cuentos/`,
      callback: async (error, res, done) => {
        if (error) {
          reject(error);
        } else {
          const authorsData = await controller.obtainAuthorsFromDom(res.$);
          resolve(authorsData);
        }

        done();
      }
    });
  });
};

const retrieveStoryTitlesFromAuthors = async storyIndexUrl => {
  return new Promise((resolve, reject) => {
    ciudadCrawler.queue({
      uri: storyIndexUrl,
      callback: (error, res, done) => {
        if (error) {
          reject(error);
        } else {
          const authorStoriesData = controller.obtainAuthorsStoriesFromDom(res.$);
          resolve(authorStoriesData);
        }

        done();
      }
    });
  });
};

const retrieveText = async textUrl => {
  return new Promise((resolve, reject) => {
    ciudadCrawler.queue({
      uri: textUrl,
      callback: (error, res, done) => {
        if (error) {
          reject(error);
        } else {
          const storyContent = controller.obtainStoryContentFromDom(res.$);
          resolve(storyContent);
        }

        done();
      }
    });
  });
};

export { retrieveAuthorsWithStories, retrieveStoryTitlesFromAuthors, retrieveText };