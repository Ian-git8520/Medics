import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Trophy, Target } from 'lucide-react';

export default function GymCommunity() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <Link to="/dashboard" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="w-4 h-4" /> Dashboard
        </Link>
        <h1 className="font-display text-3xl font-bold mb-2">Community</h1>
        <p className="text-muted-foreground mb-8">Progress, points, friends & shared goals</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="glass-card rounded-xl p-5 text-center">
            <Trophy className="w-6 h-6 text-accent-orange mx-auto mb-2" />
            <p className="text-2xl font-display font-bold">0</p>
            <p className="text-xs text-muted-foreground">Points</p>
          </div>
          <div className="glass-card rounded-xl p-5 text-center">
            <Users className="w-6 h-6 text-accent-cyan mx-auto mb-2" />
            <p className="text-2xl font-display font-bold">0</p>
            <p className="text-xs text-muted-foreground">Friends</p>
          </div>
          <div className="glass-card rounded-xl p-5 text-center">
            <Target className="w-6 h-6 text-accent-lime mx-auto mb-2" />
            <p className="text-2xl font-display font-bold">0</p>
            <p className="text-xs text-muted-foreground">Goals Met</p>
          </div>
        </div>
        <div className="glass-card rounded-xl p-6 text-center">
          <p className="text-muted-foreground">Community features with leaderboards and social coming in Phase 4.</p>
        </div>
      </div>
    </div>
  );
}
