let numOfFooterImg = 0;
let footerImg = document.getElementById("footer__main-image");
let arrOfFooterImgs = new Array(
  "images/team.svg",
  "images/donor.svg",
  "images/watermelon.svg",
  "images/sport.svg",
  "images/peoples.svg"
);

let isNumOfFooterImgActive = false;
let setFooterImg1 = document.getElementById("footer__first-link");
let setFooterImg2 = document.getElementById("footer__second-link");
let setFooterImg3 = document.getElementById("footer__third-link");
let setFooterImg4 = document.getElementById("footer__fourth-link");
let setFooterImg5 = document.getElementById("footer__fifth-link");

function NextFooterImg() {
  numOfFooterImg++;
  numOfFooterImg %= arrOfFooterImgs.length;
  footerImg.src = arrOfFooterImgs[numOfFooterImg];
}

function PrevFooterImg() {
  numOfFooterImg--;
  numOfFooterImg %= arrOfFooterImgs.length;
  footerImg.src = arrOfFooterImgs[numOfFooterImg];
}

function SetImg1() {
  footerImg.src = arrOfFooterImgs[0];
  isNumOfFooterImgActive = true;
  if (isNumOfFooterImgActive) {
    setFooterImg1.style.backgroundColor = "#A30C33";
    setFooterImg2.style.backgroundColor = "lightgrey";
    setFooterImg3.style.backgroundColor = "lightgrey";
    setFooterImg4.style.backgroundColor = "lightgrey";
    setFooterImg5.style.backgroundColor = "lightgrey";
  }
}
function SetImg2() {
  footerImg.src = arrOfFooterImgs[1];
  isNumOfFooterImgActive = true;
  if (isNumOfFooterImgActive) {
    setFooterImg1.style.backgroundColor = "lightgrey";
    setFooterImg2.style.backgroundColor = "#A30C33";
    setFooterImg3.style.backgroundColor = "lightgrey";
    setFooterImg4.style.backgroundColor = "lightgrey";
    setFooterImg5.style.backgroundColor = "lightgrey";
  }
}

function SetImg3() {
  footerImg.src = arrOfFooterImgs[2];
  isNumOfFooterImgActive = true;
  if (isNumOfFooterImgActive) {
    setFooterImg1.style.backgroundColor = "lightgrey";
    setFooterImg2.style.backgroundColor = "lightgrey";
    setFooterImg3.style.backgroundColor = "#A30C33";
    setFooterImg4.style.backgroundColor = "lightgrey";
    setFooterImg5.style.backgroundColor = "lightgrey";
  }
}

function SetImg4() {
  footerImg.src = arrOfFooterImgs[3];
  if (isNumOfFooterImgActive) {
    setFooterImg1.style.backgroundColor = "lightgrey";
    setFooterImg2.style.backgroundColor = "lightgrey";
    setFooterImg3.style.backgroundColor = "lightgrey";
    setFooterImg4.style.backgroundColor = "#A30C33";
    setFooterImg5.style.backgroundColor = "lightgrey";
  }
}

function SetImg5() {
  footerImg.src = arrOfFooterImgs[4];
  if (isNumOfFooterImgActive) {
    setFooterImg1.style.backgroundColor = "lightgrey";
    setFooterImg2.style.backgroundColor = "lightgrey";
    setFooterImg3.style.backgroundColor = "lightgrey";
    setFooterImg4.style.backgroundColor = "lightgrey";
    setFooterImg5.style.backgroundColor = "#A30C33";
  }
}
