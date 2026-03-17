import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Droplets, AlertTriangle, Users } from 'lucide-react';

const guidelines = [
  { icon: Shield, title: 'Equipment Etiquette', desc: 'Wipe down machines, re-rack weights, share equipment.', color: 'var(--accent-lime)' },
  { icon: Droplets, title: 'Hygiene', desc: 'Bring a towel, wear clean attire, use deodorant.', color: 'var(--accent-cyan)' },
  { icon: AlertTriangle, title: 'Safety', desc: 'Warm up properly, use spotters, know your limits.', color: 'var(--accent-orange)' },
  { icon: Users, title: 'Personal Space', desc: 'Respect others\' space, avoid crowding, be patient.', color: 'var(--accent-purple)' },
];

export default function Guidelines() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <Link to="/dashboard" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="w-4 h-4" /> Dashboard
        </Link>
        <h1 className="font-display text-3xl font-bold mb-2">Guidelines & Tips</h1>
        <p className="text-muted-foreground mb-8">Gym etiquette, safety, and workout tips</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {guidelines.map((g) => (
            <div key={g.title} className="glass-card rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: `${g.color}15` }}>
                <g.icon className="w-5 h-5" style={{ color: g.color }} />
              </div>
              <h3 className="font-display font-semibold mb-2">{g.title}</h3>
              <p className="text-sm text-muted-foreground">{g.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
