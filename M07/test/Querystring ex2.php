<?php
$a = $_GET['primer'] ?? '';
$b = 1;


if ($a === '' || $b === '') {
    $a = 'No hi ha cap taula sel·leccionada';
} else {
    if (is_string($a) ) {
        $a = 'El número introduït no és enter';
    } else {
        if (is_float($a)) {
            $a = 'El número introduït no és enter';
        } else {
            tablaMultiplicar($a);
        }
    }
}
// utilizar  filter_var()

function tablaMultiplicar(int $var1)
{   global $b;
    $a = $var1 * $b;
    $b++;
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1><?= $a ?></h1>
</body>

</html>