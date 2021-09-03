<?php

$data = [];

if (isset($_POST['param1']) && $_POST['param1'] == 1) {
    $data = [
        ['id' => 1, 'name' =>'Первый', 'age' => 30],
        ['id' => 2, 'name' => 'Второй', 'age' => 37]
    ];
}

$result = [
    "data" => $data,
    "total" => count($data)
];

sleep(3);

echo json_encode($result);