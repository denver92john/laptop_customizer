import React from 'react';
import './feature.css';
import Feature__List from '../feature__list/feature__list';

class Feature extends React.Component {
    render() {
        
        return (
            
            <div className="feature" key={this.props.name}>
                <div className="feature__name">{this.props.name}</div>
                <Feature__List 
                    name={this.props.name}
                    options={this.props.options}
                    selected={this.props.selected}
                    handleFeatureUpdate={this.props.handleFeatureUpdate}
                />
            </div>

        );
    }
}

export default Feature;

/*
        const features = this.props.map(prop)
        return (
            <div key={this.props} className="feature">
                <div className="feature__name">{this.props.prop}</div>
            </div>
        );
*/




/*
        return (
            Object.keys(this.props.features)
                .map(key => {
                    const options = this.props.features[key].map((item, index) => {
                        const selectedClass = item.name === this.props.selected[key].name ? 'feature__selected' : '';
                        const featureClass = 'feature__option' + selectedClass;
                        return (
                            <li key={index} className="feature__item">
                                <div className={featureClass}>
                                    yo
                                </div>
                            </li>
                        );
                    });

                    return (
                        <div className="feature" key={key}>
                            <div className="feature__name">{key}</div>
                            <ul className="feature__list">
                                { options }
                            </ul>
                        </div>
                    );
                })
        );
*/