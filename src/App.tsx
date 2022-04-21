import './App.css';
import Pills from './components/Pills/Pills';

function App() {
  const dataToCreatePills:Array<string> = ['Lorem', 'Lorem ipsum', 'Dolor sit', 'Amet ipsum dolor', 'Sit lorem', 'Ipsum dolor'];

  return (
    <div className="App">
      <Pills terms={dataToCreatePills}/>
    </div>
  );
}

export default App;
