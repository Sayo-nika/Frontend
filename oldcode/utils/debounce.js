/**
 * Delays a given function so that it doesn't fire until `wait` ms with no other executions.
 *
 * @param {Function} func Function to debounce.
 * @param {Number} wait Time in milliseconds to debounce the function by..
 * @param {Boolean} [immediate] Whether to trigger the function on the leading edge, as opposed to the trailing edge.
 * @returns {Function} Debounced function.
 */
export default function debounce(func, wait, immediate) {
  let timeout;

  return function(...args) {
    const callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(() => {
      timeout = null;

      if (!immediate) func.apply(this, args);
    }, wait);

    if (callNow) func.apply(this, args);
  };
};
