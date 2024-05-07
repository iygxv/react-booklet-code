import MonthCalendar from './MonthCalendar';
import './index.scss';
import { Dayjs } from 'dayjs';

export interface CalendarProps {
  value: Dayjs
}
function Calendar(props: CalendarProps) {
    return <div className="calendar">
        <MonthCalendar {...props}/>
    </div>
}

export default Calendar;