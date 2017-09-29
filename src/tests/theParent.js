/**
 * Created by MAKS on 15.09.2017.
 */
import React, {Component} from 'react';
import PubSub from 'pubsub-js';

import TheChild from "./theChild";
import TheThird from "./theThird";

class TheParent extends Component {
    constructor(){
        super();
        this.state = {myValue: ''}
    }
    componentWillMount(){
        this.token = PubSub.subscribe('GET FILES', this.subscriber.bind(this));
    }
    componentDidMount(){

    }
   /* componentDidMount(){
        PubSub.publish('GET FILES', this.token);
    }
    componentWillUnmount(){
        PubSub.unsubscribe(this.token);
    }*/

    subscriber(msg, data){
        console.log(msg + ':' + data)
        this.setState({myValue: data})
    }

    render() {
        return (
            <div>
                Parent Component: {this.state.myValue}
                <TheChild/>
                <TheThird/>
            </div>
        );
    }

    componentDidMount() {

    }

}
export default TheParent