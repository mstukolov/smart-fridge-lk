/**
 * Created by MAKS on 15.09.2017.
 */
import React, {Component} from 'react';
import PubSub from 'pubsub-js';
import TheChild from "./theChild";


class TheThird extends Component {
    constructor(){
        super();
        this.state = {myValueTheThird: ''}
    }
    componentWillMount(){
        this.token = PubSub.subscribe('GET FILES', this.subscriber.bind(this));
    }

    subscriber(msg, data){
        this.setState({myValueTheThird: data})
    }

    render() {
        return (
            <div>
                TheThird Component: {this.state.myValueTheThird}
                <TheChild/>
            </div>
        );
    }

    componentDidMount() {

    }

}
export default TheThird