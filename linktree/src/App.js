import './App.css';
import { BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import Home from './Home';
import Contact from './Contact';


function App() {
  return (
   <div>
     <BrowserRouter>
      <Routes>
        <Route path="/Linktree--HNG/" element={<Home />} />
        <Route path="/Linktree--HNG/contact" element={<Contact />} />
      </Routes>
     </BrowserRouter>
   </div>
    
  );
}

export default App;
