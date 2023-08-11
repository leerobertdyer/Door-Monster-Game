let doorCheck;
let lives = 2;
let newLives = 1;
const mainDiv =
  document.getElementById('mainDiv');
const header =
  document.getElementById('header');
let monster =
  document.getElementById('monster');
const door1 =
  document.getElementById('door1');
const door2 =
  document.getElementById('door2');
const door3 =
  document.getElementById('door3');
let heart1 =
  document.getElementById('heart1');
let heart2 =
  document.getElementById('heart2');
let rEye =
  document.getElementById('rightEye');
let lEye =
  document.getElementById('leftEye');
let lArm =
  document.getElementById('leftArm');
let rArm =
  document.getElementById('rightArm');

document.getElementById('btn').addEventListener('click', reset);




reset();

function reset() {
  placeMonster();
  header.innerHTML = "Which door hides the monster?";
  document.body.style.backgroundColor = "black";
  monster.style.width = "30px";
  monster.style.height = "70px";
  document.getElementById('laugh').style.display = "none";
  rEye.style.marginTop = "-5px";
  rEye.style.marginLeft = "18px";
  lEye.style.marginTop = "10px";
  lEye.style.marginLeft = "5px";
  rEye.style.width = "5px";
  lEye.style.width = "5px";
  rEye.style.height = "5px";
  lEye.style.height = "5px";
  rArm.style.display = "block";
  lArm.style.display = "block";
  monster.style.animation = "monAnim 1s linear 1s infinite";
  lives = 2;
  newLives = 1;
  heart1.style.display = "block";
  heart2.style.display = "block";
  heart1.children[0].style.backgroundColor = "red";
  heart1.children[1].style.backgroundColor = "red";
  heart2.children[0].style.backgroundColor = "red";
  heart2.children[1].style.backgroundColor = "red";
  door1.removeEventListener('click', tooSlow);
  door2.removeEventListener('click', tooSlow);
  door3.removeEventListener('click', tooSlow);
  door1.addEventListener('click', checkDoor);
  door2.addEventListener('click', checkDoor);
  door3.addEventListener('click', checkDoor);
  monster.addEventListener('mousedown', gotMonster);
  document.getElementById('db').style.backgroundColor = "rgb(85, 241, 255)"
  door1.style.border = "double rgb(50, 22, 1) 6px";
  door2.style.border = "double rgb(50, 22, 1) 6px";
  door3.style.border = "double rgb(50, 22, 1) 6px";
}

function background(door) {
  door.classList.add('black');
header.innerHTML="working";
}

function normal() {

}

function placeMonster() {
  let r = Math.floor((Math.random() * 3) + 1);
  monster.style.marginTop = "235px";
  monster.style.zIndex = "4";
  if (r == 1) {
    monster.style.marginLeft = "190px";
  } else if (r == 2) {
    monster.style.marginLeft = "420px";
  } else if (r == 3) {
    monster.style.marginLeft = "656px";
  }
  doorCheck = r;
}


function checkDoor() {
  if (lives > 0) {
    if (document.activeElement === door1 && doorCheck === 1) {
      busted();
    } else if (document.activeElement === door2 && doorCheck === 2) {
      busted();
    } else if (document.activeElement === door3 && doorCheck === 3) {
      busted();
    } else if (heart2.style.display === "block") {
      heart2.style.display = "none";
      header.innerHTML = "One More Chance!";
    } else if (heart2.style.display = "none") {
      death();
    }
  }
}


function busted() {
  header.innerHTML = "Catch Me If You CAN!";
  monster.style.zIndex = "7"
  monster.style.animation = "flying 4s linear infinite";
  door1.removeEventListener('click', checkDoor);
  door2.removeEventListener('click', checkDoor);
  door3.removeEventListener('click', checkDoor);
  mainDiv.addEventListener('click', tooSlow);
  mainDiv.addEventListener('click', tooSlow);
  mainDiv.addEventListener('click', tooSlow);
  heart1.children[0].style.backgroundColor = "green";
  heart2.children[0].style.backgroundColor = "green";
  heart1.children[1].style.backgroundColor = "green";
  heart2.children[1].style.backgroundColor = "green";
  heart1.style.display = "block";
  heart2.style.display = "block";
}

function tooSlow() {
  header.innerHTML =
    "Too slow Baby!!!";
  if (newLives >= 0) {
    if (newLives === 1) {
      heart2.style.display = "none";
    } else if (newLives === 0) {
      heart1.style.display = "none";
      gameOver();
    } newLives--;
  }
}

function gotMonster() {
  document.getElementById('header').innerHTML = "Ya got me!! :(";
  document.body.style.backgroundColor = "darkred";
  monster.style.animation = "none";
  monster.style.width = "20px";
  monster.style.height = "20px";
  monster.style.marginLeft = "655px";
  monster.style.marginTop = "-85px";
  door1.removeEventListener('click', checkDoor);
  door2.removeEventListener('click', checkDoor);
  door3.removeEventListener('click', checkDoor);
  door1.removeEventListener('click', tooSlow);
  door2.removeEventListener('click', tooSlow);
  door3.removeEventListener('click', tooSlow);
}


function death() {
  heart1.style.display === "none";
  header.innerHTML =
    "Ya died, son...";
  heart1.style.display = "none";
  monster.style.display = "block";
  monster.style.zIndex = "8";
  door1.removeEventListener('click', checkDoor);
  door2.removeEventListener('click', checkDoor);
  door3.removeEventListener('click', checkDoor);
  monster.removeEventListener('mousedown', gotMonster);
  gameOver();
}



function gameOver() {
  header.innerHTML = "GAME OVER";
  monster.style.animation = "gameOver 7s linear infinite";
  document.getElementById('laugh').style.display = "block";
  document.getElementById('laugh').style.animation = "laugh 2s linear infinite";
  monster.style.width = "155px";
  monster.style.height = "344px";
  monster.style.marginTop = "100px";
  monster.removeEventListener('mousedown', gotMonster);
  rEye.style.width = "30px";
  rEye.style.height = "30px";
  rEye.style.marginLeft = "100px";
  rEye.style.marginTop = "30px";
  rEye.style.position = "absolute";
  lEye.style.width = "30px";
  lEye.style.height = "30px";
  lEye.style.marginTop = "30px";
  lEye.style.position = "absolute";
  lEye.style.marginLeft = "25px";
  lArm.style.display = "none";
  rArm.style.display = "none";
  door1.style.backgroundColor = "black";
  door2.style.backgroundColor = "black";
  door3.style.backgroundColor = "black";
  document.getElementById('db').style.backgroundColor = "black";
  document.getElementById('db').style.border = "none";

}




/*



function showHideMonster() {
  if (document.getElementById('monster').style.display == 'none') {
    document.getElementById('monster').style.display = 'block'
  }
  else {
    document.getElementById('monster').style.display = 'none'
  }
}

*/

