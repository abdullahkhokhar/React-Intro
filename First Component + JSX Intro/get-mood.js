/*
Example of when we embed javascript into JSX
*/

function getMood(){
  const moods = ['happy', 'angry', 'sad', 'depressed', 'excited'];
  return moods[Math.floor(Math.random() * moods.length)];
}

class JSXDemo extends React.Component{
  render(){
    return (
      <div>
        <h1> My mood currently is: {getMood()} </h1>
      </div>
    );
  }
}

ReactDOM.render(<JSXDemo />, document.getElementById('root'));
