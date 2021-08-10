export default class Interval {
    constructor(rate: any, func: any, on: any);
    rate: any;
    on: any;
    clock: any;
    pattern: number[];
    index: number;
    event: any;
    _event(e: any): void;
    stop(): void;
    start(): void;
    interval: any;
    ms(newrate: any): void;
}
