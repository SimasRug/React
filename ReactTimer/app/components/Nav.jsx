var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
    render : function() {
        return (
            <div className="top-bar">
               <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Timer App</li>
                        <li>
                            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Timer</IndexLink>
                        </li>
                        <li>
                            <IndexLink to="/countdown" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Countdown</IndexLink>
                        </li>
                    </ul>
               </div>
               <div className="top-bar-right">
                   <ul className="menu">
                       <li className="menu-text">
                            Creted by <a href="http://simonasrugevicius.com/home" target="_blank">Simonas Rugevicius</a>
                       </li>
                   </ul>
               </div>

            </div>
        );
    }
});

module.exports = Nav;