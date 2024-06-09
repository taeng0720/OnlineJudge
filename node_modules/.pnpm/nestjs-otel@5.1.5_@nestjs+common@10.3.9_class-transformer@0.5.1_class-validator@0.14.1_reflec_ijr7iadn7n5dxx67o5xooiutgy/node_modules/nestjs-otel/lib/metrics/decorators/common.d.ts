import { MetricOptions } from '@opentelemetry/api';
export declare const OtelInstanceCounter: (options?: MetricOptions) => <T extends new (...args: any[]) => {}>(originalClass: T) => {
    new (...args: any[]): {};
} & T;
export declare const OtelMethodCounter: (options?: MetricOptions) => (target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<(...args: any[]) => any>) => void;
