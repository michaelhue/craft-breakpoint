import $ from "jquery";
import Craft from "craft";

/**
 * Translation helper.
 * @param {String} msg
 * @return {String}
 */
export const t = msg => Craft.t("breakpoint", msg);

/**
 * Format a floating point number as a percentage.
 * @param {Number} num
 * @return {String}
 */
export const percent = num => Math.round(num * 100) + "%";

/**
 * Create an option for a select input.
 * @param {String} label
 * @param {*} value
 * @return {$}
 */
export const option = (label, value = null) =>
  $("<option>")
    .text(label)
    .attr("value", value);

/**
 * Create a disabled divider option element.
 * @return {$}
 */
export const optionDivider = () => option("───").attr("disabled", true);
