import React, {Component} from 'react';
import '../../styles/styles.css';

class MathCellWhite extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            calculatedValue:0
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event)
    {
        this.setState({["calculatedValue"]: event.target.value});
    }
    render()
    {
        return(
            <td id="mathCellWhite" >$ {this.props.sumProp}</td>
            );
    }
}
export default MathCellWhite;