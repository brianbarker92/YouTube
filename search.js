function onClientLoad() {
	gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
	console.log("client loaded");
}

function onYouTubeApiLoad() {
	gapi.client.setApiKey('AIzaSyAWbbaDTfAyCHC9y9NUMuv2PkvHYfzoyA8');
	console.log("onyoutubeapiload with my key");
}

function onSearchResponse(response) {
	console.log("showing response for original search function");
	var vID = response.items[0].id.videoId;
	var url ="http://www.youtube.com/embed/"+ vID +"?autoplay=0";
	document.getElementById("play").innerHTML = "<iframe width='640' height='390' src='"+ url +"'></iframe>";
	console.log("video ID in searchresponse function: "+vID.toString());
}

function search(value) {
	console.log("Original search function value is");
	console.log(value.toString());
    	var request = gapi.client.youtube.search.list({
        	part: 'id',
        	q: value.toString()
	});
    	request.execute(onSearchResponse);
}

function onKeywordSearchResponse(response) {
	console.log("showing response for testapi");
	console.log("outputing id's and titles: ");
	var everything = "<ul>";
	for(var i in response.items) {
    		var item = response.items[i];
		console.log("the current ID: "+item.id.videoId);
		var onfunc = "videoSelected('" + item.id.videoId +"')";
		var onfuncq = onfunc.toString();
		console.log(onfuncq.toString()+"change made");
    		everything +="<li onclick="+ onfuncq.toString() + ">Title: "+ item.snippet.title+ "</li>";
  	}
	everything += "</ul>";
	document.getElementById("IDandTitle").innerHTML = everything;
}

function searchByKeyword(value) {
	console.log("searchbykeyword function search value is");
	console.log(value.toString());
	var request = gapi.client.youtube.search.list({
        	part: 'id,snippet',
        	q: value.toString()
    	});
	request.execute(onKeywordSearchResponse);
}

function videoSelected(videoID) {
	console.log("chose to play video with id: "+ videoID.toString());
	var url ="http://www.youtube.com/embed/"+ videoID +"?autoplay=0";
	document.getElementById("play").innerHTML = "<iframe width='640' height='390' src='"+ url +"'></iframe>";
	console.log("video ID in searchresponse function: "+vID.toString());
}



