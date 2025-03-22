// Harjoitus 1.5.
// Muodotetaan komponentti Header, jolle annetaan props nimeltä course.name.
const Header = (props) => {
  // course.name käsketään renderöitymään otsikkona
  return <h1> {props.course.name} </h1>
}

// Luodaan Part-komponentti.
const Part = (props) => {
  console.log("Part props:", props) // Tulostaa jokaisen Partin propsit
  // Nimetään kaksi propsia .name ja .exercises
  return (
    //Ne ovat tyyliltään tavallista tekstiä.
    <p>
      {props.name} {props.exercises}
    </p>
  )
}

// Luodaan Content-komponentti.
const Content = (props) => {
  console.log("Content props:", props) // Tulostaa Contentille annetut props-tiedot
  return (
    <div>
      <Part name={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part name={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part name={props.parts[2].name} exercises={props.parts[2].exercises} />
    </div>
  )
}

  const Total = (props) => {
    return (
      <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    )
  }

// Tässä kurssin nimi ja osat ovat samaa oliota.
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} /> {/* Tässä välitetään parts-taulukko Contentille */}
      <Total parts={course.parts} />   {/* Sama taulukko Totalille */}
    </div>
  )
}

export default App
