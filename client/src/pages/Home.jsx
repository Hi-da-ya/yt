import { useNavigate } from 'react-router-dom';
import heropic from "../assets/heropic.jpeg"

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
        {/* Top gradient border */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF4FA3] to-[#212121]"></div>

        <div className="max-w-7xl mx-auto px-5">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

            {/* Left Column - Text Content */}
            <div className="flex-1 text-left">
              {/* Brand Heading */}
              <div className="mb-6">
                <h1 className="text-3xl md:text-4xl font-bold text-[#212121] mb-3">
                  Young Techiez
                </h1>
                <div className="w-20 h-1 bg-gradient-to-r from-[#FF4FA3] to-[#212121] rounded-full"></div>
              </div>

              <h2 className="text-4xl md:text-6xl font-bold text-[#212121] mb-5 leading-tight">
                Where African Tech Gets Real
              </h2>

              <h3 className="text-2xl md:text-4xl font-semibold text-[#FF4FA3] mb-4 leading-tight">
                The Future Isn't Waiting, It's Being Built.
              </h3>

              <h4 className="text-xl md:text-2xl text-[#757575] mb-6 font-medium">
                Real Stories. Real Skills. Real Impact.
              </h4>

              <p className="text-lg md:text-xl text-[#757575] mb-10 leading-relaxed">
                You've seen the hype. The buzzwords. The talk. But here, we go beyond it.  
                At <strong>Young Techiez</strong>, we bring the truth of tech in Africa the wins, the setbacks, and the courage it takes to build something real.  
                In our school, you'll learn by doing. In our lab, you'll test what works.  
                And through our show, you'll see that your journey is part of something bigger.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 mt-8">
                <button
                  onClick={() => navigate('/show')}
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-semibold text-white bg-gradient-to-br from-[#FF4FA3] to-[#212121] border-2 border-[#FF4FA3] hover:bg-[#E03D8F] hover:border-[#E03D8F] hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-300/30 transition-all duration-300"
                >
                  Watch The Show
                </button>

                <button
                  onClick={() => navigate('/product-mastery')}
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-semibold text-[#212121] bg-transparent border-2 border-[#212121] hover:bg-[#212121] hover:text-white hover:-translate-y-1 transition-all duration-300"
                >
                  Learn more about YT School
                </button>
              </div>
            </div>

            {/* Right Column - Image (Hidden on mobile, visible on lg screens and above) */}
            <div className="flex-1 hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-white to-gray-50 p-4">
                <img 
                  src={heropic} 
                  alt="Young Techiez Team" 
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Pillars Section - Two Pillars */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#212121] mb-4">Our Two Pillars</h2>
            <p className="text-[#757575] max-w-2xl mx-auto">
              Two distinct ways we're shaping the next generation of African builders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {/* Pillar 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 hover:-translate-y-3 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              <div className="h-32 bg-gradient-to-br from-[#FF4FA3] to-[#212121] flex items-center justify-center text-white text-5xl">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                </svg>
              </div>
              <div className="p-6 md:p-8 flex-grow flex flex-col">
                <h3 className="text-xl md:text-2xl font-bold text-[#212121] mb-4">
                  Behind The Tech Success Curtains
                </h3>
                <p className="text-[#757575] mb-5 flex-grow">
                  Forget the glossy highlight reels. We pull back the curtain on Africa's most inspiring builders  the missteps, the pivots, the nights it almost didn't work.  
                  This is where honesty meets mentorship.  
                  The stories here remind you: every great founder, creator, and PM started right where you are  unsure, but daring enough to start.
                </p>
                <button
                  onClick={() => navigate('/show')}
                  className="text-[#FF4FA3] font-semibold inline-flex items-center hover:text-[#E03D8F] transition-colors group mt-auto"
                >
                  Have a peek
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 hover:-translate-y-3 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              <div className="h-32 bg-gradient-to-br from-[#212121] to-black flex items-center justify-center text-white text-5xl">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
              <div className="p-6 md:p-8 flex-grow flex flex-col">
                <h3 className="text-xl md:text-2xl font-bold text-[#212121] mb-4">
                  Skills That Work 'Kwa Ground
                </h3>
                <p className="text-[#757575] mb-5 flex-grow">
                  No more learning that looks good on paper but breaks in reality.  
                  We'll train you through real-world simulations  how to solve problems, design solutions, and think like a product manager who ships.  
                  You'll practice in messy, authentic contexts  because that's how Africa builds.
                </p>
                <button
                  onClick={() => navigate('/product-mastery')}
                  className="text-[#FF4FA3] font-semibold inline-flex items-center hover:text-[#E03D8F] transition-colors group mt-auto"
                >
                  Make the jump
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-[#FF4FA3] to-[#212121] text-white text-center">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            Ready to take the leap from dreamer to doer?
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-90">
            Join the movement of African builders rewriting what's possible   
            one story, one skill, one product at a time.  
            This is your moment to step in. We'll guide you the rest of the way.
          </p>
          <button
            onClick={() => navigate('/product-mastery')}
            className="inline-block px-8 py-3.5 rounded-full font-semibold text-[#FF4FA3] bg-white border-2 border-white hover:bg-gray-50 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >
            Explore YT School
          </button>
        </div>
      </section>
    </div>
  );
}