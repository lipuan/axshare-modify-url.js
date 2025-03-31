// ==UserScript==
// @name         axure share资源url修改
// @namespace    http://tampermonkey.net/
// @version      2025-03-28
// @description  try to take over the world!
// @author       lipuan
// @match        http://demo.xxxx1.cn:xxxx2/*/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=togeek.cn
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.getElementById('mainFrame').addEventListener('load', function() {
        var iframe = document.getElementById('mainFrame');
        var images = iframe.contentWindow.document.getElementsByTagName('img');

        for(var i = 0; i < images.length; i++) {
            var img = images[i];
            img.src = img.src.replace('/demo.xxxx1.cn/', '/demo.xxxx1.cn:xxxx2/');
        }
    });
})();