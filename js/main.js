//Number of links
var links = document.getElementsByTagName("a").length;

//Where does the last link sends to
var last = document.getElementsByTagName("a")[6];
//console.log(last.href);

//Where does the link before the last sends to
var secondLast = document.getElementsByTagName("a")[5];
//console.log(secondLast.href);

//Number of links to send to https://wemanconnect.com
var el = document.querySelectorAll("a[href='https://wemanconnect.com']").length;

//Number of links in the third paragraph
var parraf = document.getElementsByTagName("p");
var thirdp = document.getElementsByTagName("p")[2];
var e = thirdp.querySelectorAll("a").length;

/////////////////////////
//Listas
var listas = document.getElementsByTagName("ul")

var elemento1 = document.createElement("li");
var contenido1 = document.createTextNode(links);
    listas[1].appendChild(elemento1);
    elemento1.appendChild(contenido1);

var elemento2 = document.createElement("li");
var contenido2 = document.createTextNode(last);
    listas[1].appendChild(elemento2);
    elemento2.appendChild(contenido2);

var elemento3 = document.createElement("li");
var contenido3 = document.createTextNode(secondLast.href);
    listas[1].appendChild(elemento3);
    elemento3.appendChild(contenido3);
    
var elemento4 = document.createElement("li");
var contenido4 = document.createTextNode(el);
    listas[1].appendChild(elemento4)
    elemento4.appendChild(contenido4)

var elemento5 = document.createElement("li");
var contenido5 = document.createTextNode(e);
    listas[1].appendChild(elemento5);
    elemento5.appendChild(contenido5);


//////////DOM2//////////
function display(){
    var elem = document.getElementsByClassName("aditional hidden");  
    elem[0].classList.remove("hidden"); 
}

//////////DOM3//////////
function add(){
    
}