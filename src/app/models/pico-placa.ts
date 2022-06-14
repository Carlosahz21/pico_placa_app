import { IPicoPlaca } from '../interfaces/pico-placa';

export class PicoPlaca implements IPicoPlaca {
    private _licensePlate: string;
    private _date: Date;
    private _time: string;

    constructor() {
        this._licensePlate = '';
        this._date = new Date();
        this._time = ''
    }

    public get licensePlate(): string {
        return this._licensePlate;
    }

    public set licensePlate(licensePlate: string) {
        this._licensePlate = licensePlate;
    }

    public get date(): Date {
        return this._date;
    }

    public set date(date: Date) {
        this._date = date;
    }

    public get time(): string {
        return this._time;
    }

    public set time(time: string) {
        this._time = time;
    }
}