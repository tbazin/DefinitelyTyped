export default class Counter {
    constructor(min?: number, max?: number, mode?: string, value?: boolean);
    min: number;
    max: number;
    value: boolean;
    set mode(arg: any);
    get mode(): any;
    drunkWalk: Drunk;
    next: any;
    _mode: any;
    first(): any;
    startValues:
        | {
              up: number;
              down: number;
              drunk: number;
              random: any;
          }
        | undefined;
    up(): boolean;
    down(): boolean;
    random(): boolean;
    drunk(): boolean;
}
import Drunk from './drunk';
