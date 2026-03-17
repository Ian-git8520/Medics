import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar } from 'lucide-react';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export default function FitnessPlan() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <Link to="/dashboard" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="w-4 h-4" /> Dashboard
        </Link>
        <h1 className="font-display text-3xl font-bold mb-2">Fitness Plan</h1>
        <p className="text-muted-foreground mb-8">Weekly schedule, goals, diet & monitoring</p>
        <div className="grid grid-cols-1 gap-3">
          {days.map((day) => (
            <div key={day} className="glass-card rounded-xl px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Calendar className="w-4 h-4 text-accent-blue" />
                <span className="font-medium">{day}</span>
              </div>
              <span className="text-sm text-muted-foreground">No plan set</span>
            </div>
          ))}
        </div>
        <div className="mt-6 glass-card rounded-xl p-6 text-center">
          <p className="text-muted-foreground">Full fitness planning with goals, diet tracking, and monitoring charts coming in Phase 4.</p>
        </div>
      </div>
    </div>
  );
}
