document.addEventListener("DOMContentLoaded", function() {
    const serverTime = document.querySelector('script').innerText.split('"')[1];
    const serverDate = document.querySelector('script').innerText.split('"')[3];

    function updateClock(clockId) {
        const timeElement = document.getElementById('time-' + clockId);
        const dateElement = document.getElementById('date-' + clockId);
        
        function update() {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            timeElement.textContent = `${hours}:${minutes}:${seconds}`;
            
            const day = String(now.getDate()).padStart(2, '0');
            const month = String(now.getMonth() + 1).padStart(2, '0'); // Los meses empiezan desde 0
            const year = now.getFullYear();
            dateElement.textContent = `${day}-${month}-${year}`;
        }

        const [serverHours, serverMinutes, serverSeconds] = serverTime.split(':');
        const initialDate = new Date();
        initialDate.setHours(serverHours, serverMinutes, serverSeconds);
        timeElement.textContent = serverTime;
        dateElement.textContent = serverDate;

        setInterval(update, 1000);
    }

    for (let i = 1; i <= 8; i++) {
        updateClock(i);
    }
});
