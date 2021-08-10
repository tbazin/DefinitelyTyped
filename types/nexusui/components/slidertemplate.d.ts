export default class SliderTemplate {
    constructor(args: any, options: any, defaults: any);
    orientation: any;
    hasKnob: any;
    _value: any;
    position: Interaction.Handle;
    set value(arg: number);
    /**
    The slider's current value. If set manually, will update the interface and trigger the output event.
    @type {number}
    @example slider.value = 10;
    */
    get value(): number;
    buildInterface(): void;
    bar: any;
    fillbar: any;
    knob: any;
    sizeInterface(): void;
    knobData:
        | {
              level: number;
              r: number;
          }
        | undefined;
    thickness: number | undefined;
    colorInterface(): void;
    render(): void;
    down(): void;
    clicked: boolean | undefined;
    slide(): void;
    up(): void;
    get normalized(): any;
    set min(arg: number);
    /**
    Lower limit of the sliders's output range
    @type {number}
    @example slider.min = 1000;
    */
    get min(): number;
    set max(arg: number);
    /**
    Upper limit of the slider's output range
    @type {number}
    @example slider.max = 1000;
    */
    get max(): number;
    set step(arg: number);
    /**
    The increment that the slider's value changes by.
    @type {number}
    @example slider.step = 5;
    */
    get step(): number;
    set mode(arg: string);
    /**
    Absolute mode (slider's value jumps to mouse click position) or relative mode (mouse drag changes value relative to its current position). Default: "relative".
    @type {string}
    @example slider.mode = "relative";
    */
    get mode(): string;
}
import * as Interaction from '../util/interaction';
