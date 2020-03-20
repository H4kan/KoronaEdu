
const srcImg = "https://img-aws.ehowcdn.com/340x221p/photos.demandstudios.com/getty/article/148/74/86809577.jpg"
const nameString = "Iwona Szczygłowska";
const mailString = "szczyglowska.iwona@wp.pl";

const teacherImgEl = document.querySelector("#top .photo img");
const nameEl = document.querySelector("#top .info>p");
const mailEl = document.querySelector("#top .info p+p");

mailEl.textContent = mailString;
nameEl.textContent = nameString;
teacherImgEl.setAttribute("src", srcImg);