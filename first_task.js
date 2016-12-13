const DOM = React.DOM;
const Image = (props) => (
  DOM.img({
    src: props.src,
    style:{
      width: `${props.width}px`,
      height: `${props.height}px`,
    }
  })
);


ReactDOM.render(
  React.createElement(
    Image, {src: "https://www.apmpodcasts.org/wp-content/uploads/2015/06/adventure-time.jpg",
            width: 100, height: 100}),
  document.getElementById("app")
);
