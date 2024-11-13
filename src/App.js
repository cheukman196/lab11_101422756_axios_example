import logo from './logo.svg';
import './App.css';
import PersonList from './components/PersonList';

function App() {
  return (
    <div>
      <div class="w-100">
        <h1 class="center bg-success text-center text-white p-3">
          Person List
        </h1>
      </div>

      <PersonList></PersonList>
    </div>
  );
}

export default App;
