
let div = document.createElement('div');
let pageContent = document.getElementsByTagName("body")[0].innerHTML
let startOfPrivacyPolicy = pageContent.indexOf("Privacy")

if (window.location.href.indexOf("privacy") != -1){
  var xhr = new XMLHttpRequest();
  xhr.open('GET', window.location.href, true);
  xhr.send(null);
  xhr.onload = function () {
    console.log(xhr.responseText);
  };
}

if (startOfPrivacyPolicy != -1){
  let stuff =["<image src='" + chrome.extension.getURL("what.png") + "' width='20px'></image> This is a placeholder",
   "<image src='" + chrome.extension.getURL("who.png") +"' width='20px'></image> This is a placeholder",
   "<image src='" + chrome.extension.getURL("own.svg") +"' width='20px'></image> This is a placeholder"]


  let categ = []
  for(let i = 0; i < 3; i++){
    let row = document.createElement('div');
    row.innerHTML = stuff[i]
    categ.push(row)
  }

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
  div.style.padding = "3px"
  // div.style.border = "5px solid black";
  div.style["border-radius"] = "5px 12px 12px 5px"
  div.style["background-image"] = "url(\"https://storage.needpix.com/thumbs/plain-white-background.jpg\")"
  div.style.background =  "#F1EEF1;"
  div.style.opacity = "1; !important"
  div.style.filter = "alpha(opacity=100) !important"
  document.getElementsByTagName("body")[0].insertBefore(div,document.getElementsByTagName("body")[0].firstChild);
}


