'use strict';

function hide() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {code: 'document.getElementsByClassName(\'_1enh _7q1s\')[0].style.display = \'none\''});
    });
}

function show() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {code: 'document.getElementsByClassName(\'_1enh _7q1s\')[0].style.display = \'inline\''});
    });
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        switch (request.command) {

            case "checkTab":

                if (window.localStorage.hide) {
                    hide();
                } else {
                    show();
                }


        }

    });
