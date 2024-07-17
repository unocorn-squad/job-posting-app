import { Routes, Route } from 'react-router-dom';

import Error from './pages/Error';
import JobDetails from './pages/JobDetails';
import JobSearch from './pages/JobSearch';

function App() {
  return (
    <Routes>
      <Route path='/' element={<JobSearch />} />
      <Route path='jobs/:jobId' element={<JobDetails />} />
      <Route path='*' element={<Error />} />
    </Routes>
  );
}

export default App;
