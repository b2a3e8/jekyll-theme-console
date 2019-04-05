function enableStyle (style) {
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = style;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = '/assets/' + style + '.css';
    head.appendChild(link);
}
function disableStyle (style) {
    var element = document.getElementById(style);
    element.parentNode.removeChild(element);
}
function switchDarkLightStyles () {
    var cssIdLight = 'main-light';
    var cssIdDark = 'main-dark';
    if (document.getElementById(cssIdDark)) {
        enableStyle(cssIdLight);
        setTimeout(function(){ disableStyle(cssIdDark) }, 500);
    } else {
        enableStyle(cssIdDark);
        setTimeout(function(){ disableStyle(cssIdLight) }, 500);
    }
}
