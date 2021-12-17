const { Error, TypeError } = require('../errors');

class QueueBase {
	constructor(map) {
		/**
		 * The queue map
		 * @type {Map}
		 */
		this.map = map || new Map();

		this._validateOptions();
	}

	/**
	 * Validates the queue params options.
	 * @param {QueueBase} Options to validate
	 * @private
	 */
	_validateOptions() {
		if (typeof this.map !== "map") {
			throw new TypeError('MAP_INVALID_TYPE', 'map', 'a map');
		}
	}
}

module.exports = QueueBase;
