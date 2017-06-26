var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Countdown', () => {
    it('should exist',  ()=>{
        expect(Countdown).toExist();
    });

    it('sould set state to strated and countdown', (done) => {
        var countdown = TestUtils.renderIntoDocument(<Countdown/>);
        countdown.handleSetCountdown(10);

        expect(countdown.state.count).toBe(10);
        expect(countdown.state.countdownStatus).toBe('started');

        setTimeout(()=>{
            expect(countdown.state.count).toBe(9);
            done();
        },1001);
    });

     it('sould set state to strated and check if countdown doesnt go lower then 0', (done) => {
        var countdown = TestUtils.renderIntoDocument(<Countdown/>);
        countdown.handleSetCountdown(1);

        expect(countdown.state.count).toBe(1);
        expect(countdown.state.countdownStatus).toBe('started');

        setTimeout(()=>{
            expect(countdown.state.count).toBe(0);
            done();
        },3001);
    });
});