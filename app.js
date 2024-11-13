var d=document.createElement("script");
if(location.hash.slice(1))
d.src = location.hash.slice(1);
document.body.appendChild(d);