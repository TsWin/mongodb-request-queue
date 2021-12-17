const QueueBase = require('./QueueBase');
const { Error, TypeError } = require('../errors');

class Job extends QueueBase {
    /**
     * Creates a new job
     * @param {QueueBase} queue 
     * @param {Object} jobData 
     */
    constructor(queue, jobData) {
        super(queue);
        this.status = "PENDING"; // PENDING (1) | VERIFICATION (2) | APPROVED (3) | IN PROGRESS (4) | COMPLETED (5) | ISSUE (6) | CANCELED (7) | TIMEDOUT (9)
        this.statusInt = 1;
        /**
		 * The job priority
		 * @type {Number}
         * @default priority=1
		 */
        this.priority = jobData.priority || 1;
        this.createdOn = Date.now();
        this.startTime = null;
        this.endTime = null;
        this.statusUpdateTime = { "PENDING": Date.now() };
        /**
		 * The job request
		 * @type {Object}
		 */
        this.request = jobData.request;

        this._validateOptions();
    }

    	/**
	 * Validates the job params.
	 * @param {Job} Job to validate
	 * @private
	 */
	_validateOptions() {
		if (typeof this.priority !== "number") {
			throw new TypeError('PRIORITY_INVALID_TYPE', 'priority', 'a number');
		}
		if (typeof this.request !== "object") {
			throw new TypeError('REQUEST_INVALID_TYPE', 'request', 'a object');
		}
	}
}
module.exports = Job;