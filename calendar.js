let currentMonth = moment().month();
let currentYear = moment().year();
let week = moment().week();
let selectYear = document.querySelector("#year");
let selectMonth = document.querySelector("#month");
let view = document.querySelector("#view");

let months = ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'];

let monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);
showWeek(week);

function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
}

function previous() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendar(currentMonth, currentYear);
}

function jump() {
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    showCalendar(currentMonth, currentYear);
}

function changeView() {
    if (view.value === 1) {
        showCalendar();
    } else if (view.value === 2) {
        showWeek();
    } else {
        showDay();
    }
}

function showCalendar(month, year) {
    let firstDay = (new Date(year, month)).getDay() - 1;
    let daysInMonth = 32 - new Date(year, month, 32).getDate();

    let tbl = document.querySelector('#calendar-body');

    tbl.innerHTML = '';

    monthAndYear.innerHTML = months[month] + ' ' + year;
    selectYear.value = year;
    selectMonth.value = month;

    let date = 1;
    for (let i = 0; i < 6; i++) {
        let row = document.createElement('tr');
        row.setAttribute('class', 'calendar-row');

        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                let cell = document.createElement('td');
                cell.setAttribute('class', 'calendar-data');
                let cellText = document.createTextNode('');
                cell.appendChild(cellText);
                row.appendChild(cell);
                
            } else if (date > daysInMonth) {
                break;
            } else {
                let cell = document.createElement('td');
                cell.setAttribute('class', 'calendar-data');
                let cellText = document.createTextNode(date);
                if (date === moment().date() && year === moment().year() && month === moment().month()) {
                    cell.classList.add('today');
                }
                cell.appendChild(cellText);
                row.appendChild(cell);
                date++
            }
        }

        tbl.appendChild(row);
    }
}

function showWeek(week) {
    
}