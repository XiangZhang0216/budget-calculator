import React, {Component, PureComponent} from 'react';
import{Line, XAxis, YAxis, CartesianGrid, Legend,ComposedChart, Bar, Tooltip,BarChart, Cell, PieChart, Pie}from 'recharts';
import'./styles/styles.css';


import { Row, Button} from 'reactstrap';
import { InputRow } from './components/rows/InputRow';
import HeaderA from './components/rows/HeaderA';
import HeaderB from './components/rows/HeaderB';
import Footer from './components/rows/Footer';

const inputFieldIDs = ["B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S"];
const COLORS = ['#A5B592', '#F3A447', '#E7BC29', '#D092A7','#9C85C0','#809EC2','#64754F','#B1650C','#937510','#94405D','#5B4281','#809EC2'];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({cx, cy, midAngle, innerRadius, outerRadius, percent, index}) => {
     const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

class BudgetCalculator extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            category1:["",           0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            category2:["",           0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            category3:["",           0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            category4:["",           0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            category5:["",           0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            category6:["",           0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            category7:["",           0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            category8:["",           0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            category9:["",           0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            category10:["",          0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            category11:["",          0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            category12:["",          0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            totals:["TOTALS",        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            submitButtonText:"Download Report"
        }
       
        this.updateGrandpaData = this.updateGrandpaData.bind(this);
        this.columnSum = this.columnSum.bind(this);
        this.exportCSV = this.exportCSV.bind(this);
        
    }
    columnSum(column)
    {
        var sum = 0;

        var index = inputFieldIDs.indexOf(column);

        for(var  i =1;i<13;i++)
        {
            sum += Number(this.state["category"+i][index]);
        }
        return sum;
    }
    updateGrandpaData(categoryNumber,newData)
    {
        if(newData.length === 18&&categoryNumber>0)
        {
            const currentCategory = "category"+categoryNumber;
            this.setState({[currentCategory]:newData}); 
        }
    }
    exportCSV()
    {
        this.setState({["submitButtonText"]:"Downloading..."});
        const headerA = ['','TOTAL','PERCENT OF','AMOUNT SPENT','BUDGET','PERCENT OF','','Q1','','','Q2','','','Q3','','','Q4',''];
        const headerB = ['CATEGORY','BUDGET','BUDGET','TO DATE','REMAINING','BUDGET REMAINING','JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
        var csvData = [headerA,headerB];
        const beginRowCount = 5;
        const endRowCount = 17;
        
        for(var r = beginRowCount; r<endRowCount;r++)
        {
          var emptyStringifyArray = new Array(18).fill('');
          for(var i = 0; i<18;i++)
          {
              emptyStringifyArray[i] = this.state["category"+(r-4)][i].toString();
              emptyStringifyArray[2] = (Math.round((this.state["category"+(r-4)][1])/this.columnSum("C")*100)).toString();
          }
          csvData.push(emptyStringifyArray);
        }
        var footerArray = new Array(18).fill('');
        footerArray[0]="TOTALS";

        for(var i = 1;i<footerArray.length;i++)
        {
          switch(i)
          {
            case 2:
            break;
            case 5:
            break;
            default:
              footerArray[i] = this.columnSum(inputFieldIDs[i]).toString();
          }
        }
        csvData.push(footerArray);

        /*DOWNLOAD CSV */

        var csvRows = [];
        for(var i  = 0; i< csvData.length; ++i)
        {
            csvRows.push(csvData[i].join(","));
        }
        var csvString = csvRows.join("%0A");

        var a  = document.createElement("a");
        a.href = "data:attachment/csv,"+csvString;
        a.target = "_Blank";
        var filename = "report.csv";
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        this.setState({["submitButtonText"]:"Report Downloaded!"});
    }


    render()
    {
        return(
            <div className = "form-vertical">
            <body>
                <div className = "form-horizontal">
                    <h1 id="title">ANNUAL BUDGET CALCULATOR</h1>
                    <Button id = "csvButton" onClick = {() => this.exportCSV()} >{this.state["submitButtonText"]}</Button>
                </div>
            </body>
            <table>
            <tbody>
                <HeaderA></HeaderA>
                <HeaderB></HeaderB>
                <InputRow dProp = {Math.round((this.state.category1[1])/this.columnSum("C")*100)}   categoryNumberProp = {1}  fields={inputFieldIDs} updateGrandpaState={this.updateGrandpaData}></InputRow>
                <InputRow dProp = {Math.round((this.state.category2[1])/this.columnSum("C")*100)}   categoryNumberProp = {2}  fields={inputFieldIDs} updateGrandpaState={this.updateGrandpaData}></InputRow>
                <InputRow dProp = {Math.round((this.state.category3[1])/this.columnSum("C")*100)}   categoryNumberProp = {3}  fields={inputFieldIDs} updateGrandpaState={this.updateGrandpaData}></InputRow>
                <InputRow dProp = {Math.round((this.state.category4[1])/this.columnSum("C")*100)}   categoryNumberProp = {4}  fields={inputFieldIDs} updateGrandpaState={this.updateGrandpaData}></InputRow>
                <InputRow dProp = {Math.round((this.state.category5[1])/this.columnSum("C")*100)}   categoryNumberProp = {5}  fields={inputFieldIDs} updateGrandpaState={this.updateGrandpaData}></InputRow>
                <InputRow dProp = {Math.round((this.state.category6[1])/this.columnSum("C")*100)}   categoryNumberProp = {6}  fields={inputFieldIDs} updateGrandpaState={this.updateGrandpaData}></InputRow>
                <InputRow dProp = {Math.round((this.state.category7[1])/this.columnSum("C")*100)}   categoryNumberProp = {7}  fields={inputFieldIDs} updateGrandpaState={this.updateGrandpaData}></InputRow>
                <InputRow dProp = {Math.round((this.state.category8[1])/this.columnSum("C")*100)}   categoryNumberProp = {8}  fields={inputFieldIDs} updateGrandpaState={this.updateGrandpaData}></InputRow>
                <InputRow dProp = {Math.round((this.state.category9[1])/this.columnSum("C")*100)}   categoryNumberProp = {9}  fields={inputFieldIDs} updateGrandpaState={this.updateGrandpaData}></InputRow>
                <InputRow dProp = {Math.round((this.state.category10[1])/this.columnSum("C")*100)}  categoryNumberProp = {10} fields={inputFieldIDs} updateGrandpaState={this.updateGrandpaData}></InputRow>
                <InputRow dProp = {Math.round((this.state.category11[1])/this.columnSum("C")*100)}  categoryNumberProp = {11} fields={inputFieldIDs} updateGrandpaState={this.updateGrandpaData}></InputRow>
                <InputRow dProp = {Math.round((this.state.category12[1])/this.columnSum("C")*100)}  categoryNumberProp = {12} fields={inputFieldIDs} updateGrandpaState={this.updateGrandpaData}></InputRow>
                <Footer   cProp = {this.columnSum("C")} 
                          eProp = {this.columnSum("E")}
                          fProp = {this.columnSum("F")}
                          hProp = {this.columnSum("H")}
                          iProp = {this.columnSum("I")}
                          jProp = {this.columnSum("J")}
                          kProp = {this.columnSum("K")}
                          lProp = {this.columnSum("L")}
                          mProp = {this.columnSum("M")}
                          nProp = {this.columnSum("N")}
                          oProp = {this.columnSum("O")}
                          pProp = {this.columnSum("P")}
                          qProp = {this.columnSum("Q")}
                          rProp = {this.columnSum("R")}
                          sProp = {this.columnSum("S")}>    
                </Footer>
            </tbody>
            </table>
            <Row>
                <div>
                    <h1 id = "graphTitle">BUDGET vs AMOUNT SPENT TO DATE</h1>
            <ComposedChart width={500} height={300} data={
                       [{name:this.state.category1[0], Budget:this.state.category1[1], Spent:this.state.category1[3]},
                        {name:this.state.category2[0], Budget:this.state.category2[1], Spent:this.state.category2[3]},
                        {name:this.state.category3[0], Budget:this.state.category3[1], Spent:this.state.category3[3]},
                        {name:this.state.category4[0], Budget:this.state.category4[1], Spent:this.state.category4[3]},
                        {name:this.state.category5[0], Budget:this.state.category5[1], Spent:this.state.category5[3]},
                        {name:this.state.category6[0], Budget:this.state.category6[1], Spent:this.state.category6[3]},
                        {name:this.state.category7[0], Budget:this.state.category7[1], Spent:this.state.category7[3]},
                        {name:this.state.category8[0], Budget:this.state.category8[1], Spent:this.state.category8[3]},
                        {name:this.state.category9[0], Budget:this.state.category9[1], Spent:this.state.category9[3]},
                        {name:this.state.category10[0],Budget:this.state.category10[1],Spent:this.state.category10[3]},
                        {name:this.state.category11[0],Budget:this.state.category11[1],Spent:this.state.category11[3]},
                        {name:this.state.category12[0],Budget:this.state.category12[1],Spent:this.state.category12[3]}]} 
            
            margin={{top: 20, right: 80, bottom: 20, left: 20,}}>

        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Budget" barSize={20} fill="#A5B592" />
        <Line type="monotone" dataKey="Spent" stroke="#00B050"  />
        </ComposedChart>
        </div>
        <div>
        <h1 id = "graphTitle">AMOUNT SPENT PER MONTH TO DATE</h1>
        <BarChart  width={500} height={300} 
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
        data={[{month:'JAN', Monthly:this.columnSum("H")},
               {month:'FEB', Monthly:this.columnSum("I")},
               {month:'MAR', Monthly:this.columnSum("J")},
               {month:'APR', Monthly:this.columnSum("K")},
               {month:'MAY', Monthly:this.columnSum("L")},
               {month:'JUN', Monthly:this.columnSum("M")},
               {month:'JUL', Monthly:this.columnSum("N")},
               {month:'AUG', Monthly:this.columnSum("O")},
               {month:'SEP', Monthly:this.columnSum("P")},
               {month:'OCT', Monthly:this.columnSum("Q")},
               {month:'NOV', Monthly:this.columnSum("R")},
               {month:'DEC', Monthly:this.columnSum("S")}]}>
        <CartesianGrid strokeDasharray="3 3" />
        
        <XAxis  dataKey="month"/>
        <YAxis />

        <Tooltip />
        <Legend />
        <Bar dataKey="Monthly" fill="#F3A447" />

      </BarChart>
      </div>
      <div>
      <h1 id = "graphTitle">% OF BUDGET BY CATEGORY</h1>
      <Row>
      <PieChart width={500} height={300}>
        <Pie
          data={[{category:this.state.category1[0], Percentage:Math.round((this.state.category1[1])/this.columnSum("C")*100)},
                 {category:this.state.category2[0], Percentage:Math.round((this.state.category2[1])/this.columnSum("C")*100)},
                 {category:this.state.category3[0], Percentage:Math.round((this.state.category3[1])/this.columnSum("C")*100)},
                 {category:this.state.category4[0], Percentage:Math.round((this.state.category4[1])/this.columnSum("C")*100)},
                 {category:this.state.category5[0], Percentage:Math.round((this.state.category5[1])/this.columnSum("C")*100)},
                 {category:this.state.category6[0], Percentage:Math.round((this.state.category6[1])/this.columnSum("C")*100)},
                 {category:this.state.category7[0], Percentage:Math.round((this.state.category7[1])/this.columnSum("C")*100)},
                 {category:this.state.category8[0], Percentage:Math.round((this.state.category8[1])/this.columnSum("C")*100)},
                 {category:this.state.category9[0], Percentage:Math.round((this.state.category9[1])/this.columnSum("C")*100)},
                 {category:this.state.category10[0],Percentage:Math.round((this.state.category10[1])/this.columnSum("C")*100)},
                 {category:this.state.category11[0],Percentage:Math.round((this.state.category11[1])/this.columnSum("C")*100)},
                 {category:this.state.category12[0],Percentage:Math.round((this.state.category12[1])/this.columnSum("C")*100)}]}
          cx={280}
          cy={150}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={130}
          fill="#8884d8"
          dataKey="Percentage"
        >
          {
            [{category:this.state.category1[0], Percentage:Math.round((this.state.category1[1])/this.columnSum("C")*100)},
            {category: this.state.category2[0], Percentage:Math.round((this.state.category2[1])/this.columnSum("C")*100)},
            {category: this.state.category3[0], Percentage:Math.round((this.state.category3[1])/this.columnSum("C")*100)},
            {category: this.state.category4[0], Percentage:Math.round((this.state.category4[1])/this.columnSum("C")*100)},
            {category: this.state.category5[0], Percentage:Math.round((this.state.category5[1])/this.columnSum("C")*100)},
            {category: this.state.category6[0], Percentage:Math.round((this.state.category6[1])/this.columnSum("C")*100)},
            {category: this.state.category7[0], Percentage:Math.round((this.state.category7[1])/this.columnSum("C")*100)},
            {category: this.state.category8[0], Percentage:Math.round((this.state.category8[1])/this.columnSum("C")*100)},
            {category: this.state.category9[0], Percentage:Math.round((this.state.category9[1])/this.columnSum("C")*100)},
            {category: this.state.category10[0],Percentage:Math.round((this.state.category10[1])/this.columnSum("C")*100)},
            {category: this.state.category11[0],Percentage:Math.round((this.state.category11[1])/this.columnSum("C")*100)},
            {category: this.state.category12[0],Percentage:Math.round((this.state.category12[1])/this.columnSum("C")*100)}]
            .map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          } 
        </Pie>
      </PieChart>

      </Row>
      </div>
      </Row>
            </div>
        );
    }
}
export default BudgetCalculator;