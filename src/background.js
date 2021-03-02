chrome.contextMenus.create({
    "title": "Generate Password",
    "contexts":["editable"],
    "onclick": clickHandler
});

function clickHandler(info, tab) {
    chrome.tabs.sendMessage(tab.id, {});
}
