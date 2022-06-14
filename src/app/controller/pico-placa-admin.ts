import { PicoPlaca } from '../models/pico-placa';
import { Days } from '../models/days';
import { DaysPicoPlaca } from '../models/days-pico-placa';

export class PicoPlacaAdmin {

    /**
     * Method to find the last digits of the license plate that match the day of the date entered.
     * @param day Day of the week (Type Enum Days)
     * @returns An array of Numbers with  
     * @example getLastDigits(Days.MONDAY) => should return [1, 2]
     */
    getLastDigits(day: Days): Array<Number> {
        let lastDigits: Number [] = [];
        if ([1,2,3,4,5].includes(day)) {
            lastDigits = DaysPicoPlaca[day]
        }
        if(lastDigits.length == 0) {
           console.log("the day of the date entered is not in the range of Monday-Friday"); 
        }
        return lastDigits;
    }


}
