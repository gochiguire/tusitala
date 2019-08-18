const assert = require('assert');
const controller =  require('../crawl.controller');
const cheerio = require('cheerio');
const fs = require('fs');


describe('CrawlController', () => {
    describe('Parsing HTML document', () => {
      const file = fs.readFileSync('./page/CiudadCevaIndexAutoresTest.html');
        it('Obtains data when parsing index author HTML body') {
          //Load CiudadSeva HTML testing file  
          const $ = cheerio.load(file);
          console.log($);
          controller.obtainAuthorsFromDom($);           
        }
    })
})

/*describe('LoginController', function () {

  describe('isValidUserId', function(){

    it('should return true if valid user id', function(){
      var isValid = loginController.isValidUserId(['abc123','xyz321'], 'abc123')
      assert.equal(isValid, true);
    });

    it('should return false if invalid user id', function(){
      var isValid = loginController.isValidUserId(['abc123','xyz321'],'abc1234')
      assert.equal(isValid, false);
    });

  });

});*/