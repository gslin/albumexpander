// ==UserScript==
// @name        Wretch Album Expander
// @version     0.0.20100315
// @namespace   http://blog.gslin.org/plugins/wretch-album-expander
// @description Expand wretch album
// @homepage    http://github.com/gslin/albumexpander
// @include     http://www.wretch.cc/album/album.php*
// ==/UserScript==

(function(){
    // Google Chrome cannot parse @include fully-correctly
    if (!document.location.href.match('/album.php')) {
        return;
    }

    var go = function(res){
        eval(res.responseText);

        var items = jQuery('.side a');
        items.each(function(){
            var me = jQuery(this);
            var href = me.attr('href');
            jQuery.get(href, [], function(data){
                var target = jQuery(data);
                var newSrc = target.find('#DisplayImage').attr('src');
                me.find('img').attr('src', newSrc);
            });
        });
    };

    // Load jQuery 1.7.1
    GM_xmlhttpRequest({
        method: 'GET',
        url: 'http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js',
        onload: go
    });
})();
