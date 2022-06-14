import { PicoPlaca } from '../models/pico-placa';
import { Days } from '../models/days';
import { DaysPicoPlaca } from '../models/days-pico-placa';

export class PicoPlacaAdmin {

    /**
     * Method to predict whether a PicoPlaca object meets the condition to be in "Pico y Placa" schedule.
     * @param picoPlaca PicoPlaca[licensePlateNumber, date, time]. Type: PicoPlaca
     * @returns returns a boolean with the evaluated condition
     * @example let obj: PicoPlaca = new PicoPlaca("PBX-0211", new Date("06-13-2022"), "16:15"); 
     *          validatePicoPlaca(obj) => should return true
     */
    public validatePicoPlaca(picoPlaca: PicoPlaca): boolean {
        let flag = false;
        let lastDigit = Number(picoPlaca.licensePlate[picoPlaca.licensePlate.length - 1]); //last digit of the license Plate Number
        let digits = this.getLastDigits(picoPlaca.date.getDay());
        if (digits.length > 0 && digits.includes(lastDigit) && this.inRange(picoPlaca.time)) {
            flag = true;
        }
        return flag;
    }

    /**
     * Method to find the last digits of the license plate that match the day of the date entered.
     * @param day Day of the week. Type: Days
     * @returns An array of Numbers with  
     * @example getLastDigits(Days.MONDAY) => should return [1, 2]
     */
    public getLastDigits(day: Days): Array<Number> {
        let lastDigits: Number[] = [];
        if ([1, 2, 3, 4, 5].includes(day)) {
            lastDigits = DaysPicoPlaca[day]
        }
        if (lastDigits.length == 0) {
            console.log("the day of the date entered is not in the range of Monday-Friday");
        }
        return lastDigits;
    }

    /**
     * Method to validate if a time is within the "pico y placa" schedule.
     * @param time time of the day. Type: String
     * @returns returns a boolean with the evaluated condition 
     * @example inRange("16:00") => should return true
     */
    public inRange(time: string): boolean {
        let currentTime: Number = Date.parse("01/01/2000 " + time); /* 01/01/2000 is an arbitrary date only used for time comparison.*/

        //set interval limits
        let interval1Min: Number = Date.parse("01/01/2000 7:00:00");
        let interval1Max: Number = Date.parse("01/01/2000 9:30:00");
        let interval2Min: Number = Date.parse("01/01/2000 16:00:00");
        let interval2Max: Number = Date.parse("01/01/2000 19:30:00");

        let flag = false;
        if (currentTime > interval1Min && currentTime < interval1Max ||
            currentTime > interval2Min && currentTime < interval2Max) {
            flag = true;
        }
        return flag;
    }
}