<?php

$data = [];

if (isset($_POST['param1']) && $_POST['param1'] == 1) {
    $data = [
        ['id' => 1, 'name' =>'Первый', 'age' => 30],
        ['id' => 2, 'name' => 'Второй', 'age' => 37]
    ];
} else {
        $data = [
            ['id' => 1, 'name' =>'Первый', 'age' => 30],
            ['id' => 2, 'name' => 'Второй', 'age' => 37],
            ['id' => 3, 'name' => 'Третий', 'age' => 777]
        ];
}

$result = [
    "data" => $data,
    "total" => count($data)
];

echo json_encode($result);