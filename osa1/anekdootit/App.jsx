import { useState } from 'react'

// Rakennetaan uudelleenkäytettävä Button-komponentti. 
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>


// Tehdään App-komponentti, joka käyttää Button-komponenttia.
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  // Luodaan tilamuuttuja "selected". useStatella määritellään oletusanekdooteksi ensimmäinen anekdootti (0).
  const [selected, setSelected] = useState(0)

  // Tehdään uusi useState-tila votes eli äänille.
  // Tämä on taulukko, joka sisältää anekdoottien äänimäärät. --> anecdotes.length antaa taulukon pituuden.
  // Täytetään se nollilla, koska aluksi anekdooteilla ei ole ääniä.
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  // handleClick-funktio määrittelee, mitä taphtuu, kun käyttäjä painaa nappia.
  const handleClick = () => {
    // randomIndex on satunnainen luku, joka valitsee anekdootin.
    // Math.floor huolehtii, että luku on kokonaisluku. Se pyöristää luvun alas lähimpään kokonaislukuun.
    // Math.random antaa jonkin satunnaisluvun.
    // anecdotes.length tietää anekdoottien määrän.
    const randomIndex = Math.floor(Math.random() * anecdotes.length)
    // setSelected päivittää tilamuuttujan "selected" edellä määritellyllä satunnaisluvulla.
    setSelected(randomIndex)
  }
  // Määritellään otsikot, jotka näkyvät sovelluksessa.
  const title1 = 'Anecdote of the day'
  const title2 = 'Anecdote with most votes'

  // Header-komponentti, joka näyttää otsikon.
  const Header = (props) => <h1>{props.title}</h1>

  // handleVote-funktio kasvattaa valitun anekdootin ääniä.
  const handleVote = () => {
    const newVotes = [...votes] // kopioi vanha taulukko muuttamatta alkuperäistä
    newVotes[selected] += 1     // kasvatetaan valitun anekdootin ääniä
    setVotes(newVotes)          // päivitetään tila uudella taulukolla, jotta tulos näkyy sovelluksessa
    console.log('Äänet kaikille anekdooteille:', newVotes) // tulostetaan konsoliin kaikki äänet
  }

  // Määritellään, mikä anekdootti on saanut eniten ääniä.
  // Math.max hakee suurimman arvon taulukosta, ja indexOf löytää sen indeksin.
  const maxVotes = Math.max(...votes)
  const maxVotesIndex = votes.indexOf(maxVotes)
  const mostVotesIndex = votes.indexOf(maxVotes)

// Määritellään return-kohdassa vasta Buttonin tekstit, koska emme tarvitse nyt dynaamisia tekstejä.
  return (
    <div>
      <Header title={title1} />
      <p>{anecdotes[selected]}</p>
      <p> has {votes[selected]} votes</p>
      <br />
      <Button onClick={handleVote} text="vote" />
      <Button onClick={handleClick} text="next anecdote" />
      <Header title={title2} />
      <p>{anecdotes[mostVotesIndex]}</p>
      <p>has {maxVotes} votes</p>
      <br />
    </div>
  )
}

export default App