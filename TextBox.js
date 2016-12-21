const DOM = React.DOM;
const TextBox = (props) => (
  React.createElement(
    Span,
    null,
    props.children
  )
);

const Span = (props) => (
  DOM.span({
    style: {
      border: '1px solid red'
    }
  }, props.children)
)

ReactDOM.render(
  React.createElement(
    TextBox, null, "Hoola hoop"),
  document.getElementById("app")
);
