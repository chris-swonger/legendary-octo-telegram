// Arrays containing the first and second parts of idioms
const firstParts = [
    "A bird in the hand",
    "Don't count your chickens before they hatch",
    "Every cloud has a silver lining",
    "Loose lips",
    "People in glass houses",
    // Add more first parts as needed
  ];
  
  const secondParts = [
    "shouldn't throw stones",
    "is worth two in the bush",
    "but sometimes it's hard to find",
    "sink ships",
    // Add more second parts as needed
  ];

  const thirdParts = [
    "just so.",
    "right?",
    "yessiree.",
    // Add more third parts as needed
  ];
  
  // Function to generate a random idiom
  function generateRandomIdiom() {
    const randomFirstPart = firstParts[Math.floor(Math.random() * firstParts.length)];
    const randomSecondPart = secondParts[Math.floor(Math.random() * secondParts.length)];
    const randomThirdPart = thirdParts[Math.floor(Math.random() * thirdParts.length)];
    return `${randomFirstPart} ${randomSecondPart}, ${randomThirdPart}`;
  }
  
  // Example usage
  const randomIdiom = generateRandomIdiom();
  console.log(randomIdiom);
  