
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import StudentData from './assets/Components/StudentData'
import CreateData from './assets/Components/CreaterData'
import EditData from './assets/Components/EditData'
import ViewData from './assets/Components/ViewData'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<StudentData/>}/>
        <Route path='/student/create' element={<CreateData/>}/>
        <Route path='/student/edit/:studentid' element={<EditData/>}/>
        <Route path='/student/view/:studentid' element={<ViewData/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
