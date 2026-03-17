import { Link } from 'react-router-dom';
import { ArrowLeft, HelpCircle } from 'lucide-react';

const questionTypes = ['Short-Structured', 'Applications', 'Description'];

export default function UnitQuestions() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <Link to="/dashboard" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="w-4 h-4" /> Dashboard
        </Link>
        <h1 className="font-display text-3xl font-bold mb-2">Unit Questions & Answers</h1>
        <p className="text-muted-foreground mb-8">Practice with categorized questions</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {questionTypes.map((type) => (
            <div key={type} className="glass-card rounded-xl p-6 text-center cursor-pointer hover:-translate-y-0.5 transition-transform">
              <HelpCircle className="w-8 h-8 text-accent-orange mx-auto mb-3" />
              <h3 className="font-display font-semibold">{type}</h3>
              <p className="text-xs text-muted-foreground mt-1">0 questions</p>
            </div>
          ))}
        </div>
        <div className="mt-8 glass-card rounded-xl p-6 text-center">
          <p className="text-muted-foreground">Q&A bank with answers and explanations coming in Phase 3.</p>
        </div>
      </div>
    </div>
  );
}
