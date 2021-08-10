import Interface from '../core/interface';
import * as Interaction from '../util/interaction';

export default class RangeSlider extends Interface {
    constructor(...args: any[]);
    min: any;
    max: any;
    step: any;
    mode: any;
    range: any;
    position:
        | {
              center: Interaction.Handle;
              size: Interaction.Handle;
              start?: undefined;
              end?: undefined;
          }
        | {
              center: Interaction.Handle;
              start: Interaction.Handle;
              end: Interaction.Handle;
              size?: undefined;
          }
        | undefined;
    dummy: any;
    ref: any;
    bar: any;
    arrowL: any;
    arrowR: any;
    render(): void;
    hasMoved: boolean | undefined;
    set start(arg: any);
    get start(): any;
    set end(arg: any);
    get end(): any;
    updatePosition(): void;
}
