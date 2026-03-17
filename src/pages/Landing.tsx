import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Activity, Dumbbell, BookOpen, Heart, MapPin, Calendar,
  Users, FileText, HelpCircle, Stethoscope, Clock, MessageCircle,
  ArrowRight, Zap, Shield, ChevronRight
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const gymFeatures = [
  { icon: Heart, label: 'Health Monitor', desc: 'Track heart rate, steps, calories & more', path: '/gym/health-monitor', color: 'var(--accent-lime)' },
  { icon: Dumbbell, label: 'Gym Assist', desc: 'Training sessions & exercise guides', path: '/gym/assist', color: 'var(--accent-cyan)' },
  { icon: Shield, label: 'Guidelines', desc: 'Etiquette, safety & workout tips', path: '/gym/guidelines', color: 'var(--accent-orange)' },
  { icon: MapPin, label: 'Gym Finder', desc: 'Find gyms near you with reviews', path: '/gym/finder', color: 'var(--accent-pink)' },
  { icon: Calendar, label: 'Fitness Plan', desc: 'Weekly schedules, goals & diet', path: '/gym/fitness-plan', color: 'var(--accent-blue)' },
  { icon: Users, label: 'Community', desc: 'Progress tracking & leaderboards', path: '/gym/community', color: 'var(--accent-purple)' },
];

const notesFeatures = [
  { icon: BookOpen, label: 'Courses', desc: 'MBBS, Nursing, Pharmacy & more', path: '/notes/courses', color: 'var(--accent-blue)' },
  { icon: FileText, label: 'Notes', desc: 'Mnemonics, diagrams & study aids', path: '/notes/notes', color: 'var(--accent-cyan)' },
  { icon: HelpCircle, label: 'Q&A', desc: 'Unit questions with answers', path: '/notes/questions', color: 'var(--accent-orange)' },
  { icon: Stethoscope, label: 'Practicals', desc: 'Step-by-step procedures', path: '/notes/practicals', color: 'var(--accent-pink)' },
  { icon: Clock, label: 'Schedule', desc: 'Study planning & advice', path: '/notes/schedule', color: 'var(--accent-lime)' },
  { icon: MessageCircle, label: 'Community', desc: 'Chat with fellow students', path: '/notes/community', color: 'var(--accent-purple)' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  })
};

export default function Landing() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="font-display text-xl font-bold tracking-tight">
            <span className="gradient-text">Vita</span>
            <span className="text-foreground">Hub</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <a href="#gym" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Gym</a>
            <a href="#notes" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Notes</a>
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
          </div>
          <div className="flex items-center gap-3">
            {user ? (
              <Link
                to="/dashboard"
                className="bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Dashboard
              </Link>
            ) : (
              <>
                <Link to="/auth" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Sign In
                </Link>
                <Link
                  to="/auth"
                  className="bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background effects */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-cyan/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-secondary/80 border border-border rounded-full px-4 py-1.5 mb-8">
              <Zap className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-medium text-muted-foreground">Your Complete Health & Study Platform</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
          >
            Train Your{' '}
            <span className="gradient-text">Body</span>
            <br />
            Sharpen Your{' '}
            <span className="gradient-text">Mind</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            One platform for fitness tracking, gym discovery, medical study notes, and community — 
            designed for health science students and fitness enthusiasts.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/auth"
              className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-3.5 rounded-xl text-sm font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2 glow-lime"
            >
              Start Free <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#gym"
              className="w-full sm:w-auto border border-border text-foreground px-8 py-3.5 rounded-xl text-sm font-semibold hover:bg-secondary transition-all flex items-center justify-center gap-2"
            >
              Explore Features
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-3 gap-8 max-w-lg mx-auto mt-16 pt-8 border-t border-border/50"
          >
            {[
              { value: '10+', label: 'Medical Courses' },
              { value: '24/7', label: 'Health Tracking' },
              { value: '∞', label: 'Study Resources' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-display font-bold text-foreground">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gym Section */}
      <section id="gym" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Activity className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Fitness Suite</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-3">
              Everything for your <span className="gradient-text">fitness journey</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              Monitor health, find gyms, plan workouts, and connect with a fitness community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {gymFeatures.map((f, i) => (
              <motion.div
                key={f.path}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Link
                  to={user ? f.path : '/auth'}
                  className="glass-card rounded-2xl p-6 block group transition-all duration-300 hover:-translate-y-1"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${f.color}15` }}
                  >
                    <f.icon className="w-5 h-5" style={{ color: f.color }} />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-1.5">{f.label}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{f.desc}</p>
                  <div className="flex items-center text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors">
                    Explore <ChevronRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Notes Section */}
      <section id="notes" className="py-24 px-6 border-t border-border/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent-blue/10 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-accent-blue" />
              </div>
              <span className="text-sm font-semibold text-accent-blue uppercase tracking-wider">Study Hub</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-3">
              Medical notes, <span className="gradient-text">simplified</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              Access course materials, mnemonics, practice questions, and connect with classmates.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {notesFeatures.map((f, i) => (
              <motion.div
                key={f.path}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Link
                  to={user ? f.path : '/auth'}
                  className="glass-card rounded-2xl p-6 block group transition-all duration-300 hover:-translate-y-1"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${f.color}15` }}
                  >
                    <f.icon className="w-5 h-5" style={{ color: f.color }} />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-1.5">{f.label}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{f.desc}</p>
                  <div className="flex items-center text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors">
                    Explore <ChevronRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-border/30">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Ready to get started?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Join VitaHub and take control of your fitness and studies today.
            </p>
            <Link
              to="/auth"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-xl text-sm font-semibold hover:opacity-90 transition-all glow-lime"
            >
              Create Free Account <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/30 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-display text-sm font-semibold">
            <span className="gradient-text">Vita</span>Hub
          </div>
          <p className="text-xs text-muted-foreground">© 2026 VitaHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
