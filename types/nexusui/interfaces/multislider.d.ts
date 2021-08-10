import Interface from '../core/interface';

/**
 * Multislider
 *
 * @description Multislider
 *
 * @demo <span nexus-ui="multislider"></span>
 *
 * @example
 * var multislider = new Nexus.Multislider('#target')
 *
 * @example
 * var multislider = new Nexus.Multislider('#target',{
 *  'size': [200,100],
 *  'numberOfSliders': 5,
 *  'min': 0,
 *  'max': 1,
 *  'step': 0,
 *  'candycane': 3,
 *  'values': [0.9,0.8,0.7,0.6,0.5,0.4,0.3,0.2,0.1],
 *  'smoothing': 0,
 *  'mode': 'bar'  // 'bar' or 'line'
 *})
 *
 * @output
 * change
 * Fires any time the interface's value changes. <br>
 * The event data is an object containing <i>index</i> and <i>value</i> properties
 *
 * @outputexample
 * multislider.on('change',function(v) {
 *   console.log(v);
 * })
 *
 */
export default class Multislider extends Interface {
    _numberOfSliders: any;
    _min: any;
    _max: any;
    _step: any;
    _mode: any;
    values: any[];
    candycane: any;
    sliderWidth: number;
    /**
    Applies a simple low-pass filter to the multislider as it is interacted with. A smoothing of 0 will be no smoothing. A smoothing of 1 will smooth 1 slider on each side of the interaction. A smoothing of 2 will smooth 2 sliders on each side, and so on.
    @type {Number}
    */
    smoothing: number;
    buildInterface(): void;
    line: any;
    fill: any;
    nodes: any[] | undefined;
    bars: any[] | undefined;
    caps: any[] | undefined;
    getBarX(index: any): number;
    getX(index: any): number;
    getY(value: any): number;
    getValueFromY(y: any): any;
    getIndexFromX(x: any): number;
    adjustValueToStep(value: any): any;
    adjustAllValues(): void;
    getNormalizedValues(): void;
    normalizedValues: any[] | undefined;
    colorInterface(): void;
    sizeInterface(): void;
    render(): void;
    click(): void;
    hasMoved: boolean | undefined;
    previousSlider: number | boolean | undefined;
    move(): void;
    selectedSlider: number | undefined;
    scan(): void;
    update(index: any, value: any): void;
    /**
    Get the number of sliders
    @type {Number}
    */
    get numberOfSliders(): number;
    set min(arg: number);
    /**
    Lower limit of the multislider's output range
    @type {number}
    @example multislider.min = 1000;
    */
    get min(): number;
    set max(arg: number);
    /**
    Upper limit of the multislider's output range
    @type {number}
    @example multislider.max = 1000;
    */
    get max(): number;
    set step(arg: number);
    /**
    The increment that the multislider's value changes by.
    @type {number}
    @example multislider.step = 5;
    */
    get step(): number;
    /**
    Set the value of an individual slider
    @param index {number} Slider index
    @param value {number} New slider value
    @example
    // Set the first slider to value 0.5
    multislider.setSlider(0,0.5)
    */
    setSlider(index: number, value: number): void;
    /**
    Set the value of all sliders at once. If the size of the input array does not match the current number of sliders, the value array will repeat until all sliders have been set. I.e. an input array of length 1 will set all sliders to that value.
    @param values {Array} All slider values
    @example
    multislider.setAllSliders([0.2,0.3,0.4,0.5,0.6])
    */
    setAllSliders(values: any[]): void;
}
