import React from 'react';

function Item({ story }) {
  return (
    <div className="item">
      <h3>
        <a href={story.url} target="_blank" rel="noopener noreferrer">
          {story.title}
        </a>
      </h3>
      <div className="meta">
        <span>By: {story.author}</span>
        <span>{story.points} points</span>
        <span> {story.comments} comments</span>
      </div>
    </div>
  );
}

export default Item;