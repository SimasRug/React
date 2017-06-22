var React = require('react');

// var About = React.createClass({
//     render: function(){
//         return (
//             <h3>About Component</h3>
//         );
//     }
// });

var About = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">About</h1>
            <p>This weather application is created using <a href="https://facebook.github.io/react/" target="_blank">React</a> and Open Weather Map <a href="https://openweathermap.org/api" target="_blank">API</a></p>
        </div>

    );
};

module.exports = About