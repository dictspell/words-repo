const words = [
    { day: '2024-11-01', words: ["We raked", "leaves into a big pile", "and jumped into it", "We raked leaves into a big pile and jumped into it"] },
    { day: '2024-11-02', words: ["She found", "a rare four-leaf clover", "in the grass", "and kept it for good luck", "She found a rare four-leaf clover in the grass and kept it for good luck"] },
    { day: '2024-11-03', words: ["He made", "an impressive sandcastle", "at the beach", "with towers and moats", "He made an impressive sandcastle at the beach with towers and moats"] },
    { day: '2024-11-04', words: ["They had", "a fun barbecue", "in the backyard", "with friends and family", "They had a fun barbecue in the backyard with friends and family"] },
    { day: '2024-11-05', words: ["The wind blew", "the colorful leaves off", "the trees", "and they danced in the air", "The wind blew the colorful leaves off the trees and they danced in the air"] },
    { day: '2024-11-06', words: ["We saw", "a squirrel climb quickly up", "the tree", "and disappear into the branches", "We saw a squirrel climb quickly up the tree and disappear into the branches"] },
    { day: '2024-11-07', words: ["She made", "a huge snowman", "in the front yard", "with a carrot nose and coal eyes", "She made a huge snowman in the front yard with a carrot nose and coal eyes"] },
    { day: '2024-11-08', words: ["He rode", "his skateboard at the park", "and performed cool tricks", "He rode his skateboard at the park and performed cool tricks"] },
    { day: '2024-11-09', words: ["They played", "hide-and-seek in the house", "and found great hiding spots", "They played hide-and-seek in the house and found great hiding spots"] },
    { day: '2024-11-10', words: ["The flowers bloomed", "beautifully in the spring", "and filled the garden with color", "The flowers bloomed beautifully in the spring and filled the garden with color"] },
    { day: '2024-11-11', words: ["We made", "a fort out of blankets and pillows", "and played inside it", "We made a fort out of blankets and pillows and played inside it"] },
    { day: '2024-11-12', words: ["She read", "a captivating story", "to her little brother before bedtime", "She read a captivating story to her little brother before bedtime"] },
    { day: '2024-11-13', words: ["He drew", "a detailed map of his neighborhood", "including all the houses and streets", "He drew a detailed map of his neighborhood including all the houses and streets"] },
    { day: '2024-11-14', words: ["They played", "an exciting board game", "on a rainy day and laughed a lot", "They played an exciting board game on a rainy day and laughed a lot"] },
    { day: '2024-11-15', words: ["The butterfly landed", "gently on a flower", "and sipped nectar", "The butterfly landed gently on a flower and sipped nectar"] },
    { day: '2024-11-16', words: ["We saw", "an exciting movie at the theater", "with lots of action and adventure", "We saw an exciting movie at the theater with lots of action and adventure"] },
    { day: '2024-11-17', words: ["She made", "a colorful card for her friend's birthday", "and decorated it with stickers", "She made a colorful card for her friend's birthday and decorated it with stickers"] },
    { day: '2024-11-18', words: ["He helped", "his mom cook a delicious dinner", "and set the table", "He helped his mom cook a delicious dinner and set the table"] },
    { day: '2024-11-19', words: ["They went for", "a peaceful walk in the forest", "and saw many different animals", "They went for a peaceful walk in the forest and saw many different animals"] },
    { day: '2024-11-20', words: ["The snow covered", "the ground overnight", "and made everything look like a winter wonderland", "The snow covered the ground overnight and made everything look like a winter wonderland"] },
    { day: '2024-11-21', words: ["We had hot chocolate", "on a cold day", "and warmed up by the fire", "We had hot chocolate on a cold day and warmed up by the fire"] },
    { day: '2024-11-22', words: ["She wrote", "an interesting story about a magical forest", "filled with mystical creatures", "She wrote an interesting story about a magical forest filled with mystical creatures"] },
    { day: '2024-11-23', words: ["He built", "a model airplane", "and painted it with bright colors", "He built a model airplane and painted it with bright colors"] },
    { day: '2024-11-24', words: ["They went on", "an exciting treasure hunt", "and found hidden gems", "They went on an exciting treasure hunt and found hidden gems"] },
    { day: '2024-11-25', words: ["The sunset was", "a beautiful shade of orange and pink", "and we watched it together", "The sunset was a beautiful shade of orange and pink and we watched it together"] },
    { day: '2024-11-26', words: ["We had a fun snowball fight", "in the yard", "and built a snow fort", "We had a fun snowball fight in the yard and built a snow fort"] },
    { day: '2024-11-27', words: ["She made", "a beautiful necklace out of shells", "and gave it to her mother", "She made a beautiful necklace out of shells and gave it to her mother"] },
    { day: '2024-11-28', words: ["He played catch", "with his dog in the backyard", "and taught it new tricks", "He played catch with his dog in the backyard and taught it new tricks"] },
    { day: '2024-11-29', words: ["They had a sleepover", "at their friend's house", "and stayed up late telling stories", "They had a sleepover at their friend's house and stayed up late telling stories"] },
    { day: '2024-11-30', words: ["The fireworks", "lit up the night sky", "with bright colors and loud bangs", "The fireworks lit up the night sky with bright colors and loud bangs"] }
];
/*const words = [
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
    { day: '2024-11-30', words: ["The", "fireworks", "lit", "up", "the", "night", "sky", "with", "bright", "colors", "and", "loud", "bangs", "The fireworks lit up the night sky with bright colors and loud bangs"] }
]; */
  
