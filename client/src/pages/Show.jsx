import React, { useState } from 'react';
import { Play, Calendar, Eye, Menu, X, PlayCircle } from 'lucide-react';

export default function Show() {


  const episodes = [
    {
      id: 1,
      title: "Flutterwave's Pivot Moments",
      description: "How the team navigated regulatory hurdles and rebuilt their product three times before finding product-market fit.",
      duration: "48:22",
      date: "Apr 12, 2023",
      views: "124K",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 2,
      title: "Andela's Hard Reset",
      description: "The internal struggles and difficult decisions when the company had to lay off 400 employees to survive.",
      duration: "52:15",
      date: "Mar 28, 2023",
      views: "98K",
      thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 3,
      title: "Jumia's Logistics Nightmare",
      description: "Building a pan-African e-commerce platform when infrastructure fails and customers distrust online payments.",
      duration: "41:38",
      date: "Mar 15, 2023",
      views: "156K",
      thumbnail: "https://images.unsplash.com/photo-1563017949-9cb106d81672?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 4,
      title: "M-Pesa's Regulatory Battles",
      description: "How Safaricom navigated government pushback and banking resistance to create Africa's most successful fintech.",
      duration: "37:52",
      date: "Feb 27, 2023",
      views: "203K",
      thumbnail: "https://images.unsplash.com/photo-1551836026-d5c8c2d98d33?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 5,
      title: "Interswitch's Near-Death Experience",
      description: "The founder reveals how the company almost collapsed in 2008 and the painful restructuring that saved it.",
      duration: "45:19",
      date: "Feb 14, 2023",
      views: "87K",
      thumbnail: "https://images.unsplash.com/photo-1552664688-cf412ec27db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 6,
      title: "Farmcrowdy's Pivot to Survival",
      description: "How the agri-tech startup shifted its entire business model when initial assumptions proved wrong.",
      duration: "39:45",
      date: "Jan 30, 2023",
      views: "74K",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const handlePlayClick = (title) => {
    alert(`Now playing: ${title}`);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-white to-gray-100 py-20 md:py-28 text-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-gray-900"></div>
        <div className="max-w-7xl mx-auto px-5">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-5 leading-tight">
            The Stories You Never Hear.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
            While others cover funding announcements, we investigate what happens after the press release fails. We sit down with African tech's most persistent builders to unpack their setbacks, their wrong turns, and the resilience that actually built their businesses.
          </p>
        </div>
      </section>

      {/* Featured Episode */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Raw Story</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The latest episode showcasing the real journey behind African tech
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative rounded-xl overflow-hidden shadow-2xl group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Featured Episode"
                className="w-full transition-transform duration-500 group-hover:scale-105"
              />
              <div 
                className="absolute inset-0 flex items-center justify-center"
                onClick={() => handlePlayClick("Building Paystack: The 7-Year Overnight Success")}
              >
                <div className="w-20 h-20 bg-pink-500 bg-opacity-90 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:bg-pink-600 hover:scale-110">
                  <Play size={32} fill="white" />
                </div>
              </div>
            </div>
            
            <div>
              <span className="inline-block bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-5">
                Featured Raw Story
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">
                Building Paystack: The 7-Year Overnight Success
              </h3>
              <p className="text-gray-600 text-lg mb-8">
                Shola Akinlade opens up about the years of rejection, failed product iterations, and near-bankruptcy moments that preceded Paystack's historic acquisition. This is the story of resilience when no one was watching.
              </p>
              <button className="bg-pink-500 text-white px-8 py-3.5 rounded-full font-semibold border-2 border-pink-500 hover:bg-pink-600 hover:border-pink-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                Watch The Honest Truth
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Episode Archive */}
      <section className="py-16 md:py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-12 md:mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Library of Hard-Won Wisdom
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Every conversation is a masterclass in resilience. Browse our archive and learn from the stumbles, failures, and comebacks that shaped Africa's tech landscape.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {episodes.map((episode) => (
              <div 
                key={episode.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                <div className="relative h-44 overflow-hidden group">
                  <img 
                    src={episode.thumbnail}
                    alt={episode.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                    {episode.duration}
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {episode.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {episode.description}
                  </p>
                  <div className="flex justify-between text-gray-700 text-sm">
                    <span className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {episode.date}
                    </span>
                    <span className="flex items-center">
                      <Eye size={14} className="mr-1" />
                      {episode.views} views
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-pink-500 to-pink-600 text-white text-center">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            Get the Truth Before Anyone Else.
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Subscribe to see the unvarnished stories of African tech building.
          </p>
          <button className="bg-white text-pink-500 px-8 py-3.5 rounded-full font-semibold border-2 border-white hover:bg-opacity-90 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            Subscribe on YouTube
          </button>
        </div>
      </section>

            
    </div>
  );
}