// The machine will take 3 items, S1, S2 and S3
// display the 3 and then also compare to display a messege

class Machine extends React.Component{
  render() {
    let msg = "You Loose!";
    if(this.props.s1 === this.props.s2 === this.props.s3){
      msg = "You Win!";
    }
    return(
      <div>
        {this.props.s1}
        {this.props.s2}
        {this.props.s3}
        {msg}
      </div>
    );
  }
}
