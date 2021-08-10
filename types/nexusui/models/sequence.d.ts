export default class Sequence {
    constructor(sequence?: number[], mode?: string, position?: boolean);
    values: number[];
    _mode: string;
    position: boolean;
    drunkWalk: Drunk;
    startValues: {
        up: number;
        down: number;
        drunk: number;
        random: any;
    };
    next: any;
    set mode(arg: string);
    get mode(): string;
    set value(arg: any);
    get value(): any;
    first(): any;
    up(): any;
    down(): any;
    random(): any;
    drunk(): any;
}
import Drunk from './drunk';
