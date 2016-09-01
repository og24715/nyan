function check_url(tabid, changeinfo, tab) {
	if ( tab.url === "https://twitter.com/" ) {
		chrome.pageAction.show( tabid );
	} else {
		chrome.pageAction.hide( tabid );
	}
}

chrome.tabs.onUpdated.addListener( check_url );
