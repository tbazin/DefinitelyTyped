import Interface from '../core/interface';
import * as Interaction from '../util/interaction';

/**
 * Pan
 *
 * @description Stereo crossfader.
 *
 * @demo <span nexus-ui="pan"></span>
 *
 * @example
 * var pan = new Nexus.Pan('#target')
 *
 * @output
 * change
 * Fires any time the interface's value changes. <br>
 * The event data is an object containing the interface's <i>value</i> (-1 to 1), as well as <i>L</i> and <i>R</i> amplitude values (0-1) for left and right speakers, calculated by a square-root crossfade algorithm.
 *
 * @outputexample
 * pan.on('change',function(v) {
 *   console.log(v);
 * })
 *
 *
 */
export default class Pan extends Interface {
    orientation: any;
    mode: any;
    hasKnob: any;
    step: any;
    _value: any;
    position: Interaction.Handle;
    set value(arg: number);
    /**
    The position of crossfader, from -1 (left) to 1 (right). Setting this value updates the interface and triggers the output event.
    @type {number}
    */
    get value(): number;
    buildInterface(): void;
    bar: any;
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
    click(): void;
    move(): void;
    release(): void;
    get normalized(): any;
}
