/* Code copied from buffer-loader.js file, obtained from http://middleearmedia.com/timed-rhythms-with-web-audio-api-and-javascript/ */

// Buffer Loader Prototype
function BufferLoader(context, urlList, callback) {
	this.context = context; // new audio context
    this.urlList = urlList; // list of samples
    this.onload = callback; // return message when loading completes
    this.bufferList = new Array();
    this.loadCount = 0;
}

BufferLoader.prototype.loadBuffer = function(url, index) {
    var request = new XMLHttpRequest();
    request.open("GET", url, true); // send a request to open the following links
    request.responseType = "arraybuffer"; // this changes the expected response from the server, which is binary, to array buffer

    var loader = this; // changes scope of 'this' so 'this' is accessible in the below function

    request.onload = function() {
        loader.context.decodeAudioData( // Asynchronously decodes audio file data contained	in an Array Buffer
            request.response,
            function(buffer) {
                if (!buffer) {
                    alert('error decoding file data: ' + url);
                    return;
                }
                loader.bufferList[index] = buffer;
                if (++loader.loadCount == loader.urlList.length) //increase the current loader count as long as it's equal to the number of tracks in the list
                    loader.onload(loader.bufferList);
            }
        );
    }

    request.onerror = function() {
        alert('BufferLoader: XHR error');
    }

    request.send();
}

BufferLoader.prototype.load = function() { // Loading function, runs loadBuffer function through the full urlList
    for (var i = 0; i < this.urlList.length; ++i)
        this.loadBuffer(this.urlList[i], i);
}
