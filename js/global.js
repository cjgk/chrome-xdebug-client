var Global = (function() {

	var isProcessing = false;


	var publicMethods = {

		isProcessing: function() {
			return isProcessing;
		},

		setProcessing: function() {
			isProcessing = true;
			$("#processing-indicator").addClass("busy");
		},

		unsetProcessing: function() {
			isProcessing = false;
			$("#processing-indicator").removeClass("busy");
		},

		fileNameCurrentlyLoaded: ''

	}

	return publicMethods;

})();

