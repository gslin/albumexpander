// ==UserScript==
// @name        PIXNET Album Expander
// @namespace   http://blog.gslin.org/plugins/pixnet-album-expander
// @description Expand PIXNET album
// @homepage    http://blog.gslin.org/plugins/pixnet-album-expander
// @include     http://www.pixnet.net/album/*/*
// ==/UserScript==

function album_expander($)
{
    $('img.thumb').removeAttr('width').removeAttr('height').each(function(i){
        var u = $(this).attr('src');
        u = u.replace(/thumb_/g, '');
        $(this).attr('src', u);
        });

    $('.thumbBox, .thumbImg, .thumbImg > span').attr('width', 'auto !important').attr('height', 'auto !important');
}

function GM_wait()
{
    if (typeof unsafeWindow.jQuery == 'undefined')
        window.setTimeout(GM_wait, 100);
    else
        album_expander(unsafeWindow.jQuery);
}

var GM_JQ = document.createElement('script');
GM_JQ.src = 'http://s1.pixfs.net/js/jquery/jquery-1.2.3/jquery-1.2.3.pack.js';
GM_JQ.type = 'text/javascript';
document.getElementsByTagName("head")[0].appendChild(GM_JQ);

GM_wait();
