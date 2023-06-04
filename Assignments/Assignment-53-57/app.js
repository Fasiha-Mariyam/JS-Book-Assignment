// 2. Create a paragraph and two buttons “zoom in ”(+) and “zoom out”(-).
// On each click on “zoom in”(+) , add 10px in font size of paragraph.
// And on each click on “zoom out”(-) , minus 10px in font size of paragraph
function zoomin(){
var paragraph = document.getElementById('zoom');
var fontSize = parseInt(window.getComputedStyle(paragraph).fontSize);
var pro = fontSize+10+"px";
paragraph.style.fontSize = pro;
}
function zoomout(){
    var paragraph = document.getElementById('zoom');
    var fontSize = parseInt(window.getComputedStyle(paragraph).fontSize);
    var pro = fontSize-10+"px";
    paragraph.style.fontSize = pro;
}

