// ==UserScript==
// @name Expand all media button
// @namespace Violentmonkey Scripts
// @match *://ylilauta.org/*/*
// @grant none
// ==/UserScript==

function expandAllMedia() {
  for (let file of document.querySelectorAll('.post-file .file-content:not([data-e="playMedia"])')) {
    file.click();
  }
}

const newButton = document.createElement('button');
newButton.classList.add('linkbutton');
newButton.innerText = 'Expand all media';
newButton.onclick = () => expandAllMedia();

const buttonParent = document.querySelector('.navigationbar.top > .replybutton');
buttonParent.prepend(newButton);
