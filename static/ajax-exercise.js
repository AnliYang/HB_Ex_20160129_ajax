"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(results) {
    var fortune = results;
    $('#fortune-text').html(fortune);
    // TODO: get the fortune and show it in the #fortune-text div
}

function getFortune() {
    $.get('/fortune', showFortune);
}

$('#get-fortune-button').on('click', getFortune);

// PART 2: SHOW WEATHER
    // TODO: request weather with that URL and show the forecast in #weather-info

function showWeather(results) {
    // long form
    // var forecast = results.forecast;
    // $('zipcode-field').html(forecast);

    // short form
    $("#weather-info").html(results.forecast);
}

function getWeather(evt) {
    evt.preventDefault();
    var url = "/weather.json?zipcode=" + $("#zipcode-field").val();
    $.get(url, showWeather);
}

$("#weather-form").on('submit', getWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


