import './App.css';
// import Habit from './components/Habit';
import Habits from './components/Habits';
import Header from './components/Header';

function App() {

  state = {
    habits : [{id: 1, name: "Reading" , count : 0}, {id:2 ,name: "Writing" , count : 0}, {id:3 ,name: "Reading" , count : 0} ]
 }

  return (
    <div className="App">
      <Header/>
     <Habits habits={this.state.habits}/>
    </div>
  );
}

export default App;
