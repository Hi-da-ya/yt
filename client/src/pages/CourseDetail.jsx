import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const courseData = {
  'product-mastery': {
    title: 'Product Management',
    subtitle: 'Choose Your Learning Path: Masterclass or Full Immersion',
    duration: "",
    description:
      "You've whispered it for months: 'I want to work in tech, I know product might be for me.' Stop whispering. This is your NOW. Whether you're exploring product management or ready to dive deep, we have the right path for you.",
    icon: (
      <svg className="w-12 h-12 md:w-16 md:h-16" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      </svg>
    ),
    programOptions: {
      masterclass: {
        title: '5-Day Masterclass',
        subtitle: 'Learn the Fundamentals. Build Your First Product Case.',
        description: 'Perfect for beginners curious about Product Management or professionals exploring a tech transition. In five evenings, you\'ll get hands-on experience in product thinking, discovery, design, and storytelling: all guided by African market case studies.',
        duration: '5 days (Evening classes, 7 PM – 9 PM)',
        idealFor: 'Non-technical professionals exploring product roles',
        curriculum: [
          {
            day: 1,
            topic: 'Product Management 101',
            details: 'First group exercise, and take-home project'
          },
          {
            day: 2,
            topic: 'Understanding problems, discovery, user research, and prioritization',
            details: ''
          },
          {
            day: 3,
            topic: 'Prototyping, experimentation, metrics, and sprint planning',
            details: ''
          },
          {
            day: 4,
            topic: 'Product analytics, iteration, and portfolio building',
            details: ''
          },
          {
            day: 5,
            topic: 'Presentations, guest PM session, and micro-certificates',
            details: ''
          }
        ],
        outcome: "You'll leave with your first mini-portfolio and the confidence to start your PM journey.",
        cta: 'Join the 5-Day Masterclass'
      },
      fullProgram: {
        title: 'The Full Product Program',
        subtitle: 'Go Deep. Become the PM Every Team Wants.',
        description: 'Ready to go beyond the basics? In this immersive 6-week journey, you\'ll learn to lead products from idea to launch — mastering strategy, analysis, communication, and the tech confidence every great PM needs.',
        duration: '6 Weeks (1½ Months)',
        idealFor: 'Serious learners ready for career transition',
        curriculum: [
          {
            module: 'Advanced Product Discovery & Strategy',
            details: 'Go from user problems to scalable solutions'
          },
          {
            module: 'Technology for PMs',
            details: 'Understand how products are built: tech stacks, APIs, no-code tools, and system thinking (without needing to code)'
          },
          {
            module: 'Data & Product Analytics',
            details: 'Make confident, data-backed decisions'
          },
          {
            module: 'Agile, Sprints & Collaboration',
            details: 'Lead designers, devs, and business teams effectively'
          },
          {
            module: 'Real African Market Projects',
            details: 'Work on simulations and live briefs'
          },
          {
            module: 'Career Prep',
            details: 'Portfolio building, resume refinement, and interview coaching'
          }
        ],
        outcome: "By the end, you'll not just 'get' Product — you'll own it. You'll be able to speak the language of engineers, translate business needs into tech outcomes, and lead with clarity.",
        certificate: 'Certificate, Portfolio, and Job-Ready Confidence',
        cta: 'Apply for the Full Program'
      }
    }
  }
}

const CourseDetail = () => {
  const { courseId } = useParams()
  const navigate = useNavigate()
  const [openPhase, setOpenPhase] = useState(null)
  const [selectedProgram, setSelectedProgram] = useState('masterclass')
  const course = courseData[courseId]

  if (!course) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="text-center max-w-sm w-full">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Course not found</h2>
          <button 
            onClick={() => navigate('/product-mastery')} 
            className="bg-[#FF4FA3] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#E03D8F] transition-colors w-full"
          >
            Back to Courses
          </button>
        </div>
      </div>
    )
  }

  const program = course.programOptions[selectedProgram]
  const isMasterclass = selectedProgram === 'masterclass'

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Back Button */}
        <button 
          onClick={() => navigate('/product-mastery')}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-6 sm:mb-8 transition-colors text-sm sm:text-base"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Courses
        </button>

        {/* Header */}
        <div className="bg-gradient-to-br from-[#FF4FA3] to-[#212121] rounded-2xl p-6 sm:p-8 text-white mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="bg-white/20 p-3 sm:p-4 rounded-2xl self-start">
              {course.icon}
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 leading-tight">{course.title}</h1>
              <p className="text-base sm:text-xl opacity-90 mb-4 leading-relaxed">{course.subtitle}</p>
              <span className="inline-block bg-white/20 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                {course.duration}
              </span>
            </div>
          </div>
        </div>

        {/* Program Selection Tabs */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 border-b-2 border-gray-200 pb-4">
            <button
              className={`py-3 sm:py-4 px-4 sm:px-6 rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base ${
                selectedProgram === 'masterclass'
                  ? 'bg-gradient-to-r from-[#FF4FA3] to-[#212121] text-white shadow-lg shadow-pink-500/30'
                  : 'bg-white text-gray-600 border-2 border-gray-200 hover:border-[#FF4FA3] hover:text-[#FF4FA3]'
              }`}
              onClick={() => setSelectedProgram('masterclass')}
            >
              5-Day Masterclass
            </button>
            <button
              className={`py-3 sm:py-4 px-4 sm:px-6 rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base ${
                selectedProgram === 'fullProgram'
                  ? 'bg-gradient-to-r from-[#FF4FA3] to-[#212121] text-white shadow-lg shadow-pink-500/30'
                  : 'bg-white text-gray-600 border-2 border-gray-200 hover:border-[#FF4FA3] hover:text-[#FF4FA3]'
              }`}
              onClick={() => setSelectedProgram('fullProgram')}
            >
              Full Program (6 Weeks)
            </button>
          </div>
        </div>

        {/* Program Details */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">{program.title}</h2>
          <p className="text-lg sm:text-xl text-[#FF4FA3] font-semibold italic mb-3 sm:mb-4 leading-relaxed">{program.subtitle}</p>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">{program.description}</p>
          
          {/* Program Meta */}
          <div className="bg-gray-50 rounded-xl p-4 sm:p-6 border-l-4 border-[#FF4FA3] mb-4 sm:mb-6">
            <div className="space-y-2 sm:space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0">
                <span className="font-semibold text-gray-900 text-sm sm:text-base sm:w-28 flex-shrink-0">🕒 Duration:</span>
                <span className="text-gray-600 text-sm sm:text-base">{program.duration}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0">
                <span className="font-semibold text-gray-900 text-sm sm:text-base sm:w-28 flex-shrink-0">🎓 Ideal For:</span>
                <span className="text-gray-600 text-sm sm:text-base">{program.idealFor}</span>
              </div>
              {program.certificate && (
                <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0">
                  <span className="font-semibold text-gray-900 text-sm sm:text-base sm:w-28 flex-shrink-0">📜 Outcome:</span>
                  <span className="text-gray-600 text-sm sm:text-base">{program.certificate}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Curriculum */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            What You'll {isMasterclass ? 'Learn' : 'Master'}
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {program.curriculum.map((item, index) => (
              <div
                key={index}
                className={`bg-white border-2 border-gray-200 rounded-xl transition-all duration-300 ${
                  isMasterclass 
                    ? 'cursor-default hover:border-[#FF4FA3]'
                    : 'cursor-pointer hover:border-[#FF4FA3]'
                }`}
                onClick={!isMasterclass ? () => setOpenPhase(openPhase === index ? null : index) : undefined}
              >
                <div className="p-4 sm:p-6">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="bg-gradient-to-r from-[#FF4FA3] to-[#E03D8F] text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold min-w-16 sm:min-w-20 text-center flex-shrink-0 mt-1">
                      {isMasterclass ? `Day ${item.day}` : `Mod ${index + 1}`}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 leading-tight">
                        {item.topic || item.module}
                      </h3>
                      {/* Show details for masterclass if they exist, otherwise only show for full program when expanded */}
                      {isMasterclass && item.details ? (
                        <p className="text-gray-600 text-sm sm:text-base mt-2 sm:mt-3 leading-relaxed">
                          {item.details}
                        </p>
                      ) : !isMasterclass && openPhase === index && item.details && (
                        <p className="text-gray-600 text-sm sm:text-base mt-2 sm:mt-3 leading-relaxed">
                          {item.details}
                        </p>
                      )}
                    </div>
                    {/* Only show dropdown arrow for full program */}
                    {!isMasterclass && (
                      <svg 
                        className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-400 transition-transform duration-300 flex-shrink-0 mt-1 ${
                          openPhase === index ? 'rotate-180' : ''
                        }`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Outcome */}
        {program.outcome && (
          <div className="mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">What You'll Achieve</h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed bg-blue-50 rounded-xl p-4 sm:p-6 border-l-4 border-blue-500">
              {program.outcome}
            </p>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-[#FF4FA3] to-[#212121] rounded-2xl p-6 sm:p-8 text-white text-center">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 leading-tight">Ready to take the leap??</h3>
          <p className="text-gray-300 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
          We will hold your hand as you grow and as we build our tribe of dreamers and doers helping shape Africa’s digital future
          </p>
          <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:gap-4 justify-center">
            <button className="bg-white text-[#FF4FA3] px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-gray-100 transition-colors shadow-lg w-full sm:w-auto">
            Sign up for the 5 day masterclass
            </button>
            <button 
              className="border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-white hover:text-[#212121] transition-colors w-full sm:w-auto"
            >
              Sign up for Full Program
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseDetail