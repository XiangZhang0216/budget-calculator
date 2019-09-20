import React,{Component} from 'react';
import '../../styles/styles.css';

class HeaderB extends Component{
    constructor(props)
    {
        super(props);
        this.state={}
    }
    render()
    {
        return(
            <tr>
                <td id="categoryBot">CATEGORY</td>
                <td id="burgundyBot">BUDGET</td>
                <td id="shortBot">BUDGET</td>
                <td id="purpleBot">TO DATE</td>
                <td id="burgundyBot">REMAINING</td>
                <td id="purpleBot">REMAINING</td>
                <td id = "monthDark" >JAN</td>
                <td id = "monthDark" >FEB</td>
                <td id = "monthDark" >MAR</td>
                <td id = "monthLight" >APR</td>
                <td id = "monthLight" >MAY</td>
                <td id = "monthLight" >JUN</td>
                <td id = "monthDark" >JUL</td>
                <td id = "monthDark" >AUG</td>
                <td id = "monthDark" >SEP</td>
                <td id = "monthLight" >OCT</td>
                <td id = "monthLight" >NOV</td>
                <td id = "monthLight" >DEC</td>
            </tr>
        );
    }
    
}
export default HeaderB;