import React, { useState, useEffect } from 'react';
import InputWithLabel from './components/InputWithLabel';
import List from './components/List';

function App() {
  const [searchTerm, setSearchTerm] = useState(() => {
    const savedSearch = localStorage.getItem('search');
    return savedSearch || '';
  });

  const initialStories = [
    {
      title: 'React: A JavaScript library for building user interfaces',
      url: 'https://reactjs.org/',
      author: 'Facebook',
      points: 1234,
      comments: 567,
    },
    {
      title: 'Vue.js: The Progressive JavaScript Framework',
      url: 'https://vuejs.org/',
      author: 'Evan You',
      points: 890,
      comments: 234,
    },
    {
      title: 'Angular: One framework, Mobile & desktop',
      url: 'https://angular.io/',
      author: 'Google',
      points: 456,
      comments: 123,
    },
    {
      title: 'Svelte: Cybernetically enhanced web apps',
      url: 'https://svelte.dev/',
      author: 'Rich Harris',
      points: 345,
      comments: 78,
    },
    {
      title: 'Next.js: The React Framework for Production',
      url: 'https://nextjs.org/',
      author: 'Vercel',
      points: 789,
      comments: 345,
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