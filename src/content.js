//content script
var clickedEl = null;

document.addEventListener("contextmenu", function(event){
    clickedEl = event.target;
}, true);

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    //if(request == "getClickedEl") {
    //    sendResponse({value: clickedEl.value});
    //}

    const passwordLength = 12;
    const validCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    clickedEl.value = [...Array(passwordLength).keys()].flatMap(
            function(){
                return validCharacters[Math.floor(Math.random() * validCharacters.length)];
            }
        ).join("");
});

/*
    const passwordLength = 12;
    const validCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    gp = () => {
        return [...Array(passwordLength).keys()].flatMap(
            function(){
                return validCharacters[Math.floor(Math.random() * validCharacters.length)];
            }
        ).join("");
    }

*/
