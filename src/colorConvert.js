//the semicolon provides protection against previously unclosed code.
;(function () {

	"use strict";

//the main function
function colorConvert(color,opts){

		color = (color) ? color : "";
    opts = opts || { };

		if (color instanceof colorConvert) {
			return color;
		}

		if (!(this instanceof colorConvert)) {
        return new colorConvert(color, opts);
    }


		//storing orignal string entered for refrence
		this.orignalColorString = color;

		//converting the input string to an object, for easy processing
		this.formatIn = this.detectFormat(color);
		console.log("color format is: "+this.formatIn);
		/*my algorithm is that first we will convert the color to RGBA then from RGBA to any other format so its like:
		random format --> RBGA -->another format*/
		//this.RGBAColorObject = toRBG(this.orignalColorObject);
}

//adding functions in the prototype
colorConvert.prototype = {
	detectFormat: function(color){
		//all regular expression used
		var regForRGB = /^rgb\(([0-9]{1,3})|([0-9]{1,2}%),([0-9]{1,3})|([0-9]{1,2}%) ,([0-9]{1,3})|([0-9]{1,2}%)\)/;
		var regForRGBA = /^rgba\(([0-9]{1,3})|([0-9]{1,2}%),([0-9]{1,3})|([0-9]{1,2}%) ,([0-9]{1,3})|([0-9]{1,2}%),([0-1] )\)/;
		//converts to lower case and removes whitespaces
		color = color.toLowerCase();
		color = color.replace(/\s/g, "");


		//array to hold result after testing regular expression
		var result;
		if(color.match(regForRGB)){
			return "rgb";
		}

	},
	stringToObject: function(string1){

	},
};

//exposing to windows
window.colorConvert = colorConvert;

})();
