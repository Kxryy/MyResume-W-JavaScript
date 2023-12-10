document.addEventListener('DOMContentLoaded', function () {
    const darkModeButton = document.getElementById('darkModeButton');
    const body = document.body;

    darkModeButton.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
    });
});

function openFacebookModal() {
    // Implement logic for opening Facebook modal or any other action
    console.log('Opening Facebook modal');
}

function openInstagramModal() {
    // Implement logic for opening Instagram modal or any other action
    console.log('Opening Instagram modal');
}
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

