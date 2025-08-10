
// Tässä versiossa on html-taulukko, joka näyttää tilastot.
import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

// Muokataan StatisticLine komponentti toimimaan html-taulukkona.
const StatisticLine = ({ text, value }) => {
  return (
    // Vierekkäin näkyvät teksti (esim. good) ja sen arvo (esim. 5).
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

// Statistics-komponentti käyttää StatisticLine-komponenttia.
const Statistics = ({ good, neutral, bad, allClicks, average, positive }) => {
  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          {/* Html-taulukkoon vaaditaan edellä näkyvät table ja tbody. */}
          <StatisticLine good text = "good" value = {good} />
          <StatisticLine neutral text = "neutral" value = {neutral} />
          <StatisticLine bad text = "bad" value = {bad} />
          <StatisticLine all text = "all" value = {allClicks} />
          <StatisticLine average text = "average" value = {average.toFixed(1)} />
          <StatisticLine positive text = "positive" value = {positive.toFixed(1) + " % "} />
        </tbody>
      </table>
    </div>
  )
}

// Tehdään History-komponentti, joka näyttää "No feedback given" -viestin, jos tilastot ovat nollassa.
const History = ({ allClicks }) => {
  //Tehdään if-lause.
  if (allClicks === 0) {
    // Jos allClicks on 0, palautetaan viesti "No feedback given".
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
}


const App = () => { 
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  // tehdään tilastoa kaikista painalluksista ylläpitävä allClicks
  const [allClicks, setAll] = useState(0) 

  // Kirjoita otsikko muuttujaksi.
  const title = 'give feedback'
  
  // Määritellään Header-komponentti, joka ottaa propsina title-muuttujan.
  // Tämä komponentti renderöi otsikon h1-elementtinä.
  const Header = (props) => <h1>{props.title}</h1>

  // Määritellään handleClick-funktio, joka kasvattaa good-muuttujan arvoa yhdellä. 
  const handleClickGood = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    // Tämän alla olevan mallin mukaan yritän saada toimimaan kokonaistilaston.
    setAll(updatedGood + neutral + bad) // päivitetään allClicks
    // Teen console.login, jotta voin tarkistaa, että good-muuttuja toimii oikein.
    console.log('Klikattiin good-nappia', updatedGood)
  }

  // Määritellään vastaavat funktiot neutral- ja bad-muuttujille.
  const handleClickNeutral = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    setAll(good + updatedNeutral + bad) // päivitetään allClicks
    // Teen console.login, jotta näen, että neutral-nappia on painettu.
    console.log('Klikattiin neutral-nappia', updatedNeutral)
  }

  const handleClickBad = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    setAll(good + neutral + updatedBad) // päivitetään allClicks
    // Teen console.login, jotta näen, että bad-nappia on painettu.
    console.log('Klikattiin bad-nappia', updatedBad)
  }
  // Määritellään toinen otsikko muuttujaksi. Tämä otsikko on tarkoitettu tilastojen näyttämiseen.
  // Määritellään myös Subheader-komponentti, joka ottaa propsina text
  const title2 = 'statistics';
  const Subheader = (props) => <h1>{props.text}</h1>; 

  // Lasketaan keskiarvo good, neutral ja bad -painalluksista. 
  const average = allClicks === 0 ? 0 : (good - bad) / allClicks

  // Lasketaan positiivisten painallusten prosenttiosuus.
  const positive = allClicks === 0 ? 0 : (good / allClicks) * 100

// Tässä näytetään lopussa average-kohdassa keskiarvo yhden desimaalin tarkkuudella.
return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleClickGood} text="good" />
      <Button onClick={handleClickNeutral} text="neutral" />
      <Button onClick={handleClickBad} text="bad" />
      <History allClicks={allClicks} />
      
      {/* Statistics-komponentti saa kaiken datan propsien kautta */}
      {/* Tehdään ehtolause, että statistics näytetään vain, jos allClicks on suurempi kuin 0 */}
      {allClicks > 0 &&
        <Statistics 
          good={good}
          neutral={neutral}
          bad={bad}
          allClicks={allClicks}
          average={average}
          positive={positive}
        />
      }
    </div>
  )
}

export default App