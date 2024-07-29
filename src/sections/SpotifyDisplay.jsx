import albumsJson from '../../credits.json'

// Helper function to extract album ID from Spotify URL
const getAlbumIdFromUrl = (url) => {
    const parts = url.split('/');
    return parts[parts.length - 1];
  };

const SpotifyAlbumGrid = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {albumsJson.map((album, index) => (
          <div key={index} className="shadow-md overflow-hidden">
            <iframe
              src={`https://open.spotify.com/embed/album/${getAlbumIdFromUrl(album.url)}`}
              width="100%"
              height="380"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>
            <div className="px-4">
              <p className="text-sm text-yellow-300">{album.credits}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  export default SpotifyAlbumGrid;