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
           React.createElement(TextBox, {str: this.props.text}),
           React.createElement(Image, {src: this.props.image})
           )
  }
}


blog_entries = [{image: "http://cdn-static.sidereel.com/tv_shows/4657/giant_2x/14582706_AdventureTime_SC1.jpg",
                 text: "Adventure time, come on grab your friends"},
                {image: "http://cdn-static.sidereel.com/tv_shows/4657/giant_2x/14582706_AdventureTime_SC1.jpg",
                 text: "We'll come to very distand land"},
                {image: "http://cdn-static.sidereel.com/tv_shows/4657/giant_2x/14582706_AdventureTime_SC1.jpg",
                 text: "With Jake the dog and Finn the human"},
                {image: "http://cdn-static.sidereel.com/tv_shows/4657/giant_2x/14582706_AdventureTime_SC1.jpg",
                 text: "Fun will never end ADVENTURE TIIIIIME!!!"}
               ]


class BlogPage extends React.Component{
  constructor(props){
    super(props);
    this.state = { blog_entries };
  }

  render(){
    const bl_entries = this.state
    return React.createElement(BlogList, { bl_entries })
  }

}

const BlogList = ({ bl_entries }) => (
  alert(bl_entries);
  React.createElement('div',null,_.map(bl_entries, (entry, key)=>(React.createElement('p',{key},entry.text))))

)

ReactDOM.render(
     React.createElement(BlogPage
     ),
     document.getElementById("app")
);
