class Image extends React.Component{
  render() {
    return React.createElement('img',{ src: this.props.src})
  }
}

class TextBox extends React.Component{
  render() {
    return React.createElement(Span, { str: this.props.str})
  }
}

class Span extends React.Component{
  render() {
    return React.createElement('span', {style: {color: 'red'}},
      this.props.children, this.props.str)
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
//   React.createElement(Image, {src: "http://i.cdn.turner.com/v5cache/CARTOON/site/Images/i70/adventure-time.png"}),
//   document.getElementById("app")
 //    React.createElement(TextBox, {str: "papapap"}),
     React.createElement(BlogItem),
     document.getElementById("app")
);
