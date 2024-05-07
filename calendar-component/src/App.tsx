import Calendar from './Calendar';
import dayjs from 'dayjs'

function App() {
  return (
    <div className="App">
      <Calendar value={dayjs('2023-11-08')}></Calendar>
    </div>
  );
}

export default App;