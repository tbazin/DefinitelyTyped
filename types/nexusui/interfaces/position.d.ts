import Interface from '../core/interface';
import * as Interaction from '../util/interaction';

/**
 * Position
 *
 * @description Two-dimensional touch slider.
 *
 * @demo <span nexus-ui="position"></span>
 *
 * @example
 * var position = new Nexus.Position('#target')
 *
 * @example
 * var position = new Nexus.Position('#target',{
 *   'size': [200,200],
 *   'mode': 'absolute',  // "absolute" or "relative"
 *   'x': 0.5,  // initial x value
 *   'minX': 0,
 *   'maxX': 1,
 *   'stepX': 0,
 *   'y': 0.5,  // initial y value
 *   'minY': 0,
 *   'maxY': 1,
 *   'stepY': 0
 * })
 *
 * @output
 * change
 * Fires any time the interface's value changes. <br>
 * The event data is an object with x and y properties containing the x and y values of the interface.
 *
 * @outputexample
 * position.on('change',function(v) {
 *   console.log(v);
 * })
 *
 *
 */
export default class Position extends Interface {
    _x: any;
    _y: any;
    position: {
        x: Interaction.Handle;
        y: Interaction.Handle;
    };
    buildInterface(): void;
    knob: any;
    sizeInterface(): void;
    _minDimension: number | undefined;
    knobRadius:
        | {
              off: number;
          }
        | undefined;
    colorInterface(): void;
    render(): void;
    knobCoordinates:
        | {
              x: number;
              y: number;
          }
        | undefined;
    click(): void;
    move(): void;
    release(): void;
    set x(arg: object);
    /**
     * The interface's x value. When set, it will automatically adjust to fit min/max/step settings of the interface.
     * @type {object}
     * @example position.x = 0.5;
     */
    get x(): object;
    set y(arg: object);
    /**
     * The interface's y values. When set, it will automatically adjust to fit min/max/step settings of the interface.
     * @type {object}
     * @example position.x = 0.5;
     */
    get y(): object;
    get normalized(): {
        x: any;
        y: any;
    };
    set minX(arg: object);
    /**
     * The lower limit of value on the x axis
     * @type {object}
     */
    get minX(): object;
    set minY(arg: object);
    /**
     * The lower limit of value on the y axis
     * @type {object}
     */
    get minY(): object;
    set maxX(arg: object);
    /**
     * The upper limit of value on the x axis
     * @type {object}
     */
    get maxX(): object;
    set maxY(arg: object);
    /**
     * The upper limit of value on the y axis
     * @type {object}
     */
    get maxY(): object;
    set stepX(arg: object);
    /**
     * The incremental step of values on the x axis
     * @type {object}
     */
    get stepX(): object;
    set stepY(arg: object);
    /**
     * The incremental step of values on the y axis
     * @type {object}
     */
    get stepY(): object;
    set mode(arg: string);
    /**
    Absolute mode (position's value jumps to mouse click position) or relative mode (mouse drag changes value relative to its current position). Default: "absolute".
    @type {string}
    @example position.mode = "relative";
    */
    get mode(): string;
}
