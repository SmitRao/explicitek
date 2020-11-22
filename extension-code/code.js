
let div = document.createElement('div');
// let pageContent = document.getElementsByTagName("body")[0].innerHTML
// let startOfPrivacyPolicy = pageContent.indexOf("Privacy")


let hardcodedWebsites =["https://www.facebook.com/policy.php", "https://twitter.com/en/privacy", "https://www.kaggle.com/privacy" ]
cases = ["placeholder", "placeholder", "placeholder"]

let stuff =["<image src='" + chrome.extension.getURL("what.png") + "' width='20px'></image> " + cases[0],
 "<image src='" + chrome.extension.getURL("who.png") +"' width='20px'></image>" + cases[1],
 "<image src='" + chrome.extension.getURL("own.svg") +"' width='20px'></image>" + cases[2]]


let categ = []
for(let i = 0; i < 3; i++){
  let row = document.createElement('div');
  row.innerHTML = stuff[i]
  row.style["font-family"] = "'Muli', sans-serif";
  row.style.color = "#7a7c7f";
  categ.push(row)
}

let title = document.createElement('div');
title.innerHTML = "Summary of " + window.location.host + "'s privacy policy"
title.style["font-family"] = "Candara";

div.style.padding = "4px"

div.appendChild(title);
for(let i = 0; i < 3; i++){
  div.appendChild(categ[i]);
}



div.style.position = "fixed";
div.style["z-index"] = "99999999999";
div.style["  background-color"] = "rgba(222, 222, 222)"
div.style.bottom = "0px";
// div.style.width = "400px";
div.style.background = "#F1EEF1;"
// div.style.height = "70px";
div.style.border = "2px solid black";
div.style["border-radius"] = "5px 12px 17px 5px"
div.style["background-image"] = "url(\"https://i.pinimg.com/originals/20/6d/97/206d97d7031c535db400d280bbdcec83.png\")"
div.style.background =  "#F1EEF1;"
div.style.opacity = "1; !important"
div.style.filter = "alpha(opacity=100) !important"
document.getElementsByTagName("body")[0].insertBefore(div,document.getElementsByTagName("body")[0].firstChild);


