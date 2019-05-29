function getNum(){
  return Math.floor(Math.random() * 10)+1
}

class NumPicker extends React.Component {
  render(){
    const num = getNum();
    // another method is havign a variable up here set due to a condition and just render the variable
    return (
      <div>
        <h1>Your number is {num}</h1>
        <p> {num === 7 ? 'Congrats' : 'Unlucky!'}</p>
        {
          num === 7 && <img src = "https://media.giphy.com/media/nXxOjZrbnbRxS/giphy.gif"/>
        }
      </div>
    );
  }
}

ReactDOM.render(<NumPicker />, document.getElementById('root'));