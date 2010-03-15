// ==UserScript==
// @name	Wretch Album Expander
// @version	0.0.20100315
// @namespace	http://blog.gslin.org/plugins/wretch-album-expander
// @description	Expand wretch album
// @homepage	http://github.com/gslin/albumexpander
// @include	http://www.wretch.cc/album/album.php*
// ==/UserScript==

(function(){
    // Google Chrome cannot parse @include fully-correctly
    if (!document.location.href.match('/album.php')) {
	return;
    }

    var side = document.getElementsByClassName('side');
    var sideLength = side.length;

    var htmlCode = '';

    for (var i = 0; i < sideLength; i++) {
	try {
	    var el = side[i];

	    var imgLink = el.getElementsByTagName('a')[0].href;

	    var img = el.getElementsByTagName('img')[0];
	    var imgNewUrl = img.src.replace(/\/thumbs\/t?/, '/');

	    htmlCode += '<tr><td><a href="' + imgLink + '"><img alt="" src="' + imgNewUrl + '"/></a></td></tr>';
	} catch(err) {
	}
    }

    try {
	document.getElementById('ad_square').innerHTML = htmlCode;
    } catch(err) {
    }
})();
