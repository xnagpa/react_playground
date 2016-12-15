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
    console.log(this.props);
    return React.createElement('div', {},
      React.createElement(TextBox, {
        str: this.props.text
      }),
      React.createElement(Image, {
        src: this.props.image,
        width: this.props.width,
        height: this.props.height,
        alt: this.props.alt
      })
    )
  }
}


const blog_entries = [{
  image: "http://cdn-static.sidereel.com/tv_shows/4657/giant_2x/14582706_AdventureTime_SC1.jpg",
  width: 100,
  height: 100,
  alt: 'Finn and Jake',
  text: "Adventure time, come on grab your friends"
}, {
  image: "http://cdn-static.sidereel.com/tv_shows/4657/giant_2x/14582706_AdventureTime_SC1.jpg",
  width: 100,
  height: 100,
  alt: 'Finn and Jake',
  text: "We'll come to very distand land"
}, {
  image: "http://cdn-static.sidereel.com/tv_shows/4657/giant_2x/14582706_AdventureTime_SC1.jpg",
  width: 100,
  height: 100,
  alt: 'Finn and Jake',
  text: "With Jake the dog and Finn the human"
}, {
  image: "http://cdn-static.sidereel.com/tv_shows/4657/giant_2x/14582706_AdventureTime_SC1.jpg",
  width: 100,
  height: 100,
  alt: 'Finn and Jake',
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
    const blog_entries_inner = this.state.blog_entries;
    return React.createElement(BlogListPresenter, {
      xxx: blog_entries_inner
    })
  }
}

class BlogListPresenter extends React.Component {
  render() {
    const blog_entries = this.props.xxx;
    return React.createElement('ul', {},
      _.map(blog_entries, (entry, key) => (
        React.createElement(BlogItem, {
          text: entry.text,
          image: entry.image,
          key,
          width: entry.width,
          height: entry.height,
          alt: entry.alt
        }))))
  }
}



ReactDOM.render(
  React.createElement(BlogList),
  document.getElementById("app")
);
