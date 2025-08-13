(function () {
    var span = document.getElementById("poweredBy");
    if (!span) return;

    var text = span.getAttribute("data-text") || 'DotPlus – Web Designing in Patna';
    var link = span.getAttribute("data-link") || 'https://dotplus.in/web-designing-patna';
    var color = span.getAttribute("data-color") || '#ffffff';

    span.innerHTML = ' <a href="' + link + '" target="_blank" rel="noopener" style="color:' + color + ';" title="' + text + '">' + text + '</a>';
})();