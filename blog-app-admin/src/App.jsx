import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogIn from './components/log-in';
import MainLayout from './components/main-layout';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <ToastContainer pauseOnHover={false} autoClose={1000} position="top-left" />
      <BrowserRouter>
        <Routes>
          <Route path="/log-in" element={<LogIn />} />
          <Route path="/" element={<MainLayout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;