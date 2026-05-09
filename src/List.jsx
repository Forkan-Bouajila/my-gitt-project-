import React from 'react';
import Item from './Item';

function List({ stories, onRemoveStory }) {
  return (
    <div className="list">
      <h2>Stories ({stories.length})</h2>
      {stories.map((story, index) => (
        <Item key={index} story={story} onRemoveStory={onRemoveStory} />
      ))}
    </div>
  );
}

export default List;