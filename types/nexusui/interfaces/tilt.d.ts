import Interface from '../core/interface';

/**
 * Tilt
 *
 * @description Device tilt sensor with 2 or 3 axes (depending on your device and browser).
 *
 * @demo <span nexus-ui='tilt'></span>
 *
 * @example
 * var tilt = new Nexus.Tilt('#target')
 *
 * @output
 * change
 * Fires at a regular interval, as long as this interface is active (see the interface's <i>.active</i> property)<br>
 * The event data is an <i>object</i> containing x (number) and y (number) properties which represent the current tilt state of the device.
 *
 * @outputexample
 * tilt.on('change',function(v) {
 *   console.log(v);
 * })
 *
 *
 */
export default class Tilt extends Interface {
    _active: boolean;
    boundUpdate: (v: any) => void;
    orientationListener: void;
    buildInterface(): void;
    title: any;
    circleX: any;
    circleY: any;
    circleZ: any;
    barX: any;
    barY: any;
    barZ: any;
    barX2: any;
    barY2: any;
    barZ2: any;
    colorInterface(): void;
    update(v: any): void;
    click(): void;
    set active(arg: boolean);
    /**
    Whether the interface is on (emitting values) or off (paused & not emitting values). Setting this property will update it.
    @type {boolean}
    */
    get active(): boolean;
    customDestroy(): void;
}
