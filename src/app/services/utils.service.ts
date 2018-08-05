import {Injectable} from '@angular/core';
import * as moment from 'moment';

@Injectable()

export class UtilsService {

    formatDate(date) {
		return moment(date, 'YYYY-MM-DD HH:mm:ss').format('DD.MM.YYYY');
	}
	formatTime(date) {
		return moment(date, 'YYYY-MM-DD HH:mm:ss').format('HH:mm:ss');
	}
    toInt(n) {
        return parseInt(n);
    } 

	getWeekday(date) {
		return moment(date).format('ddd');
    }
    
}