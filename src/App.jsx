import React, { useState } from 'react'
import './App.css'
import Tree from "./components/Tree/Tree";
import data from "./data.json";
import RadioButton from "./components/RadioButton/RadioButton";


function App() {

    const [treeData, setTreeData] = useState(data);

    return (
    <div className="App">
      <Tree parentNode ={treeData}/>
    </div>
  )
}

export default App
