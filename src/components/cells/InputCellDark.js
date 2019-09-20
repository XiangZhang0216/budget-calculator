import React, {Component} from 'react';
import {Form, Input} from 'reactstrap';
import '../../styles/styles.css';

class InputCellDark extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            inputValue:0
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleKeyPress(e)
    {
        if(e.key==='Enter')
        {e.preventDefault();}
        if(e.key===',')
        {
            e.preventDefault();
            alert("Commas are not allowed to be entered into the report.");
        }
    }
    handleSubmit(text)
    {
        this.props.onChange(this.props.id,text);
    }

    handleChange(event)
    {
        const text = event.target.value;
        this.setState({["inputValue"]: text});
        this.props.onChange(this.props.id,text);
    }
    render()
    {
        return(
            <td id="cellD" ><Form><Input id="fieldD" type = "number" onChange={this.handleChange} onKeyPress={this.handleKeyPress} ></Input></Form></td>
            );
    }
}
export default InputCellDark;