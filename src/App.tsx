import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { ProjectsPage } from './pages/ProjectsPage';
import { RfidProductPage } from './pages/RfidProductPage';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/products/rfid" element={<RfidProductPage />} />
      </Route>
    </Routes>
  );
}
