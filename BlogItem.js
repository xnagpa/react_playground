const {
  bind
} = _;

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
    this.state = {
      count: props.count
    }
    this.handleClick = bind(this.handleClick, this);
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return ( <div><p> {
        this.state.count
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
      React.createElement(TextBox, {}, `Отредактировано ${updatedAt}`),
      React.createElement(TextBox, {}, `Создано ${createdAt}`),
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

class BlogItem extends React.Component {
  render() {
    const {
      meta,
      image,
      text,
      likes
    } = this.props;
    return React.createElement('div', {},
      React.createElement(Image, {
        src: image.url
      }),
      React.createElement(TextBox, {}, text),
      React.createElement(Like, {
        count: likes
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



ReactDOM.render(
  React.createElement('div', {}, React.createElement(BlogItem, {
    meta: {
      author: {
        name: "Finn",
        age: "12"
      },
      updatedAt: moment().subtract(10, 'days').calendar(),
      createdAt: moment().subtract(10, 'days').calendar()
    },
    likes: 651,
    text: 'Fun will never end',
    image: {
      width: 100,
      height: 100,
      url: 'http://i.cdn.turner.com/v5cache/CARTOON/site/Images/i70/adventure-time.png'
    }
  })),
  document.getElementById("app")
);
