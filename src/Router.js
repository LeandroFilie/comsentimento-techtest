import { Route, Routes } from 'react-router-dom';
import Adm from './pages/Adm';
import EditNotice from './pages/EditNotice';
import Home from './pages/Home';
import Login from './pages/Login';
import NewNotice from './pages/NewNotice';
import ProtectedRoute from './components/ProtectedRoute';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/adm" element={<ProtectedRoute><Adm /></ProtectedRoute>} />
      <Route path="/notice" element={<ProtectedRoute><NewNotice /></ProtectedRoute>} />
      <Route path="/notice/:id" element={<ProtectedRoute><EditNotice /></ProtectedRoute>} />
    </Routes>
  );
}
