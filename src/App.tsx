import { BrowserRouter, Route, Routes } from 'react-router';
import Layout from './views/Layout';
import Home from './views/Home';
import DetectFace from './views/DetectFace';
import Detected from './views/Detected';
import {useStore} from './stores/DBStore';
import {useEffect} from 'react';
import DetectGesture from './views/DetectGesture';

const App = () => {
  const {init} =useStore();

  useEffect(()=>{
    init();
  }, []);

  return (
      <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/face" element={<DetectFace />} />
          <Route path="/detected" element={<Detected />} />
          <Route path='/gesture/:faceName' element={<DetectGesture />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;