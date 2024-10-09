import React, { useState, useEffect } from 'react';
import tracksData from '../credits.json';

const makeRequest = async (url, method, body, headers) => {
  const response = await fetch('/.netlify/functions/proxy', {
    method: 'POST',
    body: JSON.stringify({ url, method, body, headers })
  });
  return response.json();
};

const TrackFetcher = () => {
  const [tracks, setTracks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrackData = async () => {
      try {
        const fetchedTracks = await Promise.all(
          tracksData.map(async (track) => {
            const headers = {
              'Content-Type': 'application/json'
            };

            const body = {
              "url": track.url
            };

            try {
              const data = await makeRequest('https://songwhip.com/', 'POST', body, headers);
              return {
                ...data,
                credits: track.credits
              };
            } catch (error) {
              console.error('Error fetching track:', error);
              return null;
            }
          })
        );

        const validTracks = fetchedTracks.filter(track => track !== null);
        setTracks(validTracks);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchTrackData();
  }, []);

  // New useEffect to log tracks after they've been set
  useEffect(() => {
    if (tracks.length > 0) {
      console.log('Fetched tracks:', tracks);
    }
  }, [tracks]);

  if (isLoading) return <div>Loading tracks...</div>;
  if (error) return <div>Error: {error}</div>;

  // prod only
  const tracksProd = [
    {
        "type": "track",
        "id": 4208156,
        "path": "makeittomay/say-the-word",
        "pagePath": "/makeittomay/say-the-word",
        "name": "Say the Word",
        "image": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/4f/4f/30/4f4f30ce-d064-2da0-a6a5-dbb05dbf7210/198500559385.jpg/1400x1400bb.jpg",
        "links": {
            "qobuz": true,
            "tidal": true,
            "amazon": true,
            "deezer": true,
            "itunes": true,
            "pandora": true,
            "spotify": true,
            "youtube": true,
            "lineMusic": true,
            "amazonMusic": true,
            "itunesStore": true,
            "youtubeMusic": true
        },
        "linksCountries": [
            "US"
        ],
        "sourceCountry": "US",
        "artists": [
            {
                "type": "artist",
                "id": 2449067,
                "path": "makeittomay",
                "pagePath": "/makeittomay",
                "name": "Make It to May",
                "image": "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages211/v4/0f/5c/4e/0f5c4e1a-18e0-339b-fa99-986c52bcd12c/274ee90e-f511-4e16-84a7-4ab5555a4bc9_ami-identity-a8346cb0dfb920edaf0280e10e11e7b3-2024-04-26T12-26-30.003Z_cropped.png/1400x1400bb.jpg",
                "links": {
                    "qobuz": [
                        {
                            "link": "https://open.qobuz.com/artist/22075794",
                            "countries": null
                        }
                    ],
                    "tidal": [
                        {
                            "link": "https://listen.tidal.com/artist/47014007",
                            "countries": [
                                "US"
                            ]
                        }
                    ],
                    "amazon": [
                        {
                            "link": "https://amazon.com/dp/B0D1DMTXJ3",
                            "countries": [
                                "US"
                            ]
                        }
                    ],
                    "deezer": [
                        {
                            "link": "https://www.deezer.com/artist/261747271",
                            "countries": null
                        }
                    ],
                    "itunes": [
                        {
                            "link": "https://music.apple.com/{country}/artist/make-it-to-may/1740655722?app=music",
                            "countries": [
                                "US"
                            ]
                        }
                    ],
                    "pandora": [
                        {
                            "link": "https://www.pandora.com/artist/make-it-to-may/ARqKfh2mp2zZ52m",
                            "countries": [
                                "US"
                            ]
                        }
                    ],
                    "spotify": [
                        {
                            "link": "https://open.spotify.com/artist/6kzt8Kd3WTkdWl22glFDai",
                            "countries": null
                        }
                    ],
                    "youtube": [
                        {
                            "link": "https://youtube.com/channel/UCLMHIdDbsziE4LC-ZcaDICg",
                            "countries": null
                        }
                    ],
                    "lineMusic": [
                        {
                            "link": "https://music.line.me/webapp/artist/mi00000000224bd6ad",
                            "countries": null
                        }
                    ],
                    "amazonMusic": [
                        {
                            "link": "https://music.amazon.com/artists/B0D1DMTXJ3",
                            "countries": [
                                "US"
                            ]
                        }
                    ],
                    "itunesStore": [
                        {
                            "link": "https://music.apple.com/{country}/artist/make-it-to-may/1740655722?app=itunes",
                            "countries": [
                                "US"
                            ]
                        }
                    ],
                    "youtubeMusic": [
                        {
                            "link": "https://music.youtube.com/browse/UCLMHIdDbsziE4LC-ZcaDICg",
                            "countries": null
                        }
                    ]
                },
                "linksCountries": [
                    "US"
                ],
                "sourceCountry": "US",
                "spotifyId": "6kzt8Kd3WTkdWl22glFDai",
                "createdAtTimestamp": 1718919032302,
                "refreshedAtTimestamp": 1720546398530
            }
        ],
        "createdAtTimestamp": 1718919032309,
        "refreshedAtTimestamp": 1720553848199,
        "url": "https://songwhip.com/makeittomay/say-the-word",
        "credits": [
            "mixing",
            "mastering",
            "production",
            "bass guitar"
        ]
    },
    {
        "type": "track",
        "id": 4402597,
        "path": "makeittomay/fleetingfeelings",
        "pagePath": "/makeittomay/fleetingfeelings",
        "name": "Fleeting Feelings",
        "image": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/c1/97/39/c1973977-3b2d-e02d-07c6-bb955eac771b/198500744095.jpg/1400x1400bb.jpg",
        "links": {
            "qobuz": true,
            "tidal": true,
            "amazon": true,
            "deezer": true,
            "itunes": true,
            "pandora": true,
            "spotify": true,
            "youtube": true,
            "lineMusic": true,
            "amazonMusic": true,
            "itunesStore": true,
            "youtubeMusic": true
        },
        "linksCountries": [
            "US"
        ],
        "sourceCountry": "US",
        "artists": [
            {
                "type": "artist",
                "id": 2449067,
                "path": "makeittomay",
                "pagePath": "/makeittomay",
                "name": "Make It to May",
                "image": "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages211/v4/0f/5c/4e/0f5c4e1a-18e0-339b-fa99-986c52bcd12c/274ee90e-f511-4e16-84a7-4ab5555a4bc9_ami-identity-a8346cb0dfb920edaf0280e10e11e7b3-2024-04-26T12-26-30.003Z_cropped.png/1400x1400bb.jpg",
                "links": {
                    "qobuz": [
                        {
                            "link": "https://open.qobuz.com/artist/22075794",
                            "countries": null
                        }
                    ],
                    "tidal": [
                        {
                            "link": "https://listen.tidal.com/artist/47014007",
                            "countries": [
                                "US"
                            ]
                        }
                    ],
                    "amazon": [
                        {
                            "link": "https://amazon.com/dp/B0D1DMTXJ3",
                            "countries": [
                                "US"
                            ]
                        }
                    ],
                    "deezer": [
                        {
                            "link": "https://www.deezer.com/artist/261747271",
                            "countries": null
                        }
                    ],
                    "itunes": [
                        {
                            "link": "https://music.apple.com/{country}/artist/make-it-to-may/1740655722?app=music",
                            "countries": [
                                "US"
                            ]
                        }
                    ],
                    "pandora": [
                        {
                            "link": "https://www.pandora.com/artist/make-it-to-may/ARqKfh2mp2zZ52m",
                            "countries": [
                                "US"
                            ]
                        }
                    ],
                    "spotify": [
                        {
                            "link": "https://open.spotify.com/artist/6kzt8Kd3WTkdWl22glFDai",
                            "countries": null
                        }
                    ],
                    "youtube": [
                        {
                            "link": "https://youtube.com/channel/UCLMHIdDbsziE4LC-ZcaDICg",
                            "countries": null
                        }
                    ],
                    "lineMusic": [
                        {
                            "link": "https://music.line.me/webapp/artist/mi00000000224bd6ad",
                            "countries": null
                        }
                    ],
                    "amazonMusic": [
                        {
                            "link": "https://music.amazon.com/artists/B0D1DMTXJ3",
                            "countries": [
                                "US"
                            ]
                        }
                    ],
                    "itunesStore": [
                        {
                            "link": "https://music.apple.com/{country}/artist/make-it-to-may/1740655722?app=itunes",
                            "countries": [
                                "US"
                            ]
                        }
                    ],
                    "youtubeMusic": [
                        {
                            "link": "https://music.youtube.com/browse/UCLMHIdDbsziE4LC-ZcaDICg",
                            "countries": null
                        }
                    ]
                },
                "linksCountries": [
                    "US"
                ],
                "sourceCountry": "US",
                "spotifyId": "6kzt8Kd3WTkdWl22glFDai",
                "createdAtTimestamp": 1718919032302,
                "refreshedAtTimestamp": 1720546398530
            }
        ],
        "createdAtTimestamp": 1720553032759,
        "refreshedAtTimestamp": 1720553846089,
        "url": "https://songwhip.com/makeittomay/fleetingfeelings",
        "credits": [
            "mixing",
            "mastering",
            "production",
            "bass guitar"
        ]
    }
]

  return (
<div className=' grid grid-cols-1 xl:grid-cols-4 gap-8 auto-rows-auto'>
  {tracks.map((track, index) => (
    <a 
      key={index}
      href={track.url}
      target="_blank"
      rel="noopener noreferrer"
      className="relative h-[200px] w-[200px] md:w-[280px] md:h-[280px] overflow-hidden group cursor-pointer block"
      style={{zIndex: 1}}
    >
      <div 
        style={{backgroundImage: `url(${track.image})`}} 
        className="absolute inset-0 bg-cover bg-center"
      ></div>
      <div 
        className="absolute text-center font-thin inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center p-4 text-white"
      >
        <h2 className="text-lg font-normal text-yellow-400">{track.name}</h2>
        <p className='text-lg'>{track.artists[0].name}</p>
        <p className=' italic'>{track.credits.join(', ')}</p>
      </div>
    </a>
  ))}
</div>
  );
};

export default TrackFetcher;