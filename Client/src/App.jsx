import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import publicRouterUser from './routers/routerUser';
import './App.css';
import MainLayout from './layouts/MainLayout';

const App = () => {
  return (
    <>
      <div className='App'>
        <ToastContainer />
        <Routes>
          {publicRouterUser.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                <MainLayout>
                  <route.component />
                </MainLayout>
              }
            />
          ))}
        </Routes>
      </div>
    </>
  );
};

export default App;
