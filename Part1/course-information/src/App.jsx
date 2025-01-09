const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Content = (props) => {
  return (
    <div>
      {props.part} {props.exercise}
    </div>
  );
};

const Total = (props) => {
  return <div>Number of exercises {props.total}</div>;
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />

      <Content part={part1} exercise={exercises1} />
      <br />

      <Content part={part2} exercise={exercises2} />
      <br />

      <Content part={part3} exercise={exercises3} />
      <br />

      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

export default App;
