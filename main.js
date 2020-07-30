'use strict'

// Main function call on page load
function initSite() {

    // Generate project content
    handleProjects();

    // Adjust content box elements to fit to grid, on load and resize of screen
    adjustContentPosition();
    refreshWindow();
}

// Stores data for completed projects to insert into the DOM
// Intend to replace with database driven source once that module is completed
function handleProjects() {
    let projectData = {
    apiCapstone: `<section class="project-item first">
    <h3>Findthatmovie</h3>
    <figure class="project-figure">
        <img class="project-pics" src="images/moviepic.png" alt="project image">
        <figcaption class="project-pics-captions">
            <p>This application was developed to demonstrate my knowledge of RESTful APIs.  Its purpose is for locating movie reviews and trailers.</p>
                    <p><em>Technologies Used: </em>HTML 5, CSS 3, JavaScript, jQuery</p>
                    <p><em>Live App:</em> <a
                    href="https://seancowan-dev.github.io/findthatmovie/" target="_blank">Available
                    here</a>
                    </p>
                    <p><em>GitHub Repo:</em> <a
                    href="https://github.com/seancowan-dev" target="_blank">Available
                    here</a>
                    </p>
        </figcaption>
    </figure>
</section>`,
        fullstackCapstone1: `<section class="project-item">
        <h3>Findthatmovie React</h3>
        <figure class="project-figure">
            <img class="project-pics" src="images/moviereact.png" alt="project image">
            <figcaption class="project-pics-captions">
                <p>This is a complete rebuild of the Findthatmovie website from my previous project. This application goes fullstack implementing the site on Node/React based architecture.</p>
                        <p><em>Technologies Used: </em>HTML 5, CSS 3, JavaScript, React, Node, Express, PostgreSQL</p>
                        <p><em>Live App:</em> <a
                        href="https://findthatmovie-client.now.sh/" target="_blank">Available
                        here</a>
                        </p>
                        <p><em>GitHub Repo (Client):</em> <a
                        href="https://github.com/seancowan-dev/findthatmovie-client" target="_blank">Available
                        here</a>&nbsp;&nbsp;
                        <p><em>GitHub Repo (API):</em> <a
                        href="https://github.com/seancowan-dev/findthatmovie-API" target="_blank">Available
                        here</a>
                        </p>
            </figcaption>
        </figure>
    </section>`,
    fullstackCapstone2: `<section class="project-item">
    <h3>fSocket</h3>
    <figure class="project-figure">
        <img class="project-pics" src="images/fsocket.png" alt="project image">
        <figcaption class="project-pics-captions">
            <p>This is a websocket based chat room application which allows users to watch Youtube videos together using the most barebones implementation possible.  Simply paste a URL to a YouTube video into the chat, and select it from the playlist to play the video for all users.</p>
                    <p><em>Technologies Used: </em>HTML 5, CSS 3, JavaScript, React, Node, Express, PostgreSQL and Socket.io</p>
                    <p><em>Live App:</em> <a
                    href="https://fsocket-client-git-project-complete.seancowan-dev.now.sh/" target="_blank">Available
                    here</a>
                    </p>
                    <p><em>GitHub Repo (Client):</em> <a
                    href="https://github.com/seancowan-dev/fsocket-client" target="_blank">Available
                    here</a>&nbsp;&nbsp;
                    <p><em>GitHub Repo (API):</em> <a
                    href="https://github.com/seancowan-dev/fsocket-API" target="_blank">Available
                    here</a>
                    </p>
        </figcaption>
    </figure>
</section>`};

    let projectNames = ['apiCapstone', 'fullstackCapstone1', 'fullstackCapstone2'];

    for (let i = 0; i < projectNames.length; i++) {
        $('.project-item-container').append(projectData[projectNames[i]]);
    }

    $('.project-item-container').append(`<div class="project-item-spacer"> </div>`);

}

function refreshWindow() {
    let oldWidth = $(window).width();
    $(window).on('resize', e => {
        if ($(window).width() != oldWidth) {
        window.location.href = window.location.href
        oldWidth = $(this).width();
        }
    });
}

function adjustContentPosition() {
    let elements = ["page-heading"];
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