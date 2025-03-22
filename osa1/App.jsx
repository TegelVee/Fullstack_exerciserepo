// Määritellään sovellus eli App.
// Tässä on nuolifunktio, joka määrittelee Appin sisällön
const App = () => {
  // Vaiheessa 1.4 pyydetään tekemään koodi niin, että oliot laitetaan taulukkoon.
  const course = 'Half Stack application development'
  const parts = [
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

  // const totalExercises = part1.exercises + part2.exercises + part3.exercises;
// Määritellään eka komponentti "Header".
  // Käytetään propsina kurssin nimeä ja kerrotaan, että se on otsikkotyyliä.
  const Header = (props) => <h1>{props.course}</h1>;

  const Part = (props) => <p>{props.part.name}: {props.part.exercises}</p>;

  // Rakennetaan Content-komponentti käyttäen propsina kurssitietoja.
  const Content = () =>
    <div>
      <Part part={part1} />
      <Part part={part2} />
      <Part part={part3} />
    </div>


// Määritellään Total-komponentti laskemaan yhteen kurssien tehtävämäärät.
  const Total = () => {
    const sum = part1.exercises + part2.exercises + part3.exercises
    return <p>Total: {sum}</p>
  }

// Tässä pitää kertoa koodille, mitä tietoa haluan edellä olevista muuttujista ja olioista.
  return (
    <div>
      <Header course={course}/>
      <Content/>
      <Total/>
    </div>
  );
};

export default App