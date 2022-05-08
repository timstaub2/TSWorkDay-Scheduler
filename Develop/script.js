
// new js file
var now = moment().format('MMMM Do YYYY');
$('#currentDay').text(now);

//set time to var
for (var i = 7; i < 17; i++) {
    $(".hour" + i).text(moment(i, "LT").format("LT"))
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
        localStorage.setItem("userInput"+i, $(".text"+i).val());
    }
}

function renderText() {
    for (var i = 7; i < 17; i++) {
        $(".text"+i).text(localStorage.getItem("userInput"+i));
    }
}

var save7 = $(".save7");
var save8 = $(".save8");
var save9 = $(".save9");
var save10 = $(".sav10");
var save11 = $(".save11");
var save12 = $(".save12");
var save13 = $(".save13");
var save14 = $(".save14");
var save15 = $(".save15");
var save16 = $(".save16");

save7.on("click",function() {
    localStorage.setItem("userInput7",$(".text7").val());
});
save8.on("click",function() {
    localStorage.setItem("userInput8",$(".text8").val());
});
save9.on("click",function() {
    localStorage.setItem("userInput9",$(".text9").val());
});
save10.on("click",function() {
    localStorage.setItem("userInput10",$(".text10").val());
});
save11.on("click",function() {
    localStorage.setItem("userInput11",$(".text11").val());
});
save12.on("click",function() {
    localStorage.setItem("userInput12",$(".text12").val());
});
save13.on("click",function() {
    localStorage.setItem("userInput13",$(".text13").val());
});
save14.on("click",function() {
    localStorage.setItem("userInput14",$(".text14").val());
});
save15.on("click",function() {
    localStorage.setItem("userInput15",$(".text15").val());
});
save16.on("click",function() {
    localStorage.setItem("userInput16",$(".text16").val());
});

var saveAll = $(".saveIcon");
saveAll.on("click", function () {
    textSave();
    renderText(); 
});

var deleteAll = $(".deleteAll");
deleteAll.on("click", function () {
    localStorage.clear();
    renderText();
})