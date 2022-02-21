const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old.</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by <a href="https://github.com/dredly">dredly</a>
    </div>
  )
}

const App = () => {
  const name2 = "Mooshie";
  const age2 = 24;
  return (
    <>
      <h1>Greetings</h1>
      <div>
        <Hello name="Miguel" age={12} />
        <Hello name={name2} age={age2} />
      </div>
      <Footer />
    </>
  )
}

export default App;
