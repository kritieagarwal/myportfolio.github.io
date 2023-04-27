var menuTags = document.querySelectorAll('.nav-menu a');
var interval;

for (var i = 0; i < menuTags.length; i++) {
    menuTags[i].addEventListener('click', function (event) {
        event.preventDefault();

        var sectionId = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(sectionId);
        interval = setInterval(function () {
            scrollVertically(targetSection);
        }, 20);
    });
}

function scrollVertically(targetSection) {
    var targetSectionCoordinates = targetSection.getBoundingClientRect();
    if (targetSectionCoordinates.top <= 0) {
        clearInterval(interval);
        return;
    }
    window.scrollBy(0, 50);
}
