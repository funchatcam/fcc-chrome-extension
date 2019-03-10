//chrome.browserAction.setBadgeText({text: '...'});
//chrome.browserAction.setBadgeBackgroundColor({color: '#4688F1'});

fccUpdate();

setInterval(fccUpdate, 3 * 60 * 1000) //every 3 mins

function fccUpdate() {
  console.log("Updating FCC Extension...");
  var chatters=0;
  var title="";
  
    $.getJSON("http://www.funchatcam.com/api/online.php",function(result){
    $.each(result, function(i, field){
	chatters++;
      });
      console.log(result);
        title = 'FCC ' + chatters + ' users online';
	  chrome.browserAction.setBadgeText({text:chatters.toString()});
		chrome.browserAction.setTitle({title:title})
  });	
}