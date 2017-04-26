(function() {
    $(document).ready(function() {

        $("#owl-demo").owlCarousel({

            autoPlay: 7000,
            navigation: false, // Show next and prev buttons
            slideSpeed: 300,
            paginationSpeed: 400,
            singleItem: true

        });
        //button hamburger
        var hamburger = $('#ham_button_nav');
        hamburger.on('click', function(e) {
            e.preventDefault();
            modalNav.fadeIn('slow');
        });
        //close blue nav
        // var modalNavClose = $('#close-button-nav');
        // modalNavClose.on('click', function(e) {
        //     e.preventDefault();
        //     modalNav.fadeOut('fast');
        // });
        $(document).on('click', '.scroll-link', function(event) {
            event.stopPropagation();
            modalNav.fadeOut('fast');
            var headerHeight = $('.wega-sticky-header').height();
            try {
                $('html, body').animate({
                    scrollTop: $($.attr(this, 'href')).offset().top - headerHeight - headerHeight / 3
                }, 1500);

            } catch (err) {

            }
        });
    });
})()