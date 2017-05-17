import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const PieChartPresenter = (props) => (
  <PieChart columns= {props.likeTitles}/>
);

PieChartPresenter.propTypes = {
  blogEntries: PropTypes.array,
  likeTitles: PropTypes.array
};

class PieChart extends React.Component {
  componentDidMount() {
    const c3 = require('c3');
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
      this.chart.load({ columns: nextProps.columns });
    }
  }

  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this.refs.chart));
  }

  render() {
    return (
      <div ref='chart'/>
    );
  }
}

PieChart.propTypes = {
  columns: PropTypes.array,
};

export default PieChartPresenter;
