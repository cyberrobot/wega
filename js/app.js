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

        $('[data-tabs-component]').each(function() {
            new collapsibleItems($(this));
        })
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
            collapsibleTabs.on('click', '.tab', component.selectTab);
        }

        component.selectTab = function(e) {
            var tab = $(this),
                tabName = tab.attr('data-name'),
                tabIndex = collapsibleTabs.find('.tab').index(tab);
            
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
                modalNav.addClass('is-visible');
                return false;
            });
        };

        component.hideMenu = function () {
            var modalNavClose = $('#close-button-nav');
            modalNavClose.on('click', function(e) {
                modalNav.removeClass('is-visible');
            });
        }

        component.init();
    }
})()