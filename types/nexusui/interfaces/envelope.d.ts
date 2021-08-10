import Interface from '../core/interface';

/**
 * Envelope
 *
 * @description Interactive linear ramp visualization.
 *
 * @demo <span nexus-ui="envelope"></span>
 *
 * @example
 * var envelope = new Nexus.Envelope('#target')
 *
 * @example
 * var envelope = new Nexus.Envelope('#target',{
 *   'size': [300,150],
 *   'noNewPoints': false,
 *   'points': [
 *     {
 *       x: 0.1,
 *       y: 0.4
 *     },
 *     {
 *       x: 0.35,
 *       y: 0.6
 *     },
 *     {
 *       x: 0.65,
 *       y: 0.2
 *     },
 *     {
 *       x: 0.9,
 *       y: 0.4
 *     },
 *   ]
 * })
 *
 * @output
 * change
 * Fires any time a node is moved. <br>
 * The event data is an array of point locations. Each item in the array is an object containing <i>x</i> and <i>y</i> properties describing the location of a point on the envelope.
 *
 * @outputexample
 * envelope.on('change',function(v) {
 *   console.log(v);
 * })
 *
 */
export default class Envelope extends Interface {
    points: any;
    nodes: any[];
    selected: boolean;
    buildInterface(): void;
    line: any;
    fill: any;
    sizeInterface(): void;
    colorInterface(): void;
    render(): void;
    calculatePoints(): void;
    calculatePath(): void;
    click(): void;
    hasMoved: boolean | undefined;
    move(): void;
    release(): void;
    findNearestNode(): number | null;
    getIndexFromX(x: any): number;
    scaleNode(i: any): void;
    /**
    Sort the this.points array from left-most point to right-most point. You should not regularly need to use this, however it may be useful if the points get unordered.
    */
    sortPoints(): void;
    /**
    Add a breakpoint on the envelope.
    @param x {number} x location of the point, normalized (0-1)
    @param y {number} y location of the point, normalized (0-1)
    */
    addPoint(x: number, y: number): void;
    /**
    Find the level at a certain x location on the envelope.
    @param x {number} The x location to find the level of, normalized 0-1
    */
    scan(x: number): number;
    /**
    Move a breakpoint on the envelope.
    @param index {number} The index of the breakpoint to move
    @param x {number} New x location, normalized 0-1
    @param y {number} New y location, normalized 0-1
    */
    movePoint(index: number, x: number, y: number): void;
    /**
    Move a breakpoint on the envelope by a certain amount.
    @param index {number} The index of the breakpoint to move
    @param xOffset {number} X displacement, normalized 0-1
    @param yOffset {number} Y displacement, normalized 0-1
    */
    adjustPoint(index: number, xOffset: number, yOffset: number): void;
    /**
    Remove a breakpoint from the envelope.
    @param index {number} Index of the breakpoint to remove
    */
    destroyPoint(index: number): void;
    /**
    Remove all existing breakpoints and add an entirely new set of breakpoints.
    @param allPoints {array} An array of objects with x/y properties (normalized 0-1). Each object in the array specifices the x/y location of a new breakpoint to be added.
    */
    setPoints(allPoints: any): void;
}
