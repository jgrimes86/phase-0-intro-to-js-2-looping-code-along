// Code your solutions in this file

const gifters = ["Adam", "Brian", "Charles"];

let eventName = "birthday";

const cardLog = []

function writeCards(gifters, eventName) {
  for (let i = 0; i < gifters.length; i++) {
    cardLog.push(`Thank you, ${gifters[i]}, for the wonderful ${eventName} gift!`)
  }
  
  return cardLog;
}

function countDown(countNumber) {
    while (countNumber >= 0) {
      console.log(countNumber--);
    }
  }
  