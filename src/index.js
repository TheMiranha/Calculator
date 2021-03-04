import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ant: '0',
            current: '0',
        }
    }

    append = (a) => this.state.current.length < 9 ? this.setState({current: this.state.current === '0' ? a : this.state.current + a}) : false;

    list = () => [7,8,9,4,5,6,1,2,3];

    operators = () => ['+', '-', '/', '*']

    calculate = () => {
        var result = eval(this.state.current);
        this.setState({ant: '' + this.state.current});
        this.setState({current: '' + result});
    }

    render() {
        return(
            <div className="App">
                <div className="container">
                    <div className="display">
                        <div className="ant">
                            {this.state.ant}
                        </div>
                        <div className="current">
                            {this.state.current}
                        </div>
                    </div>

                    <div className="control">
                        <div className="keys">
                            {this.list().map((a) => <button className="number" onClick={() => {this.append('' + a)}}>{a}</button>)}
                            <button className="number0" onClick={() => {this.append('0')}}>0</button>
                        </div>
                        <div className="utils">
                            {this.operators().map((a) => <button className="util" onClick={() => {this.append('' + a)}}>{a}</button>)}
                            <button className="util0" onClick={() => this.setState({current: '0', ant: '0'})}>C</button>
                            <button className="util0" style={{borderBottom: 'none'}} onClick={this.calculate}>=</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));