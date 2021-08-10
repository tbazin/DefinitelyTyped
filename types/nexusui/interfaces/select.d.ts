import Interface from '../core/interface';

/**
 * Select
 *
 * @description Dropdown menu
 *
 * @demo <span nexus-ui="select"></span>
 *
 * @example
 * var select = new Nexus.Select('#target')
 *
 * @example
 * var select = new Nexus.Select('#target',{
 *   'size': [100,30],
 *   'options': ['default','options']
 * })
 *
 * @output
 * change
 * Fires any time the interface's value changes. <br>
 * The event data is an object containing the text value of the selected option, as well as the numeric index of the selection.
 *
 * @outputexample
 * select.on('change',function(v) {
 *   console.log(v);
 * })
 *
 *
 */
export default class Select extends Interface {
    _selectedIndex: number;
    _value: boolean;
    _options: string[];
    buildFrame(): void;
    element: HTMLSelectElement | undefined;
    boundRender: (() => void) | undefined;
    attachListeners(): void;
    buildInterface(): void;
    colorInterface(): void;
    render(): void;
    click(): void;
    move(): void;
    release(): void;
    /**
     * Update the list of options. This removes all existing options and creates a new list of options.
     * @param  {array} options New array of options
     */
    defineOptions(options: any): void;
    set value(arg: string);
    /**
    The text of the option that is currently selected. If set, will update the interface and trigger the output event.
    @type {String}
    @example select.value = "sawtooth";
    */
    get value(): string;
    set selectedIndex(arg: number);
    /**
    The numeric index of the option that is currently selected. If set, will update the interface and trigger the output event.
    @type {number}
    @example select.selectedIndex = 2;
    */
    get selectedIndex(): number;
    customDestroy(): void;
}
