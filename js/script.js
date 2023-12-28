const $ = (id) => {
    return document.getElementById(id);


}

const $day = $('days');
const $hour = $('hour');
const $minutes = $('minutes');
const $seconds = $('seconds');
const targetDate = new Date('2023-12-31T23:59');
const updateTimer = () => {
    let totalInSec = Math.floor(
        (targetDate.valueOf() - new Date().valueOf()) / 1000
    );
    if (totalInSec < 0) {
        totalInSec = 0
    }
    const seconds = Math.floor(totalInSec % 60);

    const minutes = Math.floor((totalInSec / 60) % 60);

    const hours = Math.floor((totalInSec / 60 / 60) % 24);

    const days = Math.floor(totalInSec / 60 / 60 / 24);

    const format = (num) => {
        return `${num}`.padStart(2, '0');
    }
    $seconds.innerText = format(seconds);
    $minutes.innerText = format(minutes);
    $hours.innerText = format(hours);
    $days.innerText = format(days)
}
setInterval(updateTimer, 1000);
const createSnowFlake = () => {
    const $snow = document.createElement('i');
    $snow.classList.add('fas', 'fa-snowflake', 'snowflake');
    $snow.style.left = `${Math.random() * window.innerWidth}px`;

    $snow.style.animationDuration = `${(Math.random() * 3 + 2)}s`;
    $snow.style.opacity = Math.random();
    $snow.style.fontSize = `${Math.random() * 20}px`;
    $snow.style.filter = 'blur(1px)';
    document.body.appendChild($snow);
    $snow.onanimationend = () =>{
        $snow.remove();
    };

    requestAnimationFrame(createSnowFlake)
};
requestAnimationFrame(createSnowFlake);