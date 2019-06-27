import React from 'react';
import './main.css';
import Main__Form from '../main__form/main__form';
import Main__Summary from '../main__summary/main__summary';

class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selected: {
                "Processor": {
                    name: '17th Generation Intel Core HB (7 Core with donut spare)',
                    cost: 700
                },
                "Operating System": {
                    name: 'Ubuntu Linux 16.04',
                    cost: 200
                },
                "Video Card": {
                    name: 'Toyota Corolla 1.5v',
                    cost: 1150.98
                },
                "Display": {
                    name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
                    cost: 1500
                }
            }
        }
    }

    updateFeature(feature, newValue) {
        console.log(`feature is ${feature} and newValue is ${newValue}`);
        const selected = Object.assign({}, this.state.selected);
        console.log(`selected is ${selected}`);
        selected[feature] = newValue;
        this.setState({
            selected
        });
    }

    render() {
        return (
            <main>
                <Main__Form 
                    features={this.props.features}
                    selected={this.state.selected}
                    handleFeatureUpdate={this.updateFeature}
                />
                <Main__Summary 
                    selected={this.state.selected}
                />
            </main>
        );
    }
}

export default Main;