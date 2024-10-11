document.addEventListener("DOMContentLoaded", function() {
    console.log("Script cargado y ejecutándose");

    const timezones = [
        "America/New_York", // Reloj 1
        "Europe/London",    // Reloj 2
        "Asia/Tokyo",       // Reloj 3
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
            const now = new Date().toLocaleString("en-US", { timeZone: timezone });
            const nowDate = new Date(now);
            const hours = String(nowDate.getHours()).padStart(2, '0');
            const minutes = String(nowDate.getMinutes()).padStart(2, '0');
            const seconds = String(nowDate.getSeconds()).padStart(2, '0');
            timeElement.textContent = `${hours}:${minutes}:${seconds}`;
            console.log(`Reloj ${clockId} - Hora actualizada: ${hours}:${minutes}:${seconds}`);

            const day = String(nowDate.getDate()).padStart(2, '0');
            const month = String(nowDate.getMonth() + 1).padStart(2, '0'); // Los meses empiezan desde 0
            const year = nowDate.getFullYear();
            dateElement.textContent = `${day}-${month}-${year}`;
        }

        update(); // Actualizar inmediatamente
        setInterval(update, 1000);
    }

    for (let i = 1; i <= 8; i++) {
        updateClock(i, timezones[i - 1]);
    }
});
