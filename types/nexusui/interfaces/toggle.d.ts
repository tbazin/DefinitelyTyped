import Interface from '../core/interface';

/**
 * Toggle
 *
 * @description Binary switch
 *
 * @demo <span nexus-ui="toggle"></span>
 *
 * @example
 * var toggle = new Nexus.Toggle('#target')
 *
 * @example
 * var toggle = new Nexus.Toggle('#target',{
 *     'size': [40,20],
 *     'state': false
 * })
 *
 * @output
 * change
 * Fires any time the interface's value changes. <br>
 * Parameter: The boolean state of the interface.
 *
 * @outputexample
 * toggle.on('change',function(v) {
 *   console.log(v);
 * })
 *
 *
 */
export default class Toggle extends Interface {
    _state: any;
    buildInterface(): void;
    bar: any;
    knob: any;
    sizeInterface(): void;
    knobSize: number | undefined;
    colorInterface(): void;
    render(): void;
    click(): void;
    set state(arg: boolean);
    /**
    Whether the toggle is currently on or off. Setting this property will update the toggle interface and trigger the output event.
    @type {boolean}
    @example toggle.state = false;
    */
    get state(): boolean;
    /**
     * Switch the toggle state to its opposite state
     * @example
     * toggle.flip();
     */
    flip(): void;
}
