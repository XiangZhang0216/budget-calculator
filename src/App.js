import React, { Component } from 'react';
import './styles/styles.css';
import BudgetCalculator from './BudgetCalculator';

class App extends Component
{
    render(){
        return(
            <div className = 'wrapper'>
                <BudgetCalculator/>
            </div>
        );
    }
}
export default App;