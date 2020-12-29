import './App.css';

function App() {
  return (
    <div className="App">
      <MyListHeader />
      <MyList />
    </div>
  );
}

const MyListHeader = () => {
  return (
    <h1>React 프로그래밍</h1>
  )
}

const units = [
  { name: "건담", model: "RX-78-2" }, 
  { name: "자쿠II", model: "MS-06"},
  { name: "건탱크", model: "RX-75"}, 
  { name: "건캐논", model: "RX-77-2"}
]

const MyList = () => {
  return (
    <ul>
      {units.map((unit, index) => 
        <li key={index}>
          <img className="unitImage" src={`http://ipsumimage.appspot.com/70x70,ffff00?l=${unit.name}&s=20`} alt="unit" />
          {unit.name} <br/>
          {unit.model}
        </li>
      )}
    </ul>
  )
}

export default App;
