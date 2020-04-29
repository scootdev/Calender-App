$(document).ready(function () {
    // Initiation function
    function init() {
        // Set the current day & update the timer every second
        setInterval(function () {
            $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
        }, 1000);

    }



    init();
})