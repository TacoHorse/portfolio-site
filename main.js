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
        quizApplication: `<section class="project-item">
        <h3>Solar System Quiz Application</h3>
        <figure class="project-figure">
            <img class="project-pics" src="images/quizpic.png" alt="project image">
            <figcaption class="project-pics-captions">
                <p>This was developed for the Bloc/Thinkful Web
                        Developer
                        course. Requirements were to create a simple
                        one-directional quiz to practice the core principles of DOM Traversal and Manipulation
                        via
                        jQuery.
                        Responsive mobile-first design with fully validated code. A full brief on all
                        requirements
                        is
                        available in the GitHub repo.</p>
                        <p><em>Technologies Used: </em>HTML 5, CSS 3, JavaScript, jQuery</p>
                        <p><em>Live App: </em><a
                                href="https://seancowan-dev.github.io/Solar-System-Quiz-App/app-index/index.html" target="_blank">Available
                                here</a>
                        </p>
                        <p><em>GitHub Repo: </em><a
                                href="https://github.com/seancowan-dev/Solar-System-Quiz-App" target="_blank">Available
                                here</a>
                        </p>
            </figcaption>
        </figure>
    </section>`
    //     placeHolder: `<section class="project-item">
    //     <h3>Placeholder Project</h3>
    //     <figure class="project-figure">
    //         <img class="project-pics" src="images/indev.png" alt="project image">
    //         <figcaption class="project-pics-captions">
    //             <p>Default snippet</p>
    //                     <p><em>Technologies Used: </em>None required.</p>
    //                     <p><em>Live App: </em>N/A
    //                     </p>
    //                     <p><em>GitHub Repo: </em>N/A
    //                     </p>
    //         </figcaption>
    //     </figure>
    // </section>`
    };
    let projectNames = ['quizApplication'];

    for (let i = 0; i < projectNames.length; i++) {
        $('.project-item-container').append(projectData[projectNames[i]]);
    }

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