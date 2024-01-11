import React, { useState } from 'react';
import axios from 'axios';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../css/bullet.css';
function Searchbar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [dictionaryData, setDictionaryData] = useState(null);
  const [error, setError] = useState(null);
  const [audioIndex, setAudioIndex] = useState(0); // Keep track of the selected audio index

  const handleSearch = async () => {
    try {
      setError(null);
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`);
      setDictionaryData(response.data[0]);
    } catch (error) {
      console.error('Error fetching dictionary data:', error);
      setError('Word not found. Please check your spelling and try again.');
    }
  };

  const handleAudioPlay = (index) => {
    setAudioIndex(index);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full p-4">
      <div className="relative w-full lg:w-3/6">
        <input
          type="text"
          className="w-full px-4 py-4 border border-gray rounded-full focus:outline-none focus:border-blue"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="absolute top-0 right-0 m-2 p-2 focus:outline-none" onClick={handleSearch}>
          <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" className="pr-7" />
        </button>
      </div>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      {dictionaryData && (
        <div className="w-full lg:w-3/6 mt-4 text-[--text]">          
        <div className="searched text-left mt-7">
            <h1 className='text-6xl'>{dictionaryData.word}</h1>
          </div>

          <div className="pronounce text-left">
            {dictionaryData.phonetics.slice(0, 1).map((phonetic, index) => (
              <div key={index} className="mb-2">
                <p className='text-purple'>{`${phonetic.text}`}</p>
                {/* {phonetic.audio && (
                  <audio controls>
                    <source src={'https:'+ phonetic.audio} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                )} */}
              </div>
            ))}
          </div>

          <div className="part-of-speech mt-6 text-[--text]">
            {dictionaryData.meanings.slice(0, 4).map((meaning, index) => (
              <div key={index} className="mt-4">
                <div className='flex items-center gap-5'>
                <h2 className="text-left">{meaning.partOfSpeech}</h2>
                <hr className='w-full'></hr>
                </div>
                <div className='mt-8 mb-4'>
                  <p>Meaning</p>
                </div>
                {meaning.definitions.map((definition, index) => (
                  <div key={index} className="text-left mb-4">
                    <ul className="list-disc list-inside">
                      <li className="pl-5">
                        {definition.definition}
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Searchbar;
