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
  src: "https://s-media-cache-ak0.pinimg.com/originals/cf/35/65/cf3565593090d443ed33662cfb6b435b.jpg"
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
    return ( < div > < p > {
        this.state.count
      }
      likes < /p> < button onClick = {
      this.handleClick
    } > Like this shit < /button></div >
  )
}

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
      React.createElement(TextBox, {}, `${meta.author.name}, ${meta.author.age}`),
      React.createElement(TextBox, {}, `Отредактировано ${meta.updated_at}`),
      React.createElement(TextBox, {}, `Создано ${meta.updated_at}`),
    )
  }
}

BlogItem.defaultProps = {
  author: {
    name: "Princess Bubblegum",
    age: "200"
  },
  text: 'Wanna experiment all the things!',
  image: {
    width: 100,
    height: 100,
    url: 'http://vignette1.wikia.nocookie.net/adventuretimewithfinnandjake/images/6/6a/Vlcsnap-321831.png/revision/latest?cb=20110722230336'
  },
  updated_at: moment().subtract(10, 'days').calendar(),
  created_at: moment().subtract(20, 'days').calendar(),
  likes: 0
}

BlogItem.propTypes = {
  meta: React.PropTypes.shape({
    author: React.PropTypes.shape({
      name: React.PropTypes.string,
      age: React.PropTypes.string
    }),
    updated_at: React.PropTypes.string,
    created_at: React.PropTypes.string
  }),
  text: React.PropTypes.string,
  image: React.PropTypes.shape({
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    url: React.PropTypes.string,
  }),
  likes: React.PropTypes.number
}



ReactDOM.render(
  React.createElement('div', {}, React.createElement(BlogItem, {
    meta: {
      author: {
        name: "Finn",
        age: "12"
      },
      updated_at: moment().subtract(10, 'days').calendar(),
      created_at: moment().subtract(10, 'days').calendar()
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
