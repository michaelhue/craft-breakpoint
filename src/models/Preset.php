<?php
/**
 * @copyright Copyright (c) Michael Hüneburg
 * @link https://github.com/michaelhue/craft-breakpoint
 * @license https://craftcms.github.io/license/
 */

namespace michaelhue\breakpoint\models;

use craft\base\Model;

/**
 * Preset defines a model for a single screen size or device preset.
 *
 * @author Michael Hüneburg
 * @since 1.0.0
 */
class Preset extends Model
{
	/**
	 * Preset name.
	 *
	 * @var string
	 */
	public $name;

	/**
	 * Preset width in pixels.
	 *
	 * @var integer
	 */
	public $x = 0;

	/**
	 * Preset height in pixels.
	 *
	 * @var integer
	 */
	public $y = 0;

	/**
	 * Model validation rules.
	 */
	public function rules(): array
	{
		return [
			[['name'], 'trim'],
			[['x', 'y'], 'default', 'value' => 0],
			[['x', 'y'], 'filter', 'filter' => 'intval'],

			[['name', 'x', 'y'], 'required'],
			[['x', 'y'], 'integer', 'min' => 0],
		];
	}

	/**
	 * Create a model instance from an indexed array.
	 */
	public static function createFromArray(array $row): self
	{
		list($name, $x, $y) = array_values($row);

		$model = new static();
		$model->name = trim($name) ?: null;
		$model->x = (int) $x;
		$model->y = (int) $y;

		return $model;
	}
}
