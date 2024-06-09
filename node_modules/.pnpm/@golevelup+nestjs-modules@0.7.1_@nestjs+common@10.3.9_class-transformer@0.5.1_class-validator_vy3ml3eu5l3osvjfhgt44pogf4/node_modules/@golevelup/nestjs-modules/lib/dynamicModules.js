"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createConfigurableDynamicRootModule = exports.createModuleConfigProvider = void 0;
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
function createModuleConfigProvider(provide, options) {
    var _a, _b;
    if ('useFactory' in options) {
        return [
            {
                provide,
                useFactory: options.useFactory,
                inject: (_a = options.inject) !== null && _a !== void 0 ? _a : [],
            },
        ];
    }
    const optionsProviderGenerator = (inject) => ({
        provide,
        useFactory: async (moduleConfigFactory) => {
            return moduleConfigFactory.createModuleConfig();
        },
        inject: [inject],
    });
    if ('useClass' in options) {
        return [
            optionsProviderGenerator(options.useClass),
            {
                provide: options.useClass,
                useClass: options.useClass,
            },
        ];
    }
    if ('useExisting' in options) {
        return [
            optionsProviderGenerator((_b = options.useExisting.provide) !== null && _b !== void 0 ? _b : options.useExisting.value.constructor.name),
            {
                provide: options.useExisting.provide ||
                    options.useExisting.value.constructor.name,
                useValue: options.useExisting.value,
            },
        ];
    }
    return [];
}
exports.createModuleConfigProvider = createModuleConfigProvider;
function createConfigurableDynamicRootModule(moduleConfigToken, moduleProperties = {
    imports: [],
    exports: [],
    providers: [],
}) {
    class DynamicRootModule {
        static forRootAsync(moduleCtor, asyncModuleConfig) {
            const dynamicModule = {
                module: moduleCtor,
                imports: [
                    ...(asyncModuleConfig.imports || []),
                    ...(moduleProperties.imports || []),
                ],
                exports: [
                    ...(asyncModuleConfig.exports || []),
                    ...(moduleProperties.exports || []),
                ],
                providers: [
                    ...createModuleConfigProvider(moduleConfigToken, asyncModuleConfig),
                    ...(moduleProperties.providers || []),
                ],
            };
            DynamicRootModule.moduleSubject.next(dynamicModule);
            return dynamicModule;
        }
        static forRoot(moduleCtor, moduleConfig) {
            const dynamicModule = {
                module: moduleCtor,
                imports: [...(moduleProperties.imports || [])],
                exports: [...(moduleProperties.exports || [])],
                controllers: [...(moduleProperties.controllers || [])],
                providers: [
                    {
                        provide: moduleConfigToken,
                        useValue: moduleConfig,
                    },
                    ...(moduleProperties.providers || []),
                ],
            };
            DynamicRootModule.moduleSubject.next(dynamicModule);
            return dynamicModule;
        }
        static async externallyConfigured(moduleCtor, wait) {
            const timeout$ = (0, rxjs_1.interval)(wait).pipe((0, operators_1.first)(), (0, operators_1.map)(() => {
                throw new Error(`Expected ${moduleCtor.name} to be configured by at last one Module but it was not configured within ${wait}ms`);
            }));
            return (0, rxjs_1.lastValueFrom)((0, rxjs_1.race)(timeout$, DynamicRootModule.moduleSubject.pipe((0, operators_1.first)())));
        }
    }
    DynamicRootModule.moduleSubject = new rxjs_1.Subject();
    return DynamicRootModule;
}
exports.createConfigurableDynamicRootModule = createConfigurableDynamicRootModule;
//# sourceMappingURL=dynamicModules.js.map