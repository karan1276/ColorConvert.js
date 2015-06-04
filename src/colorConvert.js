//the semicolon provides protection against previously unclosed code.
;(function () {

	"use strict";

//the main function
function colorConvert(color,opts){


		//Some object concept i dont know very well
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
		console.log(this.formatIn);

		//converting string to object with diffrent color codes being is properties
		this.colorObj = this.stringToObject(color, this.formatIn );
		console.log(this.colorObj);
		/*my algorithm is that first we will convert the color to RGBA then from RGBA to any other format so its like:
		random format --> RBGA --> wanted format*/
		//this.RGBAColorObject = toRBG(this.orignalColorObject);
}

//adding functions in the prototype
colorConvert.prototype = {
		detectFormat: function(color){


		//all regular expression used
		var regForRGB = /^rgb\((\d{1,3}%?),(\d{1,3}%?),(\d{1,3}%?)\)$/;
		var regForRGBA = /^rgba\((\d{1,3}%?),(\d{1,3}%?),(\d{1,3}%?),(\d{0,}.\d{0,})\)$/;
		var regForHEX = /^#[0-9A-Fa-f]{6}$/;
		var regForHEXs = /^#[0-9A-Fa-f]{3}$/;
		var regForHEX8 = /^#[0-9A-Fa-f]{8}$/;
		var regForHEX8s = /^#[0-9A-Fa-f]{4}$/;
		var regForHSL = /^hsl\((\d{1,3}),(\d{1,2}%),(\d{1,2}%)\)$/;
		var regForHSV = /^hsv\((\d{1,3}),(\d{1,2}%),(\d{1,2}%)\)$/;
		var regForNAME = /^([a-z]{1,})$/


		//converts to lower case and removes whitespaces
		color = color.toLowerCase();
		color = color.replace(/\s/g, "");

		//finding out the format of input color
		if(color.match(regForRGBA)){
			return "rgba";
		}
		else if(color.match(regForRGB)){
			return "rgb";
		}
		else if(color.match(regForHEX)){
			return "hex";
		}
		else if(color.match(regForHEXs)){
			return "hexs";
		}
		else if(color.match(regForHEX8)){
			return "hex8";
		}
		else if(color.match(regForHEX8s)){
			return "hex8s";
		}
		else if(color.match(regForHSL)){
			return "hsl";
		}
		else if(color.match(regForHSV)){
			return "hsv";
		}
		else if(color.match(regForNAME)){
			return "name";
		}
		else{
			console.error("Can't find the format of given input, function detectFormat of colorConvert has failed.");
			return undefined;
		}
	},
	stringToObject: function(color,format){

		//all regular expression used
		var regForRGB = /^rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)$/;
		var regForRGBA = /^rgba\((\d{1,3}),(\d{1,3}),(\d{1,3}),(\d{0,}.\d{0,})\)$/;
		var regForHEX = /^#([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/;
		var regForHEXs = /^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/;
		var regForHEX8 = /^#([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/;
		var regForHEX8s = /^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/;
		var regForHSL = /^hsl\((\d{1,3}),(\d{1,2}%),(\d{1,2}%)\)$/;
		var regForHSV = /^hsv\((\d{1,3}),(\d{1,2}%),(\d{1,2}%)\)$/;
		var regForNAME = /^[a-z]{1,}$/

		//result of hex match will be stored here
		var result;

		//applying diffrent methods for diffrent formats
		switch (format) {
				case "rgba":
					result = color.match(regForRGBA);
					return {
						r: result[1],
						g: result[2],
						b: result[3],
						a: result[4]
					};
				break;
				case "rgb":
					result = color.match(regForRGB);
					return {
						r: result[1],
						g: result[2],
						b: result[3]
					};
				break;
				case "hex":
					result = color.match(regForHEX);
					return {
						r: result[1],
						g: result[2],
						b: result[3]
					};
				break;
				case "hexs":
					result = color.match(regForHEXs);
					return {
						r: result[1],
						g: result[2],
						b: result[3]
					};
				break;
				case "hex8":
					result = color.match(regForHEX8);
					return {
						r: result[1],
						g: result[2],
						b: result[3],
						a: result[4]
					};
				break;
				case "hex8s":
					result = color.match(regForHEX8s);
					return {
						r: result[1],
						g: result[2],
						b: result[3],
						a: result[4]
					};
				break;
				case "hsl":
					result = color.match(regForHSL);
					return {
						h: result[1],
						s: result[2],
						l: result[3],
					};
				break;
				case "hsv":
					result = color.match(regForHSV);
					return {
						h: result[1],
						s: result[2],
						v: result[3],
					};
				break;
				case "name":
				result = color.match(regForNAME);
				return {
					name: result[0]
				};
				break;
				default:

			}
	},
};

//exposing to windows
window.colorConvert = colorConvert;

})();
