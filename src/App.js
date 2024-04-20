

import "./App.css";
import imageOne from './head.png';
import imageTwo from './icons8-check-96.png';
import {DailyList } from'./DailyList';


function App() {
 return(
 <div  className='app'>
  <div className="container">
<img src={imageOne} width="200px" alt='head'/>
</div>
<div className="container">
<h1>Daily Planner</h1>
</div>
<DailyList/>
<div className="container">
<img src={imageTwo} width="150px" alt='head'/>
</div>
  </div>
 )
}

export default App;
