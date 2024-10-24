import React from 'react';
import CreditsData from '../../credits.json';

const creditColors = {
    // Production related
    "production": "bg-blue-100 text-blue-800 hover:bg-blue-200",
    "producer": "bg-blue-100 text-blue-800 hover:bg-blue-200",
    "mixing": "bg-purple-100 text-purple-800 hover:bg-purple-200",
    "mastering": "bg-indigo-100 text-indigo-800 hover:bg-indigo-200",
    "engineering": "bg-cyan-100 text-cyan-800 hover:bg-cyan-200",
    
    // Instruments
    "bass guitar": "bg-red-100 text-red-800 hover:bg-red-200",
    "guitar": "bg-red-100 text-red-800 hover:bg-red-200",
    "drums": "bg-red-100 text-red-800 hover:bg-red-200",
    "piano": "bg-red-100 text-red-800 hover:bg-red-200",
    "synthesizer": "bg-red-100 text-red-800 hover:bg-red-200",
    
    // Vocals and writing
    "vocals": "bg-pink-100 text-pink-800 hover:bg-pink-200",
    "background vocals": "bg-pink-100 text-pink-800 hover:bg-pink-200",
    "songwriting": "bg-amber-100 text-amber-800 hover:bg-amber-200",
    "lyrics": "bg-amber-100 text-amber-800 hover:bg-amber-200",
    
    // Other
    "arrangement": "bg-emerald-100 text-emerald-800 hover:bg-emerald-200",
    "composition": "bg-emerald-100 text-emerald-800 hover:bg-emerald-200",
    "curation": "bg-teal-100 text-teal-800 hover:bg-teal-200",
    "featured": "bg-orange-100 text-orange-800 hover:bg-orange-200",
    "playlist": "bg-teal-100 text-teal-800 hover:bg-teal-200"
  };

const CreditPill = ({ credit }) => {
  // Default color if credit type is not found in mapping
  const defaultColor = "bg-gray-100 text-gray-800 hover:bg-gray-200";
  
  // Get color classes from mapping or use default
  const colorClasses = creditColors[credit.toLowerCase()] || defaultColor;
  
  return (
    <span className={`cursor-default inline-block px-3 py-1 text-sm font-medium rounded-full mr-2 mb-2 transition-colors ${colorClasses}`}>
      {credit}
    </span>
  );
};

const SpotifyGrid = () => {

  // Function to extract Spotify URI from full URL
  const getSpotifyEmbedUrl = (spotifyLink) => {
    const uri = spotifyLink.split('/').pop();
    const type = spotifyLink.split('/')[3]; // track, album, or playlist
    return `https://open.spotify.com/embed/${type}/${uri}`;
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-4">
        <h2 className='z-30 text-center text-4xl'>previous work</h2>
      <div className="z-30 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {CreditsData.map((item, index) => (
          <div 
            key={index} 
            className="rounded-lg overflow-hidden"
          >
            <div className="p-4">
              <iframe
                src={getSpotifyEmbedUrl(item.spotifyLink)}
                width="100%"
                height="352"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="mb-4"
              />
              <div className="flex flex-wrap">
                {item.credits.map((credit, idx) => (
                  <CreditPill className="hover:scale-110 z-30" key={idx} credit={credit} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpotifyGrid;