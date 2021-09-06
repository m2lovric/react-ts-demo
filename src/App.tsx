import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';

function App() {
  const personName = {
    first: 'Matteo',
    last: 'Lovrić',
  };

  const personList = [
    { first: 'Ada', last: 'Lovelace' },
    { first: 'Albert', last: 'Einstein' },
  ];

  return (
    <div className='App'>
      <Greet name='Matteo' messageCount={20} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList name={personList} />
    </div>
  );
}

export default App;
