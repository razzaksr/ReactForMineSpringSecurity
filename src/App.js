import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Menus } from './Navi'
import { Home } from './Home'
import { NewONe } from './NewOne'
import { Edit } from './Edit'
import { Read } from './Read'

const App=()=>{
  return(
  <>
      <BrowserRouter>
        <Menus/>
        <Routes>
          <Route path="/home" exact element={<Home/>}/>
          <Route path="/new" exact element={<NewONe/>}/>
          <Route path="/edit/:id" exact element={<Edit/>}/>
          <Route path="/read/:id" exact element={<Read/>}/>
        </Routes>
      </BrowserRouter>
  </>)
}

export default App;