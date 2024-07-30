const words = [
    { day: '2024-10-01', words: ["The", "sun", "was", "shining", "brightly", "in", "the", "clear", "blue", "sky", "The sun was shining brightly in the clear blue sky"] },
    { day: '2024-10-02', words: ["We", "played", "a", "fun", "game", "of", "soccer", "at", "recess", "and", "everyone", "had", "a", "great", "time", "We played a fun game of soccer at recess and everyone had a great time"] },
    { day: '2024-10-03', words: ["She", "made", "a", "delicious", "chocolate", "cake", "for", "her", "birthday", "party", "She made a delicious chocolate cake for her birthday party"] },
    { day: '2024-10-04', words: ["Our", "class", "went", "on", "an", "exciting", "field", "trip", "to", "the", "museum", "where", "we", "learned", "about", "dinosaurs", "Our class went on an exciting field trip to the museum where we learned about dinosaurs"] },
    { day: '2024-10-05', words: ["He", "built", "a", "tall", "tower", "with", "his", "colorful", "blocks", "and", "was", "very", "proud", "of", "it", "He built a tall tower with his colorful blocks and was very proud of it"] },
    { day: '2024-10-06', words: ["They", "sang", "a", "beautiful", "song", "at", "the", "concert", "which", "everyone", "enjoyed", "They sang a beautiful song at the concert which everyone enjoyed"] },
    { day: '2024-10-07', words: ["The", "dog", "chased", "the", "ball", "across", "the", "yard", "and", "barked", "happily", "The dog chased the ball across the yard and barked happily"] },
    { day: '2024-10-08', words: ["We", "had", "a", "picnic", "in", "the", "park", "with", "our", "friends", "and", "played", "games", "We had a picnic in the park with our friends and played games"] },
    { day: '2024-10-09', words: ["She", "wrote", "a", "long", "letter", "to", "her", "grandmother", "describing", "her", "summer", "vacation", "She wrote a long letter to her grandmother describing her summer vacation"] },
    { day: '2024-10-10', words: ["He", "found", "a", "shiny", "coin", "on", "the", "sidewalk", "and", "picked", "it", "up", "excitedly", "He found a shiny coin on the sidewalk and picked it up excitedly"] },
    { day: '2024-10-11', words: ["The", "cat", "slept", "peacefully", "on", "the", "couch", "while", "the", "sun", "shone", "through", "the", "window", "The cat slept peacefully on the couch while the sun shone through the window"] },
    { day: '2024-10-12', words: ["We", "watched", "a", "movie", "together", "as", "a", "family", "and", "enjoyed", "popcorn", "We watched a movie together as a family and enjoyed popcorn"] },
    { day: '2024-10-13', words: ["She", "painted", "a", "beautiful", "picture", "of", "a", "sunset", "over", "the", "ocean", "She painted a beautiful picture of a sunset over the ocean"] },
    { day: '2024-10-14', words: ["He", "read", "an", "interesting", "book", "about", "space", "exploration", "and", "shared", "what", "he", "learned", "He read an interesting book about space exploration and shared what he learned"] },
    { day: '2024-10-15', words: ["They", "planted", "colorful", "flowers", "in", "the", "garden", "and", "watered", "them", "daily", "They planted colorful flowers in the garden and watered them daily"] },
    { day: '2024-10-16', words: ["The", "bird", "built", "a", "nest", "in", "the", "tree", "and", "laid", "three", "eggs", "The bird built a nest in the tree and laid three eggs"] },
    { day: '2024-10-17', words: ["We", "went", "to", "the", "beach", "and", "collected", "beautiful", "seashells", "We went to the beach and collected beautiful seashells"] },
    { day: '2024-10-18', words: ["She", "drew", "a", "detailed", "picture", "of", "her", "favorite", "animal", "and", "colored", "it", "She drew a detailed picture of her favorite animal and colored it"] },
    { day: '2024-10-19', words: ["He", "helped", "his", "dad", "wash", "the", "car", "and", "enjoyed", "spraying", "the", "hose", "He helped his dad wash the car and enjoyed spraying the hose"] },
    { day: '2024-10-20', words: ["They", "baked", "delicious", "cookies", "and", "shared", "them", "with", "their", "neighbors", "They baked delicious cookies and shared them with their neighbors"] },
    { day: '2024-10-21', words: ["The", "rain", "pattered", "gently", "on", "the", "roof", "creating", "a", "soothing", "sound", "The rain pattered gently on the roof creating a soothing sound"] },
    { day: '2024-10-22', words: ["We", "saw", "a", "vibrant", "rainbow", "after", "the", "storm", "and", "took", "pictures", "We saw a vibrant rainbow after the storm and took pictures"] },
    { day: '2024-10-23', words: ["She", "fed", "the", "ducks", "at", "the", "pond", "and", "watched", "them", "swim", "She fed the ducks at the pond and watched them swim"] },
    { day: '2024-10-24', words: ["He", "played", "the", "piano", "beautifully", "at", "the", "recital", "and", "received", "a", "standing", "ovation", "He played the piano beautifully at the recital and received a standing ovation"] },
    { day: '2024-10-25', words: ["They", "went", "camping", "in", "the", "woods", "and", "told", "stories", "around", "the", "campfire", "They went camping in the woods and told stories around the campfire"] },
    { day: '2024-10-26', words: ["The", "stars", "twinkled", "brightly", "in", "the", "night", "sky", "as", "we", "watched", "from", "our", "tent", "The stars twinkled brightly in the night sky as we watched from our tent"] },
    { day: '2024-10-27', words: ["We", "rode", "our", "bikes", "around", "the", "neighborhood", "and", "visited", "our", "friends", "We rode our bikes around the neighborhood and visited our friends"] },
    { day: '2024-10-28', words: ["She", "made", "a", "colorful", "bracelet", "out", "of", "beads", "and", "gave", "it", "to", "her", "friend", "She made a colorful bracelet out of beads and gave it to her friend"] },
    { day: '2024-10-29', words: ["He", "caught", "a", "beautiful", "butterfly", "in", "a", "net", "and", "released", "it", "He caught a beautiful butterfly in a net and released it"] },
    { day: '2024-10-30', words: ["They", "went", "fishing", "at", "the", "lake", "and", "caught", "several", "fish", "They went fishing at the lake and caught several fish"] },
    { day: '2024-10-31', words: ["The", "pumpkin", "was", "carved", "into", "a", "spooky", "jack-o'-lantern", "with", "a", "big", "smile", "The pumpkin was carved into a spooky jack-o'-lantern with a big smile"] },
    { day: '2024-11-01', words: ["We", "raked", "leaves", "into", "a", "big", "pile", "and", "jumped", "into", "it", "We raked leaves into a big pile and jumped into it"] },
    { day: '2024-11-02', words: ["She", "found", "a", "rare", "four-leaf", "clover", "in", "the", "grass", "and", "kept", "it", "for", "good", "luck", "She found a rare four-leaf clover in the grass and kept it for good luck"] },
    { day: '2024-11-03', words: ["He", "made", "an", "impressive", "sandcastle", "at", "the", "beach", "with", "towers", "and", "moats", "He made an impressive sandcastle at the beach with towers and moats"] },
    { day: '2024-11-04', words: ["They", "had", "a", "fun", "barbecue", "in", "the", "backyard", "with", "friends", "and", "family", "They had a fun barbecue in the backyard with friends and family"] },
    { day: '2024-11-05', words: ["The", "wind", "blew", "the", "colorful", "leaves", "off", "the", "trees", "and", "they", "danced", "in", "the", "air", "The wind blew the colorful leaves off the trees and they danced in the air"] },
    { day: '2024-11-06', words: ["We", "saw", "a", "squirrel", "climb", "quickly", "up", "the", "tree", "and", "disappear", "into", "the", "branches", "We saw a squirrel climb quickly up the tree and disappear into the branches"] },
    { day: '2024-11-07', words: ["She", "made", "a", "huge", "snowman", "in", "the", "front", "yard", "with", "a", "carrot", "nose", "and", "coal", "eyes", "She made a huge snowman in the front yard with a carrot nose and coal eyes"] },
    { day: '2024-11-08', words: ["He", "rode", "his", "skateboard", "at", "the", "park", "and", "performed", "cool", "tricks", "He rode his skateboard at the park and performed cool tricks"] },
    { day: '2024-11-09', words: ["They", "played", "hide-and-seek", "in", "the", "house", "and", "found", "great", "hiding", "spots", "They played hide-and-seek in the house and found great hiding spots"] },
    { day: '2024-11-10', words: ["The", "flowers", "bloomed", "beautifully", "in", "the", "spring", "and", "filled", "the", "garden", "with", "color", "The flowers bloomed beautifully in the spring and filled the garden with color"] },
    { day: '2024-11-11', words: ["We", "made", "a", "fort", "out", "of", "blankets", "and", "pillows", "and", "played", "inside", "it", "We made a fort out of blankets and pillows and played inside it"] },
    { day: '2024-11-12', words: ["She", "read", "a", "captivating", "story", "to", "her", "little", "brother", "before", "bedtime", "She read a captivating story to her little brother before bedtime"] },
    { day: '2024-11-13', words: ["He", "drew", "a", "detailed", "map", "of", "his", "neighborhood", "including", "all", "the", "houses", "and", "streets", "He drew a detailed map of his neighborhood including all the houses and streets"] },
    { day: '2024-11-14', words: ["They", "played", "an", "exciting", "board", "game", "on", "a", "rainy", "day", "and", "laughed", "a", "lot", "They played an exciting board game on a rainy day and laughed a lot"] },
    { day: '2024-11-15', words: ["The", "butterfly", "landed", "gently", "on", "a", "flower", "and", "sipped", "nectar", "The butterfly landed gently on a flower and sipped nectar"] },
    { day: '2024-11-16', words: ["We", "saw", "an", "exciting", "movie", "at", "the", "theater", "with", "lots", "of", "action", "and", "adventure", "We saw an exciting movie at the theater with lots of action and adventure"] },
    { day: '2024-11-17', words: ["She", "made", "a", "colorful", "card", "for", "her", "friend's", "birthday", "and", "decorated", "it", "with", "stickers", "She made a colorful card for her friend's birthday and decorated it with stickers"] },
    { day: '2024-11-18', words: ["He", "helped", "his", "mom", "cook", "a", "delicious", "dinner", "and", "set", "the", "table", "He helped his mom cook a delicious dinner and set the table"] },
    { day: '2024-11-19', words: ["They", "went", "for", "a", "peaceful", "walk", "in", "the", "forest", "and", "saw", "many", "different", "animals", "They went for a peaceful walk in the forest and saw many different animals"] },
    { day: '2024-11-20', words: ["The", "snow", "covered", "the", "ground", "overnight", "and", "made", "everything", "look", "like", "a", "winter", "wonderland", "The snow covered the ground overnight and made everything look like a winter wonderland"] },
    { day: '2024-11-21', words: ["We", "had", "hot", "chocolate", "on", "a", "cold", "day", "and", "warmed", "up", "by", "the", "fire", "We had hot chocolate on a cold day and warmed up by the fire"] },
    { day: '2024-11-22', words: ["She", "wrote", "an", "interesting", "story", "about", "a", "magical", "forest", "filled", "with", "mystical", "creatures", "She wrote an interesting story about a magical forest filled with mystical creatures"] },
    { day: '2024-11-23', words: ["He", "built", "a", "model", "airplane", "and", "painted", "it", "with", "bright", "colors", "He built a model airplane and painted it with bright colors"] },
    { day: '2024-11-24', words: ["They", "went", "on", "an", "exciting", "treasure", "hunt", "and", "found", "hidden", "gems", "They went on an exciting treasure hunt and found hidden gems"] },
    { day: '2024-11-25', words: ["The", "sunset", "was", "a", "beautiful", "shade", "of", "orange", "and", "pink", "and", "we", "watched", "it", "together", "The sunset was a beautiful shade of orange and pink and we watched it together"] },
    { day: '2024-11-26', words: ["We", "had", "a", "fun", "snowball", "fight", "in", "the", "yard", "and", "built", "a", "snow", "fort", "We had a fun snowball fight in the yard and built a snow fort"] },
    { day: '2024-11-27', words: ["She", "made", "a", "beautiful", "necklace", "out", "of", "shells", "and", "gave", "it", "to", "her", "mother", "She made a beautiful necklace out of shells and gave it to her mother"] },
    { day: '2024-11-28', words: ["He", "played", "catch", "with", "his", "dog", "in", "the", "backyard", "and", "taught", "it", "new", "tricks", "He played catch with his dog in the backyard and taught it new tricks"] },
    { day: '2024-11-29', words: ["They", "had", "a", "sleepover", "at", "their", "friend's", "house", "and", "stayed", "up", "late", "telling", "stories", "They had a sleepover at their friend's house and stayed up late telling stories"] },
    { day: '2024-11-30', words: ["The", "fireworks", "lit", "up", "the", "night", "sky", "with", "bright", "colors", "and", "loud", "bangs", "The fireworks lit up the night sky with bright colors and loud bangs"] },
    { day: '2024-12-01', words: ["We", "decorated", "the", "Christmas", "tree", "together", "with", "ornaments", "and", "lights", "We decorated the Christmas tree together with ornaments and lights"] },
    { day: '2024-12-02', words: ["She", "baked", "a", "gingerbread", "house", "and", "decorated", "it", "with", "candy", "and", "frosting", "She baked a gingerbread house and decorated it with candy and frosting"] },
    { day: '2024-12-03', words: ["He", "made", "a", "snow", "angel", "in", "the", "yard", "and", "laughed", "when", "it", "looked", "perfect", "He made a snow angel in the yard and laughed when it looked perfect"] },
    { day: '2024-12-04', words: ["They", "sang", "Christmas", "carols", "door-to-door", "and", "spread", "holiday", "cheer", "They sang Christmas carols door-to-door and spread holiday cheer"] },
    { day: '2024-12-05', words: ["The", "ice", "skaters", "glided", "gracefully", "across", "the", "frozen", "pond", "performing", "elegant", "moves", "The ice skaters glided gracefully across the frozen pond performing elegant moves"] },
    { day: '2024-12-06', words: ["We", "built", "a", "gingerbread", "house", "and", "added", "lots", "of", "colorful", "candies", "We built a gingerbread house and added lots of colorful candies"] },
    { day: '2024-12-07', words: ["She", "wrapped", "presents", "for", "her", "family", "and", "placed", "them", "under", "the", "Christmas", "tree", "She wrapped presents for her family and placed them under the Christmas tree"] },
    { day: '2024-12-08', words: ["He", "hung", "stockings", "by", "the", "fireplace", "and", "decorated", "them", "with", "glitter", "and", "names", "He hung stockings by the fireplace and decorated them with glitter and names"] },
    { day: '2024-12-09', words: ["They", "had", "a", "snowball", "fight", "in", "the", "backyard", "and", "built", "an", "igloo", "They had a snowball fight in the backyard and built an igloo"] },
    { day: '2024-12-10', words: ["The", "Christmas", "lights", "twinkled", "brightly", "on", "the", "house", "and", "lit", "up", "the", "whole", "street", "The Christmas lights twinkled brightly on the house and lit up the whole street"] },
    { day: '2024-12-11', words: ["We", "drank", "hot", "chocolate", "by", "the", "fire", "and", "told", "stories", "We drank hot chocolate by the fire and told stories"] },
    { day: '2024-12-12', words: ["She", "made", "Christmas", "cookies", "and", "decorated", "them", "with", "icing", "and", "sprinkles", "She made Christmas cookies and decorated them with icing and sprinkles"] },
    { day: '2024-12-13', words: ["He", "wrote", "a", "letter", "to", "Santa", "asking", "for", "his", "favorite", "toys", "He wrote a letter to Santa asking for his favorite toys"] },
    { day: '2024-12-14', words: ["They", "went", "sledding", "down", "the", "big", "hill", "and", "had", "so", "much", "fun", "They went sledding down the big hill and had so much fun"] },
    { day: '2024-12-15', words: ["The", "snowflakes", "fell", "gently", "from", "the", "sky", "and", "covered", "everything", "in", "white", "The snowflakes fell gently from the sky and covered everything in white"] },
    { day: '2024-12-16', words: ["We", "made", "a", "snowman", "with", "a", "carrot", "nose", "and", "a", "scarf", "We made a snowman with a carrot nose and a scarf"] },
    { day: '2024-12-17', words: ["She", "knitted", "a", "warm", "scarf", "for", "her", "friend", "as", "a", "Christmas", "gift", "She knitted a warm scarf for her friend as a Christmas gift"] },
    { day: '2024-12-18', words: ["He", "decorated", "the", "Christmas", "tree", "with", "beautiful", "ornaments", "and", "twinkling", "lights", "He decorated the Christmas tree with beautiful ornaments and twinkling lights"] },
    { day: '2024-12-19', words: ["They", "made", "a", "snow", "fort", "and", "played", "inside", "it", "all", "day", "They made a snow fort and played inside it all day"] },
    { day: '2024-12-20', words: ["The", "fireplace", "kept", "the", "house", "warm", "and", "cozy", "during", "the", "cold", "winter", "night", "The fireplace kept the house warm and cozy during the cold winter night"] },
    { day: '2024-12-21', words: ["We", "saw", "a", "reindeer", "at", "the", "zoo", "and", "learned", "about", "its", "habitat", "We saw a reindeer at the zoo and learned about its habitat"] },
    { day: '2024-12-22', words: ["She", "hung", "Christmas", "lights", "on", "the", "tree", "and", "decorated", "it", "with", "colorful", "ornaments", "She hung Christmas lights on the tree and decorated it with colorful ornaments"] },
    { day: '2024-12-23', words: ["He", "made", "a", "Christmas", "ornament", "out", "of", "clay", "and", "painted", "it", "He made a Christmas ornament out of clay and painted it"] },
    { day: '2024-12-24', words: ["They", "watched", "Christmas", "movies", "together", "and", "drank", "hot", "cocoa", "They watched Christmas movies together and drank hot cocoa"] },
    { day: '2024-12-25', words: ["The", "family", "opened", "presents", "on", "Christmas", "morning", "and", "enjoyed", "a", "big", "breakfast", "The family opened presents on Christmas morning and enjoyed a big breakfast"] },
    { day: '2024-12-26', words: ["We", "played", "in", "the", "snow", "all", "day", "and", "built", "a", "huge", "snowman", "We played in the snow all day and built a huge snowman"] },
    { day: '2024-12-27', words: ["She", "made", "a", "beautiful", "snow", "globe", "and", "shook", "it", "to", "see", "the", "snow", "fall", "She made a beautiful snow globe and shook it to see the snow fall"] },
    { day: '2024-12-28', words: ["He", "built", "a", "snow", "fort", "and", "invited", "his", "friends", "to", "play", "inside", "it", "He built a snow fort and invited his friends to play inside it"] },
    { day: '2024-12-29', words: ["They", "drank", "hot", "cocoa", "by", "the", "fire", "and", "shared", "stories", "They drank hot cocoa by the fire and shared stories"] },
    { day: '2024-12-30', words: ["The", "snow", "covered", "the", "trees", "and", "made", "the", "forest", "look", "like", "a", "winter", "wonderland", "The snow covered the trees and made the forest look like a winter wonderland"] },
    { day: '2024-12-31', words: ["We", "celebrated", "New", "Year's", "Eve", "with", "fireworks", "and", "cheered", "as", "the", "clock", "struck", "midnight", "We celebrated New Year's Eve with fireworks and cheered as the clock struck midnight"] },
    { day: '2025-01-01', words: ["She", "made", "New", "Year's", "resolutions", "and", "wrote", "them", "in", "her", "journal", "She made New Year's resolutions and wrote them in her journal"] },
    { day: '2025-01-02', words: ["He", "watched", "the", "parade", "on", "TV", "and", "enjoyed", "the", "colorful", "floats", "and", "balloons", "He watched the parade on TV and enjoyed the colorful floats and balloons"] },
    { day: '2025-01-03', words: ["They", "played", "board", "games", "together", "and", "had", "a", "great", "time", "They played board games together and had a great time"] },
    { day: '2025-01-04', words: ["The", "snow", "was", "deep", "in", "the", "yard", "and", "we", "had", "fun", "shoveling", "paths", "The snow was deep in the yard and we had fun shoveling paths"] },
    { day: '2025-01-05', words: ["We", "went", "ice", "skating", "on", "the", "frozen", "pond", "and", "practiced", "our", "spins", "We went ice skating on the frozen pond and practiced our spins"] },
    { day: '2025-01-06', words: ["She", "wrote", "a", "poem", "about", "winter", "and", "read", "it", "to", "the", "class", "She wrote a poem about winter and read it to the class"] },
    { day: '2025-01-07', words: ["He", "built", "a", "birdhouse", "and", "painted", "it", "with", "bright", "colors", "He built a birdhouse and painted it with bright colors"] },
    { day: '2025-01-08', words: ["They", "went", "sledding", "down", "the", "hill", "and", "had", "a", "blast", "They went sledding down the hill and had a blast"] },
    { day: '2025-01-09', words: ["The", "snowflakes", "were", "huge", "and", "fell", "softly", "from", "the", "sky", "The snowflakes were huge and fell softly from the sky"] },
    { day: '2025-01-10', words: ["We", "made", "snow", "angels", "in", "the", "yard", "and", "laughed", "at", "our", "silly", "shapes", "We made snow angels in the yard and laughed at our silly shapes"] },
    { day: '2025-01-11', words: ["She", "painted", "a", "beautiful", "winter", "scene", "with", "snow-covered", "trees", "and", "a", "frozen", "lake", "She painted a beautiful winter scene with snow-covered trees and a frozen lake"] },
    { day: '2025-01-12', words: ["He", "wrote", "a", "story", "about", "a", "magical", "snowman", "who", "came", "to", "life", "He wrote a story about a magical snowman who came to life"] },
    { day: '2025-01-13', words: ["They", "played", "in", "the", "snow", "and", "built", "a", "huge", "snow", "fort", "They played in the snow and built a huge snow fort"] },
    { day: '2025-01-14', words: ["The", "ice", "was", "slippery", "and", "we", "had", "to", "walk", "carefully", "to", "avoid", "falling", "The ice was slippery and we had to walk carefully to avoid falling"] },
    { day: '2025-01-15', words: ["We", "watched", "the", "snow", "fall", "from", "the", "window", "and", "drank", "hot", "cocoa", "We watched the snow fall from the window and drank hot cocoa"] },
    { day: '2025-01-16', words: ["She", "made", "a", "snowman", "with", "a", "carrot", "nose", "and", "a", "scarf", "She made a snowman with a carrot nose and a scarf"] },
    { day: '2025-01-17', words: ["He", "built", "a", "snow", "fort", "and", "played", "inside", "it", "all", "day", "He built a snow fort and played inside it all day"] },
    { day: '2025-01-18', words: ["They", "went", "ice", "fishing", "on", "the", "frozen", "lake", "and", "caught", "several", "fish", "They went ice fishing on the frozen lake and caught several fish"] },
    { day: '2025-01-19', words: ["The", "snow", "was", "sparkling", "in", "the", "sunlight", "and", "looked", "like", "a", "blanket", "of", "diamonds", "The snow was sparkling in the sunlight and looked like a blanket of diamonds"] },
    { day: '2025-01-20', words: ["We", "had", "a", "snowball", "fight", "in", "the", "yard", "and", "built", "a", "huge", "snow", "fort", "We had a snowball fight in the yard and built a huge snow fort"] },
    { day: '2025-01-21', words: ["She", "made", "hot", "chocolate", "with", "marshmallows", "and", "whipped", "cream", "She made hot chocolate with marshmallows and whipped cream"] },
    { day: '2025-01-22', words: ["He", "built", "a", "snow", "castle", "with", "towers", "and", "moats", "He built a snow castle with towers and moats"] }
  }
  
