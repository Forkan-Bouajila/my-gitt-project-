import React from 'react';
import Item from './Item';

function List({ stories }) {
  return (
    <div className="list">
      <h2>Stories ({stories.length})</h2>
      {stories.map((story, index) => (
        <Item key={index} story={story} />
      ))}
    </div>
  );
}

export default List;