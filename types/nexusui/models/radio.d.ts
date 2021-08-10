export default class Radio {
    constructor(length?: number, ...onVals: any[]);
    length: number;
    onVals: any[];
    array: any;
    select(value: any): any;
    flip(...values: any[]): any;
    on(...values: any[]): any;
    off(...values: any[]): any;
}
