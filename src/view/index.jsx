import React, { useState } from 'react';
import ReactPlayer from 'react-player';

function MusicPlayer() {
    const [url, setUrl] = useState('');
    const [isText, setIsText] = useState(false);
    const [error, setError] = useState(false);

    const handlePlay = () => {
        if (url.trim() === "") {
            setIsText(true);
            setError(false);
        } else {
            setIsText(false);
            setError(false);
        }
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const fileURL = URL.createObjectURL(file);
        setUrl(fileURL);
        setIsText(false);
        setError(false)
    }

    return(
        <div className='mt-10'>
            {isText && (
                <p className="text-red-500 font-bold mb-3 text-xxl"> * Añade una URL válida </p>
            )}
            {error && (
                <p className="text-red-500 font-bold mb-3 text-xxl">Hubo un error al reproducir el archivo</p>
            )}
            <input 
                className="bg-neutral-900 text-white border border-white px-4 py-2 rounded-md"
                placeholder="Enter URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
            />
            <button onClick={handlePlay}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
            >
                Click Me
            </button>
            <input 
                type="file"
                accept=".mp3"
                onChange={handleFileChange}
                className="hidden"
                id="audio-upload"
            />
            <label htmlFor="audio-upload" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded cursor-pointer">
                Cargar Archivo
            </label>
            <div className="flex justify-center mt-10">
                <ReactPlayer
                    url={url}
                    controls={true}
                    onError={() => setError(true)}
                />
            </div>
        </div>
    );
}

export default MusicPlayer;
