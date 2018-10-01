<?php

/**
 * Breakpoint plugin config file.
 */
return [
	/**
	 * Override screen presets.
	 * Each preset is represented by a simple array with three values:
	 *
	 * [(string) $name, (int) $width, (int) $height]
	 *
	 * @var array
	 */
	'presets' => [
		['Small monitor', 1024, 786],
		['Large monitor', 1200, 960],
	],

	/**
	 * Override zoom levels.
	 *
	 * @var array
	 */
	'zoomLevels' => [0.25, 0.5, 0.75, 1.0, 1.25, 1.5],
];
