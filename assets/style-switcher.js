function switchDarkLightStyles () {
    var cssIdLight = 'main-light';
    var cssIdDark = 'main-dark';
    if (document.getElementById(cssIdLight).hasAttribute('disabled')) {
        // enable light style
        document.getElementById(cssIdLight).removeAttribute('disabled');
        document.getElementById(cssIdDark).setAttribute('disabled');
    } else {
        // enable dark style
        document.getElementById(cssIdDark).removeAttribute('disabled');
        document.getElementById(cssIdLight).setAttribute('disabled');
    }
}
