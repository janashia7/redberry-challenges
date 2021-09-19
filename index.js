const startText = document.querySelector(".startText");
const header = document.querySelector(".header");
const start = document.querySelector(".start");
const firstPage = document.querySelector(".firstPage");
const logo = document.querySelector(".enter");
const suit = document.querySelector(".fa-chevron-right");
const firstLabels = document.querySelectorAll(".firstLabels");
const activeForm = document.querySelector("#activeForm");
const forward = document.querySelector(".forward");
const bar = document.querySelector(".bar");
const secondPage = document.querySelector(".secondPage");
const footer = document.querySelector(".footer");
const back = document.querySelector(".back");
const footerCenter = document.querySelector(".footerCenter");
const pageSteps = document.querySelector(".pageSteps");
const antibodiesYes = document.querySelector("#antibodiesYes");
const addFirst = document.querySelector(".addFirst");
const radios = document.querySelectorAll(".radios");
const addSecondYes = document.querySelector(".addSecondYes");
const addSecondNo = document.querySelector(".addSecondNo");
const inputsToCheck = document.querySelectorAll(".inputsToCheck");
const thirdPage = document.querySelector(".thirdPage");
const vaccinateYes = document.querySelector(".vaccinateYes");
const registerNow = document.querySelector(".registerNow");
const vaccinateNo = document.querySelector(".vaccinateNo");
const noPlanning = document.querySelector(".noPlanning");
const planning = document.querySelector(".planning");
const scroll = document.querySelector(".finalForm");
const final = document.querySelector(".final");
const meetingRadios = document.getElementsByName("meeting");
const finalForm = document.querySelector(".finalForm");
const finalBackBtn = document.querySelector(".finalBack");
const heading = document.querySelector(".heading");
const topStar = document.querySelector(".topStar");
const botStar = document.querySelector(".botStar");
let isDown = false;
let startY;
let scrollTop;
let currentPage = "load";
let covidPageCompleted = false;
let lastNameState = false;
let NameState = false;
let mailState = false;
let covidState = 0;

const enterTextAnim = () => {
  
  setTimeout(function () {
    bar.style.opacity = 1;
    bar.style.width = "35vw";
    bar.style.height = "10vh";
    bar.querySelector("img").src = "/images/rectangle.svg";
    start.style.top = "35%";
    start.style.right = "15%";
    bar.style.top = "23%";
    bar.style.left = "50%";
  }, 50);
  start.style.width = "30vw";
  start.style.height = "8vh";
  start.style.position = "absolute";
  start.style.overflow = "hidden";
  logo.style.opacity = "0";
  firstPage.style.display = "block";
  header.style.display = "flex";
  footer.style.display = "flex";
  currentPage = "first";
  secondPage.style.display = "none";
  pageSteps.innerText = "1/4";
  back.style.display = "none";
  footerCenter.style.justifyContent = "flex-end";
};

const inputPatternCheck = (e) => {
  let messageName = e.target.querySelector("input").nextElementSibling;
  let messagelastName =
    e.target.querySelectorAll("input")[1].nextElementSibling;
  let name = e.target.querySelector("input");
  let lastName = e.target.querySelectorAll("input")[1];
  console.log({ lastName, messagelastName });
  const email = document.querySelector("#mail");
  let Mailmessage = email.nextElementSibling;

  let numRegex = /\d/;
  if (numRegex.test(name.value)) {
    messageName.innerText = `${name.dataset.name} უნდა შეიცავდეს მხოლოდ ანბანის ასოებს`;
    NameState = false;
  } else if (name.value.length < 3) {
    messageName.innerText = `${name.dataset.name} უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან`;
    NameState = false;
  } else if (name.value.length >= 255) {
    messageName.innerText = `${name.dataset.name}  უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან`;
    NameState = false;
  } else {
    messageName.innerText = "";
    NameState = true;
  }
  if (numRegex.test(lastName.value)) {
    messagelastName.innerText = `${lastName.dataset.name} უნდა შეიცავდეს მხოლოდ ანბანის ასოებს`;
    lastNameState = false;
  } else if (lastName.value.length < 3 || lastName.value.length == "") {
    messagelastName.innerText = `${lastName.dataset.name} უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან`;
    lastNameState = false;
  } else if (lastName.value.length >= 255) {
    messagelastName.innerText = `${lastName.dataset.name} უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან`;
    lastNameState = false;
  } else {
    messagelastName.innerText = "";
    lastNameState = true;
  }
  if (email.value.endsWith("@redberry.com")) {
    Mailmessage.innerText = "";
    mailState = true;
  } else if (email.validity.typeMismatch) {
    Mailmessage.innerText = "თქვენ მიერ შეყვანილი მეილი არასწორია";
    mailState = false;
  } else {
    Mailmessage.innerText =
      "გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (youremail@redberry.com)";
    mailState = false;
  }
};
const SecondPage = () => {
  firstPage.style.display = "none";
  thirdPage.style.display = "none";
  secondPage.style.display = "flex";
  setTimeout(function () {
    bar.style.width = "15vw";
    bar.style.height = "20vh";
    bar.style.top = "34%";
    bar.style.left = "48%";
    bar.querySelector("img").src = "/images/circle.svg";
  }, 50);
  forward.disabled = true;
  back.style.display = "block";
  footerCenter.style.justifyContent = "space-between";
  currentPage = "second";
  pageSteps.innerText = "2/4";
  forward.type = "button";
};

const pageBack = () => {
  if (currentPage == "second") {
    forward.disabled = false;
    forward.type = "submit";
    enterTextAnim();
  } else if (currentPage == "third") {
    SecondPage();
    forward.disabled = false;
  }
};
const radiosCheck = (e) => {
  if (e.target.id == "yesCovid") {
    addFirst.style.display = "block";
    forward.disabled = true;
  } else if (e.target.id == "noCovid" || e.target.id == "haveNow") {
    forward.disabled = false;
    addFirst.style.display = "none";
    addSecondYes.style.display = "none";
    addSecondNo.style.display = "none";
    covidState = -1;
  } else if (e.target.id == "antibodiesYes") {
    addSecondYes.style.display = "block";
    addSecondNo.style.display = "none";
    forward.disabled = true;
  } else if (e.target.id == "noAntibodies") {
    addSecondNo.style.display = "block";
    addSecondYes.style.display = "none";
    forward.disabled = true;
  } else if (e.target.id == "vaccinateYesRadio") {
    vaccinateYes.style.display = "block";
    vaccinateNo.style.display = "none";
    noPlanning.style.display = "none";
    forward.disabled = true;
    registerNow.style.display = "none";
  } else if (e.target.id == "noSecondRegistered") {
    registerNow.style.display = "block";
    noPlanning.style.display = "none";
    vaccinateNo.style.display = "none";
    forward.disabled = false;
  } else if (
    e.target.id == "secondRegistered" ||
    e.target.id == "fullVaccinated"
  ) {
    registerNow.style.display = "none";
    forward.disabled = false;
  } else if (e.target.id == "vaccinateNoRadio") {
    forward.disabled = true;
    vaccinateNo.style.display = "block";
    vaccinateYes.style.display = "none";
    registerNow.style.display = "none";
    planning.style.display = "none";
  } else if (e.target.id == "noPlans") {
    forward.disabled = false;
    noPlanning.style.display = "block";
    planning.style.display = "none";
  } else if (e.target.id == "planningVaccinate") {
    forward.disabled = false;
    noPlanning.style.display = "none";
    planning.style.display = "block";
  } else if (e.target.id == "registeredWaiting") {
    forward.disabled = false;
    noPlanning.style.display = "none";
    registerNow.style.display = "none";
    planning.style.display = "none";
  }
};
const inputsCheck = (e) => {
  if (e.target.id == "covidDate") {
    covidState = true;
    forward.disabled = false;
  } else if (e.target.value != "" && e.target.id != "covidDate") {
    covidState += 1;
    if (covidState >= 2) {
      forward.disabled = false;
    }
  }
};
const thirdPageLoad = () => {
  secondPage.style.display = "none";
  thirdPage.style.display = "flex";
  final.style.display = "none";
  setTimeout(function () {
    bar.style.width = "288px";
    bar.style.height = "313px";
    bar.style.top = "15%";
    bar.style.left = "51%";

    bar.innerHTML = '<img src="/images/star.svg"  alt="">';
  }, 50);
  forward.disabled = true;
  currentPage = "third";
  pageSteps.innerText = "3/4";
  footer.style.display = "flex";
};
const pageForward = () => {
  if (currentPage == "second") {
    thirdPageLoad();
  } else if (currentPage == "third") {
    lastPageLoad();
  }
};
const lastPageLoad = () => {
  setTimeout(function () {
    bar.style.width = "20vw";
    bar.style.height = "20vh";
    bar.style.top = "25%";
    bar.style.left = "50%";
    bar.querySelector("img").remove();
    bar.innerHTML =
      '<svg width="196" height="173" viewBox="0 0 196 173" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M48.5005 12C75.7005 9.6 94.5005 28.3333 100.501 38C110.501 1.5 143.5 0.5 161.5 0.5C179.5 0.5 203.5 22 192.5 69C183.7 106.6 144.5 153.667 126 172.5C87.6668 153.5 9.30051 107.3 2.50051 74.5C-5.99949 33.5 14.5005 15 48.5005 12Z" fill="#F39494"/></svg>';
  }, 50);
  currentPage = "fourth";
  thirdPage.style.display = "none";
  final.style.display = "flex";
  pageSteps.innerText = "4/4";
  footer.style.display = "none";
};
const lastPageThanks = (e) => {
  e.preventDefault();
  let radioArray = [];

  const lastRadios = e.target.querySelectorAll('input[type="radio"]');
  lastRadios.forEach((radio) =>
    radio.validity.valueMissing
      ? radioArray.push(radio.validity.valueMissing)
      : true
  );

  if (radioArray.length == 0) {
    let barSvgPath = bar.querySelector("svg").querySelector("path");
    setTimeout(() => {
      bar.style.width = "300vw";
      bar.style.height = "300vh";
      bar.style.top = "-100%";
      bar.style.left = "-100%";
      bar.style.zIndex = 2;
    }, 50);
    setTimeout(() => {
      barSvgPath.style.fill = "#232323";
      finalBackBtn.style.display = "none";
      setTimeout(() => {
        heading.style.display = "block";
        heading.style.zIndex = 5;
        topStar.style.display = "inline";
        botStar.style.display = "inline";
        setTimeout(() => {
          topStar.style.transform = "translate(-300%, -200%)";
          botStar.style.transform = "translate(200%, 150%)";
        }, 300);
      }, 500);
    }, 500);
  } else {
    return;
  }
};
startText.addEventListener("click", enterTextAnim);
activeForm.addEventListener("submit", (e) => {
  e.preventDefault();
  inputPatternCheck(e);

  if (mailState && NameState && lastNameState) {
    SecondPage();
  } else {
    return;
  }
});
back.addEventListener("click", pageBack);
forward.addEventListener("click", pageForward);
inputsToCheck.forEach((input) =>
  input.addEventListener("change", (e) => inputsCheck(e))
);
radios.forEach((radio) =>
  radio.addEventListener("click", (e) => radiosCheck(e))
);
scroll.addEventListener("mousedown", (e) => {
  isDown = true;
  startY = e.pageY - scroll.offsetTop;
  scrollTop = scroll.scrollTop;
});
scroll.addEventListener("mouseleave", () => {
  isDown = false;
});
scroll.addEventListener("mouseup", () => {
  isDown = false;
});
scroll.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  const y = e.pageY - scroll.offsetTop;
  const walk = (y - startY) * 2;
  scroll.scrollTop = scrollTop + -walk;
});
finalForm.addEventListener("submit", (e) => {
  lastPageThanks(e);
});
finalBackBtn.addEventListener("click", () => {
  thirdPageLoad();
  forward.disabled = false;
});
