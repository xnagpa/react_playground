class Image extends React.Component{
  render() {
    return React.createElement('img',{ src: this.props.src})
  }
}

class TextBox extends React.Component{
  render() {
    return React.createElement(Span, null, this.props.str)
  }
}

class Span extends React.Component{
  render() {
    return React.createElement('span', {style: {color: 'red'}},
      this.props.children)
     }
}

class BlogItem extends React.Component{
  render() {
    return React.createElement('div',{},
           React.createElement(TextBox, {str: "Tadaaaaa"}),
           React.createElement(Image, {src: "http://i.cdn.turner.com/v5cache/CARTOON/site/Images/i70/adventure-time.png"})
           )
  }
}




ReactDOM.render(
     React.createElement('div', {},React.createElement(BlogItem),
                        React.createElement(BlogItem),
                        React.createElement(BlogItem),),
     document.getElementById("app")
);
