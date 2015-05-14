/*
 *  ColorConvert - v1.0.0
 *  A javascript library to convert color codes from one format to the other.
 *  http://karan1276.github.io/ColorConvert.js
 *
 *  Made by Karan Sharma
 *  Under MIT License
 */
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

		//variables
		var orignalColorString, orignalColorObject;
		//storing orignal string entered for refrence

		orignalColorString = color;

		//converting the input string to an object, for easy processing
		orignalColorObject = this.stringToObject(color);

		/*my algorithm is that first we will convert the color to RGBA then from RGBA to any other format so its like:
		random format --> RBGA -->another format*/
		//this.RGBAColorObject = toRBG(this.orignalColorObject);
}

//adding functions in the prototype
colorConvert.prototype = {
	stringToObject: function(string){
		return string;
	},
};

//exposing to windows
window.colorConvert = colorConvert;

})();
