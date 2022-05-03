import { Component } from "react";
import  Input  from "./Input";
import  Select  from "./Select";
import  {Button, Card}  from "@mui/material";


class TipCalculator extends Component {
    constructor(){
        super()
        this.state = {
            amount: '',
            service: '0.3',
            people: '',
            total: 0,
            buttonWasClicked: false

        }
    }

    handlerClick(){
        const newTotal = Math.ceil((this.state.amount*this.state.service)/this.state.people);
        this.setState({total: newTotal});
        this.setState({buttonWasClicked: true})
    }
    render(){
        return(
            <Card   className="container">
                <h4>Tip Calculator</h4>
                <div>
                <p>How Much was your bill?</p>
                <Input placeholder="Bill Amount" value={this.state.amount} handlerInput={(e) => this.setState({amount:e})}/>
                </div>
                <Select value={this.state.service} handlerSelect={(e) => this.setState({service:e})}/>
                <div>
                    <p>How Many People sharing bill?</p>
                    <Input placeholder="Number of People" value={this.state.people} handlerInput={(e) => this.setState({people:e})}/>
                </div>
                <Button   variant="contained" onClick={() => this.handlerClick()}>Calculate</Button>
            <div>
                <h3>Total Tip:</h3>
                <span>{this.state.buttonWasClicked? this.state.total:null}</span>

            </div>
            </Card>
        )
    }
}

export default TipCalculator;