import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
            'Content-Type':'application/json'
           }

           const body = {
            "url":track.url
           }
            
            makeRequest('https://songwhip.com/', 'POST', body,headers)
            .then(data => {
                console.log(data);
                return(data);
            })
            .catch(error => console.error(error));
            
            ;
          })
        );

        setTracks(fetchedTracks);
        
            console.log('tracks', tracks)
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchTrackData();
  }, [tracksData]);

  if (isLoading) return <div>Loading tracks...</div>;
  if (error) return <div>Error: {error}</div>;
  else{
    console.log(tracks)
  }
  return (
    <div>
      {/* {tracks.map((track, index) => (
        <div key={index} className={`bg-[url(${track.image})] h-96 w-96 track-item`}>
          <h2>{track.name}</h2>
          <p>Artist: {track.artists.join(', ')}</p>
          <p>Album: {track.album}</p>
          <p>Credits: {track.credits.join(', ')}</p>
          <a href={track.spotifyUrl} target="_blank" rel="noopener noreferrer">
            Listen on Spotify
          </a>
        </div>
      ))} */}
    </div>
  );
};

export default TrackFetcher;