var Hello = React.createClass({
  render: function() {
    return "<div>Hello {this.props.name}</div>";
  }
});

React.render(Hello, document.getElementById('container')); 
