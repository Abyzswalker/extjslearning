<?php

$data = [
    [
        'articles' => [
            ['id' => 1, 'name' =>'Первый', 'age' => 30],
            ['id' => 2, 'name' => 'Второй', 'age' => 37]
        ],
        'likes' => [
            ['id' => 3, 'name' =>'Третий', 'age' => 33],
            ['id' => 4, 'name' => 'Четвертый', 'age' => 77]
        ]
    ]
];


$result = [
    "data" => $data,
    "total" => count($data)
];


echo json_encode($result);