var clickchair1 = document.getElementById("chair1");
var clickchair2 = document.getElementById("chair2");
var clickchair3 = document.getElementById("chair3");
var thedata = document.getElementById("thedata");

clickchair1.addEventListener("click" , function(){
    clickchair1.style.border = "3px dotted black";
    clickchair2.style.border = "";
    clickchair3.style.border = "";
    thedata.disabled = false;
    chairnum='data/data1.json';
    changeFunc();
});

clickchair2.addEventListener("click" , function(){
    clickchair2.style.border = "3px dotted black";
    clickchair1.style.border = "";
    clickchair3.style.border = "";
    thedata.disabled = false;
    chairnum='data/data2.json';
    changeFunc();
});

clickchair3.addEventListener("click" , function(){
    clickchair3.style.border = "3px dotted black";
    clickchair1.style.border = "";
    clickchair2.style.border = "";
    thedata.disabled = false;
    chairnum='data/data3.json';
    changeFunc();
});


