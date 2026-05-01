import { BrowserRouter, Route, Routes } from 'react-router'
import './index.css'
import { AboutProduct, Home, Navbar, Store } from './pages'
import { AirPods, AppleWatch, Ipad, Iphone, Mac, Pc, VisionPro } from './pages/store-pages'
import { ScrollToTop } from './pages/components/ScrollTop'

function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/store' element={<Store />}>
          <Route path='iphone' element={<Iphone store={false} width={0} />} />
          <Route path='ipad' element={<Ipad store={false} width={0} />} />
          <Route path='mac' element={<Mac store={false} width={0} />} />
          <Route path='pc' element={<Pc store={false} width={0} />} />
          <Route path='applewatch' element={<AppleWatch store={false} width={0} />} />
          <Route path='airpods' element={<AirPods store={false} width={0} />} />
          <Route path='vision-pro' element={<VisionPro store={false} width={0} />} />
        </Route>
        <Route path='/iphone' element={<Iphone store={false} width={0} />} />
        <Route path='/ipad' element={<Ipad store={false} width={0} />} />
        <Route path='/mac' element={<Mac store={false} width={0} />} />
        <Route path='/pc' element={<Pc store={false} width={0} />} />
        <Route path='/applewatch' element={<AppleWatch store={false} width={0} />} />
        <Route path='/airpods' element={<AirPods store={false} width={0} />} />
        <Route path='/vision-pro' element={<VisionPro store={false} width={0} />} />
        <Route path='/about-product' element={<AboutProduct />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
