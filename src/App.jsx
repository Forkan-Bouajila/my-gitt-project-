import React, { useState } from 'react';
import List from './List';
import Search from './Search';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const stories = [
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

  const filteredStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  console.log('App component re-rendered');

  return (
    <div className="app">
      <h1>Hacker News Stories</h1>
      <Search searchTerm={searchTerm} onSearch={handleSearch} />
      <List stories={filteredStories} />
    </div>
  );
}

export default App;