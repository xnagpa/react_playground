const DOM = React.DOM;
const TextBox = (props) => (
  React.createElement(
    Span,
    {str: props.str}
  )
);

const Span = (props) => (
  DOM.span({
    style: {
      border: '1px solid red'
    }
  }, props.children, props.str)
)

ReactDOM.render(
  React.createElement(
    TextBox, {str: "Hoola hoop"}),
  document.getElementById("app")
);
