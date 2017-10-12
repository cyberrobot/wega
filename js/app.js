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
        });

        var array = [{
          trigger: $('#services-trigger'),
          tab: $('#services-tab')
        }, {
          trigger: $('#activate-trigger:not(hidden)'),
          tab: $('#activate-tab')
        }, {
          trigger: $('#strong-authentication-trigger'),
          tab: $('#strong-authentication-tab')
        }]

        $.each(array, function(index, item) {
          scrollToSubsection(item.trigger, item.tab);
        });
        
        triggerSupportWidget();
    });

    function scrollLink() {
        $(document).on('click', '.scroll-link', function(event) {
            event.preventDefault();
            var htmlBody = $('body, html');

            hideMenu();
            scrollToTarget();

            function hideMenu() {
                $('#nav-primary').removeClass('is-visible');
                htmlBody.removeAttr('style');
            }
            
            function scrollToTarget() {
                var headerHeight = $('.wega-sticky-header').height();
                htmlBody.animate({
                    scrollTop: $(event.target.hash).offset().top - headerHeight / 2
                }, 1500);
            }
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
          collapsibleTabs.find('.tab').removeClass('active');
          var tab = $(this).addClass('active'),
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
              collapsibleTabs.find('.tab').removeClass('active');
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
                $('body, html').css({'overflow': 'hidden'});
                modalNav.addClass('is-visible');
                return false;
            });
        };

        component.hideMenu = function () {
            var modalNavClose = $('#close-button-nav');
            modalNavClose.on('click', function(e) {
                modalNav.removeClass('is-visible');
                $('body, html').removeAttr('style');
            });
        }

        component.init();
    }

    function scrollToSubsection(trigger, tab) {
        var modalNav = $('#nav-primary');

        trigger.on('click', function (e) {
            tab.trigger('click');
            modalNav.removeClass('is-visible');
            $('body, html').removeAttr('style');
        });
    }

    function triggerSupportWidget() {
      var trigger = $('[data-trigger-support]');
      trigger.on('click', function (e) {
        e.preventDefault();
        groove.widget('open');
      });
    }
})()