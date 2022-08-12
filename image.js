var i = ['a','b','c','d','e','f','g','h','i','j','k','l','m']
var urlString = 'url(./img/' + i[Math.floor(Math.random() * i.length)] + '.jpg)';
var a=document.getElementById('img');
a.style.backgroundImage =  urlString;
