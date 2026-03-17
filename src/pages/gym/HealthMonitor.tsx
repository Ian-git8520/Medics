import { Link } from 'react-router-dom';
import { ArrowLeft, Heart, Footprints, Flame, Droplets, Moon, Timer, Activity } from 'lucide-react';

const metrics = [
  { icon: Heart, label: 'Heart Rate', value: '--', unit: 'bpm', color: 'var(--accent-pink)' },
  { icon: Footprints, label: 'Steps', value: '--', unit: 'steps', color: 'var(--accent-lime)' },
  { icon: Activity, label: 'Distance', value: '--', unit: 'km', color: 'var(--accent-cyan)' },
  { icon: Timer, label: 'Active Time', value: '--', unit: 'min', color: 'var(--accent-orange)' },
  { icon: Moon, label: 'Sleep', value: '--', unit: 'hrs', color: 'var(--accent-purple)' },
  { icon: Flame, label: 'Calories', value: '--', unit: 'kcal', color: 'var(--accent-pink)' },
  { icon: Droplets, label: 'Water', value: '--', unit: 'glasses', color: 'var(--accent-blue)' },
];

export default function HealthMonitor() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <Link to="/dashboard" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="w-4 h-4" /> Dashboard
        </Link>
        <h1 className="font-display text-3xl font-bold mb-2">Health Monitor</h1>
        <p className="text-muted-foreground mb-8">Track your daily health metrics</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {metrics.map((m) => (
            <div key={m.label} className="glass-card rounded-xl p-5">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: `${m.color}15` }}>
                <m.icon className="w-5 h-5" style={{ color: m.color }} />
              </div>
              <p className="text-xs text-muted-foreground mb-1">{m.label}</p>
              <p className="font-display text-2xl font-bold">{m.value} <span className="text-sm text-muted-foreground font-normal">{m.unit}</span></p>
            </div>
          ))}
        </div>
        <div className="mt-8 glass-card rounded-xl p-6 text-center">
          <p className="text-muted-foreground">Health tracking will be available in Phase 2. Connect your device to start monitoring.</p>
        </div>
      </div>
    </div>
  );
}
