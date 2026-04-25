import { Footer } from '@/app/components/Footer';

export default function Newsletter() {
  return (
    <div className="min-h-screen bg-white">
      
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Newsletter</h1>
          <p className="text-lg text-gray-600">
            Monthly updates and announcements
          </p>
        </div>
        
        <div className="mt-16 flex items-center justify-center">
          <p className="text-gray-500">Coming soon...</p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
