import $ from "jquery";
import Craft from "craft";

/**
 * Convert an array-like object to array.
 * @param {Array|Object} obj
 * @return {Array}
 */
export const toArray = obj => $.map(obj, x => [x]);

/**
 * Store data in session storage.
 * @param {String} key
 * @param {*} data
 */
export const store = (key, data) =>
  (window.sessionStorage[key] = JSON.stringify(data));

/**
 * Retrieve data from session storage.
 * @param {String} key
 * @param {Object} fallback
 * @return {Object}
 */
export const retrieve = (key, fallback = {}) => {
  try {
    return $.extend({}, fallback, JSON.parse(window.sessionStorage[key]));
  } catch (err) {
    return fallback;
  }
};

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
