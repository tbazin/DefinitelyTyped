export default class Tune {
    scale: any[];
    mode: {
        output: string;
        input: string;
    };
    etmajor: number[];
    root: any;
    note(input: any, octave: any): number;
    frequency(stepIn: any, octaveIn: any): number;
    ratio(stepIn: any, octaveIn: any): number;
    MIDI(stepIn: any, octaveIn: any): number;
    createScale(...args: any[]): void;
    createJIScale(...args: any[]): void;
    loadScaleFromFrequencies(freqs: any): void;
    loadScale(name: any): void;
    search(letters: any): string[];
    chord(midis: any): number[];
}
