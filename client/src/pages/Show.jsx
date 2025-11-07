import React, { useState } from 'react';
import { Play, X, PlayCircle } from 'lucide-react';

export default function Show() {
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  // Helper function to extract clean YouTube video IDs
  const extractYouTubeId = (urlOrId) => {
    // If it's already a clean ID, return it
    if (/^[a-zA-Z0-9_-]{11}$/.test(urlOrId)) {
      return urlOrId;
    }
    
    // Extract from various YouTube URL formats
    const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = urlOrId.match(regex);
    
    if (match && match[1]) {
      return match[1];
    }
    
    // If it's a malformed ID with parameters, try to extract the first 11 characters
    const cleanId = urlOrId.substring(0, 11);
    if (/^[a-zA-Z0-9_-]{11}$/.test(cleanId)) {
      return cleanId;
    }
    
    return urlOrId; // fallback
  };

  // Helper function to get reliable thumbnails
  const getYouTubeThumbnail = (videoId) => {
    const cleanId = extractYouTubeId(videoId);
    return `https://i.ytimg.com/vi/${cleanId}/hqdefault.jpg`;
  };

  const episodes = [
    {
      id: "_MjFvnNF4Bc", 
      title: "Why Young Techiez?",
    },
    {
      id: "GwtWuyRF6pE", 
      title: "From 5K Intern to 6-Figure Data scientist: Inside the Tech Grind",
    },
    {
      id: "CdOP-ysaVnE", 
      title: "From a bedsitter in Wendani to working for the biggest tech companies globally",
    },
    {
      id: "lIQNj-_dEfg",
      title: "Quitting School and finding success in tech; Juma Allan’s inspiring Tech journey.",
    },
    {
      id: "YlW_vlCS6Ow", 
      title: "Debugging Success: What They Don't tell you about a successful tech career"
    },
    {
      id: "eKM9MpDvUg4", // Removed &t=143s
      title: "From Burnout to Breakthrough: The Journey to Becoming a Machine Learning Engineer",
    }
  ].map(episode => ({
    ...episode,
    cleanId: extractYouTubeId(episode.id),
    thumbnail: getYouTubeThumbnail(episode.id)
  }));

  const handlePlayClick = (episode) => {
    setSelectedEpisode(episode);
  };

  const closeVideo = () => {
    setSelectedEpisode(null);
  };

  const getYouTubeEmbedUrl = (videoId) => {
    const cleanId = extractYouTubeId(videoId);
    return `https://www.youtube.com/embed/${cleanId}?autoplay=1&rel=0&modestbranding=1`;
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Video Modal */}
      {selectedEpisode && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-6xl">
            <button
              onClick={closeVideo}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10 bg-black bg-opacity-50 rounded-full p-2"
            >
              <X size={24} />
            </button>
            
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
              <iframe
                src={getYouTubeEmbedUrl(selectedEpisode.id)}
                title={selectedEpisode.title}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            <div className="mt-6 text-white text-center">
              <h3 className="text-2xl font-bold">{selectedEpisode.title}</h3>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-white to-gray-100 py-20 md:py-28 text-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-gray-900"></div>
        <div className="max-w-7xl mx-auto px-5">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-5 leading-tight">
          The Side of Tech No One Talks About
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-pink-500 mb-6">
          Uncovering the fear, failure, and self-doubt behind shiny tech careers
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          We see the cars, the trips, the freedom,  but rarely the truth behind it all.
          The <strong>YT Show</strong> peels back the curtain on what it really takes to “make it” in tech: thousands of job applications, 10-hour coding days, months of uncertainty, and seasons of brokenness.
          Through honest conversations with Africa’s top tech voices, we uncover the darkness behind the glamour - we share the hard, human stories that are part of every success story.
          </p>
        </div>
      </section>


      
     {/* Featured Episode */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Story
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div
              className="relative rounded-xl overflow-hidden shadow-2xl group cursor-pointer"
              onClick={() => handlePlayClick(episodes[0])}
            >
              <img
                src={episodes[0].thumbnail}
                alt={episodes[0].title}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.target.src = `https://i.ytimg.com/vi/${episodes[0].cleanId}/hqdefault.jpg`;
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300">
                <div className="w-20 h-20 bg-pink-500 bg-opacity-90 rounded-full flex items-center justify-center text-white transition-all duration-300 group-hover:bg-pink-600 group-hover:scale-110">
                  <Play size={32} fill="white" />
                </div>
              </div>
            </div>

            <div>
              <span className="inline-block bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-5">
                Featured
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                {episodes[0].title}
              </h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Behind every viral success lies a story you were never told — the confusion, the courage, the countless restarts.  
                This is one of those stories.  
                Watch how an idea became a journey, and how that journey continues to inspire the next wave of tech dreamers.
              </p>
              <button
                onClick={() => handlePlayClick(episodes[0])}
                className="bg-gradient-to-br from-[#FF4FA3] to-[#212121] text-white px-8 py-3.5 rounded-full font-semibold border-2 border-pink-500 hover:bg-pink-600 hover:border-pink-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Watch Now
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
              More Stories
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {episodes.map((episode) => (
              <div 
                key={episode.cleanId}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
                onClick={() => handlePlayClick(episode)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={episode.thumbnail}
                    alt={episode.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = `https://i.ytimg.com/vi/${episode.cleanId}/hqdefault.jpg`;
                    }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <PlayCircle size={48} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 text-center">
                    {episode.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-[#FF4FA3] to-[#212121] text-white text-center">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Ready to see what building in Africa really looks like?
            </h2>

            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 opacity-90 leading-relaxed">
              Tune in to <span className="font-semibold">Young Techiez: The Show</span> and experience the stories behind the code,  
              the courage behind the startups, and the lessons that no one tells you in tutorials.  
              These are the conversations that keep you going when the grind feels heavy.
            </p>

            <button
              onClick={() => window.open('https://www.youtube.com/@Young_Techiez', '_blank')}
              className="inline-block px-8 py-3.5 rounded-full font-semibold text-[#FF4FA3] bg-white border-2 border-white hover:bg-gray-50 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >
              Watch The Show
            </button>
          </div>
        </section>

    </div>
  );
}