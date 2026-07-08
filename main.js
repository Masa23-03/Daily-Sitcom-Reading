import {
  sitcomCharactersArr,
  traitsArr,
  actionsArr,
  asciiArt,
} from "./data.js";

const collectedInfo = {
  ascii: asciiArt,
  sitcomCharacter: sitcomCharactersArr,
  trait: traitsArr,
  action: actionsArr,
};

const generateRandomNumber = (lengthOf) => {
  return Math.floor(Math.random() * lengthOf);
};

//create message
const createRandomMessage = (randomMessage) => {
  for (let p in collectedInfo) {
    const randomIndex = generateRandomNumber(collectedInfo[p].length);
    switch (p) {
      case "sitcomCharacter":
        randomMessage.push(
          `Today you are ${collectedInfo[p][randomIndex].name} from ${collectedInfo[p][randomIndex].show},`,
        );
        break;
      case "trait":
        randomMessage.push(`because you both ${collectedInfo[p][randomIndex]}`);
        break;
      case "action":
        randomMessage.push(`You should ${collectedInfo[p][randomIndex]}`);
        break;
      case "ascii":
        randomMessage.push(collectedInfo[p][randomIndex]);
        break;

      default:
        randomMessage.push("something wrong happened!");
    }
  }
};

function formatMessage(randomMessage) {
  const formatted = randomMessage.join("\n");
  return formatted;
}

let message = [];
createRandomMessage(message);
const finalMessage = formatMessage(message);
console.log(finalMessage);
