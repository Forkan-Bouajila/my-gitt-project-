import React, { useState, useEffect } from 'react';
import InputWithLabel from './components/InputWithLabel';
import List from './List';

const API_BASE = 'https://hn.algolia.com/api/v1/search?query=';

function App() {
  const [searchTerm, setSearchTerm] = useState(() => {
    const savedSearch = localStorage.getItem('search');
    return savedSearch || '';
  });

  const [stories, setStories] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [isError, setIsError] = useState(false);

  const [url, setUrl] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUrl(`${API_BASE}${searchTerm}`);
  };

  const handleRemoveStory = (storyToRemove) => {
    setStories(stories.filter((story) => story.title !== storyToRemove.title));
  };

  useEffect(() => {
    if (url) {
      const fetchStories = async () => {
        setIsLoading(true);
        setIsError(false);
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error('Something went wrong');
          }
          const data = await response.json();
          setStories(data.hits.map((hit) => ({
            title: hit.title,
            url: hit.url,
            author: hit.author,
            points: hit.points,
            comments: hit.num_comments,
          })));
        } catch (error) {
          setIsError(true);
        } finally {
          setIsLoading(false);
        }
      };
      fetchStories();
    }
  }, [url]);

  useEffect(() => {
    localStorage.setItem('search', searchTerm);
  }, [searchTerm]);

  return (
    <div className="app">
      <h1>Hacker News Stories</h1>
      <form onSubmit={handleSubmit}>
        <InputWithLabel
          id="search"
          value={searchTerm}
          onInputChange={handleSearch}
          type="text"
        >
          <strong>Search:</strong>
        </InputWithLabel>
        <button type="submit" disabled={!searchTerm}>
          Submit
        </button>
      </form>
      {isError && <p>Something went wrong...</p>}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <List stories={stories} onRemoveStory={handleRemoveStory} />
      )}
    </div>
  );
}

export default App;