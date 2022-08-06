import './Styles/style.css'

import Calendar from './Icons/calendar.svg'
import Chart from './Icons/chart.svg'
import Plus from './Icons/plus.svg'


const body = document.querySelector('body')

const wrapper = document.createElement('div')
wrapper.classList.add('wrapper')

body.append(wrapper)

const header = document.createElement('header')
wrapper.appendChild(header)

const main = document.createElement('main')

const footer = document.createElement('footer')

wrapper.append(main, footer)

const calendarButton = document.createElement('button')
const calendar = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
calendar.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', Calendar)
calendar.setAttribute('viewBox', "0 0 24 24")
calendar.classList.add('footer-small')
const calendarImg = document.createElementNS("http://www.w3.org/2000/svg", 'path')
calendarImg.setAttribute('d', "M7 11H9V13H7V11M19 3H18V1H16V3H8V1H6V3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M19 5V7H5V5H19M5 19V9H19V19H5M11 15H13V17H11V15M15 15H17V17H15V15M15 11H17V13H15V11Z")
calendarImg.classList.add('footer-small-icons')
calendar.append(calendarImg)
calendarButton.append(calendar)

const chartButton = document.createElement('button')
const chart = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
chart.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', Chart)
chart.setAttribute('viewBox', "0 0 24 24")
chart.classList.add('footer-small')
const chartImg = document.createElementNS("http://www.w3.org/2000/svg", 'path')
chartImg.setAttribute('d', "M16,11.78L20.24,4.45L21.97,5.45L16.74,14.5L10.23,10.75L5.46,19H22V21H2V3H4V17.54L9.5,8L16,11.78Z")
chartImg.classList.add('footer-small-icons')
chart.append(chartImg)
chartButton.append(chart)


const plusButton = document.createElement('button')
const plus = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
plus.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', Plus)
plus.setAttribute('viewBox', "0 0 24 24")
plus.classList.add('footer-huge')
const plusImg = document.createElementNS("http://www.w3.org/2000/svg", 'path')
plusImg.setAttribute('d', "M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z")
plusImg.classList.add('footer-huge-icons')
plus.append(plusImg)
plusButton.append(plus)


footer.append(calendarButton, plusButton, chartButton)

const calendarHeaderLogo = document.createElement('div')
calendarHeaderLogo.classList.add('header-icon')

const calendarHeaderLogoIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
calendarHeaderLogoIcon.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', Calendar)
calendarHeaderLogoIcon.setAttribute('viewBox', "0 0 24 24")
calendarHeaderLogoIcon.classList.add('header-small')
const calendarHeaderLogoIconImg = document.createElementNS("http://www.w3.org/2000/svg", 'path')
calendarHeaderLogoIconImg.setAttribute('d', "M7 11H9V13H7V11M19 3H18V1H16V3H8V1H6V3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M19 5V7H5V5H19M5 19V9H19V19H5M11 15H13V17H11V15M15 15H17V17H15V15M15 11H17V13H15V11Z")
calendarHeaderLogoIconImg.classList.add('header-small-icons')

calendarHeaderLogoIcon.append(calendarHeaderLogoIconImg)

calendarHeaderLogo.append(calendarHeaderLogoIcon)

const headerText = document.createElement('div')
headerText.classList.add('header-text')

const headerTextDay = document.createElement('p')
headerTextDay.textContent = 'Sunday'
const headerTextDate = document.createElement('p')
headerTextDate.textContent = '07 august'
headerTextDate.classList.add('header-date')
headerText.append(headerTextDay, headerTextDate)


const headerUserLogo = document.createElement('div')
headerUserLogo.classList.add('header-user-icon')
headerUserLogo.textContent = 'e'


header.append(calendarHeaderLogo, headerText, headerUserLogo)


