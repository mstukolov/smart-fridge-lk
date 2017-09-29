/**
 * Created by MAKS on 15.09.2017.
 */
import React, {Component} from 'react';
import PubSub from 'pubsub-js';

var i = 0;
class TheChild extends Component {
    constructor(){
        super();
        this.state = {myParam: ''}
    }
    render() {
        return (

            <div onClick={this.updateMyParam.bind(this)}>
                TheChild Component: {this.state.myParam}
            </div>
        )
    }
    updateMyParam(){
        this.setState({myParam: 'Hello, Vasya=' + i})
        PubSub.publish('GET FILES', this.state.myParam);
        i++;
    }
}
export default TheChild