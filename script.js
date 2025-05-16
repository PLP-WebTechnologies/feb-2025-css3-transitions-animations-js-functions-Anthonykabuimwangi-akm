function savePreference(preference) {
    localStorage.setItem('userPreference', preference);
}

function getPreference() {
    return localStorage.getItem('userPreference');
}

const button = document.getElementById('animateButton');
button.addEventListener('click', function() {
    button.classList.add('bounce');
    savePreference('buttonClicked');
    console.log(getPreference());

    setTimeout(() => {
        button.classList.remove('bounce');
    }, 1000);
});