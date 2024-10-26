/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// components/SongDetails.jsx
import React from "react";
import SongImage from "./SongImage";
import "../styles/SongDetails.css";
import Visualizer from "./Visualizer";


const SongDetails = ({
    song,
    visualizer,
    source,
    analyser,
    currentSongIndex,
}) => {
    return (
        <div className="songDetails">
            <div className="songDetails__imageContainer">
                {!visualizer && <SongImage url={song.image} />}
                {visualizer && (
                    <Visualizer
                        source={source}
                        analyser={analyser}
                        currentSongIndex={currentSongIndex}
                    />
                )}
            </div>
        </div>
    );
};

export default SongDetails;
