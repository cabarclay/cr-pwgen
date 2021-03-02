var clickedEl = null;

const passwordLength = 12;
const validCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

document.addEventListener("contextmenu", function(event) {
  clickedEl = event.target;
}, true);

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {


  clickedEl.value = [...Array(passwordLength).keys()].flatMap(
    function() {
      return validCharacters[Math.floor(Math.random() * validCharacters.length)];
    }
  ).join("");
});

