const {
  bind
} = _;

blog_entries = [
  {
    id: 111,
    meta: {
      author: {
        name: "Finn",
        age: "12"
      },
      updatedAt: moment().subtract(10, 'days').calendar(),
      createdAt: moment().subtract(10, 'days').calendar(),
   },
  image: {
    src: "http://cdn-static.sidereel.com/tv_shows/4657/giant_2x/14582706_AdventureTime_SC1.jpg",
    width: 100,
    height: 100,
    alt: 'Finn and Jake'
  },
  text: "Time for adventure!",
  likes: 60
},
  {
    id: 222,
    meta: {
      author: {
        name: "Finn",
        age: "12"
      },
      updatedAt: moment().subtract(10, 'days').calendar(),
      createdAt: moment().subtract(10, 'days').calendar()
   },

  image: {
    src: "http://cdn-static.sidereel.com/tv_shows/4657/giant_2x/14582706_AdventureTime_SC1.jpg",
    width: 100,
    height: 100,
    alt: 'Finn and Jake'
  },
  text: "Explore the dungeon!",
  likes: 45
},
  {
    id: 333,
    meta: {
      author: {
        name: "Finn",
        age: "12"
      },
      updatedAt: moment().subtract(10, 'days').calendar(),
      createdAt: moment().subtract(10, 'days').calendar()
   },

  image: {
    src: "http://cdn-static.sidereel.com/tv_shows/4657/giant_2x/14582706_AdventureTime_SC1.jpg",
    width: 100,
    height: 100,
    alt: 'Finn and Jake'
  },
  text: "Save princesses",
  likes: 30
},
];


class Image extends React.Component {
  render() {
    return React.createElement('img', {
      src: this.props.src
    })
  }
}


Image.propTypes = {
  src: React.PropTypes.string
}

Image.defaultProps = {
  src: ''
}


class TextBox extends React.Component {
  render() {
    return React.createElement(Span, null, this.props.children)
  }
}


class Span extends React.Component {
  render() {
    return React.createElement('p', {
        style: {
          color: 'red'
        }
      },
      this.props.children)
  }
}

Span.propTypes = {
  children: React.PropTypes.string
}

Span.defaultProps = {
  children: "Hello Jake!"
}

class Like extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = bind(this.handleClick, this);
  }

  handleClick() {
    this.props.increaselikesHandler(this.props.id);
  }

  render() {
    return ( <div><p> {
        this.props.count
      }
      likes </p><button onClick = {
      this.handleClick
    }> Like this shit </button></div>
  )
}

}

class MetaData extends React.Component {
  render() {
    const {
      author,
      updatedAt,
      createdAt
    } = this.props;
    return (React.createElement('div', {},
      author && React.createElement(TextBox, {}, `${author.name}, ${author.age}`),
      updatedAt && React.createElement(TextBox, {}, `Отредактировано ${updatedAt}`),
      createdAt && React.createElement(TextBox, {}, `Создано ${createdAt}`),
    ))
  }
}

MetaData.defaultProps = {
  author: {
    name: '',
    age: ''
  },
  updatedAt: '',
  createdAt: ''
}

MetaData.propTypes = {
  author: React.PropTypes.shape({
    name: React.PropTypes.string,
    age: React.PropTypes.string
  }),
  updatedAt: React.PropTypes.string,
  createdAt: React.PropTypes.string
}

class PieChart extends React.Component {
  componentDidMount(){
    this.chart = c3.generate({
      bindto: ReactDOM.findDOMNode(this.refs.chart),
      type : 'pie',
      data: {
        // iris data from R
        columns: this.props.columns,
        type : 'pie'
    },

    })
  }

  render(){
    return(
      <div ref="chart" />
    )
  }
}

class BlogItem extends React.Component {
  render() {
    const {
      meta,
      image,
      text,
      likes,
      increaselikesHandler,
      id
    } = this.props;
    return React.createElement('div', {},
      React.createElement(Image, {
        src: image.src
      }),
      React.createElement(TextBox, {}, text),
      React.createElement(Like, {
        count: likes,
        increaselikesHandler: increaselikesHandler,
        id: id
      }),
      meta && React.createElement(MetaData, {
        author: meta.author,
        updatedAt: meta.updatedAt,
        createdAt: meta.createdAt
      })
    )
  }
}

BlogItem.defaultProps = {
  author: {
    name: '',
    age: ''
  },
  text: '',
  image: {
    width: 0,
    height: 0,
    url: ''
  },
  updatedAt: '',
  createdAt: '',
  likes: 0
}

BlogItem.propTypes = {
  meta: MetaData.propTypes,
  text: React.PropTypes.string,
  image: Image.propTypes,
  likes: React.PropTypes.number
}


class BlogList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blog_entries
    };
    this.increaseLikesHandler = bind(this.increaseLikesHandler, this);
  }

  setLikes(id) {
    blog_entries = this.state.blog_entries
    index = _.findIndex(blog_entries, function(o) { return o.id == id; });
    blog_entries[index].likes += 1;
    this.setState({blog_entries: blog_entries});
  }

  increaseLikesHandler(id){
    this.setLikes(id);
  }


  render() {
    return React.createElement(BlogListPresenter, {
      blog_entries: this.state.blog_entries,
      increaseLikesHandler: this.increaseLikesHandler
    })
  }
}

class BlogListPresenter extends React.Component {
  render() {
    let like_title = (_.map(this.props.blog_entries, (entry, key) => (
      [entry.text, entry.likes]
    )))
    console.log(like_title)
    return React.createElement('div',{},React.createElement('ul', {},
      _.map(this.props.blog_entries, (entry, key) => (
        React.createElement(BlogItem, {
          meta: entry.meta,
          image: entry.image,
          likes: entry.likes,
          text: entry.text,
          key: entry.id,
          id: entry.id,
          increaselikesHandler: this.props.increaseLikesHandler
        })))),
        React.createElement(PieChart,{ columns: like_title}))
  }
}


ReactDOM.render(
  React.createElement(BlogList),
  document.getElementById("app")
);
