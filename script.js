minutes = document.getElementById('minutes');
seconds = document.getElementById('seconds');
button = document.getElementById('button');

audio = new Audio('./media/metalpipe.mp3');

minutes.value = '';
seconds.value = '';

minutes.disabled = false;
seconds.disabled = false;

function countDown() {
    if (minutes.disabled == false) {
        return;
    }

    if (seconds.value == '') {
        alert('Please enter a valid number');
    }
    if (minutes.value == '') {
        minutes.value = 0;
    }

    let m = parseInt(minutes.value);
    let s = parseInt(seconds.value);
    
    if (m == 0 && s == 0) {
        audio.play();
        alert('wakey wakey its time for school!');
        minutes.disabled = false;
        seconds.disabled = false;
        button.innerHTML = 'Start';
        minutes.style.backgroundColor = 'white';
        seconds.style.backgroundColor = 'white';
        button.style.backgroundColor = 'lightgreen';
        return;
    }

    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    minutes.style.backgroundColor = randomColor;
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    seconds.style.backgroundColor = randomColor;
    
    if (s == 0) {
        m--;
        s = 59;
    } else {
        s--;
    }

    if (s > 60) {
        m += Math.floor(s / 60);
        s = s % 60;
    }

    minutes.value = m;
    seconds.value = s;

    setTimeout(countDown, 1000);
}


function toggle() {
    if (minutes.disabled) {
        minutes.disabled = false;
        seconds.disabled = false;
        button.innerHTML = 'Start';
        countDown();
        button.style.backgroundColor = 'lightgreen';
        minutes.style.backgroundColor = 'white';
        seconds.style.backgroundColor = 'white';
        minutes.value = '';
        seconds.value = '';
    } else {
        button.style.backgroundColor = 'lightcoral';
        minutes.disabled = true;
        seconds.disabled = true;
        console.log('ok')
        button.innerHTML = 'Reset';
        countDown();
    }
}

console.log('done')