/** Toggled */
jQuery(function($) {

    $('.technical-link > li > a').click(function() {

        if ($(this).parent().find('.toggle-content').length) {
            $(this).parent().find('a').toggleClass('active')
            $(this).parent().find('.toggle-content').slideToggle(200);
            return false;
        }

    });

    $('.dropdown-list__text_').click(function () {
        $(this).siblings('ul').slideToggle(200);
        $(this).toggleClass('active');
        return false;
    });

});
