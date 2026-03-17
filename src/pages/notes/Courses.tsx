import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen } from 'lucide-react';

const courses = [
  'MBBS', 'Nursing', 'Pharmacy', 'Dentistry', 'Public Health',
  'Clinical Medicine', 'Medical Imaging / Radiology', 'Nutrition',
  'Lab Technology', 'Veterinary Medicine'
];

export default function Courses() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <Link to="/dashboard" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="w-4 h-4" /> Dashboard
        </Link>
        <h1 className="font-display text-3xl font-bold mb-2">Courses</h1>
        <p className="text-muted-foreground mb-8">Browse medical and health science courses</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {courses.map((course) => (
            <div key={course} className="glass-card rounded-xl p-5 flex items-center gap-4 cursor-pointer hover:-translate-y-0.5 transition-transform">
              <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-5 h-5 text-accent-blue" />
              </div>
              <div>
                <h3 className="font-medium">{course}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">View notes & materials</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
