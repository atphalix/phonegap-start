/*
 * JavaScript file
 */

var innerActive_aid = 'eduapps_PatisserieMarocaine_Android';
var innerActive_test = 'true';
innerActive_ad_params.age = '25';
innerActive_ad_params.gender = 'f';
	
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

