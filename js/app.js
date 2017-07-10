(function() {
    $(document).ready(function() {

        $("#owl-demo").owlCarousel({

            autoPlay: 7000,
            navigation: false, // Show next and prev buttons
            slideSpeed: 300,
            paginationSpeed: 400,
            singleItem: true

        });
        
        new navMenu();

        scrollLink();

        $('[data-tabs-component]').each(function() {
            new collapsibleItems($(this));
        })
    });

    function scrollLink() {
        $(document).on('click', '.scroll-link', function(event) {
            event.preventDefault();
            $('#nav-primary').removeClass('is-visible');
            var headerHeight = $('.wega-sticky-header').height();
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top - headerHeight / 2
            }, 1500);
        });
    }

    function collapsibleItems(tabsComponent) {
        var component = this,
            collapsibleTabs = tabsComponent.find('.collapsible-tabs'),
            collapsibleContent = tabsComponent.find('.collapsible-content'),
            collapsibleContentClass = collapsibleContent.attr('class'),
            collapsibleTabsContainer = tabsComponent.find('[data-tabs-container]'),
            headerHeight = $('.wega-sticky-header').height();

        component.init = function() {
            component.showTabContent();
            component.closeTabContent();
        }

        component.showTabContent = function() {
            collapsibleTabs.on('click', '.tab', component.selectTab);
        }

        component.selectTab = function(e) {
            var tab = $(this),
                tabStyle = tab.attr('data-style'),
                tabIndex = collapsibleTabs.find('.tab').index(tab);
            
            component.scrollToSection();
            component.switchTab(tabIndex, tabStyle);
        }

        component.scrollToSection = function() {
            collapsibleContent.fadeIn();
            $("html, body").animate({
                scrollTop: collapsibleContent.offset().top - headerHeight / 2
            });
        }

        component.switchTab = function(tabIndex, tabStyle) {
            var pane = collapsibleContent.find('.pane').hide();
            collapsibleContent.attr('class', collapsibleContentClass + ' ' + tabStyle);
            pane.eq(tabIndex).fadeIn(800);
        }

        component.closeTabContent = function() {
            var closeBtn = collapsibleContent.find('.close[data-target]');

            closeBtn.on('click', function() {
                $("html, body").animate({
                    scrollTop: collapsibleTabsContainer.offset().top - headerHeight / 2
                });
                collapsibleContent.fadeOut();
            })
        }

        component.init();
    };

    function navMenu() {
        var component = this,
            modalNav = $('#nav-primary');

        component.init = function () {
            component.showMenu();
            component.hideMenu();
        }

        component.showMenu = function () {
            var hamburger = $('#ham_button_nav');
            hamburger.on('click', function(e) {
                jQuery('body, html').css({'overflow': 'hidden'});
                modalNav.addClass('is-visible');
                return false;
            });
        };

        component.hideMenu = function () {
            var modalNavClose = $('#close-button-nav');
            modalNavClose.on('click', function(e) {
                modalNav.removeClass('is-visible');
                jQuery('body, html').removeAttr('style');
            });
        }

        component.init();
    }
})()