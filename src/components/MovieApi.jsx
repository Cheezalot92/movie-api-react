import React, { useState } from "react";

export const MovieApi = () => {
    const [title, setTitle] = useState('');
    const [movieData, setMovieData] = useState(null);

    const apiUrl = `http://www.omdbapi.com/?s=${title}&page=2&apikey=616da419`;

    const getMovieData = async () => {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();

            if (data.Response === 'True') {
                setMovieData(data);
            } else {
                setMovieData(null);
            }
        } catch (error) {
            console.error("error", error);
            setMovieData(null);
        }
    };

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        getMovieData();
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>Movie Query</h1>
                <label>
                    Movie info here:
                    <input type="text" value={title} onChange={handleTitleChange} />
                    <button type="submit">Get Results</button>
                </label>
                <h2>Finally .. Movie Details</h2>
            {movieData && <p>Movie title: {movieData.Title}</p>}
            </form>
        </>
    );
};



