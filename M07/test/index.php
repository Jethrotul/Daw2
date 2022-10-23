<?php

$query = isset($_GET['pag'])  ?? '';

if ($query == '1') {
    include 'pag1.php';
    die();
} elseif ($query == '2') {
    include 'pag2.php';
    die();
} else {
    include '404.php';
    die();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>