@extends('layouts.darkHeaderLayout')
@section('content')
    <input type="hidden" value="{{ $data['service'] }}" id="service-name" />
    <div style="display: flex; justify-content: left; padding-top: 100px; padding-bottom: 40px; padding-left: 40px">Home &gt; Service &gt; {{ $data['service'] }}</div>
    <div id="service-details"></div>
@endsection