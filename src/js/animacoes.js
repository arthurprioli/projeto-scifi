$('.botoes1').hover(function() {
    $('.botoes1').removeClass('bg-white')
    $('.text1').removeClass('text-muted')
    $('.botoes1').addClass('bg-secondary')
    $('.text1').addClass('text-white')
}, function() {
    $('.botoes1').removeClass('bg-secondary')
    $('.text1').removeClass('text-white')
    $('.botoes1').addClass('bg-white')
    $('.text1').addClass('text-muted')
})

$('.botoes2').hover(function() {
    $('.botoes2').removeClass('bg-white')
    $('.text2').removeClass('text-muted')
    $('.botoes2').addClass('bg-secondary')
    $('.text2').addClass('text-white')
}, function() {
    $('.botoes2').removeClass('bg-secondary')
    $('.text2').removeClass('text-white')
    $('.botoes2').addClass('bg-white')
    $('.text2').addClass('text-muted')
})

$('header').hover(function() {
    $('header').css('background-color', 'black')
    $('#bicolor').addClass('text-white')
}, function() {
    $('header').css('background-color', '')
    $('#bicolor').addClass('text-warning')
})
