import { useState } from 'react';
import './Blogs.css';

export default function Blogs() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const blogs = [
    {
      id: 1,
      title: "The Leap You've Been Meaning to Take Starts Here",
      excerpt: "You've whispered to yourself for months: 'I want to work in tech, I know product might be for me.' But then life happens — doubts, distractions, the quiet fear of not being ready. This masterclass is your reminder that growth never comes with guarantees, only courage. It's your time to stop watching and start becoming.",
      content: "You've whispered to yourself for months: 'I want to work in tech, I know product might be for me.' But then life happens — doubts, distractions, the quiet fear of not being ready. This masterclass is your reminder that growth never comes with guarantees, only courage. It's your time to stop watching and start becoming.\n\nIn this comprehensive guide, we'll walk you through the exact steps to transition into product management. From building the right mindset to acquiring practical skills, we cover everything you need to make that leap. You'll learn how to overcome imposter syndrome, build a portfolio that stands out, and navigate the job market with confidence.\n\nRemember: every successful product manager started exactly where you are now. The difference is they took that first step. This is your moment to stop planning and start doing.",
      author: "Young Techiez Team",
      date: "March 15, 2024",
      category: "Career Growth",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=900&q=80",
      link: "#"
    },
    {
      id: 2,
      title: "Building in Africa — The Real Story",
      excerpt: "Behind every African startup is a story of grit, heart, and vision. Product managers here aren't just shipping features — they're solving real problems shaped by context, community, and constraint.",
      content: "Behind every African startup is a story of grit, heart, and vision. Product managers here aren't just shipping features — they're solving real problems shaped by context, community, and constraint. Explore how local innovation is rewriting global tech norms and why the next big product story might just be yours.\n\nIn Lagos, product teams are building fintech solutions that serve the unbanked. In Nairobi, they're creating agritech platforms that help smallholder farmers maximize yields. In Accra, they're developing edtech tools that make quality education accessible to all.\n\nThe African product manager operates in a unique environment—one where infrastructure challenges meet incredible opportunity, where limited resources fuel boundless creativity. They understand that building for Africa means understanding local contexts, respecting cultural nuances, and solving problems that truly matter to the people they serve.\n\nThis isn't just about technology; it's about impact. It's about creating solutions that improve lives, create jobs, and drive economic growth across the continent.",
      author: "Young Techiez Team",
      date: "March 10, 2024",
      category: "African Tech",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=900&q=80",
      link: "#"
    },
    {
      id: 3,
      title: "Inside the Product Mindset",
      excerpt: "Becoming a Product Manager isn't about memorizing frameworks — it's about learning to see differently. Every feature becomes a hypothesis, every user pain a story worth solving.",
      content: "Becoming a Product Manager isn't about memorizing frameworks — it's about learning to see differently. Every feature becomes a hypothesis, every user pain a story worth solving. In this post, we unpack how to think strategically, communicate clearly, and lead confidently, even before you land the title.\n\nThe product mindset begins with curiosity. It's about asking 'why' until you reach the fundamental human need behind every feature request. It's about balancing data with intuition, and knowing when to trust each.\n\nGreat product managers don't just manage—they envision. They see the future state of the product and work backward to make it reality. They understand that their primary job isn't to build features, but to solve problems for real people.\n\nWe'll explore the core principles that define the product mindset: customer obsession, bias for action, thinking big, and diving deep. These aren't just buzzwords—they're the daily practices that separate good PMs from great ones.",
      author: "Young Techiez Team",
      date: "March 5, 2024",
      category: "Product Mindset",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
      link: "#"
    },
    {
      id: 4,
      title: "Why Product Managers Fail (and How You Won't)",
      excerpt: "The truth? Most PMs fail not because they lack skill — but because they lose connection. With the customer. With the team. With the 'why'.",
      content: "The truth? Most PMs fail not because they lack skill — but because they lose connection. With the customer. With the team. With the 'why'. We'll walk through the common pitfalls and the habits that separate the great from the good — empathy, clarity, and the courage to make hard calls.\n\nOne of the biggest reasons PMs fail is losing touch with users. When you stop talking to customers regularly, you start making assumptions. Those assumptions lead to building features nobody wants or needs.\n\nAnother common pitfall is poor communication. Product management is fundamentally about alignment—getting engineers, designers, marketers, and executives all moving in the same direction. When communication breaks down, the product suffers.\n\nWe'll share practical strategies to stay connected: regular user interviews, transparent roadmaps, clear success metrics, and the discipline of saying 'no' to good ideas that don't serve your core vision.",
      author: "Young Techiez Team",
      date: "February 28, 2024",
      category: "Career Advice",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=900&q=80",
      link: "#"
    },
    {
      id: 5,
      title: "Learning by Doing: The Only Way Forward",
      excerpt: "You can't YouTube your way into Product. You grow by building — by breaking things, asking questions, and learning in the mess.",
      content: "You can't YouTube your way into Product. You grow by building — by breaking things, asking questions, and learning in the mess. Discover how real-world simulations and role-plays prepare you for the chaos of real product work and turn uncertainty into mastery.\n\nTheoretical knowledge only gets you so far. True product mastery comes from applying concepts in real situations, making mistakes, and learning from them. That's why we emphasize hands-on learning through projects, case studies, and simulations.\n\nIn our approach, you'll work on real product challenges from day one. You'll learn how to conduct user research, define product requirements, create wireframes, and present your ideas to stakeholders. You'll get feedback from experienced product leaders and iterate on your work.\n\nThis isn't about getting the right answer—it's about developing the right process. It's about building the muscle memory you need to navigate the ambiguous, fast-paced world of product management with confidence and competence.",
      author: "Young Techiez Team",
      date: "February 22, 2024",
      category: "Learning",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80",
      link: "#"
    },
    {
      id: 6,
      title: "Young Techiez: The Show",
      excerpt: "Every episode of Young Techiez is a front-row seat to Africa's tech evolution. Founders, engineers, and dreamers share the stories behind the code.",
      content: "Every episode of Young Techiez is a front-row seat to Africa's tech evolution. Founders, engineers, and dreamers share the stories behind the code — the sleepless nights, the small wins, and the lessons that fuel big change. It's real, it's raw, and it's the reminder that you're not building alone.\n\nThrough our interviews and documentaries, we bring you inside the most exciting tech companies across Africa. You'll meet the visionaries building the future and learn from their journeys—the successes, the failures, and the hard-won lessons.\n\nOur show covers everything from early-stage startups to scale-ups making international impact. We explore the unique challenges of building tech in Africa and celebrate the innovations that are changing lives across the continent.\n\nWhether you're an aspiring founder, a curious developer, or someone who wants to understand Africa's tech revolution, Young Techiez: The Show gives you an authentic look at the people and products shaping our digital future.",
      author: "Young Techiez Team",
      date: "February 18, 2024",
      category: "Young Techiez",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
      link: "https://www.youtube.com/@Young_Techiez"
    }
  ];

  const openBlog = (blog) => {
    setSelectedBlog(blog);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeBlog = () => {
    setSelectedBlog(null);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF4FA3] to-[#212121]"></div>
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#212121] mb-5 leading-tight">
              Young Techiez Blog
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#FF4FA3] mb-6">
              Insights for Aspiring Product Leaders
            </h2>
            <p className="text-lg md:text-xl text-[#757575] max-w-4xl mx-auto leading-relaxed">
              Fresh insights, bold stories, and lessons from those building the future of tech in Africa and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Modal/Detail View */}
      {selectedBlog && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 overflow-y-auto">
          <div className="min-h-screen py-12 px-5">
            <div className="max-w-4xl mx-auto">
              <button
                onClick={closeBlog}
                className="text-white hover:text-[#FF4FA3] transition-colors mb-8 inline-flex items-center gap-2 group"
              >
                <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Blogs
              </button>

              <article className="bg-gray-900 rounded-xl p-8 md:p-12 text-white">
                <div className="mb-6">
                  <span className="inline-block bg-[#FF4FA3] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    {selectedBlog.category}
                  </span>
                  <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-white">
                    {selectedBlog.title}
                  </h1>
                  <div className="flex items-center gap-4 text-gray-400 text-sm">
                    <span>{selectedBlog.author}</span>
                    <span>•</span>
                    <span>{selectedBlog.date}</span>
                    <span>•</span>
                    <span>{selectedBlog.readTime}</span>
                  </div>
                </div>

                <div className="prose prose-invert max-w-none">
                  {selectedBlog.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-lg text-gray-300 mb-6 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="mt-12 pt-8 border-t border-gray-700">
                  <button
                    onClick={closeBlog}
                    className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-semibold text-white bg-gradient-to-br from-[#FF4FA3] to-[#212121] border-2 border-[#FF4FA3] hover:bg-[#E03D8F] hover:border-[#E03D8F] hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-300/30 transition-all duration-300"
                  >
                    Read More Stories
                  </button>
                </div>
              </article>
            </div>
          </div>
        </div>
      )}

      {/* Blogs Grid */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <article
                key={blog.id}
                className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 hover:-translate-y-3 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
                onClick={() => openBlog(blog)}
              >
                <div className="h-48 bg-gradient-to-br from-[#FF4FA3] to-[#212121] flex items-center justify-center text-white text-5xl relative overflow-hidden">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-full object-cover absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                </div>

                <div className="p-8 flex-grow flex flex-col">
                  <div className="mb-3">
                    <span className="inline-block bg-[#FF4FA3] bg-opacity-10 text-[#FF4FA3] px-3 py-1 rounded-full text-xs font-semibold">
                      {blog.category}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-[#212121] mb-4 leading-tight">
                    {blog.title}
                  </h3>

                  <p className="text-[#757575] mb-5 flex-grow leading-relaxed">
                    {blog.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-[#757575] mb-4">
                    <span>{blog.author}</span>
                    <span>{blog.readTime}</span>
                  </div>

                  <button className="text-[#FF4FA3] font-semibold inline-flex items-center hover:text-[#E03D8F] transition-colors group">
                    Read more
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#FF4FA3] to-[#212121] text-white text-center">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            Ready to Start Your Product Journey?
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-90 leading-relaxed">
            Join thousands of aspiring product managers learning the skills they need to build impactful products and advance their careers in tech.
          </p>
          <button
            onClick={() => window.open('mailto:hello@youngtechiez.com', '_blank')}
            className="inline-block px-8 py-3.5 rounded-full font-semibold text-[#FF4FA3] bg-white border-2 border-white hover:bg-gray-50 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
}