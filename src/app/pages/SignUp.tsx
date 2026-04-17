import { Navigation } from '@/app/components/Navigation';
import { Footer } from '@/app/components/Footer';
import { StandardButton } from '@/app/components/ui/standard-button';
import { Mail, Lock, User } from 'lucide-react';

export default function SignUp() {
  return (
    <>
      <Navigation />
      
      {/* Full Page Container - Responsive Auto Layout */}
      <div className="min-h-screen bg-gradient-to-br from-[#F8FAFC] to-white flex items-center justify-center px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        
        {/* Card Container - Responsive Width & Padding */}
        <div className="w-full max-w-[440px] sm:max-w-[420px]">
          
          {/* Sign Up Card */}
          <div className="bg-white border border-[#E2E8F0] rounded-2xl shadow-sm px-6 py-8 sm:px-8 sm:py-10">
            
            {/* Header Section - Auto Layout Stack */}
            <div className="space-y-2 mb-6 sm:mb-8">
              <h1 className="text-2xl sm:text-3xl font-bold text-[#0F172A] text-center leading-tight">
                Create Account
              </h1>
              <p className="text-sm sm:text-base text-[#64748B] text-center leading-relaxed">
                Start your study abroad journey
              </p>
            </div>

            {/* Form - Auto Layout Stack */}
            <form className="space-y-4 sm:space-y-5">
              
              {/* Full Name Input Field */}
              <div className="space-y-2">
                <label htmlFor="fullname" className="block text-sm font-medium text-[#0F172A]">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
                    <User className="h-4 w-4 sm:h-5 sm:w-5 text-[#64748B]" />
                  </div>
                  <input
                    type="text"
                    id="fullname"
                    className="w-full pl-9 sm:pl-11 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent text-gray-900 placeholder:text-gray-400"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              {/* Email Input Field */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-[#0F172A]">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-[#64748B]" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    className="w-full pl-9 sm:pl-11 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent text-gray-900 placeholder:text-gray-400"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              {/* Password Input Field */}
              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-[#0F172A]">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
                    <Lock className="h-4 w-4 sm:h-5 sm:w-5 text-[#64748B]" />
                  </div>
                  <input
                    type="password"
                    id="password"
                    className="w-full pl-9 sm:pl-11 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent text-gray-900 placeholder:text-gray-400"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              {/* Confirm Password Input Field */}
              <div className="space-y-2">
                <label htmlFor="confirm-password" className="block text-sm font-medium text-[#0F172A]">
                  Confirm Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
                    <Lock className="h-4 w-4 sm:h-5 sm:w-5 text-[#64748B]" />
                  </div>
                  <input
                    type="password"
                    id="confirm-password"
                    className="w-full pl-9 sm:pl-11 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent text-gray-900 placeholder:text-gray-400"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              {/* Terms & Conditions Checkbox */}
              <div className="pt-1">
                <label className="flex items-start cursor-pointer group">
                  <input
                    type="checkbox"
                    className="w-4 h-4 mt-0.5 border-[#E2E8F0] rounded text-[#4B6E48] focus:ring-[#4B6E48] cursor-pointer flex-shrink-0"
                  />
                  <span className="ml-2 text-sm text-[#64748B] group-hover:text-[#0F172A] transition-colors leading-relaxed">
                    I agree to the{' '}
                    <a href="/terms" className="text-[#4B6E48] hover:underline">Terms of Service</a>
                    {' '}and{' '}
                    <a href="/privacy" className="text-[#4B6E48] hover:underline">Privacy Policy</a>
                  </span>
                </label>
              </div>

              {/* Sign Up Button - Full Width */}
              <div className="pt-2">
                <StandardButton
                  type="submit"
                  className="w-full !h-11 sm:!h-12 !text-sm sm:!text-base"
                >
                  Create Account
                </StandardButton>
              </div>
            </form>

            {/* Divider */}
            <div className="relative my-6 sm:my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#E2E8F0]"></div>
              </div>
            </div>

            {/* Sign In CTA - Centered, No Wrapping */}
            <div className="text-center">
              <p className="text-sm text-[#64748B]">
                Already have an account?{' '}
                <a 
                  href="/signin" 
                  className="text-[#4B6E48] font-semibold hover:text-[#3d5a3a] hover:underline transition-colors whitespace-nowrap"
                >
                  Sign in
                </a>
              </p>
            </div>
          </div>

          {/* Helper Text Below Card */}
          <p className="mt-6 text-center text-xs sm:text-sm text-[#64748B]">
            By creating an account, you'll get access to personalized university recommendations, application tracking, and expert guidance.
          </p>
        </div>
      </div>
      
      <Footer />
    </>
  );
}
