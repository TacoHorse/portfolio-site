'use strict'

function initSite() {

    adjustContentPosition();
    refreshWindow();
}

function refreshWindow() {
    $(window).on('resize', e => window.location.href = window.location.href);
}

function adjustContentPosition() {
    let elements = ["main-content-row", "secondary-content-row", "page-heading", "quick-contact"];
    console.log(elements);
    for (let i = 0; i < elements.length; i++) {
         let coords = getElementCoords(elements[i]);
         setSize(elements[i], coords.width, coords.height, coords.left);
     }
}

function getElementCoords(elem) {
    const ords = $(`.${elem}`).offset();
    const height = $(`.${elem}`).outerHeight();
    const width = $(`.${elem}`).outerWidth();
    let output = {
        top: `${ords.top}`,
        left: `${ords.left}`,
        height: `${height}`,
        width: `${width}`
    }
    return output;
}

function setSize(elem, width, height, left) {
    const viewPort = $(window).width();
    const newHeight = height - (height % 25);
    let newWidth = width - (width % 25);
    let offset = viewPort % 25;
    if (left > 0) {
        newWidth += offset;
    }
    if (left === 0) {
     newWidth -= offset;
     }
    $(`.${elem}`).outerHeight(newHeight);
    $(`.${elem}`).outerWidth(newWidth);
}

$(initSite);