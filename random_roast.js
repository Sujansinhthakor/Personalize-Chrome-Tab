const roasts = ["“The best way out is always through.” ―Robert Frost","roast 2","roast 3","add your own roasts"];
var roast = document.getElementById('roasts');
roast.innerHTML = roasts[Math.floor(Math.random() * roasts.length)];