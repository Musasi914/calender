'use strict';
// 定義
// let autoNowMonth = new Date().getMonth() + 1;
// let autoNowYear = new Date().getFullYear();
// let date = new Date(autoNowYear, autoNowMonth, 0);
// let endThisMonth = date.getDate();
// let firstDayOfThisMonth = new Date(autoNowYear, new Date().getMonth()).getDay();
// let today = new Date().getDate();

// // 日付1~30 or 31を取得
// let days = [];
// for (let i = 1; i <= endThisMonth; i++) {
//     days.push(i);
// }

// // タイトルに現在の年/月を表示
// const ttl = document.querySelector('.title');
// ttl.textContent = `${autoNowYear}/${autoNowMonth}`;


// const tds = document.querySelectorAll('tbody td');
// tds[today].classList.add('today');

// let firstDay = firstDayOfThisMonth;

// for (let i = 0; i < tds.length; i++) {
//     if (firstDay > i) {
//         tds[i].classList.add('disabled');
//         const prevdate = new Date(autoNowYear, autoNowMonth - 1, 0);
//         console.log(prevdate.getDate());
//         const endPrevMonth = prevdate.getDate();
//         // firstday 1
//         //disabled はfirstdayこすうある

//         tds[i].textContent = endPrevMonth - i;
//     } else if (days.length < i) {
//         tds[i].classList.add('disabled');
//         tds[i].textContent = i - days.length;
//         console.log(i - days.length);
//     } else {
//         tds[i].textContent = days[i - firstDay];
//     }
// }

// console.log(firstDay);

// const prev = document.querySelector('.prev');
// const next = document.querySelector('.next');

// prev.addEventListener('click', () => {
//     autoNowMonth -= 1;

//     date = new Date(autoNowYear, autoNowMonth, 0);
//     endThisMonth = date.getDate();
//     firstDayOfThisMonth = new Date(autoNowYear, new Date().getMonth()).getDay();
//     today = new Date().getDate();
//     firstDay = firstDayOfThisMonth;

//     days = [];
//     for (let i = 1; i <= endThisMonth; i++) {
//         days.push(i);
//     }

//     // タイトルに現在の年/月を表示
//     const ttl = document.querySelector('.title');
//     ttl.textContent = `${autoNowYear}/${autoNowMonth}`;

//     for (let i = 0; i < tds.length; i++) {
//         if (firstDay > i) {
//             tds[i].classList.add('disabled');
//             const prevdate = new Date(autoNowYear, autoNowMonth - 1, 0);
//             console.log(prevdate.getDate());
//             const endPrevMonth = prevdate.getDate();
//             // firstday 1
//             //disabled はfirstdayこすうある

//             tds[i].textContent = endPrevMonth - i;
//         } else if (days.length < i) {
//             tds[i].classList.add('disabled');
//             tds[i].textContent = i - days.length;
//             console.log(i - days.length);
//         } else {
//             tds[i].textContent = days[i - firstDay];
//         }
//     }
// })




// 答え合わせ
// const tbody = document.querySelector('tbody');
// const title = document.querySelector('.title');
// const prevBtn = document.querySelector('.prev');
// const nextBtn = document.querySelector('.next');
// const todayBtn = document.querySelector('.todaybutton');

// let year = new Date().getFullYear();
// let month = new Date().getMonth();

// function getCalendarBody() {
//     const dates = [];
//     // lastdateは翌月の一日前
//     const lastDate = new Date(year,month + 1,0).getDate();

//     for(let i = 1; i <= lastDate; i++) {
//         if(i === new Date().getDate() && month === new Date().getMonth()) {
//             dates.push({
//                 date: i,
//                 isToday: true,
//                 isDisabled: false,
//             });
//         } else {
//             dates.push({
//                 date: i,
//                 isToday: false,
//                 isDisabled: false
//             });
//         }
            
//     }
//     return dates;
// }

// function getCalendarHead() {
//     const prevLastdate = new Date(year,month,0).getDate();
//     const prevnum = new Date(year, month, 1).getDay();
//     const dates = [];
//     for(let i = 0; i < prevnum; i++) {
//         dates.unshift({
//             date: prevLastdate - i,
//             isToday: false,
//             isDisabled: true
//         });
//     }
//     return dates; 
// }

// function getCalendarTail() {
//     const lastday = new Date(year, month + 1, 0).getDay();
//     const dates = [];
//     for(let i = 1; i < 7 - lastday; i++) {
//         dates.push({
//             date: i,
//             isToday: false,
//             isDisabled: true
//         });
//     }
//     return dates;
// }

// function createCalender() {
//     tbody.innerHTML = '';
//     const dates = [
//         ...getCalendarHead(),
//         ...getCalendarBody(),
//         ...getCalendarTail()
//     ];
//     const NumOfWeeks = dates.length / 7;
//     let weeks = [];
//     for(let i = 0; i < NumOfWeeks; i++) {
//         weeks.push(dates.splice(0,7)); 
//     }
//     weeks.forEach(week => {
//         const tr = document.createElement('tr');
//         week.forEach(date => {
//             const td = document.createElement('td');
//             td.textContent = date.date;
//             if(date.isToday) {
//                 td.classList.add('today');
//             }
//             if(date.isDisabled) {
//                 td.classList.add('disabled');
//             }
//             tr.appendChild(td);
//         })
//         tbody.appendChild(tr);
//     })


// }

// function renderTitle() {
//     title.textContent = `${year}/${String(month + 1).padStart(2,0)}`
// }

// renderTitle();
// createCalender();

// prevBtn.addEventListener('click',() => {
//     month--;
//     if(month < 0) {
//         year--;
//         month = 11;
//     }

//     renderTitle();
//     createCalender();
// });
// nextBtn.addEventListener('click',() => {
//     month++;
//     if(month > 11) {
//         year++;
//         month = 0;
//     }

//     renderTitle();
//     createCalender();
// });
// todayBtn.addEventListener('click',() => {
//     year = new Date().getFullYear();
//     month = new Date().getMonth();
//     renderTitle();
//     createCalender();
// })
// point1 datesを配列ではなくオブジェクトにする

//3週目
const today = new Date();
let year = today.getFullYear();
let month = today.getMonth();

function renderTitle() {
    const datesArea = document.querySelector('.title');
    datesArea.textContent = `${year}/${String(month + 1).padStart(2,'0')}`;
}

function getCalendarBody() {
    const thisLastdate = new Date(year,month + 1,0).getDate()
    const dates = [];
    for(let i = 1; i <= thisLastdate; i++) {
        dates.push({
            date: i,
            istoday: false,
            isdisabled: false
        });
    }
    if(year === today.getFullYear() && month === today.getMonth()) {
        dates[today.getDate() - 1].istoday = true;
    }
    return dates;
}
function getCalendarHead() {
    const n = new Date(year,month,0).getDay();
    const prevLastdate = new Date(year,month,0).getDate();
    const dates = [];
    for(let i = 0; i < n + 1; i++) {
        dates.unshift({
            date: prevLastdate - i,
            istoday: false,
            isdisabled: true
        });
    }
    return dates;
}

function getCalendarTail() {
    const dates = [];
    const lastday = new Date(year,month + 1,0).getDay();
    for(let i = 1; i < 7 - lastday; i++) {
        dates.push({
            date: i,
            istoday: false,
            isdisabled: true
        });
    }
    return dates;
}

function createCalender() {
    const tbody = document.querySelector('tbody');
    while(tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
    const dates = [
        ...getCalendarHead(),
        ...getCalendarBody(),
        ...getCalendarTail(),
    ];
    const weekNums = dates.length / 7;
    const weeks = [];
    for(let i = 0; i < weekNums; i++) {
        weeks.push(dates.splice(0,7));
    }
    for(let week of weeks) {
        const tr = document.createElement('tr');
        for(let date of week) {
            const td = document.createElement('td');
            if(date.isdisabled) {
                td.classList.add('disabled');
            }
            if(date.istoday) {
                td.classList.add('today');
            }
            td.textContent = date.date;
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
}

renderTitle();
createCalender();

function createPrevCalender() {
    month--;
    if(month < 0) {
        year--;
        month = 11;
    }
    renderTitle();
    createCalender();
}

function createNextCalender() {
    month++;
    if(month > 11) {
        year++;
        month = 0;
    }
    renderTitle();
    createCalender();
}

function clearCalender() {
    year = today.getFullYear();
    month = today.getMonth();
    renderTitle();
    createCalender();
}
const prev = document.querySelector('.prev');
prev.addEventListener('click',createPrevCalender);
const next = document.querySelector('.next');
next.addEventListener('click',createNextCalender);

const todaybutton = document.querySelector('.todaybutton');
todaybutton.addEventListener('click', clearCalender);

document.body.addEventListener('keydown',(e) => {
    switch(e.key) {
        case 'j':
            createNextCalender();
            break;
        
        case 'f':
            createPrevCalender();
            break;
        
        case 't':
            clearCalender();
            break;
        
        case 'r':
            
            break;
        
        case 'r':
            
            break;
        
        case 'r':
            
            break;
        
    }
})
