var React = require('react');
// var createReactClass = require('create-react-class');

var WeatherForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();

    if(this.refs.city.value.length > 0) {
        var location = this.refs.city.value;
        this.refs.city.value = '';
        console.log(location);
        this.props.onSearch(location);
    }

  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="search" ref="city" placeholder="Enter City Name"/>
          <br/>
          <button className="hollow button button expanded" >Get Weather</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
