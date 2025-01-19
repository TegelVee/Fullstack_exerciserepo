// TÄSSÄ ON REFAKTOROITU TEHTÄVÄN 1.1 Part1-tehtävän koodi.

// Määritellään sovellus eli App.
const App = () => {

  // Kerron kurssin nimen otsikkoa varten.
  const course = 'Half Stack application development';

  // Tässä määritellään kurssi osien nimet ja tehtävämäärät.
  const parts = [
    { part: 'Fundamentals of React', exercises: 10},
    { part: 'Using props to pass data', exercises: 7},
    { part: 'State of a component', exercises: 14}
  ];

  // Määritellään eka komponentti "Header".
  // Käytetään propsina kurssin nimeä ja kerrotaan, että se on otsikkotyyliä.
  const Header = ({course}) => <h1>{course}</h1>;

  // Rakennetaan Content-komponentti käyttäen propsina kurssitietoja.
  const Content = ({ parts }) => (
    <div>
      <p>{parts[0].part}: {parts[0].exercises}</p>
      <p>{parts[1].part}: {parts[1].exercises}</p>
      <p>{parts[2].part}: {parts[2].exercises}</p>
    </div>
  );

// Määritellään Total-komponentti laskemaan yhteen kurssien tehtävämäärät.
  const Total = ({ parts }) => {
    const totalExercises = parts.reduce((sum, item) => sum + item.exercises, 0);
    // Määritellään Totalin tyyli.
    return <p>Total: {totalExercises}</p>;
  };

  // Tässä kerrotaan, mitä Appin osasia sivulla lopulta näytetään.
  return (
    <div>
      <Header course={course} />
      <Content parts={parts}/>
      <Total parts={parts} />
    </div>
  )
};

export default App
