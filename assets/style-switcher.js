function switchDarkLightStyles () {
    if (document.getElementById('main-light').hasAttribute('disabled')) {
        // enable light style
        document.getElementById('main-light').removeAttribute('disabled');
        document.getElementById('main-dark').setAttribute('disabled', 'disabled');
        sessionStorage.setItem('style', 'main-light');
    } else {
        // enable dark style
        document.getElementById('main-dark').removeAttribute('disabled');
        document.getElementById('main-light').setAttribute('disabled', 'disabled');
        sessionStorage.setItem('style', 'main-dark');
    }
}
function setStyleByUsersPreference () {
    let userPref = sessionStorage.getItem('style');
    if (userPref === 'main-light') {
        document.getElementById('main-light').removeAttribute('disabled');
        document.getElementById('main-dark').setAttribute('disabled', 'disabled');
    }
    if (userPref === 'main-dark') {
        document.getElementById('main-dark').removeAttribute('disabled');
        document.getElementById('main-light').setAttribute('disabled', 'disabled');
    }
}
setStyleByUsersPreference();
