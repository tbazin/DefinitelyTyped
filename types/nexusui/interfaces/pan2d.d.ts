import Interface from '../core/interface';
import * as Interaction from '../util/interaction';

/**
 * Pan2D
 *
 * @description Interface for moving a sound around an array of speakers. Speaker locations can be customized. The interface calculates the closeness of the sound source to each speaker and returns that distance as a numeric value.
 *
 * @demo <span nexus-ui="pan2D"></span>
 *
 * @example
 * var pan2d = new Nexus.Pan2d('#target')
 *
 * @example
 * var pan2d = new Nexus.Pan2D('#target',{
 *   'size': [200,200],
 *   'range': 0.5,  // detection radius of each speaker
 *   'mode': 'absolute',   // 'absolute' or 'relative' sound movement
 *   'speakers': [  // the speaker [x,y] positions
 *       [0.5,0.2],
 *       [0.75,0.25],
 *       [0.8,0.5],
 *       [0.75,0.75],
 *       [0.5,0.8],
 *       [0.25,0.75]
 *       [0.2,0.5],
 *       [0.25,0.25]
 *   ]
 * })
 *
 * @output
 * change
 * Fires any time the "source" node's position changes. <br>
 * The event data is an array of the amplitudes (0-1), representing the level of each speaker (as calculated by its distance to the audio source).
 *
 * @outputexample
 * pan2d.on('change',function(v) {
 *   console.log(v);
 * })
 *
 */
export default class Pan2D extends Interface {
    value: {
        x: any;
        y: any;
    };
    /**
    Absolute or relative mouse interaction. In "absolute" mode, the source node will jump to your mouse position on mouse click. In "relative" mode, it does not.
    */
    mode: any;
    position: {
        x: Interaction.Handle;
        y: Interaction.Handle;
    };
    /**
    An array of speaker locations. Update this with .moveSpeaker() or .moveAllSpeakers()
    */
    speakers: any;
    /**
    Rewrite: The maximum distance from a speaker that the source node can be for it to be heard from that speaker. A low range (0.1) will result in speakers only playing when the sound is very close it. Default is 0.5 (half of the interface).
    */
    range: any;
    /**
    The current levels for each speaker. This is calculated when a source node or speaker node is moved through interaction or programatically.
    */
    levels: any[];
    buildInterface(): void;
    knob: any;
    speakerElements: any[] | undefined;
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
    get normalized(): {
        x: any;
        y: any;
    };
    calculateLevels(): void;
    /**
    Move the audio source node and trigger the output event.
    @param x {number} New x location, normalized 0-1
    @param y {number} New y location, normalized 0-1
    */
    moveSource(x: number, y: number): void;
    /**
    Move a speaker node and trigger the output event.
    @param index {number} Index of the speaker to move
    @param x {number} New x location, normalized 0-1
    @param y {number} New y location, normalized 0-1
    */
    moveSpeaker(index: number, x: number, y: number): void;
}
