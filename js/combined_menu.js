/**
 * @file
 * Resets the combined menu's mobile toggle to closed whenever the toggle
 * button is not displayed (that is, at wide screen widths).
 *
 * Without this, a toggle left open on a narrow screen stays checked when
 * the screen is widened (the panel is hidden by CSS but the checkbox is
 * still checked), so narrowing again shows the panel already open. A
 * checkbox's checked state is not changed by CSS or a resize; only user
 * interaction or script changes it, so this is JS.
 *
 * This file deliberately contains no breakpoint value. It asks the
 * browser whether the toggle button is currently displayed, which follows
 * whatever breakpoint the CSS uses (core's menu-toggle.theme.css hides
 * the button at wide widths). A theme that overrides combined_menu.css
 * with a different breakpoint therefore needs no change here.
 */
(function ($) {
  "use strict";

  Backdrop.behaviors.combinedMenuToggleReset = {
    attach: function (context) {
      var $blocks = $(context).find('.combined-menu').once('combined-menu-toggle-reset');
      if ($blocks.length === 0) {
        return;
      }

      // Each block has its own checkbox and button, as direct children of
      // .combined-menu (see combined_menu_block_view()).
      var resetIfHidden = function () {
        $blocks.each(function () {
          var $block = $(this);
          var checkbox = $block.children('.menu-toggle-state')[0];
          var button = $block.children('.menu-toggle-button')[0];
          if (!checkbox || !button) {
            return;
          }
          if (checkbox.checked && window.getComputedStyle(button).display === 'none') {
            checkbox.checked = false;
          }
        });
      };

      $(window).on('resize', Backdrop.debounce(resetIfHidden, 100));
      resetIfHidden();
    }
  };

})(jQuery);
