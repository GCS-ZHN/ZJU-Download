// ==UserScript==
// @name         ZJU Download
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  This script is developed to change the irregular name of file downloaded from ZJU website
// @author       Zhang Hongning
// @match        *://*.zju.edu.cn/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var dat = document.getElementsByTagName("a");
    var allowed_type=["doc","pdf","ppt","xlsx","xls","pptx","docx","psd","xml","csv","txt","mp4","mp3","avi","jpg","png","svg","zip","rar","gz"];
    for (var i=0;i<dat.length;i++) {
        var tmp = dat[i].textContent.split(".");
        var type = tmp[tmp.length-1].toLowerCase();
        if (allowed_type.join("<>>>>").indexOf(type)>=0 && type != "") {
            dat[i].download = dat[i].textContent;
        } else {
            tmp = dat[i].href.split(".");
            type=tmp[tmp.length-1].toLowerCase();
            if (allowed_type.join("<>>>>").indexOf(type)>=0 && type != "") {
                dat[i].download = dat[i].textContent+"."+type;
            }
        }
    }
})();