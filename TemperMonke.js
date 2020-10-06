// ==UserScript==
// @name         VKRus
// @namespace    http://tampermonkey.net/
// @version      13.5.2
// @description  Make VK Russian again!
// @author       Jeffrey Epstein
// @match        https://vk.com/*
// @grant        none
// @require      https://code.jquery.com/jquery-2.1.4.min.js
// @run-at       document-end
// ==/UserScript==



 document.querySelectorAll("span").forEach(item => {
    if (item.innerHTML === "Мессенджер") {
      item.innerHTML = "Сообщения";
    }
  });
 document.querySelectorAll("span").forEach(item => {
    if (item.innerHTML === "Маркет") {
      item.innerHTML = "Магазин";
    }
  });
setInterval(function() {
      document.querySelectorAll("title").forEach(item => {
    if (item.innerHTML === "Мессенджер") {
    item.innerHTML = "Сообщения";
    }
  });
}, 100);
