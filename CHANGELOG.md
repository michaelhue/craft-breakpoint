# Changelog

## 2.2.0 - 2020-08-08

### Added

-   Added support for Craft `3.5`.

## 2.1.0 - 2020-08-08

### Fixed

-   Fixed an error when trying to load the plugin settings page. ([#3](https://github.com/michaelhue/craft-breakpoint/issues/3))
-   Fixed compatibility with Craft `3.4.28` and newer.

### Changed

-   Updated style of the "Toggle Viewport Editor" button to match the Control Panel.

## 2.0.0 - 2019-07-11

### Added

-   Added support for Craft `3.2`.

### Changed

-   The "Toggle Viewport Editor" button now has a blue outline when active.

## 1.2.0 - 2019-02-19

### Fixed

-   Added support for Craft `3.1`.

## 1.1.2 - 2018-10-09

### Added

-   Added a detailed [User Manual](https://github.com/michaelhue/craft-breakpoint/tree/master/docs).

## 1.1.1 - 2018-10-06

### Fixed

-   Fixed changelog for release.

## 1.1.0 - 2018-10-06

### Added

-   Added drag handles in responsive mode for resizing the viewport on-the-fly using your mouse.
-   Double-click on drag handles to expand the viewport to full width and/or height.
-   Step through preset and zoom level options using the `←` and `→` arrow keys when either field is in focus.
-   Added missing link to plugin documentation.

### Changed

-   Custom viewport dimensions are no longer persistet and do reset when you open another Live Preview window.
-   The viewport editor will stay enabled during your session until manually disabled.

### Removed

-   The viewport editor will no longer work in `IE 11` due to missing `Promise` support. This may change in the future if Craft decides to supply a polyfill for older browsers, [see issue](https://github.com/craftcms/cms/issues/3353).

## 1.0.0 - 2018-10-01

### Added

-   Initial release.
