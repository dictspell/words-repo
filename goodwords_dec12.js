const words = [
    { day: '2024-07-20', words: ["volcano", "earthquake", "tsunami", "eruption", "seismograph"] }, //geology
    { day: '2024-07-21', words: ["photosynthesis", "chlorophyll", "glucose", "stomata", "transpiration"] }, //biology
    { day: '2024-07-22', words: ["battery", "circuit", "current", "voltage", "resistance"] }, //physics
    { day: '2024-07-23', words: ["force", "motion", "gravity", "friction", "inertia"] },  // physics
    { day: '2024-07-24', words: ["molecule", "atom", "element", "compound", "reaction"] }, // chemistry
    { day: '2024-07-25', words: ["simile", "metaphor", "alliteration", "personification", "onomatopoeia"] }, // literature
    { day: '2024-07-26', words: ["longitude", "latitude", "equator", "hemisphere", "tropics"] }, // geography
    { day: '2024-07-27', words: ["excited", "nervous", "curious", "proud", "frustrated"] },  //emotions
    { day: '2024-07-28', words: ["denominator", "numerator", "quotient", "dividend", "divisor"] }, //maths
    { day: '2024-07-29', words: ["adjective", "adverb", "pronoun", "conjunction", "preposition"] }, //grammar
    { day: '2024-07-30', words: ["evaporation", "condensation", "precipitation", "collection", "runoff"] }, //water cycle
    { day: '2024-07-31', words: ["democracy", "monarchy", "dictatorship", "republic", "federation"] }, //government types
    { day: '2024-08-01', words: ["carnivore", "herbivore", "omnivore", "producer", "decomposer"] }, //food chain
    { day: '2024-08-02', words: ["perimeter", "area", "volume", "circumference", "diameter"] }, //geometry
    { day: '2024-08-03', words: ["igneous", "sedimentary", "metamorphic", "magma", "lava"] }, //rock types
    { day: '2024-08-04', words: ["noun", "verb", "adjective", "adverb", "interjection"] }, //parts of speech
    { day: '2024-08-05', words: ["phototropism", "geotropism", "hydrotropism", "thigmotropism", "chemotropism"] }, //plant responses
    { day: '2024-08-06', words: ["anxious", "confident", "embarrassed", "grateful", "jealous"] }, //emotions
    { day: '2024-08-07', words: ["peninsula", "isthmus", "archipelago", "strait", "bay"] }, //landforms
    { day: '2024-08-08', words: ["vertebrate", "invertebrate", "mammal", "reptile", "amphibian"] }, //animal classification
    { day: '2024-08-09', words: ["simile", "metaphor", "personification", "hyperbole", "oxymoron"] }, //figurative language
    { day: '2024-08-10', words: ["democracy", "citizenship", "government", "election", "constitution"] }, //civics
    { day: '2024-08-11', words: ["conductor", "insulator", "electromagnet", "static", "dynamic"] }, //electricity
    { day: '2024-08-12', words: ["addition", "subtraction", "multiplication", "division", "exponentiation"] }, //arithmetic operations
    { day: '2024-08-13', words: ["hypothesis", "observation", "experiment", "conclusion", "theory"] }, //scientific method
    { day: '2024-08-14', words: ["noun", "pronoun", "verb", "adjective", "adverb"] }, //parts of speech
    { day: '2024-08-15', words: ["photosynthesis", "respiration", "transpiration", "germination", "pollination"] }, //plant processes
    { day: '2024-08-16', words: ["longitude", "latitude", "equator", "meridian", "tropic"] }, //geography terms
    { day: '2024-08-17', words: ["excited", "nervous", "curious", "proud", "frustrated"] }, //emotions
    { day: '2024-08-18', words: ["fraction", "decimal", "percentage", "ratio", "proportion"] }, //number representations
    { day: '2024-08-19', words: ["simile", "metaphor", "alliteration", "personification", "onomatopoeia"] }, //literary devices
    { day: '2024-08-20', words: ["herbivore", "carnivore", "omnivore", "decomposer", "producer"] }, //food chain roles
    { day: '2024-08-21', words: ["solid", "liquid", "gas", "plasma", "Bose-Einstein condensate"] }, //states of matter
    { day: '2024-08-22', words: ["democracy", "monarchy", "oligarchy", "autocracy", "theocracy"] }, //forms of government
    { day: '2024-08-23', words: ["subject", "predicate", "object", "clause", "phrase"] }, //sentence structure
    { day: '2024-08-24', words: ["addition", "subtraction", "multiplication", "division", "exponentiation"] }, //basic operations
    { day: '2024-08-25', words: ["igneous", "sedimentary", "metamorphic", "intrusive", "extrusive"] }, //rock types
    { day: '2024-08-26', words: ["anxious", "confident", "embarrassed", "grateful", "jealous"] }, //emotions
    { day: '2024-08-27', words: ["peninsula", "isthmus", "archipelago", "strait", "fjord"] }, //coastal features
    { day: '2024-08-28', words: ["vertebrate", "invertebrate", "exoskeleton", "endoskeleton", "hydrostatic skeleton"] }, //animal structures
    { day: '2024-08-29', words: ["simile", "metaphor", "personification", "hyperbole", "irony"] }, //figurative language
    { day: '2024-08-30', words: ["legislature", "executive", "judiciary", "federal", "state"] }, //government branches
    { day: '2024-08-31', words: ["conductor", "insulator", "semiconductor", "resistor", "capacitor"] }, //electrical components
    { day: '2024-09-01', words: ["perimeter", "area", "volume", "surface area", "circumference"] }, //measurement concepts
    { day: '2024-09-02', words: ["hypothesis", "observation", "experiment", "analysis", "conclusion"] }, //scientific method
    { day: '2024-09-03', words: ["noun", "pronoun", "verb", "adjective", "adverb"] }, //parts of speech
    { day: '2024-09-04', words: ["photosynthesis", "cellular respiration", "fermentation", "decomposition", "nitrogen fixation"] }, //biological processes
    { day: '2024-09-05', words: ["longitude", "latitude", "prime meridian", "international date line", "arctic circle"] }, //global coordinates
    { day: '2024-09-06', words: ["ecstatic", "melancholy", "indifferent", "apprehensive", "optimistic"] }, //emotions
    { day: '2024-09-07', words: ["fraction", "mixed number", "improper fraction", "equivalent fraction", "reciprocal"] }, //fraction types
    { day: '2024-09-08', words: ["alliteration", "assonance", "consonance", "rhyme", "rhythm"] }, //sound devices in poetry
    { day: '2024-09-09', words: ["producer", "primary consumer", "secondary consumer", "tertiary consumer", "apex predator"] }, //food chain levels
    { day: '2024-09-10', words: ["melting", "freezing", "evaporation", "condensation", "sublimation"] }, //phase changes
    { day: '2024-09-11', words: ["constitution", "amendment", "bill", "law", "regulation"] }, //legal terms
    { day: '2024-09-12', words: ["subject", "direct object", "indirect object", "predicate nominative", "predicate adjective"] }, //sentence components
    { day: '2024-09-13', words: ["prime", "composite", "factor", "multiple", "divisible"] }, //number properties
    { day: '2024-09-14', words: ["erosion", "weathering", "deposition", "transportation", "glaciation"] }, //geological processes
    { day: '2024-09-15', words: ["empathetic", "apathetic", "sympathetic", "compassionate", "indifferent"] }, //emotional states
    { day: '2024-09-16', words: ["delta", "estuary", "lagoon", "atoll", "barrier island"] }, //coastal landforms
    { day: '2024-09-17', words: ["mammal", "bird", "reptile", "amphibian", "fish"] }, //vertebrate classes
    { day: '2024-09-18', words: ["foreshadowing", "flashback", "climax", "resolution", "exposition"] }, //story elements
    { day: '2024-09-19', words: ["democracy", "republic", "monarchy", "dictatorship", "oligarchy"] }, //government types
    { day: '2024-09-20', words: ["potential energy", "kinetic energy", "thermal energy", "chemical energy", "nuclear energy"] }, //energy types
    { day: '2024-09-21', words: ["parallel", "perpendicular", "intersecting", "skew", "collinear"] }, //line relationships
    { day: '2024-09-22', words: ["hypothesis", "theory", "law", "model", "paradigm"] }, //scientific concepts
    { day: '2024-09-23', words: ["prefix", "suffix", "root", "base word", "compound word"] }, //word structure
    { day: '2024-09-24', words: ["biome", "ecosystem", "habitat", "niche", "community"] }, //ecological terms
    { day: '2024-09-25', words: ["equator", "tropic", "polar circle", "meridian", "parallel"] }, //latitude and longitude
    { day: '2024-09-26', words: ["elated", "despondent", "ambivalent", "enthusiastic", "apprehensive"] }, //emotions
    { day: '2024-09-27', words: ["numerator", "denominator", "dividend", "divisor", "quotient"] }, //division terms
    { day: '2024-09-28', words: ["protagonist", "antagonist", "foil", "confidant", "narrator"] }, //character types
    { day: '2024-09-29', words: ["herbivore", "carnivore", "omnivore", "scavenger", "decomposer"] }, //feeding types
    { day: '2024-09-30', words: ["solid", "liquid", "gas", "plasma", "supercritical fluid"] }, //states of matter
    { day: '2024-10-01', words: ["executive", "legislative", "judicial", "federal", "municipal"] }, //government branches
    { day: '2024-10-02', words: ["subject", "predicate", "modifier", "complement", "conjunction"] }, //sentence parts
    { day: '2024-10-03', words: ["integer", "whole number", "natural number", "rational number", "irrational number"] }, //number types
    { day: '2024-10-04', words: ["plate tectonics", "continental drift", "subduction", "seafloor spreading", "rift valley"] }, //earth science
    { day: '2024-10-05', words: ["empathy", "sympathy", "apathy", "antipathy", "ambivalence"] }, //emotional responses
    { day: '2024-10-06', words: ["bay", "gulf", "strait", "channel", "sound"] }, //water bodies
    { day: '2024-10-07', words: ["invertebrate", "arthropod", "mollusk", "echinoderm", "cnidarian"] }, //animal groups
    { day: '2024-10-08', words: ["metaphor", "simile", "personification", "hyperbole", "idiom"] }, //figurative language
    { day: '2024-10-09', words: ["citizen", "immigrant", "refugee", "expatriate", "asylum seeker"] }, //population categories
    { day: '2024-10-10', words: ["force", "mass", "acceleration", "velocity", "momentum"] }, //physics concepts
    { day: '2024-10-11', words: ["radius", "diameter", "circumference", "chord", "tangent"] }, //circle parts
    { day: '2024-10-12', words: ["variable", "constant", "coefficient", "exponent", "base"] }, //algebra terms
    { day: '2024-10-13', words: ["noun", "pronoun", "verb", "adjective", "adverb"] }, //parts of speech
    { day: '2024-10-14', words: ["mitosis", "meiosis", "cytokinesis", "interphase", "prophase"] }, //cell division
    { day: '2024-10-15', words: ["longitude", "latitude", "elevation", "topography", "cartography"] }, //mapping terms
    { day: '2024-10-16', words: ["joyful", "sorrowful", "angry", "fearful", "disgusted"] }, //basic emotions
    { day: '2024-10-17', words: ["fraction", "decimal", "percentage", "ratio", "proportion"] }, //number representations
    { day: '2024-10-18', words: ["plot", "setting", "character", "theme", "conflict"] }, //story elements
    { day: '2024-10-19', words: ["predator", "prey", "symbiosis", "mutualism", "parasitism"] }, //ecological relationships
    { day: '2024-10-20', words: ["atom", "molecule", "compound", "mixture", "solution"] }, //matter composition
    { day: '2024-10-21', words: ["democracy", "autocracy", "oligarchy", "anarchy", "theocracy"] }, //political systems
    { day: '2024-10-22', words: ["noun", "verb", "adjective", "adverb", "preposition"] }, //parts of speech
    { day: '2024-10-23', words: ["addition", "subtraction", "multiplication", "division", "exponentiation"] }, //arithmetic operations
    { day: '2024-10-24', words: ["erosion", "deposition", "weathering", "sedimentation", "lithification"] }, //geological processes
    { day: '2024-10-25', words: ["empathetic", "apathetic", "sympathetic", "antipathetic", "indifferent"] }, //emotional attitudes
    { day: '2024-10-26', words: ["peninsula", "cape", "promontory", "headland", "point"] }, //coastal features
    { day: '2024-10-27', words: ["vertebrate", "invertebrate", "chordate", "arthropod", "mollusk"] }, //animal classifications
    { day: '2024-10-28', words: ["alliteration", "assonance", "consonance", "onomatopoeia", "rhyme"] }, //sound devices
    { day: '2024-10-29', words: ["executive", "legislative", "judicial", "bureaucracy", "diplomacy"] }, //government functions
    { day: '2024-10-30', words: ["potential", "kinetic", "mechanical", "thermal", "electrical"] }, //energy forms
    { day: '2024-10-31', words: ["perimeter", "area", "volume", "surface area", "circumference"] }, //geometry
    { day: '2024-11-01', words: ["hypothesis", "experiment", "observation", "analysis", "conclusion"] }, //scientific method
    { day: '2024-11-02', words: ["prefix", "suffix", "root", "base word", "compound word"] }, //word structure
    { day: '2024-11-03', words: ["biome", "ecosystem", "habitat", "niche", "community"] }, //ecological terms
    { day: '2024-11-04', words: ["equator", "tropic", "polar circle", "meridian", "parallel"] }, //latitude and longitude
    { day: '2024-11-05', words: ["elated", "despondent", "ambivalent", "enthusiastic", "apprehensive"] }, //emotions
    { day: '2024-11-06', words: ["numerator", "denominator", "dividend", "divisor", "quotient"] }, //division terms
    { day: '2024-11-07', words: ["protagonist", "antagonist", "foil", "confidant", "narrator"] }, //character types
    { day: '2024-11-08', words: ["herbivore", "carnivore", "omnivore", "scavenger", "decomposer"] }, //feeding types
    { day: '2024-11-09', words: ["solid", "liquid", "gas", "plasma", "supercritical fluid"] }, //states of matter
    { day: '2024-11-10', words: ["executive", "legislative", "judicial", "federal", "municipal"] }, //government branches
    { day: '2024-11-11', words: ["subject", "predicate", "modifier", "complement", "conjunction"] }, //sentence parts
    { day: '2024-11-12', words: ["integer", "whole number", "natural number", "rational number", "irrational number"] }, //number types
    { day: '2024-11-13', words: ["plate tectonics", "continental drift", "subduction", "seafloor spreading", "rift valley"] }, //earth science
    { day: '2024-11-14', words: ["empathy", "sympathy", "apathy", "antipathy", "ambivalence"] }, //emotional responses
    { day: '2024-11-15', words: ["bay", "gulf", "strait", "channel", "sound"] }, //water bodies
    { day: '2024-11-16', words: ["invertebrate", "arthropod", "mollusk", "echinoderm", "cnidarian"] }, //animal groups
    { day: '2024-11-17', words: ["metaphor", "simile", "personification", "hyperbole", "idiom"] }, //figurative language
    { day: '2024-11-18', words: ["citizen", "immigrant", "refugee", "expatriate", "asylum seeker"] }, //population categories
    { day: '2024-11-19', words: ["force", "mass", "acceleration", "velocity", "momentum"] }, //physics concepts
    { day: '2024-11-20', words: ["radius", "diameter", "circumference", "chord", "tangent"] }, //circle parts
    { day: '2024-11-21', words: ["variable", "constant", "coefficient", "exponent", "base"] }, //algebra terms
    { day: '2024-11-22', words: ["noun", "pronoun", "verb", "adjective", "adverb"] }, //parts of speech
    { day: '2024-11-23', words: ["mitosis", "meiosis", "cytokinesis", "interphase", "prophase"] }, //cell division
    { day: '2024-11-24', words: ["longitude", "latitude", "elevation", "topography", "cartography"] }, //mapping terms
    { day: '2024-11-25', words: ["joyful", "sorrowful", "angry", "fearful", "disgusted"] }, //basic emotions
    { day: '2024-11-26', words: ["fraction", "decimal", "percentage", "ratio", "proportion"] }, //number representations
    { day: '2024-11-27', words: ["plot", "setting", "character", "theme", "conflict"] }, //story elements
    { day: '2024-11-28', words: ["predator", "prey", "symbiosis", "mutualism", "parasitism"] }, //ecological relationships
    { day: '2024-11-29', words: ["atom", "molecule", "compound", "mixture", "solution"] }, //matter composition
    { day: '2024-11-30', words: ["democracy", "autocracy", "oligarchy", "anarchy", "theocracy"] }, //political systems
    { day: '2024-12-01', words: ["noun", "verb", "adjective", "adverb", "preposition"] }, //parts of speech
    { day: '2024-12-02', words: ["addition", "subtraction", "multiplication", "division", "exponentiation"] }, //arithmetic operations
    { day: '2024-12-03', words: ["erosion", "deposition", "weathering", "sedimentation", "lithification"] }, //geological processes
    { day: '2024-12-04', words: ["empathetic", "apathetic", "sympathetic", "antipathetic", "indifferent"] }, //emotional attitudes
    { day: '2024-12-05', words: ["peninsula", "cape", "promontory", "headland", "point"] }, //coastal features
    { day: '2024-12-06', words: ["vertebrate", "invertebrate", "chordate", "arthropod", "mollusk"] }, //animal classifications
    { day: '2024-12-07', words: ["alliteration", "assonance", "consonance", "onomatopoeia", "rhyme"] }, //sound devices
    { day: '2024-12-08', words: ["executive", "legislative", "judicial", "bureaucracy", "diplomacy"] }, //government functions
    { day: '2024-12-09', words: ["potential", "kinetic", "mechanical", "thermal", "electrical"] }, //energy forms
    { day: '2024-12-10', words: ["perimeter", "area", "volume", "surface area", "circumference"] }, //geometry
    { day: '2024-12-11', words: ["hypothesis", "experiment", "observation", "analysis", "conclusion"] }, //scientific method
    { day: '2024-12-12', words: ["prefix", "suffix", "root", "base word", "compound word"] }, //word structure
    { day: '2024-12-13', words: ["biome", "ecosystem", "habitat", "niche", "community"] }, //ecological terms
    { day: '2024-12-14', words: ["equator", "tropic", "polar circle", "meridian", "parallel"] }, //latitude and longitude
    { day: '2024-12-15', words: ["elated", "despondent", "ambivalent", "enthusiastic", "apprehensive"] }, //emotions
    { day: '2024-12-16', words: ["numerator", "denominator", "dividend", "divisor", "quotient"] }, //division terms
    { day: '2024-12-17', words: ["protagonist", "antagonist", "foil", "confidant", "narrator"] }, //character types
    { day: '2024-12-18', words: ["herbivore", "carnivore", "omnivore", "scavenger", "decomposer"] }, //feeding types
    { day: '2024-12-19', words: ["solid", "liquid", "gas", "plasma", "supercritical fluid"] }, //states of matter
    { day: '2024-12-20', words: ["executive", "legislative", "judicial", "federal", "municipal"] }, //government branches
    { day: '2024-12-21', words: ["subject", "predicate", "modifier", "complement", "conjunction"] }, //sentence parts
    { day: '2024-12-22', words: ["integer", "whole number", "natural number", "rational number", "irrational number"] }, //number types
    { day: '2024-12-23', words: ["plate tectonics", "continental drift", "subduction", "seafloor spreading", "rift valley"] }, //earth science
    { day: '2024-12-24', words: ["empathy", "sympathy", "apathy", "antipathy", "ambivalence"] }, //emotional responses
    { day: '2024-12-25', words: ["bay", "gulf", "strait", "channel", "sound"] }, //water bodies
    { day: '2024-12-26', words: ["invertebrate", "arthropod", "mollusk", "echinoderm", "cnidarian"] }, //animal groups
    { day: '2024-12-27', words: ["metaphor", "simile", "personification", "hyperbole", "idiom"] }, //figurative language
    { day: '2024-12-28', words: ["citizen", "immigrant", "refugee", "expatriate", "asylum seeker"] }, //population categories
    { day: '2024-12-29', words: ["force", "mass", "acceleration", "velocity", "momentum"] }, //physics concepts
    { day: '2024-12-30', words: ["radius", "diameter", "circumference", "chord", "tangent"] }, //circle parts
    { day: '2024-12-31', words: ["variable", "constant", "coefficient", "exponent", "base"] } //algebra terms
];
