var colors = {
    'default': '#474747',
    'blue': '#3a5a77',
    'green': '#354F52',
    'greyscale': '#373737',
    'light': '#676767',
    'morning': '#7A9CC6',
    'pastel': '#9A8F97',
    'red': '#CC444B'
};
var colorList = '';
for (var key in colors) {
    colorList += '<li><a title="' + key + '" style="display: block; width: 35px; height: 35px; background-color: ' + colors[key] + ';"></a></li>';
}
var colorSchemeHtml = jQuery('<div style="position: fixed; left: 16px; top: 16px; background-color: #fff; ">' + '<ul id="color-scheme" style="margin-bottom: 0">' + colorList + '</ul>' + '</div>');
// Color scheme Switcher
colorSchemeHtml.on("click", "a", function () {
    var selectedColor = jQuery(this).attr('title').toLowerCase();
    var linkHref = '../../assets/custom/2.2.0/css/colors/' + selectedColor + '.css?v=' + Math.floor(Date.now() / 1000);
    var cssId = 'color-styles';
    if (!document.getElementById(cssId)) {
        var head = document.getElementsByTagName('head')[0];
        if (head == undefined) return;
        var link = document.createElement('link');
        link.id = cssId;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = linkHref;
        link.media = 'screen';
        head.appendChild(link);
    } else {
        document.getElementById(cssId).parentNode.insertBefore(document.getElementById(cssId), null);
        document.getElementById(cssId).href = linkHref;
    }
});
jQuery('body').append(colorSchemeHtml);