window.onload = function() {
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');

    function updateClock() {
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

    // Inicializamos con la hora del servidor
    const [serverHours, serverMinutes, serverSeconds] = serverTime.split(':');
    const initialDate = new Date();
    initialDate.setHours(serverHours, serverMinutes, serverSeconds);
    timeElement.textContent = serverTime;
    dateElement.textContent = serverDate;

    // Actualizamos cada segundo
    setInterval(updateClock, 1000);
};
