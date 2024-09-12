// Tehtävä 1
document.write("<cite><strong>If I had nine hours to chop down a tree, I'd spend the first six sharpening my ax.<br></strong>-- Abraham Lincoln</cite>");

// Tehtävä 2
function repeatingtext() {
var i = 0
while(i < 50) {
    document.write("Tekstiä");
    i++;
}
}

//Tehtävä 3

if (navigator.userAgent.indexOf("Mozilla") != -1) {
    window.location.assign("https://www.mozilla.org")
}

else {
    window.location.assign("https://www.hs.fi")
}

// Tehtävä 4

if (confirm("Are you a student?") == true) {
    document.write("Welcome student");
}
else {
    document.write("Sorry, this page is for students only");
}

// Tehtävä 5

var kuvat =[
    "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
    "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
    "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg"
    ];

var arvottu = Math.floor(Math.random() * 3)

document.write("<img src='"+kuvat[arvottu]+"'>");