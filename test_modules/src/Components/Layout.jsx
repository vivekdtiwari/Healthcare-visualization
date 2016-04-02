var React = require('react');
module.exports = React.createClass({
  render : function() {
    return (
      <html>
          <head>
              <link href="https://bootswatch.com/paper/bootstrap.min.css" type="text/css" rel="stylesheet"/>
              <title>Hello World</title>
          </head>
          <body>
              <div id="reactContainer" />
              <div id="reactHelloContainer"
                  dangerouslySetInnerHTML={ {__html: this.props.content} } />
              <div id="textButtonId" />
          </body>
          <script src="/pages/index.js"></script>
      </html>
    )
  }
})
