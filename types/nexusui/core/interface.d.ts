import EventEmitter from 'events';
import { InterfaceColorSettings } from '..';

/**
Interface
*/
export default class Interface extends EventEmitter {
    constructor(parent: HTMLElement | string, options?: any);
    constructor(args?: any, options?: any, defaults?: any);
    type: any;
    settings: {
        target: HTMLElement;
        colors: {};
        snapWithParent: boolean;
        event: () => void;
        component: boolean;
    };
    mouse: {};
    wait: boolean;
    colors: InterfaceColorSettings;
    parseSettings(
        args: any,
        options: any,
        defaults: any,
    ): {
        target: HTMLElement;
        colors: {};
        snapWithParent: boolean;
        event: () => void;
        component: boolean;
    };
    parent: string | HTMLElement | SVGElement | undefined;
    width: number;
    height: number;
    event: false | this;
    init(): void;
    buildFrame(): void;
    element: any;
    buildInterface(): void;
    sizeInterface(): void;
    colorInterface(): void;
    attachListeners(): void;
    interactionTarget: any;
    boundPreMove: ((evt: any) => void) | undefined;
    boundPreRelease: ((evt: any) => void) | undefined;
    finalTouches(): void;
    preClick(e: any): void;
    offset:
        | {
              top: any;
              left: any;
          }
        | undefined;
    clicked: boolean | undefined;
    moveEvent: void | undefined;
    releaseEvent: void | undefined;
    preMove(e: any): void;
    preRelease(e: any): void;
    click(): void;
    move(): void;
    release(): void;
    preTouch(e: any): void;
    preTouchMove(e: any): void;
    preTouchRelease(e: any): void;
    touch(): void;
    touchMove(): void;
    touchRelease(): void;
    /**
     * Resize the interface
     * @param width {number} New width in pixels
     * @param height {number} New height in pixels
     *
     * @example
     * button.resize(100,100);
     */
    resize(width: number, height: number): void;
    empty(): void;
    /**
     * Remove the interface from the page and cancel its event listener(s).
     *
     * @example
     * button.destroy();
     */
    destroy(): void;
    customDestroy(): void;
    colorize(type: keyof InterfaceColorSettings, color: string): void;
}
