import { PicoPlaca } from '../models/pico-placa';
import { Days } from '../models/days';
import { DaysPicoPlaca } from '../models/days-pico-placa';

export class PicoPlacaAdmin {

    /**
     * Method to find the last digits of the license plate that match the day of the date entered.
     * @param day Day of the week. Type: Days
     * @returns An array of Numbers with  
     * @example getLastDigits(Days.MONDAY) => should return [1, 2]
     */
    getLastDigits(day: Days): Array<Number> {
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
     * @returns boolean 
     * @example inRange("16:00") => should return true
     */
    public inRange(time: string): boolean {
        var val = false;
        if (time >= "7:00:00" && time <= "9:30:00" || time >= "16:00:00" && time <= "19:30:00") {
            val = true;
        }
        return val;
    }




}
