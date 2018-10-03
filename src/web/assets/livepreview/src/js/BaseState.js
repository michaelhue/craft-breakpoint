import Garnish from "garnish";

/**
 * Base state class, for preserving some sanity working with jQuery.
 */
const BaseState = Garnish.Base.extend({
  store: window.sessionStorage,
  storeKey: "state",
  storeProps: [],

  _state: {},

  /**
   * Initialize state.
   * @param {Object} data Optional initial state data.
   */
  init(data = {}) {
    this._state = this.copy(data);
  },

  /**
   * Mutate the state.
   * @param {Object} data Object with new values.
   */
  mutate(data) {
    if (this.contains(data)) return;
    this._state = this.copy(data);
    this.scheduleUpdate();
  },

  /**
   * Get a copy of the state.
   * @param {Object} data Optional object that will be added.
   * @return {Object} A copy of the state.
   */
  copy(data = {}) {
    return Object.assign({}, this._state, data);
  },

  /**
   * Check if object is equal to current (partial) state.
   * @param {Object} data
   * @return {Boolean}
   */
  contains(data) {
    for (let p in data) {
      if (data[p] !== this._state[p]) return false;
    }
    return true;
  },

  /**
   * Schedule an update for next animation frame.
   */
  scheduleUpdate() {
    if (this._async) return;

    this._async = window.requestAnimationFrame(() => {
      delete this._async;
      this.forceUpdate();
    });
  },

  /**
   * Trigger an update event.
   */
  forceUpdate() {
    if (this._asnyc) {
      window.cancelAnimationFrame(this._async);
      delete this._async;
    }

    this.trigger("update", this._state);
  },

  /**
   * Load data from store.
   */
  load() {
    try {
      const data = JSON.parse(this.store[this.storeKey]);
      this.mutate(data);
    } catch (err) {}
  },

  /**
   * Save state to store.
   */
  save() {
    const data = {};
    const snapshot = this.copy(this._state);
    this.storeProps.forEach(prop => (data[prop] = snapshot[prop]));
    this.store[this.storeKey] = JSON.stringify(data);
  }
});

export default BaseState;
