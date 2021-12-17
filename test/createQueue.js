const { MongoDBQueue, Job } = require('../index');

const queue = new MongoDBQueue();
const job = new Job(queue, { priority: 1, request: {} })