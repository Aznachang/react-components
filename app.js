
//Sub-Components
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      strike: false
    }
  }

  onListItemClick() {
    this.setState({
      strike: !this.state.strike
    });
  }

  render() {
    
    var style = {
      fontWeight: this.state.strike ? 'bold' : 'normal'
    };

    return (
      <li style = {style} onMouseOver = {this.onListItemClick.bind(this)} onMouseOut = {this.onListItemClick.bind(this)}> {this.props.item}</li>
    );

  }
};

/**Main Component**/
var GroceryList = (props) => (
    <ul>
      {props.items.map(item => <GroceryListItem item = {item} />)}
    </ul>
);

ReactDOM.render(<GroceryList items = {['milk', 'egg', 'bread']} />, document.getElementById("app"));