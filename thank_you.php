<?php
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        // Process the form data (you can add your desired logic here)
        // For example, send an email or save the form data to a database

        // Display the thank-you message
        echo '<div style="text-align: center; padding: 20px; background-color: #f1f1f1;">';
        echo 'Terima kasih atas kunjungan Anda!';
        echo '</div>';
    }
    ?>