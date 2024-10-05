import React, { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/route';
import { postRequest } from './service';
import NotFound from './pages/notfound';
import OnSetupLoad from './components/common/onSetupLoad'; 
import Loader from './components/common/admin/components/loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoaderSpinner from './components/loader-spinner';
import { useSelector } from 'react-redux';
const App = () => {
  const loader = useSelector((state) => state.loader.value);  
  const [client, setClient] = useState(null);
  const [isDomain, setIsDomain] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWebData = async () => {
      setLoading(true);
      postRequest(`v1/check-domain`, {})
      .then((res) => {
        console.log('res',res);
        if (res?.success) {
          setClient(res.data); 
          setIsDomain(true);
        } 
        setLoading(false);
      })
      .catch(() =>  console.log(1) )
      .finally(() => {
          
      }); 
    }; 
    fetchWebData();
  }, []); 
  
  console.log('client',client);

  return (
    <>
      <ToastContainer limit={3}/>
      {
         loader && <LoaderSpinner />
      }
         
      {
        loading ? <Loader /> : (
          isDomain ? (
            client && client.status === 1 ? (
              <RouterProvider router={router} />
            ) : (
              <OnSetupLoad /> 
            ) 
          ) : (
               <NotFound />
          )
        )
      } 
    </>
  );
}

export default App;