import { BrowserRouter, Route, Routes } from 'react-router'
import './index.css'
import { Home, Store } from './pages'
import { AirPods, AppleWatch, Ipad, Iphone, Mac, Pc, VisionPro } from './pages/store-pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/store' element={<Store />}>
          <Route path='iphone' element={<Iphone />} />
          <Route path='ipad' element={<Ipad />} />
          <Route path='mac' element={<Mac />} />
          <Route path='pc' element={<Pc />} />
          <Route path='applewatch' element={<AppleWatch />} />
          <Route path='airpods' element={<AirPods />} />
          <Route path='vision-pro' element={<VisionPro />} />
        </Route>
        <Route path='/iphone' element={<Iphone />} />
        <Route path='/ipad' element={<Ipad />} />
        <Route path='/mac' element={<Mac />} />
        <Route path='/pc' element={<Pc />} />
        <Route path='/applewatch' element={<AppleWatch />} />
        <Route path='airpods' element={<AirPods />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
