import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-white to-gray-50 text-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF4FA3] to-[#212121]"></div>
        <div className="max-w-7xl mx-auto px-5">
          <h1 className="text-4xl md:text-6xl font-bold text-[#212121] mb-5 leading-tight">
            Where African Tech Gets Real
          </h1>
          <p className="text-lg md:text-xl text-[#757575] max-w-3xl mx-auto mb-10">
            We go beyond the hype. Through our show, we uncover the true stories of building in Africa. At YT School, we teach the skills that actually work on the ground. In our lab, we test what truly scales.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5 mt-8">
            <button
              onClick={() => navigate('/show')}
              className="inline-block px-8 py-3.5 rounded-full font-semibold text-white bg-[#FF4FA3] border-2 border-[#FF4FA3] hover:bg-[#E03D8F] hover:border-[#E03D8F] hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-300/30 transition-all duration-300"
            >
              Watch The Show
            </button>
            <button
              onClick={() => navigate('/product-mastery')}
              className="inline-block px-8 py-3.5 rounded-full font-semibold text-[#212121] bg-transparent border-2 border-[#212121] hover:bg-[#212121] hover:text-white hover:-translate-y-1 transition-all duration-300"
            >
              Learn more about YT School
            </button>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#212121] mb-4">Our Three Pillars</h2>
            <p className="text-[#757575] max-w-2xl mx-auto">
              Three distinct approaches to understanding and advancing African tech
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 hover:-translate-y-3 hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="h-32 bg-gradient-to-br from-[#FF4FA3] to-[#D42D7A] flex items-center justify-center text-white text-5xl">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                </svg>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-xl md:text-2xl font-bold text-[#212121] mb-4">
                  Behind The Tech Success Curtains
                </h3>
                <p className="text-[#757575] mb-5 flex-grow">
                  We showcase Africa's most inspiring Tech stories, while getting the raw view behind the curtains: the failures, the pivots, the hard-won lessons. This is the mentorship you wish you had. These are the people you can hang out with in your room, when it all feels a little much, knowing they too were exactly where you were.
                </p>
                <button 
                  onClick={() => navigate('/show')}
                  className="text-[#FF4FA3] font-semibold inline-flex items-center hover:text-[#E03D8F] transition-colors group"
                >
                  Have a peek
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 hover:-translate-y-3 hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="h-32 bg-gradient-to-br from-[#212121] to-black flex items-center justify-center text-white text-5xl">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-xl md:text-2xl font-bold text-[#212121] mb-4">
                  Skills That Work 'Kwa Ground
                </h3>
                <p className="text-[#757575] mb-5 flex-grow">
                  Tired of theory that fails in practice? We use performance art and real-world simulation to teach product sense, no-code automation, and essential tech skills. Learn by doing, in contexts that mirror Africa's unique challenges.
                </p>
                <button 
                  onClick={() => navigate('/product-mastery')}
                  className="text-[#FF4FA3] font-semibold inline-flex items-center hover:text-[#E03D8F] transition-colors group"
                >
                  Make the jump
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 hover:-translate-y-3 hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="h-32 bg-gradient-to-br from-[#FF4FA3] to-[#212121] flex items-center justify-center text-white text-5xl">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-xl md:text-2xl font-bold text-[#212121] mb-4">
                  The African Tech Thesis
                </h3>
                <p className="text-[#757575] mb-5 flex-grow">
                  What business models actually work here? We're building, testing, and validating tech ventures in real-time to answer one critical question: What does it take to build a scalable tech business in Africa?
                </p>
                <button
                  onClick={() => navigate('/show')}
                  className="text-[#FF4FA3] font-semibold inline-flex items-center hover:text-[#E03D8F] transition-colors group"
                >
                  Follow Our Journey
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
      <section className="py-20 bg-gradient-to-br from-[#FF4FA3] to-[#E03D8F] text-white text-center">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            Ready to move beyond theory and into practice?
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-90">
            Join thousands of African tech enthusiasts who are building the future with practical skills and real-world insights.
          </p>
          <button
            onClick={() => navigate('/product-mastery')}
            className="inline-block px-8 py-3.5 rounded-full font-semibold text-[#FF4FA3] bg-white border-2 border-white hover:bg-gray-50 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >
            Explore YT School
          </button>
        </div>
      </section>

      {/* Footer */}
     
    </div>
  );
}