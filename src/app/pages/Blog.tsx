import { Footer } from '@/app/components/Footer';
import { Navigation } from '@/app/components/Navigation';

export default function Blog() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-gray-400">Coming Soon</p>
        </div>
      </div>
      <Footer />
    </>
  );
}