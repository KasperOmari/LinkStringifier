// ==UserScript==
// @name         Link Stringifier
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Stringifies hyberlinks :3
// @author       @KasperOmari
// @match        https://*/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    var links = document.getElementsByTagName("a");

    function run() {
        changeLinks(links);
    }

    function changeLinks(links) {
        setStyleSheet();
        for(var i=0; i<links.length; ++i) {
            var link = links[i].href;
            var linkText = links[i].innerHTML;

            if(notApplicableTag(links[i])) {
                continue;
            }

            var newLinkTag = getLinkDiv(link, linkText);
            addLinkclasses(links[i], newLinkTag);
            // Replace link html
            links[i].parentNode.replaceChild(newLinkTag, links[i]);
        }
    }

    function setHover(spanObj, linkObj) {
        linkObj.classList.add("LinkStringiferHide");
        spanObj.onmouseover = function() {linkObj.classList.replace("LinkStringiferHide", "LinkStringiferShow")};
        spanObj.onmouseout = function() {linkObj.classList.replace("LinkStringiferShow", "LinkStringiferHide")};
    }

    function setStyleSheet() {
        var css = '.LinkStringiferShow { display: show; } .LinkStringiferHide { display: none; }';
        var style = document.createElement('style');

        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
        document.head.appendChild(style);
    }

    function addLinkclasses(link, tag) {
        tag.className = link.className;
    }

    function notApplicableTag(link) {
        var htmlTagsRegex = /<\/?[a-z][\s\S]*>/i;
        var htmlTagResults = link.innerHTML.match(htmlTagsRegex);
        var isJSFunction = link.href.includes("javascript:");
        if (isJSFunction || htmlTagResults == null) {
            return false;
        }

        var flag = 1;
        var notAllowdHtmlTags = getHtmlTagsToIgnore();
        for (var i=0;i<htmlTagResults.length;++i) {
            for (var j=0;j<notAllowdHtmlTags.length;++j) {
                if(htmlTagResults[i].includes(notAllowdHtmlTags[j])) {
                    flag = 0;
                    break;
                }
            }
        }

        return flag == 0;
    }

    function getHtmlTagsToIgnore() {
        return ['<img','<svg'];
    }

    function getLinkDiv(link, linkText) {
        var linkSymbol = "&#x1f517;";
        var parentSpan = document.createElement("span");
        parentSpan.innerHTML = linkText + " ";
        parentSpan.classList.add("LinkStringiferParent");

        var linker = document.createElement("a");
        linker.innerHTML = linkSymbol;
        linker.setAttribute("href", link);
        parentSpan.appendChild(linker);

        setHover(parentSpan, linker);

        return parentSpan;
    }
    run();
})();