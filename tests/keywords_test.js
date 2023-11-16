const supertest = require('supertest')
const assert = require('assert')
const app = require('../index')

describe('Test de endpoint /keywords/', () => {
  it('TEXTO PROBADO: Debería devolver 21 palabras clave correctamente', (done) => {
    const text = 
    `
    Title: New World Beginnings	
    Planet earth took on its present form slowly. Some 225 million years ago, a single supercontinent contained all the world's dry land. Then enormous chunks of terrain began to drift away from this colossal landmass, opening the Atlantic and Indian Oceans, narrowing the  Pacific Ocean, and forming the great continents of Eurasia, AfSeveral billion years ago, that whirling speck of dust known as the earth, fifth in size among the planets, came into being.About six thousand years ago—only a minute in geological time—recorded history of the Western world began. Certain  peoples of the Middle East, developing a written culture, gradually emerged from the haze of the past.Five hundred years ago—only a few seconds figuratively speaking—European explorers stumbled on the Americas. This dramatic accident forever altered the future of both the Old World and the New, and of Africa and Asia as  @link , Australia, Antarctica, and the Americas. The existence of a single original continent has been proved in part by the discovery of nearly identical species offish that swim today in long-separated freshwater lakes throughout the world.Continued shifting and folding of the earth's crust thrust up mountain ranges. The Appalachians were probably formed even before continental separation, perhaps 350 million years ago. The majestic ranges of western North America—the Rockies, the Sierra Nevada, the Cascades, and the Coast Ranges—arose much more recently, geologically speaking, some 135 million to 25 million years ago. They are truly “American” mountains, born after the continent took on its own separate geological identity.By about 10 million years ago, nature had sculpted the basic geological shape of North America. The continent was anchored in its northeastern corner by the massive Canadian Shield, a zone undergirded by ancient rock, probably the first part of what became the North American landmass to have emerged above sea level. A narrow eastern coastal plain, or “tidewater” region, creased by many river valleys, sloped  gently up
    (@title) The Shaping of North America ward to the timeworn ridges of the Appalachians. Those ancient mountains slanted away on their western side into the huge midcontinental basin that rolled downward to the 
    Mississippi Valley bottom and then rose relentlessly to the towering peaks of the Rockies. From the Rocky Mountain crest—the “roof of America”—the land fell off jaggedly into the intermountain Great Basin, 
    bounded by the Rockies on the east and the Sierra and Cascade ranges on the west. The valleys of the Sacramento and San Joaquin Rivers and the Willamette-Puget Sound trough seamed the interiors of present-day California, Oregon, and Washington. The land at last met the foaming Pacific, where the Coast Ranges rose steeply from the sea.Nature laid a chill hand over much of this terrain in the Great Ice Age, beginning about 2 million years ago. Two-mile-thick ice sheets crept from the polar regions to blanket parts of Europe, Asia, and the Americas. In North America the great glaciers carpeted most of  present-day Canada and the United States as far southward as a line stretching from Pennsylvania through the Ohio Country and the Dakotas to the Pacific Northwest.When the glaciers finally retreated about 10,000 years ago, they left the North American landscape transformed, and much as we know it today. The weight of the gargantuan ice mantle had depressed the level of the Canadian Shield. The grinding and flushing action of the moving and melting ice had scoured away the shield's topsoil, pitting its rocky surface with thousands of shallow depressions into which the melting  glaciers flowed to form lakes. The same glacial action scooped out and filled the Great Lakes. They originally drained southward through the Mississippi River system to the Gulf of Mexico. When the melting ice unblocked the Gulf of St. Lawrence, the lake water sought the St. Lawrence River outlet to the Atlantic Ocean, lowering the Great Lakes' level and leaving the Missouri Mississippi-Ohio system to drain the enormous midcontinental basin between the Appalachians and the Rockies. Similarly, in the West, water from the melting glaciers filled sprawling Lake Bonneville, covering much of present-day Utah, Nevada, and Idaho. It drained to the Pacific Ocean through the Snake and Columbia River systems until diminishing rainfall from the ebbing ice cap lowered the water level, cutting off access to the Snake River outlet. Deprived of both inflow and drainage, the giant lake became a gradually shrinking inland sea. It grew increasingly saline, slowly evaporated, and left an arid, mineral-rich desert. Only the Great Salt Lake remained as a relic of Bonneville's former vastness. Today Lake Bonneville's ancient beaches are visible on mountainsides up to 1,000 feet above the dry floor of the Great Basin.
    (@title) Peopling the Americas
    The Great Ice Age shaped more than the geological history of North America. It also contributed to the origins of the continent's human history. Though recent (and still highly controversial) evidence suggests 
    that some early  peoples may have reached the Americas in crude boats, most probably came by land. Some 35,000 years ago, the Ice Age congealed much of the world oceans into massive ice-pack glaciers, lowering 
    the level of the sea. As the sea level dropped, it exposed a land bridge connecting Eurasia with North America in the area of the present-day Bering Sea between Siberia and Alaska. Across that bridge, probably 
    following migratory herds of game, ventured small bands of nomadic Asian  hunters—the “immigrant” ancestors of the Native Americans. They continued to trek across the Bering isthmus for some 250 centuries, 
    slowly peopling the American continents (see  @link ). Agriculture, especially corn growing, accounted for the size and sophistication of the Native American civilizations in Mexico and South America. About 
    5000 hunter-gatherers in highland Mexico developed a wild As the Ice Age ended and the glaciers melted, the sea level rose again, inundating the land bridge about 10,000 years ago. Nature thus barred the door 
    to further immigration for many thousands of years, leaving this part of the human family marooned for millennia on the now-isolated American continents.Time did not stand still for these original Americans. 
    The same climatic warming that melted the ice and drowned the bridge to Eurasia gradually opened ice-free valleys through which vanguard bands groped their way southward and eastward across the Americas. 
    Roaming slowly through this awesome wilderness, they eventually reached the far tip of South America, some 15,000 miles from Siberia. By the time Europeans arrived in America in 1492, perhaps 54 million  
    people inhabited the two American continents.* Over the centuries they split into countless tribes, evolved more than 2,000 separate languages, and developed many diverse religions, cultures, and ways of 
    life.Incas in Peru, Mayans in Central America, and Aztecs in Mexico shaped stunningly sophisticated civilizations. Their advanced agricultural practices, based primarily on the cultivation of maize, which 
    is Indian corn, fed large populations, perhaps as many as 20 million in Mexico alone. Although without large draft animals such as horses and oxen, and lacking even the simple technology of the wheel, these  peoples built elaborate cities and carried on far-flung commerce. Talented mathematicians, they made strikingly accurate astronomical observations. The Aztecs also routinely sought the favor of their gods by offering human sacrifices, cutting the hearts out of the chests of living victims, who were often captives conquered in battle. By some accounts more than 5,000  people were ritually slaughtered to celebrate the crowning of one Aztec  @link  into the staple crop of corn, which became their staff of life and the foundation of the complex, largescale, centralized Aztec and Incan civilizations that eventually emerged. Cultivation of corn spread across the Americas from the Mexican heartland. Everywhere it was planted, corn began to transform nomadic hunting bands into settled agricultural villagers, but this process went forward slowly and unevenly.Corn planting reached the present-day American Southwest as early as 2000  and powerfully molded Pueblo culture. The Pueblo  peoples in the Rio Grande valley constructed intricate irrigation systems to water their cornfields. They were dwelling in villages of multistoried, terraced buildings when Spanish explorers made contact with them in the sixteenth century. ( means “village” in Spanish.)Corn cultivation reached other parts of North America considerably later. The timing of its arrival in dif ferent localities explains much about the relative rates of development of different Native American  peoples (see  @link ). Throughout the continent to the north and east of the land of the Pueblos, social life was less elaborately developed—indeed “societies” in the modern sense of the word scarcely existed. No dense con centrations of population or complex nation-states comparable to the Aztec empire existed in North America outside of Mexico at the time of the Europeans'  arrival—one of the reasons for the relative ease with which the European colonizers subdued the native North Americans.The Mound Builders of the Ohio River valley, the Mississippian culture of the lower Midwest, and the  desert-dwelling Anasazi  peoples of the Southwest did 
    `
    
    supertest(app)
      .post('/keywords/')
      .send({ theText: text })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        
        // la respuesta debería ser un objeto con la propiedad 'keywords'
        assert.strictEqual(typeof res.body, 'object')
        assert.ok(res.body.keywords)

        // ante un texto probado debería devolver las 12 palabras clave
        assert.ok(res.body.keywords.length === 12)

        done()
      })      
  }),
  it('TEXTO VACÍO: Debería devolver 0 palabras clave', (done) => {
    const text = ``
    
    supertest(app)
      .post('/keywords/')
      .send({ theText: text })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        
        // la respuesta debería ser un objeto con la propiedad 'keywords'
        assert.strictEqual(typeof res.body, 'object')
        assert.ok(res.body.keywords)

        // el número de palabras debería ser vacío para un texto vacío
        assert.ok(res.body.keywords.length === 0)

        done()
      })      
  })
})
