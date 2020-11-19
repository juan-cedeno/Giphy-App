import { useState } from 'react';
import './App.css';
import { GiphyList } from './components/GiphyList';
import { Search } from './components/Search';

function App() {

  const [categoryInput, setcategoryInput] = useState('')

  return (
    <>
      <div>
        <h1 style = {{margin : 0 , textAlign : "center"}}>Giphy App</h1>
        <hr/>
        <Search setcategoryInput = {setcategoryInput}/>
        <GiphyList categoryInput = {categoryInput}/>
      </div>
    </>
  );
}

export default App;
