import Interface from '../core/interface';
import svg from '../util/svg';

/**
Button Template
*/
export type ButtonMode = 'button' | 'impulse' | 'toggle' | 'aftertouch';

export default class ButtonTemplate extends Interface {
    constructor(parent: HTMLElement | string, options?: any);
    constructor(args: any, options: any, defaults: any);
    /**
     * Interaction mode: supports "button", "aftertouch", "impulse", or "toggle"
     * @type {string}
     * @example button.mode = 'toggle';
     */
    mode: ButtonMode;
    position: {
        x: number;
        y: number;
    };
    _state: any;
    buildInterface(): void;
    pad: SVGElement;
    interactionTarget: any;
    sizeInterface(): void;
    render(): void;
    down(paintbrush: any): void;
    timeout: number | undefined;
    bend(mouse: any): void;
    mouse: any;
    up(): void;
    click(): void;
    move(): void;
    release(): void;
    set state(arg: boolean);
    /**
    Whether the button is on (pressed) or off (not pressed)
    @type {boolean}
    @example button.state = true;
    */
    get state(): boolean;
    /**
    Change the button to its alternate state (off=>on, on=>off), or flip it to a specified state.
    @param value {boolean} (Optional) State to flip to.
    @example button.flip();
    */
    flip(value: boolean): void;
    /**
    Turn the button's state to true.
    @example button.turnOn();
    */
    turnOn(emitting: boolean): void;
    /**
    Turn the button's state to false.
    @example button.turnOff();
    */
    turnOff(emitting: boolean): void;
}
