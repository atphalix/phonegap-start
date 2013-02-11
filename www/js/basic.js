/*
 * JavaScript file
 */

var innerActive_aid = 'eduapps_PatisserieMarocaine_Android';
var innerActive_test = 'true';
var innerActive_splash_style = 'split'; // options are 'full', 'split'
var innerActive_splash_bg_color = '#999'; // color in css hex format e.g. #999
var innerActive_splash_text_color = '#fff'; // color in css hex format
var innerActive_splash_border_color = '#333'; // color in css hex format e.g. #333
innerActive_ad_params.age = '25';
innerActive_ad_params.gender = 'f';

function init()
{	
	getInnerActiveAd("banner1","");
	getInnerActiveAd("banner2","showAdText");
	createInnerActiveSplashAd();	

	var adClick = document.getElementById("toggle");
	adClick.onclick = function(){
		showSplash();
	}

	var adClick1 = document.getElementById("toggle1");
	adClick1.onclick = function(){
		showSplash(10);
	}
}
