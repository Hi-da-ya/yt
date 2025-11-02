import { useState } from 'react';
import './Blogs.css';

export default function Blogs() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const blogs = [
    {
      id: 1,
      title: "How M-Pesa Changed Everything: The Untold Story of Kenya's Mobile Money Revolution",
      excerpt: "Before Silicon Valley took notice, Kenya was already building the future of fintech—one transaction at a time. Here's how a simple idea transformed an entire continent's relationship with money.",
      content: "In 2007, when most of the world was still navigating physical banking, Safaricom launched M-Pesa—a mobile money platform that would revolutionize financial inclusion across Africa. What started as a simple peer-to-peer transfer service in Kenya has grown into a $1 billion revenue generator, reaching over 51 million active users across seven African countries.\n\nThe story behind M-Pesa isn't just about innovation—it's about solving a real problem. In Kenya, where traditional banking infrastructure was limited, people found themselves traveling long distances just to send money to family members. M-Pesa changed that by allowing users to deposit, withdraw, and transfer money using just their mobile phones.\n\nBut here's what most people don't talk about: the failures, the skepticism, and the countless iterations that happened before it became what it is today. The platform faced regulatory hurdles, technical challenges, and initial user resistance. Yet, the team persisted because they believed in solving a problem that mattered on African soil.\n\nToday, M-Pesa processes over $314 billion in transactions annually, proving that when you build for real African challenges, the world takes notice.",
      author: "Amina Kipchoge",
      date: "March 15, 2024",
      category: "Fintech",
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "The Nigerian Startup That's Connecting 500 Million Africans to Affordable Internet",
      excerpt: "While the world debates 5G speeds, one Lagos-based company is solving a problem that matters: making reliable internet accessible to everyone, everywhere—even in the most remote villages.",
      content: "In a small office in Yaba, Lagos, a team of engineers stared at a problem that seemed impossible: How do you provide affordable, reliable internet to 500 million Africans who live in areas where traditional ISPs won't go?\n\nEnter MainOne—a company that didn't wait for permission or perfect conditions. Founded in 2008, MainOne laid the first submarine cable connecting West Africa to Europe, fundamentally changing the internet landscape across Nigeria, Ghana, and beyond.\n\nBut the real story isn't in the infrastructure—it's in what happened next. MainOne didn't just lay cables; they built an entire ecosystem. They created data centers that now host some of Africa's biggest tech companies. They launched cloud services that enabled startups to scale without massive capital investments.\n\nThe numbers speak for themselves: MainOne now connects over 500 million people to faster, more affordable internet. They've reduced internet costs by 70% in some regions and enabled thousands of businesses to go digital.\n\nWhat's most inspiring? They did it while facing funding challenges, regulatory hurdles, and the constant doubt from investors who questioned whether Africa was 'ready.' But readiness isn't about waiting—it's about building.",
      author: "Chukwudi Okoro",
      date: "March 10, 2024",
      category: "Infrastructure",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Why African Developers Are Building the Next Generation of AI Tools",
      excerpt: "Forget what you've heard about AI being a 'Western innovation.' African engineers are not just using AI—they're reimagining it for African problems, and the results are groundbreaking.",
      content: "While the world focuses on ChatGPT and OpenAI, a quiet revolution is happening in Accra, Nairobi, and Cape Town. African developers are building AI tools that solve uniquely African challenges—and they're doing it with limited resources, maximum creativity.\n\nTake Akuapem AI, a Ghanaian startup creating natural language processing tools for local languages like Twi, Ga, and Ewe. While global tech giants focus on English, Akuapem recognized that millions of Africans communicate in languages that mainstream AI ignores.\n\nIn Kenya, DataScience Africa is training machine learning models to predict crop yields for smallholder farmers, directly impacting food security. In Nigeria, Kudi.ai built an AI-powered chatbot that helps people navigate complex banking processes in Pidgin English—a language spoken by millions but rarely supported by tech platforms.\n\nBut here's the kicker: these developers aren't just building tools—they're building ecosystems. They're creating open-source libraries, training datasets in African languages, and mentorship programs that ensure the next generation has the skills to continue this work.\n\nThe lesson? Innovation isn't about having the biggest budget or the latest tools. It's about understanding the problem deeply and building solutions that matter. African developers are proving that when you solve real problems for real people, you don't need permission to innovate—you just need to build.",
      author: "Thabo Mbeki",
      date: "March 5, 2024",
      category: "AI & Innovation",
      readTime: "9 min read"
    },
    {
      id: 4,
      title: "The South African Startup That's Revolutionizing Healthcare in Rural Communities",
      excerpt: "One doctor. 10,000 patients. One app that's changing everything. This is how South Africa's Vula Mobile is bringing specialist healthcare to places where hospitals don't exist.",
      content: "Dr. William Mapham was working in a rural clinic in KwaZulu-Natal when he faced a problem that would change his life—and thousands of others. A patient needed specialist care, but the nearest specialist was 300 kilometers away. The patient couldn't afford the journey, and the specialist couldn't visit every remote clinic.\n\nSo Dr. Mapham did what builders do: he built a solution. Vula Mobile, a telemedicine app, connects rural healthcare workers directly with specialists across South Africa. Using just a smartphone, nurses and doctors can consult with specialists, share medical images, and get expert advice—all in real-time.\n\nSince its launch, Vula Mobile has facilitated over 500,000 consultations, reaching patients in some of the most remote areas of South Africa. But the impact goes beyond numbers: lives are being saved because access to healthcare is no longer determined by geography.\n\nWhat makes this story powerful isn't just the technology—it's the understanding that innovation in Africa requires different thinking. Vula Mobile works on low-end smartphones, functions with limited internet connectivity, and is designed for healthcare workers who might not have extensive tech training.\n\nThis is African tech at its finest: solving real problems, with real constraints, for real people. No fancy conferences, no venture capital hype—just a doctor who saw a problem and decided to build the solution.",
      author: "Nandi Dlamini",
      date: "February 28, 2024",
      category: "Healthtech",
      readTime: "6 min read"
    },
    {
      id: 5,
      title: "From Lagos to the World: How Paystack Became Africa's $200 Million Success Story",
      excerpt: "The real story behind Paystack isn't about Stripe's acquisition—it's about two Nigerian founders who refused to accept that 'online payments in Africa don't work.'",
      content: "In 2016, Shola Akinlade and Ezra Olubi launched Paystack with a simple mission: make online payments work seamlessly for African businesses. Three years later, Stripe acquired the company for over $200 million—the largest tech acquisition in Nigerian history.\n\nBut the acquisition isn't the story. The story is in the years before—the countless rejections, the technical challenges, and the unwavering belief that African businesses deserved better payment infrastructure.\n\nWhen Paystack started, online payments in Nigeria were a nightmare. Banks had different APIs, documentation was scarce, and the entire ecosystem was fragmented. Most startups would have given up. Paystack built bridges—literally connecting 50+ banks through a single, elegant API.\n\nThey didn't just build technology; they built trust. They processed millions of dollars without a single security breach. They created documentation so clear that developers could integrate in minutes. They treated every business—from a one-person startup to a major corporation—with the same level of support.\n\nBy the time Stripe came calling, Paystack was processing 50% of all online payments in Nigeria and expanding across Africa. But here's what's most inspiring: they didn't sell out—they scaled up. The acquisition meant that Paystack's infrastructure could now power businesses globally while maintaining its focus on African markets.\n\nThe lesson? Building for Africa doesn't mean building small. It means building solutions so good that the world takes notice.",
      author: "Funmi Adeyemi",
      date: "February 22, 2024",
      category: "Startups",
      readTime: "8 min read"
    },
    {
      id: 6,
      title: "The Kenyan E-Commerce Platform That's Transforming How Rural Africa Shops",
      excerpt: "While Amazon struggles to reach small towns in America, one Kenyan company is delivering everything from solar panels to smartphones to villages that don't even have postal addresses.",
      content: "In 2016, Tessa Cook and Grant Brooke launched Copia in Nairobi with a radical idea: what if e-commerce worked for people who don't have addresses, bank accounts, or even smartphones?\n\nCopia's model is brilliantly simple: customers place orders through local agents (often small shop owners) using any phone—even a basic feature phone via USSD. Orders are delivered to these agents, and customers pay cash on pickup. No addresses needed. No bank accounts required.\n\nThis might sound like a workaround, but it's actually genius. By leveraging existing trust networks (local shop owners) and working within real constraints (limited internet, cash-based economy), Copia solved the 'last mile' problem that has stumped global e-commerce giants.\n\nToday, Copia serves over 1.2 million customers across Kenya and Uganda, processing millions of orders for everything from farm equipment to consumer electronics. They've created thousands of jobs for local agents and enabled rural communities to access products that were previously out of reach.\n\nWhat's revolutionary isn't the technology—it's the approach. Copia didn't try to force Western e-commerce models onto African realities. They observed, understood, and built something that works within the actual constraints of African markets.\n\nThis is the future of African tech: not copying what works elsewhere, but inventing what works here. And when you do that, you don't just solve local problems—you create models that the world learns from.",
      author: "James Mutua",
      date: "February 18, 2024",
      category: "E-Commerce",
      readTime: "7 min read"
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
            <h1 className="text-4xl md:text-6xl font-bold text-[#212121] mb-6 leading-tight">
              African Tech Stories
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FF4FA3] to-[#212121] rounded-full mx-auto mb-6"></div>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#FF4FA3] mb-4">
              Real Stories. Real Innovation. Real Impact.
            </h2>
            <p className="text-lg md:text-xl text-[#757575] max-w-3xl mx-auto leading-relaxed">
              Behind every successful African tech company, there's a story of grit, innovation, and refusing to accept that 'it can't be done here.' These are those stories.
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
                  <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
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
                    className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-semibold text-white bg-gradient-to-br from-[#FF4FA3] to-[#212121] border-2 border-[#FF4FA3] hover:bg-[#E03D8F] hover:border-[#E03D8F] transition-all duration-300"
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <article
                key={blog.id}
                className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group flex flex-col"
                onClick={() => openBlog(blog)}
              >
                <div className="h-48 bg-gradient-to-br from-[#FF4FA3] to-[#212121] flex items-center justify-center text-white text-5xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
                  <div className="relative z-10 text-6xl opacity-20 group-hover:opacity-30 transition-opacity">
                    {blog.category.charAt(0)}
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <div className="mb-3">
                    <span className="inline-block bg-[#FF4FA3] bg-opacity-10 text-[#FF4FA3] px-3 py-1 rounded-full text-xs font-semibold">
                      {blog.category}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-[#212121] mb-4 leading-tight group-hover:text-[#FF4FA3] transition-colors">
                    {blog.title}
                  </h3>

                  <p className="text-[#757575] mb-5 flex-grow leading-relaxed">
                    {blog.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-[#757575] mb-4">
                    <span>{blog.author}</span>
                    <span>{blog.readTime}</span>
                  </div>

                  <button className="text-[#FF4FA3] font-semibold inline-flex items-center hover:text-[#E03D8F] transition-colors group-hover:gap-2 gap-1">
                    Read more
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            Want to Share Your Story?
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-90">
            Are you building something that matters in African tech? We'd love to hear about it. Real stories from real builders—that's what moves the ecosystem forward.
          </p>
          <button
            onClick={() => window.open('mailto:stories@youngtechiez.com', '_blank')}
            className="inline-block px-8 py-3.5 rounded-full font-semibold text-[#FF4FA3] bg-white border-2 border-white hover:bg-gray-50 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >
            Share Your Story
          </button>
        </div>
      </section>
    </div>
  );
}
