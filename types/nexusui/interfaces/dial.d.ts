import Interface from '../core/interface';
import * as Interaction from '../util/interaction';

/**
 * Dial
 *
 *
 * @description Dial with radial or linear interaction.
 *
 * @demo <span nexus-ui="dial"></span>
 *
 * @example
 * var dial = new Nexus.Dial('#target')
 *
 * @example
 * var dial = new Nexus.Dial('#target',{
 *   'size': [75,75],
 *   'interaction': 'radial', // "radial", "vertical", or "horizontal"
 *   'mode': 'relative', // "absolute" or "relative"
 *   'min': 0,
 *   'max': 1,
 *   'step': 0,
 *   'value': 0
 * })
 *
 * @output
 * change
 * Fires any time the interface's value changes. <br>
 * The event data is the number value of the interface.
 *
 * @outputexample
 * dial.on('change',function(v) {
 *   console.log(v);
 * })
 *
 * @tutorial
 * Dial
 * ygGMxq
 *
 */
export default class Dial extends Interface {
    interaction: any;
    _value: any;
    position: Interaction.Handle;
    set value(arg: number);
    /**
    Dial's value. When set, it will automatically be adjust to fit min/max/step settings of the interface.
    @type {number}
    @example dial.value = 10;
    */
    get value(): number;
    previousAngle: boolean;
    buildInterface(): void;
    background: any;
    screw: any;
    handle: any;
    handle2: any;
    handleFill: any;
    handle2Fill: any;
    handleLine: any;
    sizeInterface(): void;
    colorInterface(): void;
    render(): void;
    click(): void;
    move(): void;
    release(): void;
    set min(arg: number);
    /**
    Lower limit of the dial's output range
    @type {number}
    @example dial.min = 1000;
    */
    get min(): number;
    set max(arg: number);
    /**
    Upper limit of the dial's output range
    @type {number}
    @example dial.max = 1000;
    */
    get max(): number;
    set step(arg: number);
    /**
    The increment that the dial's value changes by.
    @type {number}
    @example dial.step = 5;
    */
    get step(): number;
    set mode(arg: string);
    /**
    Absolute mode (dial's value jumps to mouse click position) or relative mode (mouse drag changes value relative to its current position). Default: "relative".
    @type {string}
    @example dial.mode = "relative";
    */
    get mode(): string;
    set normalized(arg: number);
    /**
    Normalized value of the dial.
    @type {number}
    @example dial.normalized = 0.5;
    */
    get normalized(): number;
}
