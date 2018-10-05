/**
 * Format number as percent string with suffix.
 */
export const percent = x => Math.round(x * 100) + "%";

/**
 * Lower limit.
 */
export const min = low => x => Math.max(x, low);

/**
 * Higher limit.
 */
export const max = high => x => Math.min(x, high);

/**
 * Clamp number between low and high.
 */
export const clamp = low => high => x => max(high)(min(low)(x));
