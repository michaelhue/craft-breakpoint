<?php
/**
 * @copyright Copyright (c) Michael Hüneburg
 * @link https://github.com/michaelhue/craft-breakpoint
 * @license https://craftcms.github.io/license/
 */

namespace michaelhue\breakpoint;

use Craft;
use craft\base\Plugin as CraftPlugin;
use craft\events\TemplateEvent;
use craft\web\View;
use yii\base\Event;
use michaelhue\breakpoint\models\Settings;
use michaelhue\breakpoint\web\assets\livepreview\LivePreviewAsset;

/**
 * Breakpoint plugin class.
 *
 * @author Michael Hüneburg
 * @since 1.0.0
 */
class Plugin extends CraftPlugin
{
	/**
	 * @inheritdoc
	 */
	public $hasCpSettings = true;

	/**
	 * A list of editor templates used for asset injection.
	 *
	 * @var array
	 */
	public $cpEditorTemplates = ['entries/_edit'];

	/**
	 * @inheritdoc
	 */
	public function init()
	{
		parent::init();

		if (Craft::$app->getRequest()->getIsCpRequest()) {
			Event::on(
				View::class,
				View::EVENT_BEFORE_RENDER_TEMPLATE,
				[$this, 'onBeforeRenderTemplate']
			);
		}
	}

	/**
	 * @inheritdoc
	 */
	protected function createSettingsModel(): Settings
	{
		return new Settings();
	}

	/**
	 * @inheritdoc
	 */
	protected function settingsHtml(): string
	{
		$settings = $this->getSettings();

		$settings->validate();

		$overrides = Craft::$app->getConfig()->getConfigFromFile($this->handle);

		return Craft::$app->getView()->renderTemplate('breakpoint/_settings', [
			'handle' => $this->getHandle(),
			'settings' => $settings,
			'overrides' => $overrides,
		]);
	}

	/**
	 * Handle template render event.
	 */
	public function onBeforeRenderTemplate(TemplateEvent $event)
	{
		// A list of asset bundles that use Craft's live preview.
		/* @todo allow extending the list */
		$livePreviewBundles = [
			'craft\web\assets\editentry\EditEntryAsset',
			'craft\commerce\web\assets\editproduct\EditProductAsset',
		];

		// Extract class names of loaded asset bundles.
		$loadedBundles = array_keys($event->sender->assetBundles ?? []);

		// Find live preview bundles loaded in currently rendered view.
		$matches = array_intersect($livePreviewBundles, $loadedBundles);

		// Finally attach our assets if we found a live preview bundle.
		if (count($matches) > 0) {
			$event->sender->registerAssetBundle(LivePreviewAsset::class);
		}
	}
}
