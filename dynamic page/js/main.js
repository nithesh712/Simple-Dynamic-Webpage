// Dom Elements

const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');
    showAmPm = true;

//Showing Time

function showTime(){
    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

// For AM or PM

const amPm = hour >= 12 ? 'PM' : 'AM';

// For 12 Hour
    hour = hour % 12 || 12;

// showing time outPut
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}
    ${showAmPm ? amPm : ''}`
    setTimeout(showTime, 1000);
}

// Adding Zero front of single Numbers

function addZero(num){
    return (parseInt(num, 10) < 10 ? '0' : '') + num
}

// setting images

function BgImages(){
    let today = new Date(),
    hour = today.getHours();

    if (hour < 12) {
//In office 
        document.body.style.backgroundImage = "url(../images/computer.jpg)";
        greeting.textContent = 'Work in Computer';
        document.body.style.color = 'white'
    }else if (hour < 18) {
        // with people
        document.body.style.backgroundImage ="url(../images/new.jpg)";
        greeting.textContent = 'Play with People'
        document.body.style.color = 'white'
    }else{
        // Stay on Home
        document.body.style.backgroundImage ="url(../images/city.jpg)";
        greeting.textContent = 'Its late Stay Here'
        document.body.style.color = 'white';
    }
}

// Adding Name to local storage
function getName(){
    if (localStorage.getItem('name') === null) {
        name.textContent = '[Your Name]';
    }else{
    name.textContent = localStorage.getItem('name');
    }
}

// Set Name
function setName(e){
    if (e.type === 'keypress') {
    // enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }

    }else{
        localStorage.setItem('name', e.target.innerText);
    }
}

// Adding Focus
function getFocus(){
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[Your Focus]';
    }else{
        focus.textContent = localStorage.getItem('focus');
    }
}
// Set Focus
function setFocus(e){
    if (e.type === 'keypress') {

      // enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }

    }else{
        localStorage.setItem('focus', e.target.innerText);
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// running
(showTime());
(BgImages());
(getName());
getFocus();