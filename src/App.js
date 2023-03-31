
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import View from './View';
import Showbugs from './Showbugs';
import Bugview from './Bugview';
// import Showbugs from './Showbugs';
function App() {
  return (
    <div>
     
<Router>
  
   <Routes>
    <Route path='/' element={<View/>} />
    <Route path='/show-view' element={<Showbugs/>} />
    <Route path='/bugview/:bugid' element={<Bugview/>} />
    

  
   </Routes>
</Router>


    </div>
  );
}

export default App;
