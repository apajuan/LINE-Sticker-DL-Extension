function dls(tab) {
	//browser.tabs.create({
		
	//})
	let msg = {
		txt: "Button Clicked"
	}

	//console.log("CLICK");
	browser.tabs.sendMessage(tab.id, msg
	).then(response => {
		console.log("recieved msg from content script");
		console.log(response.response);
		if (response.response.slice(8, 10) == "dl"){
			browser.tabs.create({
				url: response.response
			});
		}
	});
}

browser.browserAction.onClicked.addListener(dls);

