import React from 'react';
import './MainForm.css';
import Feature from '../Feature/feature';

class MainForm extends React.Component {
    render() {
        const features = Object.keys(this.props.features)
            .map(key => {
                return (
                    <Feature 
                        name={key}
                        key={key}
                        options={this.props.features[key]}
                        selected={this.props.selected}
                        handleFeatureUpdate={this.props.handleFeatureUpdate}
                    />
                );
            })

        return (
            <section className="main__form">
                <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
                { features }
            </section>
        );
    }
}

export default MainForm;
