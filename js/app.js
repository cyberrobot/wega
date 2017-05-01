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

        collapsibleItems($('[data-tabs-component]'));
    });

    function collapsibleItems(tabsComponent) {
        var component = this,
            collapsibleTabs = tabsComponent.find('.collapsible-tabs'),
            collapsibleContent = tabsComponent.find('.collapsible-content'),
            collapsibleTabsContainer = tabsComponent.find('[data-tabs-container]');

        component.init = function() {
            component.showTabContent();
            component.closeTabContent();
        }

        component.showTabContent = function() {
            collapsibleTabs.on('click', '.tab', selectTab);
        }

        component.selectTab = function(e) {
            var tab = $(this),
                tabName = tab.attr('data-name'),
                tabIndex = tab.index('.tab');
            
            component.scrollToSection();
            component.switchTab(tabIndex, tabName);
        }

        component.scrollToSection = function() {
            collapsibleContent.fadeIn();
            $("html, body").animate({
                scrollTop: collapsibleContent.offset().top
            });
        }

        component.switchTab = function(tabIndex, tabName) {
            var pane = collapsibleContent.find('.pane').hide();
            collapsibleContent.attr('data-tab-style', tabName);
            pane.eq(tabIndex).fadeIn(800);
        }

        component.closeTabContent = function() {
            var closeBtn = collapsibleContent.find('.close[data-target]');

            closeBtn.on('click', function() {
                $("html, body").animate({
                    scrollTop: collapsibleTabsContainer.offset().top
                });
                collapsibleContent.fadeOut();
            })
        }

        component.init();
    }
})()