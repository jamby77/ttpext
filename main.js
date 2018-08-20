let changeColor = document.getElementById("flattern");
let restore = document.getElementById("restore");

changeColor.onclick = function() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      file: "content.js"
    });
    var path = chrome.extension.getURL("styles.css");
    chrome.tabs.executeScript(tabs[0].id, {
      code: `var link = document.createElement("link");
  link.setAttribute("rel", "stylesheet");
    link.setAttribute("type", "text/css");
    link.setAttribute("href", "${path}");
  document.head.appendChild(link);`
    });
  });
};

restore.onclick = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.reload(tabs[0].id);
  });
};
