import React from 'react'
import './App.css';
<script src="index.js"></script>

const InternalSupport = (props) => {
  return(
    <div>
      <h1>InternalSupport {props.team}</h1>
      <hr/>
    </div>
  )
} 
const Coluna = (props) => {
  return(
    <div>
      <h1>Coluna {props.coluna}</h1>
      
    </div>
  )
}
const Coluna2 = (props) => {
  return(
    <div>
      <h1>Coluna {props.coluna2}</h1>
    </div>
  )
}
const Coluna3 = (props) => {
  return(
    <div>
      <h1>Colunas {props.coluna3} </h1>
     
    </div>
  )}
 

function App() {
  return (
    
    <div className="Team">
       
   
  <div className='colunas'><Coluna coluna="Cores"/></div>
  <div className='colunas2'><Coluna2 coluna2="Setas"/></div>
  <div className='colunas3'><Coluna3 coluna3="Categorias"/></div>
 

   <InternalSupport team="1"/>
   <InternalSupport team="2"/>
   <InternalSupport team="3"/>
   <InternalSupport team="4"/>
   <InternalSupport team="5"/>
   <InternalSupport team="6"/>
   <InternalSupport team="7"/>
   <InternalSupport team="8"/>
   <InternalSupport team="9"/>
   <InternalSupport team="10"/>
   <div className='select'> <label for="select">Choose color:</label>
    <select>
        <option>Choose Color</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
    </select>
</div>
<div class="red circle"> </div>
<div class="green circle"> </div>
<div class="blue circle"></div>

<div className='select3'> <label for="select">Choose color:</label>
    <select>
        <option>Choose Color</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
    </select>
</div>
<div class="red circle"> </div>
<div class="green circle"> </div>
<div class="blue circle"></div>
<div className='select4'> <label for="select">Choose color:</label>
    <select>
        <option>Choose Color</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
    </select>
</div>
<div class="red circle"> </div>
<div class="green circle"> </div>
<div class="blue circle"></div>
<div className='select5'> <label for="select">Choose color:</label>
    <select>
        <option>Choose Color</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
    </select>
</div>
<div class="red circle"> </div>
<div class="green circle"> </div>
<div class="blue circle"></div>
<div className='select6'> <label for="select">Choose color:</label>
    <select>
        <option>Choose Color</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
    </select>
</div>
<div class="red circle"> </div>
<div class="green circle"> </div>
<div class="blue circle"></div>
<div className='select7'> <label for="select">Choose color:</label>
    <select>
        <option>Choose Color</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
    </select>
</div>
<div class="red circle"> </div>
<div class="green circle"> </div>
<div class="blue circle"></div>
<div className='select8'> <label for="select">Choose color:</label>
    <select>
        <option>Choose Color</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
    </select>
</div>
<div class="red circle"> </div>
<div class="green circle"> </div>
<div class="blue circle"></div>
<div className='select9'> <label for="select">Choose color:</label>
    <select>
        <option>Choose Color</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
    </select>
</div>
<div class="red circle"> </div>
<div class="green circle"> </div>
<div class="blue circle"></div>
<div className='select10'> <label for="select">Choose color:</label>
    <select>
        <option>Choose Color</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
    </select>
</div>
<div class="red circle"> </div>
<div class="green circle"> </div>
<div class="blue circle"></div>
<div className='select11'> <label for="select">Choose color:</label>
    <select>
        <option>Choose Color</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
    </select>
</div>
<div class="red circle"> </div>
<div class="green circle"> </div>
<div class="blue circle"></div>

<div className='Arrow'> <label for="select">Choose position:</label>
    <select>
        <option>Choose position</option>
        <option value="up">Up</option>
        <option value="right">Right</option>
        <option value="down">Down</option>
        <option value="left">Left</option>
    </select>
    <div class="arrow up"></div>
<div class="arrow right"> </div>
<div class="arrow down"></div>
<div class="arrow left"></div>
</div>
<div className='Arrow2'> <label for="select">Choose position:</label>
    <select>
        <option>Choose position</option>
        <option value="up">Up</option>
        <option value="right">Right</option>
        <option value="down">Down</option>
        <option value="left">Left</option>
    </select>
    <div class="arrow up"></div>
<div class="arrow right"> </div>
<div class="arrow down"></div>
<div class="arrow left"></div>
</div>
<div className='Arrow3'> <label for="select">Choose position:</label>
    <select>
        <option>Choose position</option>
        <option value="up">Up</option>
        <option value="right">Right</option>
        <option value="down">Down</option>
        <option value="left">Left</option>
    </select>
    <div class="arrow up"></div>
<div class="arrow right"> </div>
<div class="arrow down"></div>
<div class="arrow left"></div>
</div>
<div className='Arrow4'> <label for="select">Choose position:</label>
    <select>
        <option>Choose position</option>
        <option value="up">Up</option>
        <option value="right">Right</option>
        <option value="down">Down</option>
        <option value="left">Left</option>
    </select>
    <div class="arrow up"></div>
<div class="arrow right"> </div>
<div class="arrow down"></div>
<div class="arrow left"></div>
</div>
<div className='Arrow5'> <label for="select">Choose position:</label>
    <select>
        <option>Choose position</option>
        <option value="up">Up</option>
        <option value="right">Right</option>
        <option value="down">Down</option>
        <option value="left">Left</option>
    </select>
    <div class="arrow up"></div>
<div class="arrow right"> </div>
<div class="arrow down"></div>
<div class="arrow left"></div>
</div>
<div className='Arrow6'> <label for="select">Choose position:</label>
    <select>
        <option>Choose position</option>
        <option value="up">Up</option>
        <option value="right">Right</option>
        <option value="down">Down</option>
        <option value="left">Left</option>
    </select>
    <div class="arrow up"></div>
<div class="arrow right"> </div>
<div class="arrow down"></div>
<div class="arrow left"></div>
</div>
<div className='Arrow7'> <label for="select">Choose position:</label>
    <select>
        <option>Choose position</option>
        <option value="up">Up</option>
        <option value="right">Right</option>
        <option value="down">Down</option>
        <option value="left">Left</option>
    </select>
    <div class="arrow up"></div>
<div class="arrow right"> </div>
<div class="arrow down"></div>
<div class="arrow left"></div>
</div>
<div className='Arrow8'> <label for="select">Choose position:</label>
    <select>
        <option>Choose position</option>
        <option value="up">Up</option>
        <option value="right">Right</option>
        <option value="down">Down</option>
        <option value="left">Left</option>
    </select>
    <div class="arrow up"></div>
<div class="arrow right"> </div>
<div class="arrow down"></div>
<div class="arrow left"></div>
</div>
<div className='Arrow9'> <label for="select">Choose position:</label>
    <select>
        <option>Choose position</option>
        <option value="up">Up</option>
        <option value="right">Right</option>
        <option value="down">Down</option>
        <option value="left">Left</option>
    </select>
    <div class="arrow up"></div>
<div class="arrow right"> </div>
<div class="arrow down"></div>
<div class="arrow left"></div>
</div>
<div className='Arrow10'> <label for="select">Choose position:</label>
    <select>
        <option>Choose position</option>
        <option value="up">Up</option>
        <option value="right">Right</option>
        <option value="down">Down</option>
        <option value="left">Left</option>
    </select>
    <div class="arrow up"></div>
<div class="arrow right"> </div>
<div class="arrow down"></div>
<div class="arrow left"></div>
</div>
</div>

)}


  

  


    export default App;