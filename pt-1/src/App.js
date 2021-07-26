import './App.css';
import DogNav from './DogNav';
import Routes from './Routes';

function App({dogs}) {
  return (
    <div>
      <DogNav names={dogs.map(dog => dog.name)}/>
      <Routes dogs={dogs}/>
    </div>
  );
}

export default App;
