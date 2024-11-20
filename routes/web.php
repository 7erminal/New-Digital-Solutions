<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Log;

Route::get('/', function () {
    return view('index');
});

Route::get('/company', function () {
    return view('aboutCompany');
});

Route::get('/services', function () {
    return view('services');
});

Route::get('/view-service/{number}', function (string $number) {
    Log::debug("Request received ");
    Log::debug($number);

    $data['service'] = $number;
    if($number=='1'){
        $data['service'] = "Mobile App Development";
    } else if($number=='2'){
        $data['service'] = "E-Commerce";
    } else if($number=='3'){
        $data['service'] = "Data Analytics";
    } else if($number=='4'){
        $data['service'] = "CRM";
    } else if($number=='5'){
        $data['service'] = "Fleet Management";
    } else if($number=='6'){
        $data['service'] = "Financial Management";
    } else if($number=='7'){
        $data['service'] = "Asset Management";
    } else if($number=='8'){
        $data['service'] = "Marketing & Advertisement";
    }

    return view('viewService')->with('data', $data);
});
