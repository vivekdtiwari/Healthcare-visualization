var React = require('react');
module.exports = React.createClass({
  render : function() {
    return (
      <html>
          <head>
              <title>Hello World</title>
          </head>
          <body>
              <div id="reactContainer" />
              <div id="reactHelloContainer"
                  dangerouslySetInnerHTML={ {__html: this.props.content} } />
          </body>
          <script src="/pages/index.js"></script>
      </html>      
    )
  }
})
