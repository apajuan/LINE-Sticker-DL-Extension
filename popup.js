// gets lineCode from idk where tbh it just works (for me)
// appends the line code to a url and opens it on a new tab, downloads the thing.

  lineDownloadNormal.onclick = function(element) {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {code: 'var lineCode = JSON.parse(document.querySelector("head > script:nth-child(65)").innerText).sku; console.log(lineCode); window.open("https://stickershop.line-scdn.net/stickershop/v1/product/" + lineCode + "/iphone/stickers@2x.zip", "_blank");'});
      });
    };

  lineDownloadOthers.onclick = function(element) {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {code: 'var lineCode = JSON.parse(document.querySelector("head > script:nth-child(65)").innerText).sku; console.log(lineCode); window.open("https://stickershop.line-scdn.net/stickershop/v1/product/"+ lineCode +"/iphone/stickerpack@2x.zip", "_blank");'});
      });
    };
