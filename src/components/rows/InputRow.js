import React,{Component} from 'react';
import '../../styles/styles.css';
import InputCellDark from '../cells/InputCellDark';
import InputCellLight from '../cells/InputCellLight';
import InputCellPink from '../cells/InputCellPink';
import CategoryCell from '../cells/CategoryCell';
import MathCellPink from '../cells/MathCellPink';
import MathCellWhite from '../cells/MathCellWhite';
import PercentCellShort from '../cells/PercentCellShort';
import PercentCellLong from '../cells/PercentCellLong';

export class InputRow extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            B:"",C:0,D:0,E:0,F:0,G:0,H:0,I:0,J:0,K:0,L:0,M:0,N:0,O:0,P:0,Q:0,R:0,S:0
        }
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.rowSum = this.rowSum.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(newArray)
    {
        this.props.updateGrandpaState(this.props.categoryNumberProp,newArray);
    }
    handleFieldChange(fieldID,value)
    {
        this.setState({[fieldID]:value});
        //CREATE AN EXPLICITLY FRESH NEW ARRAY TO PASS TO HANDLESUBMIT

        var newArray = [this.state["B"],this.state["C"],this.state["D"],this.state["E"],this.state["F"],this.state["G"],this.state["H"],this.state["I"],this.state["J"],this.state["K"],this.state["L"],this.state["M"],this.state["N"],this.state["O"],this.state["P"],this.state["Q"],this.state["R"],this.state["S"]];
        
        var targetIndex = 0;
    
        switch(String(fieldID))
        {
            case "B":
                targetIndex = 0;
            break;
            case "C":
                targetIndex = 1;
            break;
            case "D":
                targetIndex = 2;
            break;
            case "E":
                targetIndex = 3;
            break;
            case "F":
                targetIndex = 4;
            break;
            case "G":
                targetIndex = 5;
            break;
            case "H":
                    targetIndex = 6;
            break;
            case "I":
                    targetIndex = 7;
            break;
            case "J":
                    targetIndex = 8;
            break;
            case "K":
                    targetIndex = 9;
            break;
            case "L":
                    targetIndex = 10;
            break;
            case "M":
                    targetIndex = 11;
            break;
            case "N":
                    targetIndex = 12;
            break;
            case "O":
                    targetIndex = 13;
            break;
            case "P":
                    targetIndex = 14;
            break;
            case "Q":
                    targetIndex = 15;
            break;
            case "R":
                    targetIndex = 16;
            break;
            case "S":
                    targetIndex = 17;
            break;
            default:
        }
        newArray[targetIndex] = value;
       
       
        
        //recalculate rowsum
        for(var i =6;i<newArray.length;i++)
        {
            newArray[3] += Math.round(Number(newArray[i])*100)/100; 
        }
        //recalculate budget remaining
        newArray[4] = Math.round((newArray[1]-newArray[3])*100)/100;
        //recalculate percent budget remaining
        newArray[5] = Math.round((newArray[1]-newArray[3])/newArray[1]*100); 
        this.handleSubmit(newArray);
    }
    rowSum()
    {
        var sum = 0;
        const columnArray = ["H","I","J","K","L","M","N","O","P","Q","R","S"];
        for(var i = 0; i< columnArray.length; i++)
        {
            sum += Number(this.state[columnArray[i]]);
        }
        return sum;
    }
    render()
    {
        return(
            <tr>
            <CategoryCell  key={"B"}id={"B"} onChange={this.handleFieldChange} value={this.state["B"]}></CategoryCell>
            <InputCellPink key={"C"} id = {"C"} onChange={this.handleFieldChange} value={this.state["C"]}></InputCellPink>
            <PercentCellShort percentProp = {this.props.dProp}></PercentCellShort>
            <MathCellWhite sumProp={Math.round(this.rowSum()*100)/100}></MathCellWhite>
            <MathCellPink subtractProp={Math.round((this.state["C"]-this.rowSum())*100)/100}></MathCellPink>
            <PercentCellLong percentProp = {Math.round((this.state["C"]-this.rowSum())/this.state["C"]*100)}></PercentCellLong>
            <InputCellDark key={"H"} id = {"H"} onChange={this.handleFieldChange} value={this.state["H"]}></InputCellDark>
            <InputCellDark key={"I"} id = {"I"} onChange={this.handleFieldChange} value={this.state["I"]}></InputCellDark>
            <InputCellDark key={"J"} id = {"J"} onChange={this.handleFieldChange} value={this.state["J"]}></InputCellDark>
            <InputCellLight key={"K"} id = {"K"} onChange={this.handleFieldChange} value={this.state["K"]}></InputCellLight>
            <InputCellLight key={"L"} id = {"L"} onChange={this.handleFieldChange} value={this.state["L"]}></InputCellLight>
            <InputCellLight key={"M"} id = {"M"} onChange={this.handleFieldChange} value={this.state["M"]}></InputCellLight>
            <InputCellDark key={"N"} id = {"N"} onChange={this.handleFieldChange} value={this.state["N"]}></InputCellDark>
            <InputCellDark key={"O"} id = {"O"} onChange={this.handleFieldChange} value={this.state["O"]}></InputCellDark>
            <InputCellDark key={"P"} id = {"P"} onChange={this.handleFieldChange} value={this.state["P"]}></InputCellDark>
            <InputCellLight key={"Q"} id = {"Q"} onChange={this.handleFieldChange} value={this.state["Q"]}></InputCellLight>
            <InputCellLight key={"R"} id = {"R"} onChange={this.handleFieldChange} value={this.state["R"]}></InputCellLight>
            <InputCellLight key={"S"} id = {"S"} onChange={this.handleFieldChange} value={this.state["S"]}></InputCellLight>
            </tr>
        );
    }
}
export default InputRow;