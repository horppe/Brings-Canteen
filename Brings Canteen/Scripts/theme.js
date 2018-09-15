var button = document.querySelector("#themeBtn")
var themeSwitch = false;
button.addEventListener('click', function (event) {
    
    if (themeSwitch) {
        themeSwitch = false;

        applyTheme(themeSwitch);
    } else {
        themeSwitch = true;

        applyTheme(themeSwitch);
    }
});

function applyTheme(isFirstTheme) {
    if (isFirstTheme) {
        document.documentElement.style.setProperty('---jumbotron-bg-start', 'rgba(187, 60, 252, 1)');
        document.documentElement.style.setProperty('---jumbotron-bg-end', 'rgba(187, 108, 252, .5)'); // originally Black
        document.documentElement.style.setProperty('---nav-bg-color', 'rgba(187, 60, 252, 1)');
        document.documentElement.style.setProperty('---background-color', 'rgba(187, 60, 252, 1)');
        document.documentElement.style.setProperty('---bg-color-list-odd', 'rgba(187, 60, 252, .2)');
        document.documentElement.style.setProperty('---bg-color-list-even', 'rgba(187, 60, 252, .7)');
        document.documentElement.style.setProperty('---card-bg-hover-color', 'rgba(187, 60, 252, .6)');

    }
    else {
        document.documentElement.style.setProperty('---jumbotron-bg-start', 'rgba(217, 83, 79, 1)');
        document.documentElement.style.setProperty('---jumbotron-bg-end', 'rgba(217, 83, 79, .5)'); // originally Black
        document.documentElement.style.setProperty('---nav-bg-color', 'rgba(217, 83, 79, 1)');
        document.documentElement.style.setProperty('---background-color', 'rgba(217, 83, 79, 1)');
        document.documentElement.style.setProperty('---bg-color-list-odd', 'rgba(217, 83, 79, .2)');
        document.documentElement.style.setProperty('---bg-color-list-even', 'rgba(217, 83, 79, .7');
        document.documentElement.style.setProperty('---card-bg-hover-color', 'rgba(217, 83, 79, .6)');

    }
}

