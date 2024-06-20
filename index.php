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
    </script>
    <script src="script.js"></script>
</body>
</html>
