/* Code copied from buffer-loader.js file, obtained from http://middleearmedia.com/timed-rhythms-with-web-audio-api-and-javascript/ */

function BufferLoader(context, urlList, callback) {
	this.context = context;
    this.urlList = urlList;
    this.onload = callback;
    this.bufferList = new Array();
    this.loadCount = 0;
}

BufferLoader.prototype.loadBuffer = function(url, index) {
    var request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.responseType = "arraybuffer";

    var loader = this;

    request.onload = function() {
        loader.context.decodeAudioData(
            request.response,
            function(buffer) {
                if (!buffer) {
                    alert('error decoding file data: ' + url);
                    return;
                }
                loader.bufferList[index] = buffer;
                if (++loader.loadCount == loader.urlList.length)
                    loader.onload(loader.bufferList);
            }
        );
    }

    request.onerror = function() {
        alert('BufferLoader: XHR error');
    }

    request.send();
}

BufferLoader.prototype.load = function() {
    for (var i = 0; i < this.urlList.length; ++i)
        this.loadBuffer(this.urlList[i], i);
}

BufferLoader.prototype.controls = function(gain, verb, dist){

	gain = gain || 1; // Make the gain equal the gain parameter, if there is none make it a default value of 1
  verb = verb || 0;
	dist = dist || 0;

  source = context.createBufferSource(); // Create Sound Source
  context.decodeAudioData(data, function(buffer){
  source.buffer = buffer;


	// Gain
	var gainNode = context.createGain();
	gainNode.gain.value = gain;

	// Distortion
	var distortion = context.createWaveShaper();

	function makeDistortionCurve(dist) {
		var kickD = parseInt(dist);
		var k = typeof kickD === 'number' ? kickD : 50,
			n_samples = 44100,
			curve = new Float32Array(n_samples),
			deg = Math.PI / 180,
			i = 0,
			x;
		for ( ; i < n_samples; ++i ) {
			x = i * 2 / n_samples - 1;
			curve[i] = ( 3 + k ) * x * 20 * deg / ( Math.PI + k * Math.abs(x) );
		}
		console.log("distortion: " + dist)
		return curve;
	};

	distortion.curve = makeDistortionCurve(dVal);
	distortion.oversample = '4x';

  // Signal Routing
	source.connect(distortion);
	distortion.connect(gainNode);

	gainNode.connect(context.destination);

});

}
