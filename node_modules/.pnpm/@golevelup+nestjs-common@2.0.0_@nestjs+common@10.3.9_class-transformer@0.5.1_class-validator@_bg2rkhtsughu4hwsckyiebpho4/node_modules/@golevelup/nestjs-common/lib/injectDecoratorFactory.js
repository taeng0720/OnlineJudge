"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeInjectableDecorator = void 0;
const common_1 = require("@nestjs/common");
/**
 * Creates a decorator that can be used as a convenience to inject a specific token
 *
 * Instead of using @Inject(SOME_THING_TOKEN) this can be used to create a new named Decorator
 * such as @InjectSomeThing() which will hide the token details from users making APIs easier
 * to consume
 * @param token
 */
const makeInjectableDecorator = (token) => () => (0, common_1.Inject)(token);
exports.makeInjectableDecorator = makeInjectableDecorator;
//# sourceMappingURL=injectDecoratorFactory.js.map