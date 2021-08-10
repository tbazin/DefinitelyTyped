import ButtonTemplate from '../components/buttontemplate';

/**
 * TextButton
 *
 * @description Text button
 *
 * @demo <span nexus-ui="textButton"></span>
 *
 * @example
 * var textbutton = new Nexus.TextButton('#target')
 *
 * @example
 * var textbutton = new Nexus.TextButton('#target',{
 *     'size': [150,50],
 *     'state': false,
 *     'text': 'Play',
 *     'alternateText': 'Stop'
 * })
 *
 * @output
 * change
 * Fires any time the interface's value changes. <br>
 * The event data is a <i>string</i> of the text on the button at the moment it was clicked.
 *
 * @outputexample
 * textbutton.on('change',function(v) {
 *   console.log(v);
 * })
 *
 */
export default class TextButton extends ButtonTemplate {
    _text: any;
    _alternateText: any;
    buildFrame(): void;
    element: HTMLDivElement | undefined;
    textElement: HTMLDivElement | undefined;
    buildInterface(): void;
    colorInterface(): void;
    sizeInterface(): void;
    render(): void;
    set alternateText(arg: string);
    /**
    The text to display when the button is in its "on" state. If set, this puts the button in "toggle" mode.
    @type {String}
    */
    get alternateText(): string;
    set text(arg: string);
    /**
    The text to display. (If .alternateText exists, then this .text will only be displayed when the button is in its "off" state.)
    @type {String}
    */
    get text(): string;
}
