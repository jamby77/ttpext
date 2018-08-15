chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color: "#3aa757" }, () => {
    console.log("the color is green");
  });

  chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {
              hostContains: "thetrainingplan",
              pathContains: "category"
            }
          })
        ],
        actions: [
          new chrome.declarativeContent.ShowPageAction(),
          new chrome.declarativeContent.RequestContentScript({
            js: ["content.js"]
          })
        ]
      }
    ]);
  });
});
