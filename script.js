document.addEventListener("DOMContentLoaded", function() {
    console.log("Script cargado y ejecutándose");

    const timezones = [
        "America/New_York", // Reloj 1
        "Europe/London",    // Reloj 2
        "America/Argentina/Cordoba", // Reloj 3 (cambiado)
        "Australia/Sydney", // Reloj 4
        "Europe/Paris",     // Reloj 5
        "America/Sao_Paulo",// Reloj 6
        "Africa/Johannesburg", // Reloj 7
        "Asia/Dubai"        // Reloj 8
    ];

    function updateClock(clockId, timezone) {
        const timeElement = document.getElementById('time-' + clockId);
        const dateElement = document.getElementById('date-' + clockId);

        function update() {
            const now = new Date(); // Obtener la fecha y hora actual
            const options = { timeZone: timezone, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
            const timeString = now.toLocaleTimeString('en-US', options); // Obtener la hora en la zona horaria especificada
            const dateString = now.toLocaleDateString('en-US', { timeZone: timezone }); // Obtener la fecha en la zona horaria especificada

            timeElement.textContent = timeString; // Actualizar el contenido del elemento de tiempo
            dateElement.textContent = dateString; // Actualizar el contenido del elemento de fecha
        }

        update(); // Actualizar inmediatamente
        setInterval(update, 1000); // Actualizar cada segundo
    }

    for (let i = 1; i <= 8; i++) {
        updateClock(i, timezones[i - 1]);
    }
});
