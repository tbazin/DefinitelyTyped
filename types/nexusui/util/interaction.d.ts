export class Handle {
    constructor(mode?: string, direction?: string, xbound?: number[], ybound?: number[]);
    mode: string;
    direction: string;
    previous: number;
    value: number;
    sensitivity: number;
    resize(xbound: any, ybound: any): void;
    boundary:
        | {
              min: {
                  x: any;
                  y: any;
              };
              max: {
                  x: any;
                  y: any;
              };
              center: {
                  x: any;
                  y: any;
              };
          }
        | undefined;
    set anchor(arg: any);
    get anchor(): any;
    _anchor: any;
    update(mouse: any): void;
    convertPositionToValue(current: any): any;
}
export class Button {
    constructor(mode?: string);
    mode: string;
    state: ToggleModel;
    paintbrush: boolean;
    click(): void;
    timeout: number | undefined;
    position:
        | {
              x: any;
              y: any;
          }
        | undefined;
    move(): void;
    release(): void;
}
import ToggleModel from '../models/toggle';
