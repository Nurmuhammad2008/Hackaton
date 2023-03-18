const randomNumber = document.getElementById("random_number");

function getRandomInt(max) {

    return Math.floor(Math.random() * max);
  }

const randomNum = () => {
    return randomNumber.innerHTML += getRandomInt(800);
}
// console.log(randomNum());
randomNumber.addEventListener('load', randomNum());

  return Math.floor(Math.random() * max);
}

const randomNum = () => {
  return (randomNumber.innerHTML += getRandomInt(800));
};
// console.log(randomNum());
randomNumber.addEventListener("load", randomNum());