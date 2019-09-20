import React,{Component} from 'react';
import '../../styles/styles.css';

class Footer extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            B:"TOTALS",C:0,D:0,E:0,F:0,G:0,H:0,I:0,J:0,K:0,L:0,M:0,N:0,O:0,P:0,Q:0,R:0,S:0
        }
    }
    render()
    {
        return(
            <tr>
                <td id="categoryFooter">TOTALS</td>
                <td id="pinkFooter">$ {this.props.cProp}</td>
                <td id="shortFooter"></td>
                <td id="violetFooter">$ {this.props.eProp}</td>
                <td id="pinkFooter">$ {this.props.fProp}</td>
                <td id="violetFooter"></td>
                <td id = "footerDark" >$ {this.props.hProp}</td>
                <td id = "footerDark" >$ {this.props.iProp}</td>
                <td id = "footerDark" >$ {this.props.jProp}</td>
                <td id = "footerLight" >$ {this.props.kProp}</td>
                <td id = "footerLight" >$ {this.props.lProp}</td>
                <td id = "footerLight" >$ {this.props.mProp}</td>
                <td id = "footerDark" >$ {this.props.nProp}</td>
                <td id = "footerDark" >$ {this.props.oProp}</td>
                <td id = "footerDark" >$ {this.props.pProp}</td>
                <td id = "footerLight" >$ {this.props.qProp}</td>
                <td id = "footerLight" >$ {this.props.rProp}</td>
                <td id = "footerLight">$ {this.props.sProp}</td>
            </tr>
        ); 
    }
    
}
export default Footer;