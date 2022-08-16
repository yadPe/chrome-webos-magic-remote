chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["content.js"],
  });
});

function setCurrentTabIcon(path) {
  chrome.tabs.query(
    { active: true, windowType: "normal", currentWindow: true },
    function (d) {
      var tabId = d[0].id;
      chrome.action.setIcon({ path, tabId });
    }
  );
}

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  if (msg.enable) {
    setCurrentTabIcon("/cursor48.png");
  } else {
    setCurrentTabIcon("/cursor48-2.png");
  }
});
