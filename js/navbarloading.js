var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = "https://code.jquery.com/jquery-1.10.2.js";

script.onreadystatechange = handler;
script.onload = handler;

head.appendChild(script);

$(function(){
    $("#navbar-placeholder").load("../navbar.html");
});