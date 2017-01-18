import React from 'react';
import ReactDOM from 'react-dom';
import c3 from 'c3';
import _ from 'lodash';

class PieChartPresenter extends React.Component {
  render(){
    let likeTitle = (_.map(this.props.blog_entries, (entry) => (
      [entry.text, entry.likes]
    )));
    return React.createElement(PieChart,{ columns: likeTitle});
  }
}

class PieChart extends React.Component {
  componentDidMount(){
    this.chart = c3.generate({
      bindto: ReactDOM.findDOMNode(this.refs.chart),
      type : 'pie',
      data: {
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

export default PieChartPresenter;
