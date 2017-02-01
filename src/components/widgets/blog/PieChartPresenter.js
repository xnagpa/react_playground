import React from 'react';
import ReactDOM from 'react-dom';
import c3 from 'c3';
const { DOM } = React;

const PieChartPresenter = (props) => (
  React.createElement(PieChart,{ columns: props.likeTitles})
);

PieChartPresenter.propTypes = {
  blogEntries: React.PropTypes.array,
  likeTitles: React.PropTypes.array
};

class PieChart extends React.Component {
  componentDidMount() {
    this.chart = c3.generate({
      bindto: ReactDOM.findDOMNode(this.refs.chart),
      type : 'pie',
      data: {
        columns: this.props.columns,
        type : 'pie'
      },

    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props != nextProps) {
      this.chart.load({ columns: this.props.columns });
    }
  }

  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this.refs.chart));
  }

  render() {
    return (
      DOM.div({ ref: 'chart'})
    );
  }
}

PieChart.propTypes = {
  columns: React.PropTypes.array,
};

export default PieChartPresenter;
