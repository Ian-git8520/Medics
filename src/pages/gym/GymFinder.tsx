import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Star } from 'lucide-react';

export default function GymFinder() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <Link to="/dashboard" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="w-4 h-4" /> Dashboard
        </Link>
        <h1 className="font-display text-3xl font-bold mb-2">Gym Finder</h1>
        <p className="text-muted-foreground mb-8">Find gyms near you with ratings and pricing</p>
        <div className="glass-card rounded-xl p-6 mb-4">
          <input
            type="text"
            placeholder="Search by location..."
            className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>
        <div className="glass-card rounded-xl p-8 text-center">
          <MapPin className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
          <p className="text-muted-foreground">Gym finder with maps, reviews, and registration coming in Phase 4.</p>
          <div className="flex items-center justify-center gap-1 mt-3 text-accent-orange">
            {[1,2,3,4,5].map((s) => <Star key={s} className="w-4 h-4 fill-current" />)}
          </div>
        </div>
      </div>
    </div>
  );
}
