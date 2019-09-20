import React,{Component} from 'react';
import '../../styles/styles.css';

const leftBoarder = {
    borderTop: '1px solid rgb(128,128,128)',
    borderLeft: '1px solid rgb(128,128,128)',
    borderBottom: '1px solid rgb(128,128,128)'

};

const midBoarder = {
    borderTop: '1px solid rgb(128,128,128)',
    borderBottom: '1px solid rgb(128,128,128)'

};

const rightBoarder = {
    borderTop: '1px solid rgb(128,128,128)',
    borderRight: '1px solid rgb(128,128,128)',
    borderBottom: '1px solid rgb(128,128,128)'

};

class HeaderA extends Component{
    constructor(props)
    {
        super(props);
        this.state={}
    }
    render()
    {
        return(
            <tr>
                <td id="categoryTop"></td>
                <td id="burgundyTop">TOTAL</td>
                <td id="shortTop">% OF</td>
                <td id="purpleTop">AMOUNT SPENT</td>
                <td id="burgundyTop">BUDGET</td>
                <td id="purpleTop">% OF BUDGET</td>
                <td id = "quarterDark" style={leftBoarder}></td>
                <td id = "quarterDark" style={midBoarder}>Q1</td>
                <td id = "quarterDark" style={rightBoarder}></td>
                <td id = "quarterLight" style={leftBoarder}></td>
                <td id = "quarterLight" style={midBoarder}>Q2</td>
                <td id = "quarterLight" style={rightBoarder}></td>
                <td id = "quarterDark" style={leftBoarder}></td>
                <td id = "quarterDark" style={midBoarder}>Q3</td>
                <td id = "quarterDark" style={rightBoarder}></td>
                <td id = "quarterLight" style={leftBoarder}></td>
                <td id = "quarterLight" style={midBoarder}>Q4</td>
                <td id = "quarterLight" style={rightBoarder}></td>
            </tr>
        );
    }
    
}
export default HeaderA;