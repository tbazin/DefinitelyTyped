import ButtonTemplate, { ButtonMode } from '../components/buttontemplate';
import Interface from '../core/interface';
import Matrix from '../models/matrix';

export class MatrixCell extends ButtonTemplate {
    pad: SVGRectElement;
    index: number;
    row: number;
    column: number;
    matrix: Matrix;
    paddingRow: number;
    paddingColumn: number;
    interacting: boolean;
    paintbrush: boolean;
}

/**
 * Sequencer
 *
 * @description Grid of buttons with built-in step sequencer.
 *
 * @demo <div nexus-ui="sequencer" style="width:400px;height:200px;"></div>
 *
 * @example
 * var sequencer = new Nexus.Sequencer('#target')
 *
 * @example
 * var sequencer = new Nexus.Sequencer('#target',{
 *  'size': [400,200],
 *  'mode': 'toggle',
 *  'rows': 5,
 *  'columns': 10,
 *  'paddingRow': 10,
 *  'paddingColumn': 20
 *})
 *
 * @output
 * change
 * Fires whenever a value is received. For example, when clicking a cell from off to on. <br>
 * The event data is an object containing <i>row</i> (number), <i>column</i> (number), and <i>state</i> (boolean) properties.
 *
 * @outputexample
 * sequencer.on('change',function(v) {
 *   console.log(v);
 * })
 *
 * @output
 * step
 * Fires any time the sequencer steps to the next column, in sequece mode. <br>
 * The event data is an <i>array</i> containing all values in the column, <i>bottom row first</i>.
 *
 * @outputexample
 * sequencer.on('step',function(v) {
 *   console.log(v);
 * })
 */
export default class Sequencer extends Interface {
    active: number;
    /**
     * Button interaction mode: see Button
     * @type {string}
     * @example button.mode = 'toggle';
     */
    mode: ButtonMode;
    /**
     * The interval object which controls timing and sequence scheduling.
     * @type {interval}
     */
    interval: any;
    /**
     * A Matrix model containing methods for manipulating the sequencer's array of values. To learn how to manipulate the matrix, read about the matrix model.
     * @type {matrix}
     */
    matrix: Matrix;
    /**
     * A Counter model which the sequencer steps through. For example, you could use this model to step through the sequencer in reverse, randomly, or in a drunk walk.
     * @type {counter}
     */
    stepper: any;
    paddingRow: any;
    paddingColumn: any;
    buildFrame(): void;
    element: HTMLDivElement | undefined;
    buildInterface(): void;
    cells: MatrixCell[] | undefined;
    sizeInterface(): void;
    colorInterface(): void;
    update(): void;
    keyChange(note: any, on: any): void;
    render(): void;
    /**
     * Start sequencing
     * @param  {number} ms Beat tempo in milliseconds
     */
    start(ms: number): void;
    /**
    Stop sequencing
    */
    stop(): void;
    /**
    Manually jump to the next column and trigger the 'change' event. The "next" column is determined by your mode of sequencing.
    */
    next(): void;
    addTouchListeners(): void;
    preClick: (() => void) | undefined;
    preMove: (() => void) | undefined;
    preRelease: (() => void) | undefined;
    click: (() => void) | undefined;
    move: (() => void) | undefined;
    release: (() => void) | undefined;
    preTouch: (() => void) | undefined;
    preTouchMove: (() => void) | undefined;
    preTouchRelease: (() => void) | undefined;
    touch: (() => void) | undefined;
    touchMove: (() => void) | undefined;
    touchRelease: (() => void) | undefined;
    currentElement: any;
    paintbrush: boolean | undefined;
    interacting: boolean | undefined;
    set rows(arg: number);
    /**
    Number of rows in the sequencer
    @type {number}
    */
    get rows(): number;
    set columns(arg: number);
    /**
    Number of columns in the sequencer
    @type {number}
    */
    get columns(): number;
}
