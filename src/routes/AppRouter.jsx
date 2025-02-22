import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Start from '@pages/Start';
import DataForm from '@pages/DataForm';
import Diseases from '@pages/Diseases';
import FAQ from '@pages/FAQ';
import Gender from '@pages/Gender';
import MyIMC from '@pages/MyIMC';
import MyProfile from '@pages/MyProfile';
import NutPlans from '@pages/NutPlans';
import NotFound from '@pages/NotFound'; 

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/data-form" element={<DataForm />} />
        <Route path="/diseases" element={<Diseases />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/gender" element={<Gender />} />
        <Route path="/my-imc" element={<MyIMC />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/nut-plans" element={<NutPlans />} />
        <Route path="/not-found" element={<NotFound />} /> 
      </Routes>
    </Router>
  );
};

export default AppRouter;