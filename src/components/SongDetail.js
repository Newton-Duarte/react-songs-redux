import React from 'react';
import { useSelector } from 'react-redux';

const SongDetail = () => {
  const song = useSelector(state => state.selectedSong);

  if (!song) return <p>Select a song!</p>

  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title: {song.title}
        Duration: {song.duration}
      </p>
    </div>
  );
}

export default SongDetail;