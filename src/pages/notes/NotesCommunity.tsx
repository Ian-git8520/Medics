import { Link } from 'react-router-dom';
import { ArrowLeft, MessageCircle } from 'lucide-react';

export default function NotesCommunity() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <Link to="/dashboard" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="w-4 h-4" /> Dashboard
        </Link>
        <h1 className="font-display text-3xl font-bold mb-2">Community Chat</h1>
        <p className="text-muted-foreground mb-8">Connect with fellow students</p>
        <div className="glass-card rounded-xl p-8 text-center">
          <MessageCircle className="w-10 h-10 text-accent-purple mx-auto mb-3" />
          <p className="text-muted-foreground">Community chat with threads and file sharing coming in Phase 4.</p>
        </div>
      </div>
    </div>
  );
}
