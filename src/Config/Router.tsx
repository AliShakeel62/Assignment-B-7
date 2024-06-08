import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Homepage from '../Pages/Home'
import Contectpage from '../Pages/Contect'
import Aboutpage from '../Pages/About'
import Errorpage from '../Pages/Error'
import Singlepage from '../Pages/SingleProduct'
export default function RouterHandle(){
    return(
  <BrowserRouter>
<Routes>
<Route path='/' element={<Homepage/>}/>
<Route path='/Home' element={<Homepage/>}/>
<Route path='/Contect' element={<Contectpage/>}/>
<Route path='/SingleProduct/:id' element={<Singlepage/>}/>
<Route path='/About/:username' element={<Aboutpage/>}/>
<Route path='/*' element={<Errorpage/>}/>
</Routes>
    </BrowserRouter>
  
    )
}