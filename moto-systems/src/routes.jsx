import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Record from './pages/record/record';
import Table from './pages/table/table';
import Edition from './pages/edit/edit';

export const AppRoutes = () => {
  return(
   <BrowserRouter>
   <Routes>
      <Route path='/' element={<Table/>} /> 
      <Route path='/record' element={<Record/>} /> 
      <Route path='/editon' element={<Edition/>} /> 
   </Routes>
   </BrowserRouter>
  ) 
};
