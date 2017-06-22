var React = require('react');

// var WeatherMessage = React.createClass({
//     render: function(){
//         var {temp, location} = this.props;
//         // var location = this.props.location;
//         // var temp = this.props.temp;

//         return (
//             <h3>It's {temp} C in  {location}</h3>
//         );
//     }
// });

var WeatherMessage = ({temp, location}) => {
    //  var {temp, location} = props;
      return (
            <h3 className="text-center">It's {temp} C in  {location}</h3>
        );
}

module.exports = WeatherMessage