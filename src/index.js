import "./Styles/style.css";
import { doc } from "prettier";

import Calendar from "./Icons/calendar.svg";
import Chart from "./Icons/chart.svg";
import Plus from "./Icons/plus.svg";

const body = document.querySelector("body");

const wrapper = document.createElement("div");
wrapper.classList.add("wrapper");

body.append(wrapper);

const header = document.createElement("header");
wrapper.appendChild(header);

const main = document.createElement("main");

const footer = document.createElement("footer");

wrapper.append(main, footer);

const calendarButton = document.createElement("button");
const calendar = document.createElementNS("http://www.w3.org/2000/svg", "svg");
calendar.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", Calendar);
calendar.setAttribute("viewBox", "0 0 24 24");
calendar.classList.add("footer-small");
const calendarImg = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "path"
);
calendarImg.setAttribute(
  "d",
  "M7 11H9V13H7V11M19 3H18V1H16V3H8V1H6V3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M19 5V7H5V5H19M5 19V9H19V19H5M11 15H13V17H11V15M15 15H17V17H15V15M15 11H17V13H15V11Z"
);
calendarImg.classList.add("footer-small-icons");
calendar.append(calendarImg);
calendarButton.append(calendar);

const chartButton = document.createElement("button");
const chart = document.createElementNS("http://www.w3.org/2000/svg", "svg");
chart.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", Chart);
chart.setAttribute("viewBox", "0 0 24 24");
chart.classList.add("footer-small");
const chartImg = document.createElementNS("http://www.w3.org/2000/svg", "path");
chartImg.setAttribute(
  "d",
  "M16,11.78L20.24,4.45L21.97,5.45L16.74,14.5L10.23,10.75L5.46,19H22V21H2V3H4V17.54L9.5,8L16,11.78Z"
);
chartImg.classList.add("footer-small-icons");
chart.append(chartImg);
chartButton.append(chart);

const plusButton = document.createElement("button");
const plus = document.createElementNS("http://www.w3.org/2000/svg", "svg");
plus.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", Plus);
plus.setAttribute("viewBox", "0 0 24 24");
plus.classList.add("footer-huge");
const plusImg = document.createElementNS("http://www.w3.org/2000/svg", "path");
plusImg.setAttribute(
  "d",
  "M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
);
plusImg.classList.add("footer-huge-icons");
plus.append(plusImg);
plusButton.append(plus);

footer.append(calendarButton, plusButton, chartButton);

const calendarHeaderLogo = document.createElement("div");
calendarHeaderLogo.classList.add("header-icon");

const calendarHeaderLogoIcon = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "svg"
);
calendarHeaderLogoIcon.setAttributeNS(
  "http://www.w3.org/1999/xlink",
  "xlink:href",
  Calendar
);
calendarHeaderLogoIcon.setAttribute("viewBox", "0 0 24 24");
calendarHeaderLogoIcon.classList.add("header-small");
const calendarHeaderLogoIconImg = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "path"
);
calendarHeaderLogoIconImg.setAttribute(
  "d",
  "M7 11H9V13H7V11M19 3H18V1H16V3H8V1H6V3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M19 5V7H5V5H19M5 19V9H19V19H5M11 15H13V17H11V15M15 15H17V17H15V15M15 11H17V13H15V11Z"
);
calendarHeaderLogoIconImg.classList.add("header-small-icons");

calendarHeaderLogoIcon.append(calendarHeaderLogoIconImg);

calendarHeaderLogo.append(calendarHeaderLogoIcon);

const headerText = document.createElement("div");
headerText.classList.add("header-text");

const headerTextDay = document.createElement("p");
headerTextDay.textContent = "Sunday";
const headerTextDate = document.createElement("p");
headerTextDate.textContent = "07 august";
headerTextDate.classList.add("header-date");
headerText.append(headerTextDay, headerTextDate);

const headerUserLogo = document.createElement("div");
headerUserLogo.classList.add("header-user-icon");
headerUserLogo.textContent = "e";

header.append(calendarHeaderLogo, headerText, headerUserLogo);

const mainContainer = document.createElement("div");
mainContainer.classList.add("main-container");

const dateContainer = document.createElement("div");
dateContainer.classList.add("date-container");

const dateItem1 = document.createElement("div");
dateItem1.classList.add("date-container-date-item");
const dateItem1TextDay = document.createElement("p");
dateItem1TextDay.textContent = "Wed";
dateItem1TextDay.classList.add()
const dateItem1TextDate = document.createElement("p");
dateItem1TextDate.textContent = "25";
dateItem1TextDate.classList.add('date-item-text-date')
dateItem1.append(dateItem1TextDate, dateItem1TextDay);

const dateItem2 = document.createElement("div");
dateItem2.classList.add("date-container-date-item", "active");
const dateItem2TextDay = document.createElement("p");
dateItem2TextDay.textContent = "Thu";
dateItem2TextDay.classList.add()
const dateItem2TextDate = document.createElement("p");
dateItem2TextDate.textContent = "26";
dateItem2TextDate.classList.add('date-item-text-date')
dateItem2.append(dateItem2TextDate, dateItem2TextDay);

const dateItem3 = document.createElement("div");
dateItem3.classList.add("date-container-date-item");
const dateItem3TextDay = document.createElement("p");
dateItem3TextDay.textContent = "Fri";
dateItem3TextDay.classList.add()
const dateItem3TextDate = document.createElement("p");
dateItem3TextDate.textContent = "27";
dateItem3TextDate.classList.add('date-item-text-date')
dateItem3.append(dateItem3TextDate, dateItem3TextDay);

const dateItem4 = document.createElement("div");
dateItem4.classList.add("date-container-date-item");
const dateItem4TextDay = document.createElement("p");
dateItem4TextDay.textContent = "Sat";
dateItem4TextDay.classList.add()
const dateItem4TextDate = document.createElement("p");
dateItem4TextDate.textContent = "28";
dateItem4TextDate.classList.add('date-item-text-date')
dateItem4.append(dateItem4TextDate, dateItem4TextDay);

dateContainer.append(dateItem1, dateItem2, dateItem3, dateItem4);

const exerciseWrapper = document.createElement("div");
exerciseWrapper.classList.add("exercise-wrapper");

const exerciseContainerHeader = document.createElement("div");
exerciseContainerHeader.classList.add("exercise-container-header");
exerciseContainerHeader.textContent = 'Leg day'

const exerciseContainer = document.createElement("div");
exerciseContainer.classList.add("exercise-container");
exerciseWrapper.append(exerciseContainerHeader, exerciseContainer);

mainContainer.append(dateContainer, exerciseWrapper);



const exerciseItem1 = document.createElement('div')
exerciseItem1.classList.add('exercise-container-exercise-item')

const exerciseItem2 = document.createElement('div')
exerciseItem2.classList.add('exercise-container-exercise-item')

const exerciseItem3 = document.createElement('div')
exerciseItem3.classList.add('exercise-container-exercise-item')

const exerciseItem4 = document.createElement('div')
exerciseItem4.classList.add('exercise-container-exercise-item')


exerciseContainer.append(exerciseItem1, exerciseItem2, exerciseItem3, exerciseItem4)


main.append(mainContainer);
