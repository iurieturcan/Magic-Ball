let userName = "" ;

userName === '' ? console.log('Hello!') : console.log(`Hello,${userName}!`);

let userQuestion = '' ;
console.log(userQuestion);

let randomNumber = Math.floor(Math.random()* 8);

let eightBall = '' ;

switch (randomNumber) {
  case 0:
    console.log('It is certain');
    break;
    case 1:
    console.log('It is decidedly so');
    break;
    case 2:
    console.log('Reply hazy try again');
    break;
    case 3:
    console.log('Cannot Predict now');
    break;
    case 4:
    console.log('Do not count on it');
    break;
    case 5:
    console.log('My sources say no');
    break;
    case 6:
    console.log('Outlook not so good');
    break;
    case 7:
    console.log('Signs point to yes');
    break;
  }

  console.log(`Eight Ball answered: ${randomNumber}`);
  console.log(eightBall);





