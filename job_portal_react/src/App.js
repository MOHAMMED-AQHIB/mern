import logo from './logo.svg';
import './App.css';

function App() {
  const getdata =async()=>{
    let res = await fetch("jobListUrl",{method:"GET"});
    let json = await res.json();
    console.log(json);
  }
  return(
    <div><button onClick={getdata}>get job list</button></div>
  )
}

export default App;
