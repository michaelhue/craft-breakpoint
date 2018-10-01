<?php
/**
 * @copyright Copyright (c) Michael Hüneburg
 * @link https://github.com/michaelhue/craft-breakpoint
 * @license https://craftcms.github.io/license/
 */

namespace michaelhue\breakpoint\models;

use craft\base\Model;
use craft\helpers\Json;
use yii\validators\InlineValidator;

/**
 * Settings model for the Breakpoint plugin.
 *
* @author Michael Hüneburg
* @since 1.0.0
 */
class Settings extends Model
{
	/**
	 * A list of screen size presets.
	 *
	 * @var array
	 */
	public $presets = [
		['Galaxy S5', 360, 640],
		['Pixel 2', 411, 731],
		['Pixel 2 XL', 411, 823],
		['iPhone 5/SE', 320, 568],
		['iPhone 6/7/8', 375, 667],
		['iPhone 6/7/8 Plus', 414, 736],
		['iPhone X', 375, 812],
		['iPad', 768, 1024],
		['iPad Pro', 1024, 1366],
	];

	/**
	 * Available zoom levels.
	 *
	 * @var array
	 */
	public $zoomLevels = [0.25, 0.5, 0.75, 1.0, 1.25, 1.5];

	/**
	 * @inheritdoc
	 */
	public function rules(): array
	{
		return [
			['presets', 'each', 'rule' => ['validatePreset']],
			['zoomLevels', 'each', 'rule' => ['number']]
		];
	}

	/**
	 * @inheritdocs
	 */
	public function afterValidate()
	{
		// When updating presets Craft keeps their original array index, which
		// causes problems when converting the settings to json. Prevent this
		// behavior by removing the keys from the array.
		/* @todo find a better way */
		$this->presets = array_values($this->presets ?? []);

		parent::afterValidate();
	}

	/**
	 * Validate a single preset.
	 */
	public function validatePreset(string $attribute, $params, $validator): bool
	{
		$preset = Preset::createFromArray($this->{$attribute});

		if ($preset->validate()) {
			$this->{$attribute} = array_values($preset->toArray());
			return true;
		}

		// $this->addModelErrors($model, $attrPrefix)
		$this->addErrors([
			$attribute => $preset->getErrorSummary(true)
		]);

		return false;
	}

	/**
	 * Device presets list grouped by type.
	 */
	public function getDevicePresets(): array
	{
		return [
			'Phones' => [
				['Galaxy Note 3', 360, 640],
				['Galaxy Note 9', 414, 846],
				['Galaxy S5', 360, 640],
				['Galaxy S9/S9+', 360, 740],
				['iPhone 5/SE', 320, 568],
				['iPhone 6/7/8 Plus', 414, 736],
				['iPhone 6/7/8', 375, 667],
				['iPhone X', 375, 812],
				['Microsoft Lumia 950', 360, 640],
				['Pixel 2', 411, 731],
				['Pixel 2 XL', 411, 823],
			],
			'Tablets' => [
				['iPad', 768, 1024],
				['iPad Mini', 768, 1024],
				['iPad Pro', 1024, 1366],
				['Kindle Fire HDX', 800, 1280],
				['Nexus 7', 600, 960],
				['Nexus 10', 800, 1280],
			],
			'Televisions' => [
				['720p HD', 1280, 720],
				['1080p Full HD', 1900, 1080],
				['4K Ultra HD', 3840, 2160],
			],
		];
	}

	/**
	 * Convert settings to JSON.
	 */
	public function toJson(): string
	{
		return Json::encode([
			'presets' => (array) $this->presets,
			'zoomLevels' => (array) $this->zoomLevels,
		]);
	}
}
