// Pick the last inputed color
let COLOR = localStorage.getItem('color');
$(document.body).css('background-color', COLOR);

// Setup for color change
let colors = ['#ffffff','#f2f2f2','#eeeeee','#e2e2e2','#dddddd'];
for(i = 0; i < colors.length; i++) {
    var el = `<span id="color" style="background-color: ${colors[i]};"></span>`;
    $('.colors').append(el);
}

// Appear the colors options
$('.button').click(function() {
    $('.colors').css('display', 'grid');
    $('.button').css('background-color', $(document.body).css('background-color'));
    $('i').css({
        'display': 'block',
        'text-decoration': 'underline'
    });
});
function closeColors() {
    $('.colors').css('display', 'none');
    $('.button').css('border-style', 'none');
    $('i').css({
        'display': 'none',
        'text-decoration': 'none'
    });
}

// Change color
$('span').click(function() {
    var newColor = $(this).css('background-color');
    $(document.body).css('background-color', newColor);
    $('.button').css('background-color', $(document.body).css('background-color'));
    localStorage.setItem('color', `${newColor}`);
    favicon(newColor);
});

// Change the favicon
function favicon(c) {
    let pre = document.getElementById('pre-favicon');
    let ctx = pre.getContext('2d');
    pre.width = 64;
    pre.height = 64;
    ctx.fillStyle = c;
    ctx.fillRect(0,0,64,64);

    var faviconBase64 = pre.toDataURL();
    $('link[rel="icon"]').attr('href', faviconBase64);
}