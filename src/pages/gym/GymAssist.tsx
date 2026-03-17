import { Link } from 'react-router-dom';
import { ArrowLeft, Dumbbell } from 'lucide-react';

const exerciseTypes = ['Cardio', 'Strength', 'Flexibility', 'HIIT', 'Yoga', 'Calisthenics'];

export default function GymAssist() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <Link to="/dashboard" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="w-4 h-4" /> Dashboard
        </Link>
        <h1 className="font-display text-3xl font-bold mb-2">Gym Assist</h1>
        <p className="text-muted-foreground mb-8">Training sessions & exercise types</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {exerciseTypes.map((type) => (
            <div key={type} className="glass-card rounded-xl p-5 flex items-center gap-3 cursor-pointer hover:-translate-y-0.5 transition-transform">
              <Dumbbell className="w-5 h-5 text-accent-cyan" />
              <span className="font-medium">{type}</span>
            </div>
          ))}
        </div>
        <div className="mt-8 glass-card rounded-xl p-6 text-center">
          <p className="text-muted-foreground">Full exercise library and training sessions coming in Phase 2.</p>
        </div>
      </div>
    </div>
  );
}
