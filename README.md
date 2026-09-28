# Combined Menu

**IMPORTANT: This module is not ready for use.**

**Just a sandbox project for now.**

Provides one block containing a search box, an account menu, and a primary menu,
for placement in a layout header region.

When using combined_menu module disable account and primary menus in the layout
"Header block" and any other "Primary navigation" blocks in the layout.

The module uses Backdrop menus as they are. The combined menu block renders the
same content twice, once for wide screens and once for narrow screens, with CSS
showing the one that fits.

## Layout

Wide screens (48em and up):

- Search and account menu share one row, floated right, using no more than about
  a third of the width. Search is on the left, account links inline to its right.
- The primary menu is a full-width horizontal row below.
- Submenus appear as dropdowns on hover or keyboard focus when the primary menu
  uses the Tree style.

Narrow screens (below 48em):

- One hamburger toggle opens a stacked panel: search, account row, primary menu.
- A toggle left open is reset to closed when the screen is widened, so it does
  not reappear open when the screen is narrowed again.

## Configuration

Configure the block in the layout editor.

- Primary and account menus each use Backdrop's core menu-block settings (menu,
  style, starting level, depth, and so on).
- Search has separate "Show on desktop" and "Show on mobile" checkboxes.
- If nothing would appear on mobile, the toggle is not displayed.

## Styling and overrides

The starter stylesheet is css/combined_menu.css. It uses flat class selectors,
no IDs, and no !important, so a theme or CSS Injector rule can override any of it.

To replace it completely, copy the file into your theme with the same filename
(css/combined_menu.css) and add this line to the theme's .info file:

  stylesheets[all][] = css/combined_menu.css

Backdrop then loads the theme's copy instead of the module's. After that, the
module's own CSS updates no longer reach your site, so merge them by hand.

Targetable classes:

  .combined-menu           outer wrapper (also .navbar)
  .combined-menu--desktop  wide-screen structure
  .combined-menu--mobile   narrow-screen panel behind the toggle
  .combined-menu__top      wide-screen group holding search and account
  .combined-menu__search   search form (once per context where it is shown)
  .combined-menu__account  account menu (also .nav and .header-menu)
  .combined-menu__primary  primary menu (also .nav)

The hamburger is core's unmodified .menu-toggle-button. Reposition it by
targeting that class. The module does not wrap it, because core's show/hide CSS
needs the checkbox and .combined-menu--mobile to be direct siblings.

## Changing the breakpoint

The wide/narrow breakpoint is 48em, matching Backdrop core's own menu toggle.
It appears in css/combined_menu.css in two places, and both must be changed to
the same value:

1. The `@media (max-width: 47.999em)` query.
2. The `@media (min-width: 48em)` query.

Core's menu-toggle.theme.css hides the toggle button at 48em and up, and that
value cannot be edited from this module. If the breakpoint is set below 48em,
the toggle button shows between the new value and 48em, and a rule is needed to
hide it there. If it is set above 48em, core does not cover the gap, so the
toggle and panel need explicit rules in that range. A stray hamburger appearing
on the left near the breakpoint usually means these values are out of step.

The JavaScript file js/combined_menu.js resets the toggle if it is currently
displayed so it follows the CSS. A theme that overrides combined_menu.css with
its own copy changes only the two queries in that copy and never needs to modify
the JS because it does not contain the breakpoint.

## Theme notes

Some themes float their branding and style menus only for one specific block.
For example, Corporate KISS scopes its primary menu styling to the core Main
Menu block, so a theme-side copy or a CSS Injector rule is needed to give the
combined primary menu that look. Positioning the block beside the branding uses
fixed offsets, which must be re-tuned if the logo, site name, or slogan change.
