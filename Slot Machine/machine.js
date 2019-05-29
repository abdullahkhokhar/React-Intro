// The machine will take 3 items, S1, S2 and S3
// display the 3 and then also compare to display a messege

class Machine extends React.Component{
  render() {
    const {s1,s2,s3} = this.props;
    let msg = "You Loose!";
    if((s1 === s2) && (s2 === s3)){
      msg = "You Win!";
    }
    return(
      <div className = "Machine">
        <p style = {{fontSize: '20px'}}>
          {s1} {s2} {s3}
        </p>
        <p>{msg}</p>
      </div>
    );
  }
}
