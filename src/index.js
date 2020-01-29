import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function SomeButton(props) {
    return (
        <button className={"button button"+props.index} onClick={props.onClick}>
            {props.value}
        </button>
    );
}

function Display(props) {
    return (
        <div className="display">
            <p className="main-text">{props.firstString}</p>
            <p className="help-text">{props.secondString}</p>
        </div>
    );
}
            
class Calculator extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            buttons: ['AC', 'CE', '/', 'X', '7', '8', '9', '-', '4', '5', '6', '+', '1', '2', '3', '=', '0', '.'],
            currentString: "",
            currentCalculations: Array(100).fill(null),
        };
    }
    
    calculate() {
        let tmpString = this.state.currentString.slice(0);
        let tmpNumbersArray = [];
        let tmpSignArray = [];
        let index = 0;
        let tmp = '';
        let tmpResult = [];
        
        while (index < tmpString.length) {
            if (index > 0) index++;
            
            while(tmpString[index] != '+' && tmpString[index] != '-' && tmpString[index] != 'X' && tmpString[index] != '/' && index < tmpString.length) {
                tmp += tmpString[index];
                index++;
            }
            switch(tmpString[index]) {
                    case '+': {
                        tmpSignArray.push('+');
                        break;
                    }
                    case '-': {
                        tmpSignArray.push('-');
                        break;
                    }
                    case 'X': {
                        tmpSignArray.push('X');
                        break;
                    }
                    case '/': {
                        tmpSignArray.push('/');
                        break;
                    }
                    default: {}
            }
            tmpNumbersArray.push(+tmp);
            tmp = '';
            
            
            console.log(tmpSignArray);
            console.log(tmpNumbersArray);
            console.log(tmpString.length);
            console.log(index);
        }
        
        for (let i = 0; i < tmpNumbersArray.length - 1; i++) {
            switch(tmpSignArray[i]) {
                case '+': {
                    tmpNumbersArray[i + 1] = tmpNumbersArray[i] + tmpNumbersArray[i + 1];
                    break;
                }
                case '-': {
                    tmpNumbersArray[i + 1] = tmpNumbersArray[i] - tmpNumbersArray[i + 1];
                    break;
                }
                case 'X': {
                    tmpNumbersArray[i + 1] = tmpNumbersArray[i] * tmpNumbersArray[i + 1];
                    break;
                }
                case '/': {
                    tmpNumbersArray[i + 1] = tmpNumbersArray[i] / tmpNumbersArray[i + 1];
                    break;
                }
                default: {}
            }
            console.log(tmpNumbersArray);
        }
        
        tmpResult.push(tmpNumbersArray[tmpNumbersArray.length - 1]);
        
        this.setState({
            currentCalculations: tmpResult,
            currentString: '' + tmpResult,
        });
    }
    
    handleClick(i) {
        let currentCalculations;
        try {
            currentCalculations = this.state.currentCalculations.slice();
        }
        catch(err) {
            console.log(typeof(this.state.currentCalculations));
        }
        
        switch(i) {
            case 0:
                {
                    this.setState({
                        currentString: '',
                        currentCalculations: Array(100).fill(null),
                });
                break;
                }
            case 1:
                {
                    if (this.state.currentString == '') break;
                    else {
                        let ranksNumber = 0;
                        let tmpString = '';
                        
                        if (this.state.currentCalculations == this.state.currentString) {
                            this.setState({
                                currentCalculations: Array(100).fill(null),
                            });
                        }
                        
                        while (tmpString != '+' && tmpString != '-' && tmpString != 'X' && tmpString != '/' && ranksNumber != this.state.currentString.length + 1) {
                            ranksNumber++;
                            tmpString = this.state.currentString[this.state.currentString.length - ranksNumber];
                        }
                        console.log(ranksNumber);
                        this.setState({
                            currentString: this.state.currentString.slice(0, this.state.currentString.length - ranksNumber + 1),
                        });
                    }
                    break;
                }
            case 2:
                {
                    if (this.state.currentString[this.state.currentString.length - 1] === '/') break;
                    if (this.state.currentString[this.state.currentString.length - 1] === '+' || this.state.currentString[this.state.currentString.length - 1] === 'X' || this.state.currentString[this.state.currentString.length - 1] === '-') {
                        this.setState({
                            currentString: this.state.currentString.slice(0, this.state.currentString.length - 1) + '/',
                        });
                        break;
                    }
                    this.setState({
                        currentString: this.state.currentString + '/',
                    });
                    break;
                }
            case 3:
                {
                    if (this.state.currentString[this.state.currentString.length - 1] === 'X') break;
                    if (this.state.currentString[this.state.currentString.length - 1] === '+' || this.state.currentString[this.state.currentString.length - 1] === '-' || this.state.currentString[this.state.currentString.length - 1] === '/') {
                        this.setState({
                        currentString: this.state.currentString.slice(0, this.state.currentString.length - 1) + 'X',
                        });
                        break;
                    }
                    this.setState({
                        currentString: this.state.currentString + 'X',
                    });
                    break;
                }
            case 4:
                {
                    this.setState({
                        currentString: this.state.currentString + '7',
                    });
                    break;
                }
            case 5:
                {
                    this.setState({
                        currentString: this.state.currentString + '8',
                    });
                    break;
                }
            case 6:
                {
                    this.setState({
                        currentString: this.state.currentString + '9',
                    });
                    break;
                }
            case 7:
                {
                    if (this.state.currentString[this.state.currentString.length - 1] === '-') break;
                    if (this.state.currentString[this.state.currentString.length - 1] === '+' || this.state.currentString[this.state.currentString.length - 1] === 'X' || this.state.currentString[this.state.currentString.length - 1] === '/') {
                        this.setState({
                        currentString: this.state.currentString.slice(0, this.state.currentString.length - 1) + '-',
                        });
                        break;
                    }
                    this.setState({
                        currentString: this.state.currentString + '-',
                    });
                    break;
                }
            case 8:
                {
                    this.setState({
                        currentString: this.state.currentString + '4',
                    });
                    break;
                }
            case 9:
                {
                    this.setState({
                        currentString: this.state.currentString + '5',
                    });
                    break;
                }
            case 10:
                {
                    this.setState({
                        currentString: this.state.currentString + '6',
                    });
                    break;
                }
            case 11:
                {
                    if (this.state.currentString[this.state.currentString.length - 1] === '+') break;
                    if (this.state.currentString[this.state.currentString.length - 1] === '-' || this.state.currentString[this.state.currentString.length - 1] === 'X' || this.state.currentString[this.state.currentString.length - 1] === '/') {
                        this.setState({
                        currentString: this.state.currentString.slice(0, this.state.currentString.length - 1) + '+',
                        });
                        break;
                    }
                    this.setState({
                        currentString: this.state.currentString + '+',
                    });
                    break;
                }
            case 12:
                {
                    this.setState({
                        currentString: this.state.currentString + '1',
                    });
                    break;
                }
            case 13:
                {
                    this.setState({
                        currentString: this.state.currentString + '2',
                    });
                    break;
                }
            case 14:
                {
                    this.setState({
                        currentString: this.state.currentString + '3',
                    });
                    break;
                }
            case 15:
                {
                    this.calculate();
                    break;
                }
            case 16:
                {
                    this.setState({
                        currentString: this.state.currentString + '0',
                    });
                    break;
                }
            case 17:
                {
                    this.setState({
                        currentString: this.state.currentString + '.',
                    });
                    break;
                }
            case 18:
                {
                    break;
                }
            default: 
                {
                    this.setState({
                        currentString: "",
                    });
                }
        }
    }
    
    renderButton(i) {
        return (
            <SomeButton
                value={this.state.buttons[i]}
                onClick={() => this.handleClick(i)}
                index={i}
        />
        );
    }
    
    render() {
        return (
                <div className="main-panel">
                        <Display firstString= {this.state.currentCalculations}
                        secondString=
                        {this.state.currentString} />
                        {this.renderButton(0)}
                        {this.renderButton(1)}
                        {this.renderButton(2)}
                        {this.renderButton(3)}
                        {this.renderButton(4)}
                        {this.renderButton(5)}
                        {this.renderButton(6)}
                        {this.renderButton(7)}
                        {this.renderButton(8)}
                        {this.renderButton(9)}
                        {this.renderButton(10)}
                        {this.renderButton(11)}
                        {this.renderButton(12)}
                        {this.renderButton(13)}
                        {this.renderButton(14)}
                        {this.renderButton(15)}
                        {this.renderButton(16)}
                        {this.renderButton(17)}
                </div>
        );
    }
}

ReactDOM.render(
    <Calculator />,
    document.getElementById('root')
);