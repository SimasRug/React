var React = require('react');
var WeatherFrom = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
    getInitialState: function() {
        return {
            isLoading: false
            // location: 'Miami',
            // temp: 40
        }
    },
    handleSearch: function(location) {
        var that = this;
        this.setState({
            isLoading:true,
            errorMessage: undefined,
            location: undefined,
            temp: undefined
        });

        openWeatherMap.getTemp(location).then(function(temp){
            that.setState({
                location: location,
                temp: temp,
                isLoading:false
            });
        }, function(e){
            that.setState({
                isLoading:false,
                errorMessage: e.message
            });
        });
        // this.setState({
        //     location: location,
        //     temp: 23
        // });
    },
    componentDidMount: function() {
        var location = this.props.location.query.location;

        if(location && location.length > 0) {
            this.handleSearch(location);
            window.location.hash = '#/'
        }
    },
    componentWillReceiveProps: function(newProps) {
        var location = newProps.location.query.location;

        if(location && location.length > 0) {
            this.handleSearch(location);
            window.location.hash = '#/'
        }
    },
    render: function(){
        // var location = this.state.location;
        // var temp = this.state.temp;
        var {isLoading, temp, location, errorMessage } = this.state;

        function renderMessage() {
            if(isLoading) {
                return <h3 className="text-center">Featching Weather...</h3>;
            } else if(temp && location) {
                return <WeatherMessage location={location} temp={temp}/>;
            }
        }

        function renderError() {
            if(typeof errorMessage == 'string') {
                return(
                    <ErrorModal message={ errorMessage }/>
                );
            }
        }

        return (
            <div>
                <h1 className="text-center page-title">Get Weather</h1>
                <WeatherFrom onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}
            </div>
        );
    }
});

module.exports = Weather