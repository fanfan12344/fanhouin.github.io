function addZero(i) {
    if (i < 10) i = "0" + i;
    return i;
}

function getlasttime(data){
    var last = data[data.length - 1].created_at;
    /*last[0]+""+last[1]+""+last[2]+""+last[3]+""+last[5]+""+last[6]+""+*/
    var lasttime = last[8] + "" + last[9] + "" + last[11] + "" + last[12] + "" + last[14] + "" + last[15] + "" + last[17] + "" + last[18];
    console.log(lasttime);
    return lasttime;
}

var today = new Date();
/*today.getFullYear()+"01"+today.getMonth()+" "+*/
var now = addZero(today.getDate()) + "" + addZero(today.getHours()) + "" + addZero(today.getMinutes()) + "" + addZero(today.getSeconds());
console.log(now);

$.getJSON('data/data1.json', function (data) {
    var lasttime = getlasttime(data);
    var chairuse = document.getElementById("chair1");
    if (Number(lasttime) + 500 < Number(now)) chairuse.src = "photo/chair1.png";
    else chairuse.src = "photo/chair2.png";
});

$.getJSON('data/data2.json', function (data) {
    var lasttime = getlasttime(data);
    var chairuse = document.getElementById("chair2");
    if (Number(lasttime) + 500 < Number(now)) chairuse.src = "photo/chair1.png";
    else chairuse.src = "photo/chair2.png";
});

$.getJSON('data/data3.json', function (data) {
    var lasttime = getlasttime(data);
    var chairuse = document.getElementById("chair3");
    if (Number(lasttime) + 500 < Number(now)) chairuse.src = "photo/chair1.png";
    else chairuse.src = "photo/chair2.png";
});

//  $.ajax({
//     type: 'GET',
//     url: 'https://iot.martinintw.com/api/v1/data',
//     contentType: 'Access-Control-Allow-Headers',
//     dataType: 'jsonp',

//     success: function (data) {
//         console.log(data);
//     }
// });