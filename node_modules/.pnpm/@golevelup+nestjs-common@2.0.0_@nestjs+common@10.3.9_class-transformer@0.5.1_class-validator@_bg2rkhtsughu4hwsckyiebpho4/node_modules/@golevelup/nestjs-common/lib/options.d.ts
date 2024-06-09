import { Type } from '@nestjs/common';
import { ModuleMetadata, Provider } from '@nestjs/common/interfaces';
export interface OptionsFactory<T> {
    createOptions(): Promise<T> | T;
}
export interface AsyncOptionsFactoryProvider<T> extends Pick<ModuleMetadata, 'imports' | 'exports'> {
    useExisting?: {
        value: OptionsFactory<T>;
        provide?: string | symbol | Type<any>;
    };
    useClass?: Type<OptionsFactory<T>>;
    useFactory?: (...args: any[]) => Promise<T> | T;
    inject?: any[];
}
export declare function createAsyncOptionsProvider<T>(provide: string | symbol | Type<any>, options: AsyncOptionsFactoryProvider<T>): Provider;
//# sourceMappingURL=options.d.ts.map