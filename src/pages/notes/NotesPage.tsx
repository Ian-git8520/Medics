import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Brain, Image } from 'lucide-react';

const noteTypes = [
  { icon: Brain, label: 'Mnemonics', desc: 'Memory aids for complex topics', color: 'var(--accent-pink)' },
  { icon: FileText, label: 'Study Notes', desc: 'Detailed lecture notes', color: 'var(--accent-cyan)' },
  { icon: Image, label: 'Diagrams', desc: 'Visual learning materials', color: 'var(--accent-orange)' },
];

export default function NotesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <Link to="/dashboard" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="w-4 h-4" /> Dashboard
        </Link>
        <h1 className="font-display text-3xl font-bold mb-2">Notes</h1>
        <p className="text-muted-foreground mb-8">Mnemonics, study notes & diagrams</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {noteTypes.map((n) => (
            <div key={n.label} className="glass-card rounded-xl p-6 text-center cursor-pointer hover:-translate-y-0.5 transition-transform">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: `${n.color}15` }}>
                <n.icon className="w-6 h-6" style={{ color: n.color }} />
              </div>
              <h3 className="font-display font-semibold mb-1">{n.label}</h3>
              <p className="text-xs text-muted-foreground">{n.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 glass-card rounded-xl p-6 text-center">
          <p className="text-muted-foreground">Full notes library with search and bookmarks coming in Phase 3.</p>
        </div>
      </div>
    </div>
  );
}
