// ==UserScript==
// @name	PIXNET Album Expander
// @version	0.0.20100316
// @namespace	http://blog.gslin.org/plugins/pixnet-album-expander
// @description	Expand PIXNET album
// @homepage	http://github.com/gslin/albumexpander
// @include	http://*.pixnet.net/album/set/*
// ==/UserScript==

(function(){
    if (!document.location.href.match('/album/set/')) {
	return;
    }

    var htmlCode = '';

    var contentBody = document.getElementById('contentBody');
    var imageThumbs = contentBody.getElementsByClassName('thumb');
    var imageThumbsLength = imageThumbs.length;

    for (var i = 0; i < imageThumbsLength; i++) {
	try {
	    var el = imageThumbs[i];
	    var imgLink = el.parentNode.href;
	    var imgNewUrl = el.src.replace(/\/thumb_/, '/');

	    htmlCode += '<a href="' + imgLink + '"><img alt="" src="' + imgNewUrl + '"></a><br>';
	} catch(err) {
	}
    }

    contentBody.innerHTML = htmlCode;
})();
