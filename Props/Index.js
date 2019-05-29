class App extends React.Component {
  render(){
    return (
      <div>
        <Hello
          to="Steve"
          from="Abd"
          bangs={3}
          data={[1,2,3,4,5]}
          isFunny = {true}
        />
        <Hello
          to ="Dan"
          from="Kho"
          bangs={5}
        />
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
