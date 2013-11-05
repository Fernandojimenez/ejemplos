var languageUser;

function onDeviceReady() {
	loadLanguageDevice();
}

function loadLanguageDevice() {
	if (navigator
			&& navigator.userAgent
			&& (lang = navigator.userAgent.match(/android.*\W(\w\w)-(\w\w)\W/i))) {
		lang = lang[1];
	}

	if (!lang && navigator) {
		if (navigator.language) {
			lang = navigator.language;
		} else if (navigator.browserLanguage) {
			lang = navigator.browserLanguage;
		} else if (navigator.systemLanguage) {
			lang = navigator.systemLanguage;
		} else if (navigator.userLanguage) {
			lang = navigator.userLanguage;
		}
		lang = lang.substr(0, 2);
	}
	
	jQuery.i18n.properties({
		name : 'Messages',
		path : 'messages/',
		mode : 'both',
		language : lang,
		callback: function() {
	    }
	});
}

function goToPageChangeDiv(page) {
	$.get(page, function(data) {
		$("#contentToChangeDifferentPages").html(data);
	});
}