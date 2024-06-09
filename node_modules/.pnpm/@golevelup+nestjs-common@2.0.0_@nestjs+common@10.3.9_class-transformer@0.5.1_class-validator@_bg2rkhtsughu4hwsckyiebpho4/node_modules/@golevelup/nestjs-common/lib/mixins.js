"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeInjectableMixin = void 0;
const common_1 = require("@nestjs/common");
const nanoid_1 = require("nanoid");
const makeInjectableMixin = (name) => (mixinClass) => {
    Object.defineProperty(mixinClass, 'name', {
        value: `${name}-${(0, nanoid_1.nanoid)()}`,
    });
    (0, common_1.Injectable)()(mixinClass);
    return mixinClass;
};
exports.makeInjectableMixin = makeInjectableMixin;
//# sourceMappingURL=mixins.js.map