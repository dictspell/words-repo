console.log('wordslok.js loaded');
const words = [
    { day: '2024-07-12', words: ["The", "cat", "is", "on", "the", "mat"] },
    { day: '2024-07-13', words: ["I", "see", "a", "big", "red", "apple"] },
    { day: '2024-07-14', words: ["The", "moon", "is", "in", "the", "sky"] },
    { day: '2024-07-15', words: ["I", "sit", "on", "the", "chair"] },
    { day: '2024-07-16', words: ["The", "car", "goes", "fast"] },
    { day: '2024-07-17', words: ["I", "use", "a", "pen", "to", "write"] },
    { day: '2024-07-18', words: ["The", "sun", "is", "very", "bright"] },
    { day: '2024-07-19', words: ["The", "ball", "is", "blue", "and", "green"] },
    { day: '2024-07-20', words: ["The", "dog", "barks", "loudly"] },
    { day: '2024-07-21', words: ["I", "have", "a", "new", "toy", "car"] },
    { day: '2024-07-22', words: ["The", "cat", "is", "sleeping", "now"] },
    { day: '2024-07-23', words: ["I", "see", "a", "green", "tree", "outside"] },
    { day: '2024-07-24', words: ["I", "drink", "milk", "every", "day"] },
    { day: '2024-07-25', words: ["We", "go", "to", "the", "park", "to", "play"] },
    { day: '2024-07-26', words: ["My", "mom", "cooks", "dinner", "for", "us"] },
    { day: '2024-07-27', words: ["She", "reads", "a", "book", "before", "bed"] },
    { day: '2024-07-28', words: ["We", "play", "with", "blocks", "and", "toys"] },
    { day: '2024-07-29', words: ["I", "love", "to", "eat", "apples", "and", "bananas"] },
    { day: '2024-07-30', words: ["He", "likes", "to", "play", "outside", "with", "friends"] },
    { day: '2024-07-31', words: ["The", "bird", "flies", "in", "the", "sky"] },
    { day: '2024-08-01', words: ["We", "eat", "lunch", "at", "noon"] },
    { day: '2024-08-02', words: ["The", "car", "is", "red", "and", "fast"] },
    { day: '2024-08-03', words: ["I", "like", "to", "draw", "pictures", "in", "my", "book"] },
    { day: '2024-08-04', words: ["She", "jumps", "over", "the", "fence"] },
    { day: '2024-08-05', words: ["They", "play", "games", "in", "the", "yard"] },
    { day: '2024-08-06', words: ["The", "dog", "runs", "in", "the", "garden"] },
    { day: '2024-08-07', words: ["We", "go", "to", "the", "zoo", "to", "see", "animals"] },
    { day: '2024-08-08', words: ["The", "fish", "swims", "in", "the", "water"] },
    { day: '2024-08-09', words: ["I", "find", "a", "big", "yellow", "ball"] },
    { day: '2024-08-10', words: ["She", "writes", "a", "letter", "to", "her", "friend"] },
    { day: '2024-08-11', words: ["He", "plays", "with", "his", "favorite", "toy"] },
    { day: '2024-08-12', words: ["The", "moon", "shines", "brightly", "at", "night"] },
    { day: '2024-08-13', words: ["I", "see", "a", "beautiful", "butterfly"] },
    { day: '2024-08-14', words: ["The", "cake", "is", "sweet", "and", "tasty"] },
    { day: '2024-08-15', words: ["We", "visit", "the", "museum", "on", "Saturdays"] },
    { day: '2024-08-16', words: ["She", "jumps", "high", "on", "the", "trampoline"] },
    { day: '2024-08-17', words: ["The", "stars", "twinkle", "in", "the", "night"] },
    { day: '2024-08-18', words: ["I", "make", "a", "sandcastle", "at", "the", "beach"] },
    { day: '2024-08-19', words: ["The", "rain", "makes", "the", "grass", "green"] },
    { day: '2024-08-20', words: ["She", "plays", "a", "melody", "on", "the", "piano"] },
    { day: '2024-08-21', words: ["We", "go", "for", "a", "walk", "in", "the", "park"] },
    { day: '2024-08-22', words: ["The", "dog", "likes", "to", "chase", "the", "ball"] },
    { day: '2024-08-23', words: ["I", "paint", "a", "picture", "with", "colors"] },
    { day: '2024-08-24', words: ["The", "cake", "is", "for", "a", "birthday"] },
    { day: '2024-08-25', words: ["She", "puts", "on", "her", "new", "dress"] },
    { day: '2024-08-26', words: ["The", "cat", "likes", "to", "climb", "trees"] },
    { day: '2024-08-27', words: ["We", "have", "a", "picnic", "in", "the", "park"] },
    { day: '2024-08-28', words: ["The", "sun", "is", "shining", "brightly", "today"] },
    { day: '2024-08-29', words: ["I", "ride", "my", "bike", "to", "the", "store"] },
    { day: '2024-08-30', words: ["She", "reads", "a", "book", "every", "night"] },
    { day: '2024-08-31', words: ["The", "train", "goes", "fast", "on", "the", "tracks"] },
    { day: '2024-12-26', words: ["She", "plays", "with", "her", "new", "toys"] },
    { day: '2024-12-27', words: ["The", "snow", "is", "falling", "softly"] },
    { day: '2024-12-28', words: ["We", "have", "dinner", "with", "family"] },
    { day: '2024-12-29', words: ["I", "make", "a", "card", "for", "New", "Year"] },
    { day: '2024-12-30', words: ["She", "writes", "her", "New", "Year", "resolutions"] },
    { day: '2024-12-31', words: ["The", "year", "ends", "with", "celebrations"] },
    { day: '2024-08-01', words: ["What", "is", "that", "cat", "doing", "on", "the", "mat"] },
    { day: '2024-08-02', words: ["How", "is", "the", "big", "red", "apple"] },
    { day: '2024-08-03', words: ["Where", "is", "the", "moon", "in", "the", "sky"] },
    { day: '2024-08-04', words: ["What", "time", "is", "it", "to", "sit", "on", "the", "chair"] },
    { day: '2024-08-05', words: ["How", "fast", "is", "the", "car", "going"] },
    { day: '2024-08-06', words: ["What", "do", "you", "use", "to", "write", "with", "a", "pen"] },
    { day: '2024-08-07', words: ["What", "makes", "the", "sun", "so", "bright"] },
    { day: '2024-08-08', words: ["What", "colors", "are", "the", "ball"] },
    { day: '2024-08-09', words: ["Why", "does", "the", "dog", "bark", "loudly"] },
    { day: '2024-08-10', words: ["What", "toy", "car", "do", "you", "have"] },
    { day: '2024-08-11', words: ["Where", "is", "the", "cat", "sleeping", "now"] },
    { day: '2024-08-12', words: ["What", "do", "you", "see", "outside", "the", "green", "tree"] },
    { day: '2024-08-13', words: ["How", "often", "do", "you", "drink", "milk", "every", "day"] },
    { day: '2024-08-14', words: ["When", "do", "we", "go", "to", "the", "park", "to", "play"] },
    { day: '2024-08-15', words: ["Who", "cooks", "dinner", "for", "us"] },
    { day: '2024-08-16', words: ["What", "does", "she", "read", "before", "bed"] },
    { day: '2024-08-17', words: ["How", "do", "we", "play", "with", "blocks", "and", "toys"] },
    { day: '2024-08-18', words: ["What", "do", "you", "love", "to", "eat"] },
    { day: '2024-08-19', words: ["Who", "likes", "to", "play", "outside", "with", "friends"] },
    { day: '2024-08-20', words: ["Where", "does", "the", "bird", "fly", "in", "the", "sky"] },
    { day: '2024-08-21', words: ["What", "kind", "of", "angle", "is", "that", "acute", "or", "obtuse"] },
    { day: '2024-08-22', words: ["How", "does", "the", "plant", "do", "photosynthesis"] },
    { day: '2024-08-23', words: ["Where", "is", "the", "equator", "on", "the", "globe"] },
    { day: '2024-08-24', words: ["What", "is", "a", "tissue", "made", "of"] },
    { day: '2024-08-25', words: ["What", "is", "that", "ancient", "artifact"] },
    { day: '2024-08-26', words: ["How", "does", "blood", "move", "through", "an", "artery"] },
    { day: '2024-08-27', words: ["What", "makes", "a", "car", "go", "with", "force"] },
    { day: '2024-08-28', words: ["How", "does", "a", "chemical", "reaction", "work"] },
    { day: '2024-08-29', words: ["What", "kind", "of", "animal", "is", "that", "an", "amphibian", "or", "a", "reptile"] },
    { day: '2024-08-30', words: ["What", "is", "inside", "an", "atom"] },
    { day: '2024-08-31', words: ["How", "do", "you", "use", "a", "compass", "on", "a", "map"] },
    // use more that, these
    { day: '2024-08-01', words: ["What", "is", "that", "cat", "doing", "on", "that", "mat"] },
    { day: '2024-08-02', words: ["How", "is", "that", "big", "red", "apple"] },
    { day: '2024-08-03', words: ["Where", "is", "that", "moon", "in", "that", "sky"] },
    { day: '2024-08-04', words: ["What", "time", "is", "it", "to", "sit", "on", "that", "chair"] },
    { day: '2024-08-05', words: ["How", "fast", "is", "that", "car", "going"] },
    { day: '2024-08-06', words: ["What", "do", "you", "use", "to", "write", "with", "this", "pen"] },
    { day: '2024-08-07', words: ["What", "makes", "that", "sun", "so", "bright"] },
    { day: '2024-08-08', words: ["What", "colors", "are", "these", "balls"] },
    { day: '2024-08-09', words: ["Why", "does", "that", "dog", "bark", "loudly"] },
    { day: '2024-08-10', words: ["What", "toy", "car", "is", "that"] },
    { day: '2024-08-11', words: ["Where", "is", "that", "cat", "sleeping", "now"] },
    { day: '2024-08-12', words: ["What", "do", "you", "see", "outside", "that", "green", "tree"] },
    { day: '2024-08-13', words: ["How", "often", "do", "you", "drink", "this", "milk", "every", "day"] },
    { day: '2024-08-14', words: ["When", "do", "we", "go", "to", "that", "park", "to", "play"] },
    { day: '2024-08-15', words: ["Who", "cooks", "that", "dinner", "for", "us"] },
    { day: '2024-08-16', words: ["What", "does", "she", "read", "before", "that", "bed"] },
    { day: '2024-08-17', words: ["How", "do", "we", "play", "with", "these", "blocks", "and", "toys"] },
    { day: '2024-08-18', words: ["What", "do", "you", "love", "to", "eat", "these"] },
    { day: '2024-08-19', words: ["Who", "likes", "to", "play", "outside", "with", "these", "friends"] },
    { day: '2024-08-20', words: ["Where", "does", "that", "bird", "fly", "in", "the", "sky"] },
    { day: '2024-08-21', words: ["What", "kind", "of", "angle", "is", "that", "acute", "or", "obtuse"] },
    { day: '2024-08-22', words: ["How", "does", "that", "plant", "do", "photosynthesis"] },
    { day: '2024-08-23', words: ["Where", "is", "that", "equator", "on", "this", "globe,
// more this, these, that
    { day: '2024-09-01', words: ["What", "is", "that", "bone"] },
    { day: '2024-09-02', words: ["How", "does", "this", "rain", "form"] },
    { day: '2024-09-03', words: ["What", "is", "this", "germ"] },
    { day: '2024-09-04', words: ["Who", "made", "this", "music"] },
    { day: '2024-09-05', words: ["What", "is", "the", "temperature"] },
    { day: '2024-09-06', words: ["How", "do", "these", "rules", "work"] },
    { day: '2024-09-07', words: ["What", "does", "this", "artist", "paint"] },
    { day: '2024-09-08', words: ["How", "does", "this", "plant", "grow"] },
    { day: '2024-09-09', words: ["What", "does", "this", "tool", "do"] },
    { day: '2024-09-10', words: ["How", "do", "you", "solve", "this", "math", "problem"] },
    { day: '2024-09-11', words: ["What", "is", "this", "animal's", "home"] },
    { day: '2024-09-12', words: ["How", "does", "this", "brain", "work"] },
    { day: '2024-09-13', words: ["What", "is", "this", "metal"] },
    { day: '2024-09-14', words: ["What", "is", "this", "poem", "about"] },
    { day: '2024-09-15', words: ["How", "does", "this", "law", "help"] },
    { day: '2024-09-16', words: ["What", "is", "this", "planet"] },
    { day: '2024-09-17', words: ["Where", "is", "this", "place", "on", "the", "map"] },
    { day: '2024-09-18', words: ["What", "tree", "is", "this"] },
    { day: '2024-09-19', words: ["How", "do", "you", "say", "this", "letter"] },
    { day: '2024-09-20', words: ["What", "kind", "of", "power", "is", "this"] },
    { day: '2024-09-21', words: ["How", "do", "you", "add", "these", "numbers"] },
    { day: '2024-09-22', words: ["What", "does", "this", "plant", "need"] },
    { day: '2024-09-23', words: ["Where", "is", "this", "line", "on", "the", "globe"] },
    { day: '2024-09-24', words: ["What", "is", "this", "tiny", "part"] },
    { day: '2024-09-25', words: ["What", "does", "this", "leader", "do"] },
    { day: '2024-09-26', words: ["How", "does", "this", "thing", "tell", "temperature"] },
    { day: '2024-09-27', words: ["What", "is", "this", "part", "of", "the", "body"] },
    { day: '2024-09-28', words: ["How", "does", "this", "rule", "work"] },
    { day: '2024-09-29', words: ["What", "is", "this", "number"] },
    { day: '2024-09-30', words: ["How", "can", "you", "find", "this", "tree"] },
    // Another 30 days.
    { day: '2024-09-01', words: ["What", "does", "this", "bone", "do"] },
    { day: '2024-09-02', words: ["How", "does", "this", "rain", "form"] },
    { day: '2024-09-03', words: ["What", "is", "this", "germ"] },
    { day: '2024-09-04', words: ["Who", "made", "this", "music"] },
    { day: '2024-09-05', words: ["What", "is", "the", "temperature"] },
    { day: '2024-09-06', words: ["How", "do", "these", "rules", "work"] },
    { day: '2024-09-07', words: ["What", "does", "this", "artist", "paint"] },
    { day: '2024-09-08', words: ["How", "does", "this", "plant", "grow"] },
    { day: '2024-09-09', words: ["What", "does", "this", "tool", "do"] },
    { day: '2024-09-10', words: ["How", "do", "you", "solve", "this", "math", "problem"] },
    { day: '2024-09-11', words: ["What", "is", "this", "animal's", "home"] },
    { day: '2024-09-12', words: ["How", "does", "this", "brain", "work"] },
    { day: '2024-09-13', words: ["What", "is", "this", "metal"] },
    { day: '2024-09-14', words: ["What", "is", "this", "poem", "about"] },
    { day: '2024-09-15', words: ["How", "does", "this", "law", "help"] },
    { day: '2024-09-16', words: ["What", "is", "this", "planet"] },
    { day: '2024-09-17', words: ["Where", "is", "this", "place", "on", "the", "map"] },
    { day: '2024-09-18', words: ["What", "tree", "is", "this"] },
    { day: '2024-09-19', words: ["How", "do", "you", "say", "this", "letter"] },
    { day: '2024-09-20', words: ["What", "kind", "of", "power", "is", "this"] },
    { day: '2024-09-21', words: ["How", "do", "you", "add", "these", "numbers"] },
    { day: '2024-09-22', words: ["What", "does", "this", "plant", "need"] },
    { day: '2024-09-23', words: ["Where", "is", "this", "line", "on", "the", "globe"] },
    { day: '2024-09-24', words: ["What", "is", "this", "tiny", "part"] },
    { day: '2024-09-25', words: ["What", "does", "this", "leader", "do"] },
    { day: '2024-09-26', words: ["How", "does", "this", "thing", "tell", "temperature"] },
    { day: '2024-09-27', words: ["What", "is", "this", "part", "of", "the", "body"] },
    { day: '2024-09-28', words: ["How", "does", "this", "rule", "work"] },
    { day: '2024-09-29', words: ["What", "is", "this", "number"] },
    { day: '2024-09-30', words: ["How", "can", "you", "find", "this", "tree"] },
// for year 3    
    { day: '2024-09-01', words: ["What", "is", "that", "skeleton", "made", "of"] },
    { day: '2024-09-02', words: ["How", "does", "this", "evaporation", "process", "work"] },
    { day: '2024-09-03', words: ["What", "is", "this", "bacteria", "doing"] },
    { day: '2024-09-04', words: ["Who", "is", "that", "composer", "of", "this", "symphony"] },
    { day: '2024-09-05', words: ["What", "is", "the", "temperature", "in", "this", "room"] },
    { day: '2024-09-06', words: ["How", "does", "this", "democracy", "work"] },
    { day: '2024-09-07', words: ["What", "does", "this", "painter", "use", "to", "create", "that", "art"] },
    { day: '2024-09-08', words: ["How", "does", "this", "enzyme", "help", "in", "photosynthesis"] },
    { day: '2024-09-09', words: ["What", "does", "this", "seismograph", "measure"] },
    { day: '2024-09-10', words: ["How", "do", "you", "solve", "this", "algebra", "equation"] },
    { day: '2024-09-11', words: ["What", "is", "this", "habitat", "like"] },
    { day: '2024-09-12', words: ["How", "does", "this", "neuron", "work"] },
    { day: '2024-09-13', words: ["What", "is", "this", "bronze", "made", "of"] },
    { day: '2024-09-14', words: ["What", "is", "this", "poetry", "about"] },
    { day: '2024-09-15', words: ["How", "does", "this", "amendment", "change", "the", "constitution"] },
    { day: '2024-09-16', words: ["What", "is", "this", "planet", "called"] },
    { day: '2024-09-17', words: ["Where", "is", "this", "meridian", "on", "the", "map"] },
    { day: '2024-09-18', words: ["What", "type", "of", "tree", "is", "this", "conifer", "or", "deciduous"] },
    { day: '2024-09-19', words: ["How", "do", "you", "pronounce", "this", "vowel"] },
    { day: '2024-09-20', words: ["What", "kind", "of", "energy", "is", "this", "solar", "or", "wind"] },
    { day: '2024-09-21', words: ["How", "do", "you", "solve", "this", "math", "equation"] },
    { day: '2024-09-22', words: ["What", "does", "this", "enzyme", "do", "in", "this", "plant"] },
    { day: '2024-09-23', words: ["Where", "is", "this", "latitude", "on", "the", "map"] },
    { day: '2024-09-24', words: ["How", "many", "protons", "are", "in", "this", "atom"] },
    { day: '2024-09-25', words: ["What", "does", "this", "conductor", "do", "in", "this", "orchestra"] },
    { day: '2024-09-26', words: ["How", "does", "this", "thermometer", "measure", "temperature"] },
    { day: '2024-09-27', words: ["What", "is", "this", "muscle", "used", "for"] },
    { day: '2024-09-28', words: ["How", "does", "this", "amendment", "work"] },
    { day: '2024-09-29', words: ["What", "is", "this", "variable", "in", "math"] },
    { day: '2024-09-30', words: ["How", "do", "you", "identify", "this", "evergreen", "tree"] }
];




