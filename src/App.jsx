// Each story object contains: title → string, url → string, author → string, objectID → unique identifier (React key), points → number, num_comments → number
// React key: objectID (unique & stable), APIs return structured JSON data

const stories = [
  {
    objectID: "1",
    title: "fresh book",
    url: "https://freshmanbook.dev",
    author: "TBS",
    points: 120,
    num_comments: 45,
  },
  {
    objectID: "2",
    title: "soph book",
    url: "https://sophomore.org",
    author: "TBS",
    points: 150,
    num_comments: 30,
  },
  {
  objectID: "3",
  title: "Junior book",
  url: "https://juniorbook.com",
  author: "TBS",
  points: 200,
  num_comments: 80,
}
];

function App() {
  console.log(stories[0]); 

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

export default App;
