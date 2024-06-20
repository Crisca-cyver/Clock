<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Relojes con Estilos Diferentes</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <?php
        date_default_timezone_set("America/Argentina/Buenos_Aires"); // Ajusta la zona horaria según tu ubicación
        $serverTime = date("H:i:s");
        $serverDate = date("d-m-Y");
        
        for ($i = 1; $i <= 8; $i++) {
            echo "
            <div class='clock clock-$i'>
                <div class='time' id='time-$i'></div>
                <div class='date' id='date-$i'></div>
            </div>
            ";
        }
        ?>
    </div>

    <script>
        const serverTime = "<?php echo $serverTime; ?>";
        const serverDate = "<?php echo $serverDate; ?>";

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
                const month = String(now.getMonth() + 1).padStart(2, '0');
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
    </script>
</body>
</html>
