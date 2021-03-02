chrome.contextMenus.create({
    "title": "Generate Password",
    "contexts":["editable"],
    "onclick": clickHandler
});

function clickHandler(info, tab) {
//    console.log(JSON
    chrome.tabs.sendMessage(tab.id, {});
}
