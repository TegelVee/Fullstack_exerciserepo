// TÄSSÄ MUOKATTU KOODI TEHTÄVÄN 1.2 MUKAISESTI.

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

  // Määritellään Part-komponentti.
  const Part = ({ part, exercises }) => (
    <p>
      {part}: {exercises}
    </p>
  );

  // Rakennetaan Content-komponentti käyttämällä Part-komponentteja.
  const Content = ({ parts }) => (
    <div>
      <Part part={parts[0].part} exercises={parts[0].exercises} />
      <Part part={parts[1].part} exercises={parts[1].exercises} />
      <Part part={parts[2].part} exercises={parts[2].exercises} />
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
