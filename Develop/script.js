// new js file
var now = moment().format('MMMM Do YYYY');
$('#currentDay').text(now);

//set time to var
var hour7 = moment(7, "LT").format("LT");
var hour8 = moment(8, "LT").format("LT");
var hour9 = moment(9, "LT").format("LT");
var hour10 = moment(10, "LT").format("LT");
var hour11 = moment(11, "LT").format("LT");
var hour12 = moment(12, "LT").format("LT");
var hour13 = moment(13, "LT").format("LT");
var hour14 = moment(14, "LT").format("LT");
var hour15 = moment(15, "LT").format("LT");
var hour16 = moment(16, "LT").format("LT");


// set text for hour of day
$(".hour7").text(hour7);
$(".hour8").text(hour8);
$(".hour9").text(hour9);
$(".hour10").text(hour10);
$(".hour11").text(hour11);
$(".hour12").text(hour12);
$(".hour13").text(hour13);
$(".hour14").text(hour14);
$(".hour15").text(hour15);
$(".hour16").text(hour16);

// check for time change and set background
for (var i = 7; i < 17; i++) {
    var a = moment();
    var b = moment(i, "LT");
    if ((a.diff(b, "minutes")) > 0 && (a.diff(b, "minutes")) < 60) {
        $(".event" + i).css("background", "lightyellow");
        $(".event" + i).css("border", "1px dotted black");
    }
    if ((a.diff(b, "minutes") > 60)) {
        $(".event" + i).css("background", "lightgray");
    }
    if (a.diff(b, "minutes") < 0) {
        $(".event" + i).css("background", "lightgreen");
    }
}