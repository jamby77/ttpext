let changeColor = document.getElementById("flattern");
let restore = document.getElementById("restore");

changeColor.onclick = function() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      file: "content.js"
    });
  });
};

restore.onclick = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.reload(tabs[0].id);
  });
};
