// 1. It becomes hard to read, hard to debug, and error-prone
// 2. HARDER
//3. To make code:reusable, readable, maintainable, easier to debug

const stories = [
  {
    objectID: "1",
    title: "Life is greateee",
    url: "https://lifeisgreateee.com",
    author: "Forkan Bouajila",
    points: 120,
    num_comments: 45,
  },
  {
    objectID: "2",
    title: "life is hard",
    url: "https://lifeishard.com",
    author: "Forkan Bouajila",
    points: 95,
    num_comments: 30,
  },
];
functio Header() {
  return <h1> Forkan new app </h1>;
}
function List() {
  return (
    <div>
      {stories.map((story) => (
        <div key={story.objectID}>
          <h3>
            <a href={story.url} target="_blank" rel="noreferrer">
              {story.title}
            </a>
          </h3>
          <p>Author: {story.author}</p>
          <p>Points: {story.points}</p>
          <p>Comments: {story.num_comments}</p>
        </div>
      ))}
    </div>
  );
}
// 1. Because stories is global scope, outside all components

function App() {
  return (
    <div>
      <Header />
      <Search />
      <List />
    </div>
  );
}

export default App;
function Search() {
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  );
}
// List handles rendering stories
// Search handles user input UI
