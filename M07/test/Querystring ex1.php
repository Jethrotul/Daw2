<?php
$a = '';
$b = '';
$c = '';
$a = $_GET['primer'] ?? '';
$b = $_GET['segon'] ?? '';

function multiplicar(int $var1 = null, int $var2 = null){
    return $var1 * $var2;
}

if ($a === '' || $b === '') {
    $resultado = 'falta el valor de una variable';
} else {
    if (is_numeric($a) && is_numeric($b)) {
        $resultado = multiplicar($a, $b);
    } else {
        
        $resultado = "a o b no es numerico";
    }
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
    <h1><?= $resultado ?></h1>
</body>

</html>