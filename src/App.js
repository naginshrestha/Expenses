import './App.css';
import Header from './Components/Header';
import List from './Components/List';

function App() {

  const getDataLS =(datad) =>{
    console.log("gggg",datad)

  }
  return (
   <>
   <Header  getDataLS={getDataLS}/>

   <List/>


   
   </>
  );
}

export default App;
