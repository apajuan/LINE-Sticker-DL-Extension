console.log("LINE OPEN");
let url = document.URL;

// if the end of the link is "en?from=sticker" then change dl link appropriately
if (url.slice(-15) == "en?from=sticker"){
	let id = url.slice(42, -16);
	console.log("LINE id (with en): " + id);
	var dl = "https://dl.stickershop.line.naver.jp/products/0/0/1/" + id + "/iphone/stickers@2x.zip";
}
// if end of link does not have en... 
else if (url.slice(-1) == "/") {
	let id = url.slice(42, -1);
	console.log("LINE id (without en, with /): " + id);
	var dl = "https://dl.stickershop.line.naver.jp/products/0/0/1/" + id + "/iphone/stickers@2x.zip";

}
else{
	let id = url.slice(42);
	console.log("LINE id (without en, without /): " + id);
	var dl = "https://dl.stickershop.line.naver.jp/products/0/0/1/" + id + "/iphone/stickers@2x.zip";


}


browser.runtime.onMessage.addListener(request => {
	console.log("recieved msg from background script");
	if (request.txt == "Button Clicked") {
		console.log("True Recieved");
		return Promise.resolve({response: dl})
	}else {
		console.log("False Recieved");
		return Promise.resolve({response: "wrong, I'm too lazy to add catch."});
	}
});
