const courseTitle = "React Fundamentals";

function App() {
  const studentName = "Forkan";

  const student = {
    name: "Forkan",
    age: 20,
    track: "Web Development"
  };

  function sayHello() {
    return "Hello, welcome to React!";
  }

  return (
    <div>
      <h1>My First React Component</h1>

      <p>{studentName}</p>

      <p>{courseTitle}</p>

      <p>
        Welcome to {courseTitle}, {studentName}!
      </p>

      <label htmlFor="nameInput">Enter your name:</label>
      <input type="text" id="nameInput" />

      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Track: {student.track}</p>

      <p>{sayHello()}</p>
    </div>
  );
}

export default App;

