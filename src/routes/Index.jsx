import { Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import AddProjects from '../pages/Add-project';
import Contact from '../pages/Contact';
import Home from '../pages/Home';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AddProjects />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
