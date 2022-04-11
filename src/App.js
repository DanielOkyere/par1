
const Header = (props) => {
    return (
        <div>
            <h1>{props.course}</h1>
        </div>
    );
};
const Content = (props) => {
    return (
        <div>
            <p>
                {props.parts[0].name} {props.parts[0].exercises}
            </p>
            <p>
                {props.parts[1].name} {props.parts[1].exercises}
            </p>
            <p>
                {props.parts[2].name} {props.parts[2].exercises}
            </p>
        </div>
    );
};

const Total = (props) => {
    return (
        <div>
            <p>
                Number of exercises{" "}
                {props.parts[0].exercises +
                    props.parts[1].exercises +
                    props.parts[2].exercises}
            </p>
        </div>
    );
};

function App() {
    const course = "Half Stack application development";
    const part1 = "Fundamentals of React";
    const exercises1 = 10;
    const part2 = "Using props to pass data";
    const exercises2 = 7;
    const part3 = "State of a component";
    const exercises3 = 14;
    const content = [
        { name: part1, exercises: exercises1 },
        { name: part2, exercises: exercises2 },
        { name: part3, exercises: exercises3 },
    ];

    return (
        <div className="App">
            <Header course={course} />
            <Content parts={content} />
            <Total parts={content} />
        </div>
    );
}

export default App;
