import { Route, Routes } from 'react-router-dom';
import Adm from './pages/Adm';
import EditNotice from './pages/EditNotice';
import Home from './pages/Home';
import Login from './pages/Login';
import NewNotice from './pages/NewNotice';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/adm" element={<Adm />} />
      <Route path="/notice/new" element={<NewNotice />} />
      <Route path="/notice/edit" element={<EditNotice />} />
    </Routes>
  );
}
