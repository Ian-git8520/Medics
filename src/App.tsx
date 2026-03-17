import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import { AuthProvider } from '@/contexts/AuthContext';
import Landing from '@/pages/Landing';
import Auth from '@/pages/Auth';
import Dashboard from '@/pages/Dashboard';
import ProtectedRoute from '@/components/ProtectedRoute';

// Gym pages
import HealthMonitor from '@/pages/gym/HealthMonitor';
import GymAssist from '@/pages/gym/GymAssist';
import Guidelines from '@/pages/gym/Guidelines';
import GymFinder from '@/pages/gym/GymFinder';
import FitnessPlan from '@/pages/gym/FitnessPlan';
import GymCommunity from '@/pages/gym/GymCommunity';

// Notes pages
import Courses from '@/pages/notes/Courses';
import NotesPage from '@/pages/notes/NotesPage';
import UnitQuestions from '@/pages/notes/UnitQuestions';
import Practicals from '@/pages/notes/Practicals';
import Schedule from '@/pages/notes/Schedule';
import NotesCommunity from '@/pages/notes/NotesCommunity';

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />
          
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            {/* Gym routes */}
            <Route path="/gym/health-monitor" element={<HealthMonitor />} />
            <Route path="/gym/assist" element={<GymAssist />} />
            <Route path="/gym/guidelines" element={<Guidelines />} />
            <Route path="/gym/finder" element={<GymFinder />} />
            <Route path="/gym/fitness-plan" element={<FitnessPlan />} />
            <Route path="/gym/community" element={<GymCommunity />} />
            {/* Notes routes */}
            <Route path="/notes/courses" element={<Courses />} />
            <Route path="/notes/notes" element={<NotesPage />} />
            <Route path="/notes/questions" element={<UnitQuestions />} />
            <Route path="/notes/practicals" element={<Practicals />} />
            <Route path="/notes/schedule" element={<Schedule />} />
            <Route path="/notes/community" element={<NotesCommunity />} />
          </Route>
        </Routes>
        <Toaster />
      </AuthProvider>
    </BrowserRouter>
  );
}
