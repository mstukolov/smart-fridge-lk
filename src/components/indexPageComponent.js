/**
 * Created by MAKS on 14.09.2017.
 */
import React, {Component} from 'react';
import {Form, FormGroup, FormControl, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';

var math = require('mathjs');


var sectionStyle = {
    width: "100%",
    height: "100%",
};
var arr = [
    {x: 1, y: 2400},
    {x: 2, y: 1398},
    {x: 3, y: 9800},
    {x: 4, y: 3908},
    {x: 5, y: 4800},
    {x: 6, y: 3800},
    {x: 7, y: 4300},
];
class indexPageComponent extends Component {
    constructor(){
        super();
        this.state = {
            data:  [],
            start: 0,
            end: 100,
            formula: 'f(x)=x^2 + 1'
        }

        this.handleChangeFormula = this.handleChangeFormula.bind(this)
        this.calculateFormula = this.calculateFormula.bind(this)
    }
    componentDidMount(){

    }
    handleChangeFormula(e){
        this.setState({ [e.target.name]: e.target.value });
    }
    calculateFormula(){
        console.log('Начался расчет формулы')
        var parser = math.parser();
        parser.eval(this.state.formula);
        var arr = []
        x = this.state.start
        var dx = 0.2
        for(var x = this.state.start; x < this.state.end; x=x+dx){

            arr.push({x: x, y: parser.eval('f(' + x +')')})
            console.log('x=' + x + ';у=' + parser.eval('f(' + x +')'));
        }

        this.setState({data: arr})

    }
    render() {
        return (
            <div style={ sectionStyle }>
                <h1>Тестовая страница с динамической формулой</h1>
                <Form style={{width:'800px', padding: '20px'}}>
                    <FormGroup>
                        <label>Формула:</label>
                        <FormControl type="text"
                               id="formula"
                               name="formula"
                               value={this.state.formula} onChange={this.handleChangeFormula}
                        />
                        <label>Диапозон ОТ:</label>
                        <FormControl type="text"
                                     id="start"
                                     name="start"
                                     value={this.state.start} onChange={this.handleChangeFormula}
                        />
                        <label>Диапозон ДО:</label>
                        <FormControl type="text"
                                     id="end"
                                     name="end"
                                     value={this.state.end} onChange={this.handleChangeFormula}
                        />
                    </FormGroup>
                    <Button bsStyle="success" onClick={this.calculateFormula}>Рассчитать</Button>

                    <FormGroup>
                        <LineChart width={600} height={300} data={this.state.data}
                                   margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                            <XAxis dataKey="x"/>
                            <YAxis/>
                            <CartesianGrid strokeDasharray="3 3"/>
                            <Legend />
                            <Line type="monotone" dataKey="y" stroke="#8884d8" activeDot={{r: 8}}/>
                        </LineChart>
                    </FormGroup>
                </Form>

            </div>
        )}
}

export default indexPageComponent