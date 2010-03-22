// ==UserScript==
// @name	Yam Album Expander
// @version	0.0.20100316
// @namespace	http://blog.gslin.org/plugins/yam-album-expander
// @description	Expand Yam Album
// @homepage	http://github.com/gslin/albumexpander
// @include	http://album.blog.yam.com/*
// ==/UserScript==

(function(){
    if (!document.location.href.match(/&folder=\d+/)) {
	return;
    }

    var htmlCode = '';

    var imgItems = document.getElementsByClassName('albumShow');
    var imgItemsLength = imgItems.length;

    for (var i = 0; i < imgItemsLength; i++) {
	try {
	    var el = imgItems[i];

	    var a = el.getElementsByTagName('a')[0];
	    var aLink = a.href;
	    var img = el.getElementsByTagName('img')[0];
	    var imgNewUrl = img.src.replace('/t_', '/');

	    htmlCode += '<a href="' + aLink + '"><img alt="" src="' + imgNewUrl + '"/></a>';
	} catch(err) {
	}
    }

    try {
	// Because I cannot find id/class to match, so use parentNode^3...
	var contentBody = imgItems[0].parentNode.parentNode.parentNode;
	contentBody.innerHTML = htmlCode;
    } catch(err) {
    }
})();
