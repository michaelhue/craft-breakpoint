/**
 * Create a storage plugin for saving state.
 * @param {Array} options.paths
 * @param {String} options.key
 * @param {Object} options.storage
 * @return {Function}
 */
export default function createStoragePlugin({
  paths = [],
  key = "vuex",
  storage = window.sessionStorage
} = {}) {
  /**
   * Retrieve stored data.
   * @return {Object}
   */
  const retrieve = () => {
    try {
      const data = JSON.parse(storage[key] || "{}");
      return reducer(data);
    } catch (err) {
      // ignore errors
    }
    return {};
  };

  /**
   * Reduce full state to configured paths.
   * @param {Object} state
   * @return {Object}
   */
  const reducer = state =>
    paths.reduce(
      (substate, path) =>
        state[path]
          ? Object.assign(substate, { [path]: state[path] })
          : substate,
      {}
    );

  /**
   * Storage plugin.
   * @param {Vuex.Store} store
   */
  return store => {
    store.replaceState({
      ...store.state,
      ...retrieve()
    });

    store.subscribe((mutation, state) => {
      storage[key] = JSON.stringify(reducer(state));
    });
  };
}
