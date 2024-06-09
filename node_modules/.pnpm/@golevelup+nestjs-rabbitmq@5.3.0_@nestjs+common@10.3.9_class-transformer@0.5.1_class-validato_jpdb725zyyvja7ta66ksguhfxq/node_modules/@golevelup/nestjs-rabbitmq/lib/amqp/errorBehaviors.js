"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forceDeleteAssertQueueErrorHandler = exports.defaultAssertQueueErrorHandler = exports.getHandlerForLegacyBehavior = exports.defaultNackErrorHandler = exports.requeueErrorHandler = exports.ackErrorHandler = exports.MessageHandlerErrorBehavior = void 0;
var MessageHandlerErrorBehavior;
(function (MessageHandlerErrorBehavior) {
    MessageHandlerErrorBehavior["ACK"] = "ACK";
    MessageHandlerErrorBehavior["NACK"] = "NACK";
    MessageHandlerErrorBehavior["REQUEUE"] = "REQUEUE";
})(MessageHandlerErrorBehavior = exports.MessageHandlerErrorBehavior || (exports.MessageHandlerErrorBehavior = {}));
/**
 * An error handler that will ack the message which caused an error during processing
 */
const ackErrorHandler = (channel, msg) => {
    channel.ack(msg);
};
exports.ackErrorHandler = ackErrorHandler;
/**
 * An error handler that will nack and requeue a message which created an error during processing
 */
const requeueErrorHandler = (channel, msg) => {
    channel.nack(msg, false, true);
};
exports.requeueErrorHandler = requeueErrorHandler;
/**
 * An error handler that will nack a message which created an error during processing
 */
const defaultNackErrorHandler = (channel, msg) => {
    channel.nack(msg, false, false);
};
exports.defaultNackErrorHandler = defaultNackErrorHandler;
const getHandlerForLegacyBehavior = (behavior) => {
    switch (behavior) {
        case MessageHandlerErrorBehavior.ACK:
            return exports.ackErrorHandler;
        case MessageHandlerErrorBehavior.REQUEUE:
            return exports.requeueErrorHandler;
        default:
            return exports.defaultNackErrorHandler;
    }
};
exports.getHandlerForLegacyBehavior = getHandlerForLegacyBehavior;
/**
 * Just rethrows the error
 */
const defaultAssertQueueErrorHandler = (channel, queueName, queueOptions, error) => {
    throw error;
};
exports.defaultAssertQueueErrorHandler = defaultAssertQueueErrorHandler;
/**
 * Tries to delete the queue and to redeclare it with the provided options
 */
const forceDeleteAssertQueueErrorHandler = async (channel, queueName, queueOptions, error) => {
    if (error.code == 406) {
        //406 == preconditions failed
        await channel.deleteQueue(queueName);
        const { queue } = await channel.assertQueue(queueName, queueOptions);
        return queue;
    }
    throw error;
};
exports.forceDeleteAssertQueueErrorHandler = forceDeleteAssertQueueErrorHandler;
//# sourceMappingURL=errorBehaviors.js.map