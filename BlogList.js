class Image extends React.Component {
  render() {
    return React.createElement('img', {
      src: this.props.src,
      style: {
        width: this.props.width,
        height: this.props.height
      },
      alt: this.props.alt
    })
  }
}

class TextBox extends React.Component {
  render() {
    return React.createElement(Span, {}, this.props.children)
  }
}

class Span extends React.Component {
  render() {
    return React.createElement('span', {
        style: {
          color: 'red'
        }
      },
      this.props.children)
  }
}

class BlogItem extends React.Component {
  render() {
    return React.createElement('div', {},
      React.createElement(TextBox, null, this.props.text),
      React.createElement(Image, {
        src: this.props.image.src,
        width: this.props.image.width,
        height: this.props.image.height,
        alt: this.props.alt
      })
    )
  }
}


const blog_entries = [{
  image: {
    src: "http://cdn-static.sidereel.com/tv_shows/4657/giant_2x/14582706_AdventureTime_SC1.jpg",
    width: 100,
    height: 100,
    alt: 'Finn and Jake'
  },
  text: "Adventure time, come on grab your friends"
}, {
  image: {
    src: "http://cdn-static.sidereel.com/tv_shows/4657/giant_2x/14582706_AdventureTime_SC1.jpg",
    width: 100,
    height: 100,
    alt: 'Finn and Jake'
  },
  text: "We'll come to very distand land"
}, {
  image: {
    src: "http://cdn-static.sidereel.com/tv_shows/4657/giant_2x/14582706_AdventureTime_SC1.jpg",
    width: 100,
    height: 100,
    alt: 'Finn and Jake'
  },
  text: "With Jake the dog and Finn the human"
}, {
  image: {
    src: "http://cdn-static.sidereel.com/tv_shows/4657/giant_2x/14582706_AdventureTime_SC1.jpg",
    width: 100,
    height: 100,
    alt: 'Finn and Jake'
  },
  text: "Fun will never end ADVENTURE TIIIIIME!!!"
}, ];

class BlogList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blog_entries
    };
  }

  render() {
    return React.createElement(BlogListPresenter, {
      blog_entries: this.state.blog_entries
    })
  }
}

class BlogListPresenter extends React.Component {
  render() {
    return React.createElement('ul', {},
      _.map(this.props.blog_entries, (entry, key) => (
        React.createElement(BlogItem, {
          text: entry.text,
          image: entry.image,
          key
        }))))
  }
}



ReactDOM.render(
  React.createElement(BlogList),
  document.getElementById("app")
);
