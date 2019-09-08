import assert from 'assert';
import cheerio from 'cheerio';
import path from 'path';
import fs from 'fs';
import controller from '../controller/domController';

describe('DOM Controller Test', () => {
    const authorsIndex = fs.readFileSync(path.join(__dirname, '/page/seva-author-index-test.html'));
    const storiesAuthorIndex = fs.readFileSync(path.join(__dirname, '/page/seva-author-story-index.html'));
    const storyContent = fs.readFileSync(path.join(__dirname, '/page/seva-text-story.html'));

    describe('Seva author index parsing', () => {
      
      it('When parsing authors list HTML body, obtains data ', () => {
        
        //Load CiudadSeva HTML testing file  
        const $ = cheerio.load(authorsIndex);
        const authorsTestData = controller.obtainAuthorsFromDom($);

        assert(authorsTestData, "Index did not obtained data.");
        assert.strictEqual(authorsTestData.length, 20);
        assert.deepStrictEqual(
          authorsTestData.pop(),
          {
            firstname: 'John',
            lastname: 'Doe',
            birthYear: '1800',
            deathYear: '2018',
            country: 'Neverland',
            urlToPage: 'https://ciudadseva.com/autor/john-doe/cuentos/',
            isAnonymous: false
          },
          
        )
      })

      it('When parsing author stories list HTML body, obtains stories name and urls', () => {

        //Load CiudadSeva HTML testing file  
        const $ = cheerio.load(storiesAuthorIndex);

        const storiesTestData = controller.obtainAuthorsStoriesFromDom($);
        assert(storiesTestData, "Index did not obtained any data.");
        assert.strictEqual(storiesTestData.length, 3);
        assert.deepStrictEqual(
          storiesTestData,
          [
            {
              title: 'Tale 1', 
              urlToPage: 'https://ciudadseva.com/texto/tale-1/'
            },
            {
              title: 'Tale 2',
              urlToPage: 'https://ciudadseva.com/texto/tale-2/'
            },
            {
              title: 'Tale 3',
              urlToPage: 'https://ciudadseva.com/texto/tale-3/'
            }
          ]          
        )        
      })

      it('When parsing a single storiy HTML body, obtain story content/text', () => {

        //Load CiudadSeva HTML testing file  
        const $ = cheerio.load(storyContent);

        const storyTextTestData = controller.obtainStoryContentFromDom($);
        assert(storyTextTestData, "Index did not obtained any data.");
        assert.deepStrictEqual(
          storyTextTestData,
          {
            title: 'Gorrioncito', 
            description: '[Cuento folclórico - Texto completo.]',
            type: 'STORY',
            textData: "\n                        Un matrimonio viejo que no tenía hijos rezaba a Dios todos los días para\n                            merecer la\n                            misericordia divina; pero Dios, sordo, al parecer, a las súplicas, no le\n                            concedía la gracia\n                            de tener un niño.\n                        Un día se fue el marido al bosque para recoger setas y encontró a un viejecito\n                            que le dijo:\n                        \n                        -Yo sé cuál es la pena que escondes en tu corazón y cuán grande\n                            es tu deseo\n                            de tener hijos. Óyeme bien: ve al pueblo, pide en cada casa un huevo; luego coge una\n                            gallina, hazla\n                            sentar sobre ellos para que los empolle y ya verás lo que sucede.\n                        El anciano volvió al pueblo, que tenía cuarenta y una casas; en cada una de\n                            ellas\n                            entró y pidió un huevo, y luego, volviendo a la suya, cogió una gallina\n                            y la hizo\n                            empollar los cuarenta y un huevos.\n                        Pasaron dos semanas; los ancianos fueron al gallinero, y cuál sería su asombro\n                            al ver que\n                            de los huevos nacieron cuarenta niños fuertes y robustos y uno pequeño y\n                            débil.\n                        El padre le puso a cada uno un nombre; pero al llegar al último, ya no se le\n                            ocurría\n                            qué nombre ponerle. Entonces, atendiendo a que era el pequeño, dijo:\n                        -Como no tengo nombre para ti, te llamaré Gorrioncito.\n                        Los niños crecieron con tal rapidez, que algunos días después de nacer\n                            pudieron ya\n                            trabajar y ayudar a sus padres. Eran unos muchachos guapísimos y trabajadores;\n                            cuarenta de ellos\n                            labraban el campo y Gorrioncito hacía los trabajos de casa.\n                        Llegó la temporada de siega, y los hermanos se fueron a guadañar y hacer haces\n                            de heno.\n                            Pasaron una semana en las praderas y luego volvieron a casa, cenaron y se acostaron. El\n                            anciano los\n                            contempló y dijo gruñendo:\n                        -¡Oh juventud indolente! Comen mucho, duermen aún más y estoy seguro de\n                            que no han\n                            trabajado nada.\n                        -Padre, antes de juzgar, ve a ver -dijo Gorrioncito.\n                        El anciano se vistió, fue a las praderas y vio con satisfacción que estaban ya\n                            listos\n                            cuarenta grandes haces de heno.\n                        -¡Qué valientes son mis chicos! ¡Cuánto heno han guadañado\n                            en una semana\n                            y qué haces tan grandes han hecho! -exclamó.\n                        Tan grande fue su deseo de admirar sus bienes, que al día siguiente fue otra vez a las\n                            praderas;\n                            llegó allí y vio que faltaba un haz. Volvió a casa preocupado y dijo a\n                            sus hijos:\n                        -¡Oh hijos míos! ¡Ha desaparecido un haz de heno!\n                        -No importa, padre. Nosotros cogeremos al ladrón -le contestó Gorrioncito-.\n                            Dame cien\n                            rublos; yo sé lo que tengo que hacer.\n                        Cogió los cien rublos y se dirigió a la herrería.\n                        -¿Puedes -dijo al herrero- forjarme una cadena con la que pueda atar a un hombre desde\n                            los pies\n                            hasta la cabeza?\n                        -¿Por qué no? -contestó el herrero.\n                        -Pues hazme una, pero que sea bastante resistente. Si resulta fuerte te pagaré cien\n                            rublos; pero\n                            si se rompe no cobrarás ni un copec.\n                        El herrero forjó una cadena de hierro. Gorrioncito se ató con ella el cuerpo,\n                            luego se\n                            dobló por la cintura y la cadena se rompió. El herrero le forjó otra\n                            mucho más\n                            fuerte, que resistió todas las pruebas, y Gorrioncito la cogió, pagó\n                            por ella cien\n                            rublos y se dirigió a las praderas para montar la guardia a los haces de heno. Se\n                            sentó al\n                            lado de uno de ellos y se puso a esperar.\n                        Justo a media noche se levantó el viento, se alborotó el mar, y de sus\n                            profundidades\n                            surgió una yegua hermosísima que se acercó al primer haz y\n                            empezó a devorar el\n                            heno. Gorrioncito corrió hacia ella, la sujetó con la cadena de hierro y\n                            montó a\n                            caballo en su lomo.\n                        La yegua, enfurecida, echó a correr por valles y montes; pero, a pesar de esta carrera\n                            desenfrenada, el jinete permaneció como clavado en su sitio. Al fin, cansada de\n                            correr, la yegua se\n                            paró y dijo:\n                        -¡Oh, joven valeroso! Ya que has podido dominarme, sé tú el amo de mis\n                            potros.\n                        Se acercó a la orilla del mar y relinchó estrepitosamente. El mar se\n                            alborotó y\n                            salieron a la orilla cuarenta y un caballos tan magníficos, que aunque se buscasen\n                            por todo el\n                            mundo no se encontrarían otros semejantes.\n                        Por la mañana, el padre de Gorrioncito, oyendo un gran pataleo y estrepitoso relinchar\n                            en el\n                            patio, salió asustado para ver lo que pasaba. Era su hijo que llegaba a casa\n                            acompañado de\n                            todo un rebaño de caballos.\n                        -¡Hola, hermanos! -exclamó-. Aquí traigo un caballo para cada uno;\n                            vámonos a\n                            buscar novia.\n                        -¡Vámonos! -contestaron todos.\n                        Los padres les dieron su bendición y todos los hermanos se pusieron en camino.\n                        Durante mucho tiempo anduvieron por el mundo, pues no era cosa fácil encontrar tantas\n                            novias.\n                            Además, no querían separarse y casarse con jóvenes que perteneciesen a\n                            distintas\n                            familias, para no tener suerte distinta cada uno, y no era fácil encontrar una madre\n                            que pudiese\n                            alabarse de tener cuarenta y una hijas.\n                        Al fin llegaron a un país muy lejano y vieron un espléndido palacio, todo de\n                            piedra blanca,\n                            que se elevaba en una altísima montaña. Lo cercaba un alto muro y a la entrada\n                            estaban\n                            clavados unos postes de hierro. Los contaron y eran cuarenta y uno.\n                        Ataron a estos postes sus briosos caballos y entraron en el patio. Salió a su\n                            encuentro la bruja\n                            Baba-Yaga, que les gritó:\n                        -¿Quién los ha invitado a entrar? ¿Cómo han osado atar sus\n                            caballos a los\n                            postes sin pedirme permiso?\n                        -¡Vaya, vieja! ¿Por qué gritas tanto? Antes de todo danos de comer y\n                            beber y\n                            caliéntanos el baño; luego podrás hacernos tus preguntas.\n                        Baba-Yaga les dio de comer y beber, les calentó el baño, y después\n                            empezó a\n                            preguntarles:\n                        -Díganme, valerosos jóvenes, ¿están buscando algo o sólo\n                            caminan por\n                            el gusto de pasear?\n                        -Estamos buscando una cosa, abuelita.\n                        -¿Y qué quieren?\n                        -Buscamos novias para todos.\n                        -¡Pero si yo tengo cuarenta y una hijas! -exclamó Baba-Yaga.\n                        Corrió a la torre y pronto apareció acompañada de cuarenta y una\n                            jóvenes.\n                        Los hermanos, encantados, solicitaron permiso para casarse con ellas, y en seguida lo\n                            obtuvieron y\n                            celebraron la boda con un alegre festín.\n                        Al anochecer, Gorrioncito fue a ver qué tal estaba su caballo, y éste, al\n                            acercársele su amo, le dijo con voz humana:\n                        -¡Cuidado, amo! Cuando se acuesten con sus jóvenes esposas no se olviden de\n                            cambiar con\n                            ellas los vestidos; pónganse los de ellas y vístanlas a ellas con los de\n                            ustedes; si no,\n                            perecerán todos.\n                        Gorrioncito lo contó todo a sus hermanos, y todos al llegar la noche vistieron a sus\n                            jóvenes esposas con sus trajes, poniéndose ellos los de éstas, y\n                            así se\n                            acostaron. Pronto todos se durmieron profundamente; sólo Gorrioncito\n                            permaneció vigilando\n                            sin cerrar los ojos.\n                        A media noche gritó Baba-Yaga con una voz espantosa:\n                        -¡Hola, mis fieles servidores! ¡Vengan aquí y corten la cabeza a los\n                            visitantes\n                            importunos!\n                        En un instante acudieron los fieles servidores y cortaron la cabeza a las hijas de Baba-Yaga.\n                        \n                        Gorrioncito despertó a sus hermanos y les explicó lo ocurrido; cogieron las\n                            cabezas\n                            cortadas de sus esposas, las colocaron en los postes de hierro que adornaban la entrada,\n                            ensillaron sus\n                            caballos y huyeron de allí a todo galope.\n                        Por la mañana la bruja se levantó, miró por la ventana y, ¡oh\n                            desgracia!, las\n                            cabezas de sus hijas estaban colocadas en los postes de hierro. Se enfureció,\n                            ordenó que le\n                            diesen su escudo abrasador y se lanzó en persecución de los jóvenes\n                            echando fuego y\n                            quemando con su escudo todo alrededor de sí.\n                        Los hermanos, asustados, no sabían dónde esconderse. Delante de ellos se\n                            extendía el\n                            mar, y a sus espaldas la bruja quemaba todo con su escudo ardiente. La salvación era\n                            imposible.\n                            Pero Gorrioncito era sagaz y astuto: durante su estancia en el palacio de Baba-Yaga le\n                            había robado\n                            a ésta un pañuelo. Lo sacudió ante sí, y de repente\n                            apareció un puente\n                            que se tendía de una orilla a otra. Los jóvenes atravesaron a galope el mar\n                            por el puente, y\n                            pronto se vieron en la orilla opuesta. Gorrioncito sacudió el pañuelo hacia\n                            atrás y\n                            el puente desapareció.\n                        Baba-Yaga tuvo que volverse a casa, y los hermanos llegaron sanos y salvos junto a sus\n                            padres, que los\n                            acogieron llenos de alegría.\n                        FIN\n                    "
          }
        )        
      })

    })
})