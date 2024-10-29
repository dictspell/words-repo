const words = [
    { day: '2024-02-01', words: ["I went", "to the", "library", "to read", "books"] },
    { day: '2024-02-02', words: ["She drew", "a picture", "of our", "classroom"] },
    { day: '2024-02-03', words: ["We lined", "up to", "go to", "the playground"] },
    { day: '2024-02-04', words: ["He used", "scissors to", "cut paper", "in art", "class"] },
    { day: '2024-02-05', words: ["She shared", "her crayons", "with her", "friend"] },
    { day: '2024-02-06', words: ["I learned", "to count", "to ten", "in maths"] },
    { day: '2024-02-07', words: ["We sang", "songs during", "circle time"] },
    { day: '2024-02-08', words: ["He helped", "to clean", "the classroom"] },
    { day: '2024-02-09', words: ["She was", "excited to", "play with", "the puzzles"] },
    { day: '2024-02-10', words: ["We made", "a calendar", "in class"] },
    { day: '2024-02-11', words: ["He showed", "his work", "to the", "teacher"] },
    { day: '2024-02-12', words: ["She learned", "to write", "her name"] },
    { day: '2024-02-13', words: ["We used", "paint to", "make handprints", "in art"] },
    { day: '2024-02-14', words: ["He played", "with the", "toy train", "during break"] },
    { day: '2024-02-15', words: ["She brought", "a snack", "for lunchtime"] },
    { day: '2024-02-16', words: ["We practiced", "sitting quietly", "during storytime"] },
    { day: '2024-02-17', words: ["He counted", "the blocks", "in maths", "lesson"] },
    { day: '2024-02-18', words: ["She showed", "how to", "tie her", "shoelaces"] },
    { day: '2024-02-19', words: ["We learned", "about shapes", "in class"] },
    { day: '2024-02-20', words: ["He helped", "pass out", "the markers", "for drawing"] },
    { day: '2024-02-21', words: ["She was", "happy to", "sit with", "her friends"] },
    { day: '2024-02-22', words: ["We had", "a special", "guest for", "storytime"] },
    { day: '2024-02-23', words: ["He showed", "his toy", "at show-and-tell"] },
    { day: '2024-02-24', words: ["She drew", "numbers with", "chalk outside"] },
    { day: '2024-02-25', words: ["We built", "a train", "track with", "our toys"] },
    { day: '2024-02-26', words: ["He was excited", "to try", "the new", "puzzle"] },
    { day: '2024-02-27', words: ["She helped", "the teacher", "water the", "plants"] },
    { day: '2024-02-28', words: ["We played", "games in", "the gym"] },
    { day: '2024-02-29', words: ["He made", "a thank-you", "card for", "the teacher"] }
];

/* will be used next

const words = [
    { day: '2024-01-01', words: ["I saw", "a butterfly", "in the", "garden"] },
    { day: '2024-01-02', words: ["She baked", "cookies with", "her dad", "they were", "yummy"] },
    { day: '2024-01-03', words: ["We took", "a walk", "by the", "river"] },
    { day: '2024-01-04', words: ["He was", "kind to", "his little", "sister"] },
    { day: '2024-01-05', words: ["We went", "on a", "picnic and", "ate sandwiches"] },
    { day: '2024-01-06', words: ["She painted", "a picture", "of a", "sunny day"] },
    { day: '2024-01-07', words: ["He loves", "playing with", "toy cars", "and trucks"] },
    { day: '2024-01-08', words: ["We found", "some shells", "at the", "beach"] },
    { day: '2024-01-09', words: ["She planted", "flowers in", "the garden", "with grandma"] },
    { day: '2024-01-10', words: ["He was", "helpful when", "cleaning up", "toys"] },
    { day: '2024-01-11', words: ["We watched", "the birds", "in the", "tree"] },
    { day: '2024-01-12', words: ["She made", "a paper", "boat and", "sailed it"] },
    { day: '2024-01-13', words: ["He built", "a castle", "with sand", "at the", "beach"] },
    { day: '2024-01-14', words: ["We danced", "in the", "rain"] },
    { day: '2024-01-15', words: ["She likes", "to eat", "apples and", "bananas"] },
    { day: '2024-01-16', words: ["He saw", "a big", "red balloon", "at the", "fair"] },
    { day: '2024-01-17', words: ["We played", "hide and", "seek in", "the yard"] },
    { day: '2024-01-18', words: ["She helped", "wash the", "dishes with", "mom"] },
    { day: '2024-01-19', words: ["He gave", "a flower", "to his", "teacher"] },
    { day: '2024-01-20', words: ["We colored", "a big", "rainbow", "together"] },
    { day: '2024-01-21', words: ["She found", "a tiny", "ladybug on", "a leaf"] },
    { day: '2024-01-22', words: ["He was excited", "to ride", "the bus"] },
    { day: '2024-01-23', words: ["We made", "pancakes for", "breakfast"] },
    { day: '2024-01-24', words: ["She sang", "a new", "song at", "school"] },
    { day: '2024-01-25', words: ["He saw", "a squirrel", "in the", "park"] },
    { day: '2024-01-26', words: ["We built", "a rocket", "with boxes"] },
    { day: '2024-01-27', words: ["She felt proud", "when she", "put away", "all the", "books"] },
    { day: '2024-01-28', words: ["He played", "with blocks", "and made", "a tower"] },
    { day: '2024-01-29', words: ["We learned", "about bugs", "in science", "class"] },
    { day: '2024-01-30', words: ["She likes", "to draw", "stars and", "moons"] },
    { day: '2024-01-31', words: ["He was happy", "to see", "the ducks", "in the", "pond"] }
];

/*  Done on 29 Oct
const words = [
    { day: '2024-01-01', words: ["I feel", "happy today", "We played", "outside"] },
    { day: '2024-01-02', words: ["She is", "my best friend", "We play", "together"] },
    { day: '2024-01-03', words: ["He felt", "sad when", "his toy", "broke"] },
    { day: '2024-01-04', words: ["We had", "fun at", "recess", "on the", "swings"] },
    { day: '2024-01-05', words: ["She gave", "me a", "big hug", "I felt", "loved"] },
    { day: '2024-01-06', words: ["I was", "excited to", "see my", "friends"] },
    { day: '2024-01-07', words: ["He likes", "to draw", "pictures", "of his", "family"] },
    { day: '2024-01-08', words: ["We made", "a big", "tower with", "blocks"] },
    { day: '2024-01-09', words: ["She felt", "proud when", "she finished", "her puzzle"] },
    { day: '2024-01-10', words: ["He was", "happy to", "share his", "snack"] },
    { day: '2024-01-11', words: ["We saw", "a rainbow", "in the", "sky"] },
    { day: '2024-01-12', words: ["She made", "a card", "for mom"] },
    { day: '2024-01-13', words: ["He felt", "scared at", "night but", "his teddy", "was there"] },
    { day: '2024-01-14', words: ["We had", "a dance", "party"] },
    { day: '2024-01-15', words: ["She loves", "books about", "animals"] },
    { day: '2024-01-16', words: ["He built", "a snowman", "with a", "carrot nose"] },
    { day: '2024-01-17', words: ["We went", "to the park", "and played"] },
    { day: '2024-01-18', words: ["She was excited", "to help her", "teacher"] },
    { day: '2024-01-19', words: ["He gave", "his friend", "a high five"] },
    { day: '2024-01-20', words: ["We painted", "pictures of", "flowers"] },
    { day: '2024-01-21', words: ["She felt", "happy when", "her drawing", "was on", "the wall"] },
    { day: '2024-01-22', words: ["He was proud to", "show mom", "his art"] },
    { day: '2024-01-23', words: ["We had", "a snack", "and talked"] },
    { day: '2024-01-24', words: ["She likes to sing", "songs with", "friends"] },
    { day: '2024-01-25', words: ["He was", "excited", "to play", "outside"] },
    { day: '2024-01-26', words: ["We built", "a fort", "with blankets"] },
    { day: '2024-01-27', words: ["She felt brave", "when she tried", "something new"] },
    { day: '2024-01-28', words: ["He shared", "his toys", "with friends"] },
    { day: '2024-01-29', words: ["We made", "a puzzle", "together"] },
    { day: '2024-01-30', words: ["She was excited to", "learn about", "seasons"] },
    { day: '2024-01-31', words: ["He was happy", "to see", "his teacher"] }
];


const words = [
     { day: '2024-10-01', words: ["Leaves", "fall", "down"] },
    { day: '2024-10-02', words: ["We", "see", "a", "lion"] },
    { day: '2024-10-03', words: ["She", "has", "a", "new", "dress"] },
    { day: '2024-10-04', words: ["Story", "time", "about", "dragons"] },
    { day: '2024-10-05', words: ["We", "make", "a", "sandcastle"] },
    { day: '2024-10-06', words: ["I", "ride", "a", "bike"] },
    { day: '2024-10-07', words: ["We", "play", "chess"] },
    { day: '2024-10-08', words: ["Fish", "swim", "in", "the", "pond"] },
    { day: '2024-10-09', words: ["She", "paints", "the", "sunset"] },
    { day: '2024-10-10', words: ["Puppy", "is", "happy"] },
    { day: '2024-10-11', words: ["We", "learn", "about", "dinosaurs"] },
    { day: '2024-10-12', words: ["He", "bakes", "a", "cake"] },
    { day: '2024-10-13', words: ["Colorful", "flowers"] },
    { day: '2024-10-14', words: ["We", "build", "a", "fort"] },
    { day: '2024-10-15', words: ["She", "finds", "a", "shell"] },
    { day: '2024-10-16', words: ["He", "writes", "a", "letter"] },
    { day: '2024-10-17', words: ["Playing", "football", "outside"] },
    { day: '2024-10-18', words: ["Kitten", "chases", "a", "butterfly"] },
    { day: '2024-10-19', words: ["Movie", "about", "space"] },
    { day: '2024-10-20', words: ["Collecting", "autumn", "leaves"] },
    { day: '2024-10-21', words: ["Planting", "a", "tree"] },
    { day: '2024-10-22', words: ["Rainbow", "in", "the", "sky"] },
    { day: '2024-10-23', words: ["Picnic", "by", "the", "lake"] },
    { day: '2024-10-24', words: ["Playing", "piano"] },
    { day: '2024-10-25', words: ["Washing", "the", "car"] },
    { day: '2024-10-26', words: ["Squirrel", "gathers", "nuts"] },
    { day: '2024-10-27', words: ["Making", "a", "bracelet"] },
    { day: '2024-10-28', words: ["Writing", "a", "story"] },
    { day: '2024-10-29', words: ["Bird", "in", "the", "tree"] },
    { day: '2024-10-30', words: ["Painting", "the", "ocean"] },
    { day: '2024-10-31', words: ["Drawing", "a", "map"] },
    { day: '2024-11-01', words: ["Making", "clay", "sculpture"] },
    { day: '2024-11-02', words: ["Writing", "a", "spring", "poem"] },
    { day: '2024-11-03', words: ["Building", "a", "rocket"] },
    { day: '2024-11-04', words: ["Watching", "a", "play"] },
    { day: '2024-11-05', words: ["Making", "a", "collage"] },
    { day: '2024-11-06', words: ["Writing", "about", "elephants"] },
    { day: '2024-11-07', words: ["Seeing", "butterflies"] },
    { day: '2024-11-08', words: ["Drawing", "family"] },
    { day: '2024-11-09', words: ["Baking", "cookies"] },
    { day: '2024-11-10', words: ["Learning", "about", "planets"] },
    { day: '2024-11-11', words: ["Painting", "sunrise"] },
    { day: '2024-11-12', words: ["Making", "a", "birdhouse"] },
    { day: '2024-11-13', words: ["Finding", "books", "at", "library"] },
    { day: '2024-11-14', words: ["Learning", "to", "knit"] },
    { day: '2024-11-15', words: ["Building", "a", "treehouse"] },
    { day: '2024-11-16', words: ["Going", "to", "the", "fair"] },
    { day: '2024-11-17', words: ["Making", "a", "scrapbook"] },
    { day: '2024-11-18', words: ["Drawing", "a", "dog"] },
    { day: '2024-11-19', words: ["Watching", "puppets"] },
    { day: '2024-11-20', words: ["Making", "paper", "planes"] }
    ] ;
    
*/ 
