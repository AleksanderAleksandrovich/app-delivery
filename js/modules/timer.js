function setZero(a) {
    if (a >= 0 && a < 10) {
        return `0${a}`;
    } else {
        return a;
    }
}
function timer(id, deadLine) {
    //timer


    function getTimeRemaining(endTime) {
        const t = Date.parse(endTime) - Date.parse(new Date()),
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor((t / (1000 * 60 * 60)) % 24),
            minuts = Math.floor((t / 1000 / 60) % 60),
            seconds = Math.floor((t / 1000) % 60);

        return {
            total: t,
            days: days,
            hours: hours,
            minuts: minuts,
            seconds: seconds,
        };
    }

    
    function setCloak(selector, endTime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector("#days"),
            hours = timer.querySelector("#hours"),
            minuts = timer.querySelector("#minutes"),
            seconds = timer.querySelector("#seconds"),
            timeInterval = setInterval(updateCloak, 1000);

        updateCloak();

        function updateCloak() {
            const t = getTimeRemaining(endTime);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }

            days.innerHTML = setZero(t.days);
            hours.innerHTML = setZero(t.hours);
            minuts.innerHTML = setZero(t.minuts);
            seconds.innerHTML = setZero(t.seconds);
        }
    }
    setCloak(id, deadLine);
}

export default timer;
export {setZero};