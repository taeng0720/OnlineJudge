import { Counter, MetricOptions, UpDownCounter, Histogram, ObservableGauge, ObservableCounter, ObservableUpDownCounter } from '@opentelemetry/api';
export type GenericMetric = Counter | UpDownCounter | Histogram | ObservableGauge | ObservableCounter | ObservableUpDownCounter;
export declare enum MetricType {
    'Counter' = "Counter",
    'UpDownCounter' = "UpDownCounter",
    'Histogram' = "Histogram",
    'ObservableGauge' = "ObservableGauge",
    'ObservableCounter' = "ObservableCounter",
    'ObservableUpDownCounter' = "ObservableUpDownCounter"
}
export declare const meterData: Map<string, GenericMetric>;
export declare function getOrCreateHistogram(name: string, options?: MetricOptions): Histogram;
export declare function getOrCreateCounter(name: string, options?: MetricOptions): Counter;
export declare function getOrCreateUpDownCounter(name: string, options?: MetricOptions): UpDownCounter;
export declare function getOrCreateObservableGauge(name: string, options?: MetricOptions): ObservableGauge;
export declare function getOrCreateObservableCounter(name: string, options?: MetricOptions): ObservableCounter;
export declare function getOrCreateObservableUpDownCounter(name: string, options?: MetricOptions): ObservableUpDownCounter;
