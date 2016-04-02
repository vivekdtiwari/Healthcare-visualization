var React = require('react');

module.exports = React.createClass({displayName: "exports",
render : function(){
return (
React.createElement("div", null, 
  React.createElement("div", null, 
  "This is from the HelloWorld.jsx" + ' ' +
  "component render function."
  ), 
  React.createElement("div", null, 
  "Rendered from : ", this.props.from
  )
)
)
}
})
