Combined Menu
=============

Provides one block containing, in source order:

1. Search (optional).
2. Account menu.
3. Primary menu.

The menus remain independent Backdrop menus. The block combines their rendered
output and provides one responsive menu toggle for the entire navigation.

Both menus default to the Top level only style. The remaining menu settings use
Backdrop's core menu-block configuration.

The combined navigation uses Backdrop's menu-toggle library. One toggle controls
Search, Account, and Primary together. The module does not create separate menu
toggles for the individual menus.

The starter stylesheet is:

  css/combined_menu.css

Themes can copy and customize this file. The module supplies the basic combined
layout while leaving colors, typography, and theme-specific menu styling to the
theme.
