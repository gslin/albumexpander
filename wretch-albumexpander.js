// ==UserScript==
// @name	Wretch Album Expander
// @namespace	http://blog.gslin.org/plugins/wretch-album-expander
// @description	Expand wretch album
// @homepage	http://blog.gslin.org/plugins/wretch-album-expander
// @include	http://www.wretch.cc/album/album.php*
// ==/UserScript==

function album_expander($)
{
    var imgs = "";

    $(".side").each(function() {
	    var a = $("a", this);
	    var alink = a.attr("href");
	    var img = $("img", this);
	    var imgsrc = img.attr("src").replace(/\/thumbs\/t?/, "/");

	    imgs += "<a href='" + alink + "'><img alt='' src='" + imgsrc + "'></a><br />";
	});
    $("table").slice(3,4).html(imgs);
}

function GM_wait()
{
    if (typeof unsafeWindow.jQuery == "undefined")
	window.setTimeout(GM_wait, 100);
    else
	album_expander(unsafeWindow.jQuery);
}

var GM_JQ = document.createElement("script");
GM_JQ.src = "http://code.jquery.com/jquery-1.2.3.js";
GM_JQ.type = "text/javascript";
document.getElementsByTagName("head")[0].appendChild(GM_JQ);

GM_wait();

