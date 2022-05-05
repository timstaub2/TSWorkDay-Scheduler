// new js file
var now = moment().format('MMMM Do YYYY');
$('#currentDay').text(now);

//set time to var
for (var i = 7; i < 17; i++) {
    $(".hour"+i).text( moment(i, "LT").format("LT"))
}

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

function textSave() {
    for (var i = 7; i < 17; i++) {
        localStorage.setItem("userInput"+i, $(".text"+i));
    }
}

function renderText() {
    for (var i = 7; i < 17; i++) {
        $(".text"+i).text(localStorage.getItem("userInput"+i));
    }
}

for (var i = 7; i < 17; i++) {
    $(".save"+i).text(localStorage.setItem("userInput"+i,$("text"+i).val()));
}

var saveAll = $(".saveAll");
saveAll.on("click",function() {
    saveText();
    renderText();
});

var deleteAll = $(".deleteAll");
deleteAll.on("click",function() {
    localStorage.clear();
    renderText();
})