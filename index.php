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
        $timezones = [
            "America/New_York", // Reloj 1
            "Europe/London",    // Reloj 2
            "America/Argentina/Cordoba", // Reloj 3 (cambiado)
            "Australia/Sydney", // Reloj 4
            "Europe/Paris",     // Reloj 5
            "America/Sao_Paulo",// Reloj 6
            "Africa/Johannesburg", // Reloj 7
            "Asia/Dubai"        // Reloj 8
        ];

        for ($i = 1; $i <= 8; $i++) {
            $timezoneName = $timezones[$i - 1];
            echo "
            <div class='clock clock-$i'>
                <div class='timezone' id='timezone-$i'>$timezoneName</div>
                <div class='time' id='time-$i'></div>
                <div class='date' id='date-$i'></div>
            </div>
            ";
        }
        ?>
    </div>

    <script src="script.js"></script>
</body>
</html>
