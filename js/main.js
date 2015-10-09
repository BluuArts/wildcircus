$('.france a').click(function() {
    $('.media-map').hide();
    $('#'+$(this).attr('title')).show(400);
})