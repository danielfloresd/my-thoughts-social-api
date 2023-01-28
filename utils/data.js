const names = [
  'Aaran',      'Aaren',        'Aarez',
  'Aarman',     'Aaron',        'Aaron-James',
  'Aarron',     'Aaryan',       'Aaryn',
  'Aayan',      'Aazaan',       'Abaan',
  'Abbas',      'Abdallah',     'Abdalroof',
  'Abdihakim',  'Abdirahman',   'Abdisalam',
  'Abdul',      'Abdul-Aziz',   'Abdulbasir',
  'Abdulkadir', 'Abdulkarem',   'Smith',
  'Jones',      'Coollastname', 'enter_name_here',
  'Ze',         'Zechariah',    'Zeek',
  'Zeeshan',    'Zeid',         'Zein',
  'Zen',        'Zendel',       'Zenith',
  'Zennon',     'Zeph',         'Zerah',
  'Zhen',       'Zhi',          'Zhong',
  'Zhuo',       'Zi',           'Zidane',
  'Zijie',      'Zinedine',     'Zion',
  'Zishan',     'Ziya',         'Ziyaan',
  'Zohaib',     'Zohair',       'Zoubaeir',
  'Zubair',     'Zubayr',       'Zuriel',
  'Xander',     'Jared',        'Courtney',
  'Gillian',    'Clark',        'Jared',
  'Grace',      'Kelsey',       'Tamar',
  'Alex',       'Mark',         'Tamar',
  'Farish',     'Sarah',        'Nathaniel',
  'Parker',
];

const thoughs = [
  'I love dogs',
  'I love cats',

  'I love pizza',
  'I love burgers',
  'I love tacos',
  'I love sushi',
  'I love ice cream',
  'I love cake',
  'I love pie',
  'I love pasta',
  'I love lasagna',
  'I love chicken',
  'I love steak',
  'I love fish',
  'I love seafood',
  'I love eggs',
  'I woiuld love to go to the moon',
  'I love to go to the beach',
  'I love to go to the mountains',
  'I love to go to the lake',
  'I love to go to the river',
  'I love to go to the park',
  'I love to go to the zoo',
  'I love to go to the aquarium',
  'I love to go to the museum',
];

const reactions = [
  'I also love dogs',
  'I also love cats',
  'I also love pizza',
  'I also love burgers',
  'I have never tried tacos',
  'I also love sushi',
  'I also love ice cream',
  'I neve visit cake',
  'I also love pie',
  'This is my favorite pasta',
  'This is my favorite lasagna',
  'This is a random reaction',
  'I also love chicken',
  'I also love steak',
  'I also love fish',
  'I also love seafood',
  'I also love eggs',
  'I also love to go to the moon',
  'I also love to go to the beach',
  'I also love to go to the mountains',
  'I also love to go to the lake',
  'I also love to go to the river',
  'I also love to go to the park',
  'I never visit the zoo',
  'I also love to go to the aquarium',
  'I also love to go to the museum',
  'I never visit the museum',
  'I never visit the aquarium',
  'I never visit the park',
  'I never visit the river',
  'I never visit the lake',
  'I never visit the mountains',
  'I never visit the beach',
  'I never visit the moon',
  'I never visit eggs',
  'I never visit seafood',
  'I never visit fish',
  'I never visit steak',
  'I never visit chicken',
  'I never visit lasagna',
];
// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomName = () =>
    `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;

// Gets a random thought
const getRandomThought = () => getRandomArrItem(thoughs);

// Gets a random reaction
const getRandomReaction = () => getRandomArrItem(reactions);
// Export the functions for use in seed.js
module.exports = {
  getRandomName,
  getRandomThought,
  getRandomReaction
};
