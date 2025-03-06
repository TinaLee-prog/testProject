// JavaScript Document
/*global jQuery:false */
$(function(){
	$("#js-rotating").Morphext({
		animation: "wobble", // Overrides default "bounceIn" fadeIn
		separator: ",", // Overrides default ","
		speed: 3000, // Overrides default 2000
		complete: function () {
			// Overrides default empty function
		}
	});
});
