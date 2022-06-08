import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import './App.css';
import General from './component/Pages/General/General';
import MatchType from './component/Pages/MatchType/MatchType';
import Result from './component/Pages/Result/Result';
import Team from './component/Pages/Team/Team';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<MatchType/>}/>
      <Route path='/general' element={<General/>}/>
      <Route path='/Team' element={<Team/>}/>
      <Route path='/Result' element={<Result/>}/>
    </Routes>
    
    </BrowserRouter>
  
    
  );
}

export default App;
