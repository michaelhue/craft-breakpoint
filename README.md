![Icon]

# Breakpoint for Craft CMS 3

**Test your responsive layouts on various screen sizes in Live Preview.**

![Preview]

## Table of contents

-   [Features](#features)
-   [Installation](#installation)
-   [Requirements](#requirements)
-   [Usage](#usage)
-   [Licensing](#licensing)
-   [Limitations](#limitations)
-   [Support](#support)

## Features

-   Extends Craft's Live Preview while preserving its original function.
-   Can be enabled or disabled at any time with the click of a button.
-   Customize your own screen presets or choose from a list of popular devices.
-   Automatic zoom keeps the whole preview visible even when testing large screen sizes.
-   Detailed [User Manual] with screenshots.

## Installation

Install this plugin from the Plugin Store or with Composer.

### Plugin Store

Go to the Plugin Store in your projects Control Panel and search for "Breakpoint". Then click on the "Install" button in its modal window.

### Composer

Open your terminal and run the following command inside your project directory:

    $ composer require michaelhue/craft-breakpoint

Open the Control Panel and navigate to **Settings → Plugins** and install the plugin or use the terminal:

    $ php craft install/plugin breakpoint

## Requirements

-   [Craft CMS] `3.0.0` or later.
-   A modern browser [supported by Craft][browser requirements].

## Usage

See [User Manual].

## Licensing

The license fee for this plugin is $29 (license + one year of updates) via the Craft Plugin Store, then $9 per year for updates.

## Limitations

-   While the plugin functionality is similar to most browsers device preview, it does not emulate touch-events or user-agents.
-   May not work with other plugins that extend or change the Live Preview.

## Support

-   [User Manual] – Learn how to use the plugin.
-   [Issues] – Submit bug reports, feature requests and general questions.
-   [Changelog] – View recent changes and bug fixes.

[craft cms]: https://github.com/craftcms/cms/
[browser requirements]: https://docs.craftcms.com/v3/requirements.html#cp-browser-requirements
[user manual]: https://github.com/michaelhue/craft-breakpoint/tree/master/docs
[issues]: https://github.com/michaelhue/craft-breakpoint/issues
[changelog]: https://github.com/michaelhue/craft-breakpoint/blob/master/CHANGELOG.md
[icon]: https://raw.githubusercontent.com/michaelhue/craft-breakpoint/master/src/icon.svg?sanitize=true
[preview]: https://raw.githubusercontent.com/michaelhue/craft-breakpoint/master/docs/resources/preview.png
