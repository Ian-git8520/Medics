import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import {
  Activity, Dumbbell, BookOpen, Heart, MapPin, Calendar,
  Users, FileText, HelpCircle, Stethoscope, Clock, MessageCircle,
  LogOut, Shield, ChevronRight
} from 'lucide-react';

const gymLinks = [
  { icon: Heart, label: 'Health Monitor', path: '/gym/health-monitor', color: 'var(--accent-lime)' },
  { icon: Dumbbell, label: 'Gym Assist', path: '/gym/assist', color: 'var(--accent-cyan)' },
  { icon: Shield, label: 'Guidelines', path: '/gym/guidelines', color: 'var(--accent-orange)' },
  { icon: MapPin, label: 'Gym Finder', path: '/gym/finder', color: 'var(--accent-pink)' },
  { icon: Calendar, label: 'Fitness Plan', path: '/gym/fitness-plan', color: 'var(--accent-blue)' },
  { icon: Users, label: 'Community', path: '/gym/community', color: 'var(--accent-purple)' },
];

const notesLinks = [
  { icon: BookOpen, label: 'Courses', path: '/notes/courses', color: 'var(--accent-blue)' },
  { icon: FileText, label: 'Notes', path: '/notes/notes', color: 'var(--accent-cyan)' },
  { icon: HelpCircle, label: 'Q&A', path: '/notes/questions', color: 'var(--accent-orange)' },
  { icon: Stethoscope, label: 'Practicals', path: '/notes/practicals', color: 'var(--accent-pink)' },
  { icon: Clock, label: 'Schedule', path: '/notes/schedule', color: 'var(--accent-lime)' },
  { icon: MessageCircle, label: 'Community Chat', path: '/notes/community', color: 'var(--accent-purple)' },
];

export default function Dashboard() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const displayName = user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'User';

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <nav className="border-b border-border/50 bg-background/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="font-display text-xl font-bold tracking-tight">
            <span className="gradient-text">Vita</span>Hub
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground hidden sm:block">Hi, {displayName}</span>
            <button
              onClick={handleSignOut}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <LogOut className="w-4 h-4" /> Sign out
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="font-display text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-muted-foreground mb-10">Welcome back, {displayName}. Choose where to start.</p>

        {/* Gym Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
              <Activity className="w-4.5 h-4.5 text-primary" />
            </div>
            <h2 className="font-display text-xl font-semibold">Fitness Suite</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {gymLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="glass-card rounded-xl p-4 group transition-all duration-300 hover:-translate-y-0.5"
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  <item.icon className="w-4 h-4" style={{ color: item.color }} />
                </div>
                <span className="text-sm font-medium text-foreground block">{item.label}</span>
                <ChevronRight className="w-3.5 h-3.5 text-muted-foreground mt-2 group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
              </Link>
            ))}
          </div>
        </div>

        {/* Notes Section */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-lg bg-accent-blue/10 flex items-center justify-center">
              <BookOpen className="w-4.5 h-4.5 text-accent-blue" />
            </div>
            <h2 className="font-display text-xl font-semibold">Study Hub</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {notesLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="glass-card rounded-xl p-4 group transition-all duration-300 hover:-translate-y-0.5"
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  <item.icon className="w-4 h-4" style={{ color: item.color }} />
                </div>
                <span className="text-sm font-medium text-foreground block">{item.label}</span>
                <ChevronRight className="w-3.5 h-3.5 text-muted-foreground mt-2 group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
