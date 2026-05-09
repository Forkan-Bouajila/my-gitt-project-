import React, { useState, useEffect } from 'react';
import InputWithLabel from './components/InputWithLabel';
import List from './List';

function App() {
  const [searchTerm, setSearchTerm] = useState(() => {
    const savedSearch = localStorage.getItem('search');
    return savedSearch || '';
  });

  const initialStories = [
    {
      title: 'Python: A versatile programming language',
      url: 'https://python.org/',
      author: 'Guido van Rossum',
      points: 1500,
      comments: 800,
    },
    {
      title: 'JavaScript: The language of the web',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      author: 'Brendan Eich',
      points: 1200,
      comments: 600,
    },
    {
      title: 'Git: Version control system',
      url: 'https://git-scm.com/',
      author: 'Linus Torvalds',
      points: 950,
      comments: 400,
    },
    {
      title: 'Docker: Containerization platform',
      url: 'https://docker.com/',
      author: 'Docker Inc.',
      points: 1100,
      comments: 500,
    },
    {
      title: 'Node.js: JavaScript runtime',
      url: 'https://nodejs.org/',
      author: 'Ryan Dahl',
      points: 1300,
      comments: 700,
    },
  ];

  const [stories, setStories] = useState(initialStories);

  const filteredStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleRemoveStory = (storyToRemove) => {
    setStories(stories.filter((story) => story.title !== storyToRemove.title));
  };

  useEffect(() => {
    localStorage.setItem('search', searchTerm);
  }, [searchTerm]);

  return (
    <div className="app">
      <h1>Hacker News Stories</h1>
      <InputWithLabel
        id="search"
        value={searchTerm}
        onInputChange={handleSearch}
        type="text"
      >
        <strong>Search:</strong>
      </InputWithLabel>
      <List stories={filteredStories} onRemoveStory={handleRemoveStory} />
    </div>
  );
}

export default App;