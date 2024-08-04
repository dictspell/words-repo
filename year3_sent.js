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
    { day: '2024-10-31', words: ["The", "pumpkin", "was", "carved", "into", "a", "spooky", "jack-o'-lantern", "with", "a", "big", "smile", "The pumpkin was carved into a spooky jack-o'-lantern with a big smile"] }
}
  
