// ==UserScript==
// @name         WarcraftLogsMod
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Removes asking for Support popup and Banners
// @author       123456687548
// @match        https://www.warcraftlogs.com/*
// @updateURL    https://github.com/123456687548/WarcraftLogsMod/raw/master/WarcraftLogsMod.user.js
// @downloadURL  https://github.com/123456687548/WarcraftLogsMod/raw/master/WarcraftLogsMod.user.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=warcraftlogs.com
// @grant        none
// ==/UserScript==

function removePopUp(){
	const popupBtnXpath = "//button[text()='Continue without supporting us']";

    var matchingElement = document.evaluate(popupBtnXpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

    if(matchingElement !== null){
        console.log("Removed popup");
        matchingElement.click();
    }
}

function removeBanners(){
	removeElementById('top-banner');
	removeElementById('bottom-banner');
	removeElementById('right-ad-box');	
}

function removeElementById(szElement){
	var element = document.getElementById(szElement);

	if(element !== null){
		element.remove();

        console.log(`Removed  ${szElement}`);
	}
}

function removeShit(){
	removePopUp();
	removeBanners();
}

setInterval(function(){removeShit(); }, 100);