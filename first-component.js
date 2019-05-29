class Hello extends React.Component{
  // Remember every component needs to know how to render itself.
  render(){
    /*
    We can write a single line as so or add parenenthis and add multiple items
    return <h1> Hello There! </h1>; // this jsx; html looking stuff inside of javascript
    */
    return(
      // Remember we can only return a SINGLE element, so cannot have 3 hellos in a row, instead do
      <div>
        <h1> Hello There! </h1>
        <h1> Hello There! </h1>
        <h1> Hello There! </h1>
      </div>
      // so this is a single component still that renders multuple things
    );
  }
}

// We can re-write the above as a function component
function Hello(){
  return(
    // Remember we can only return a SINGLE element, so cannot have 3 hellos in a row, instead do
    <div>
      <h1> Hello There! </h1>
      <h1> Hello There! </h1>
      <h1> Hello There! </h1>
    </div>
    // so this is a single component still that renders multuple things
  );
}

// spesify what it is we want to render and where
ReactDOM.render(<Hello />, document.getElementById('root'));
