import React from 'react';
import './feature__list.css';
import Feature__Item from '../feature__item/feature__item';

class Feature__List extends React.Component {
    render() {
        const options = this.props.options.map((item, index) => {
            const selectedClass = item.name === this.props.selected[this.props.name].name ? 'feature__selected' : '';
            const featureClass = 'feature__option ' + selectedClass;
            return (
                <Feature__Item 
                    featureClass={featureClass}
                    key={index}
                    item={item}
                    featureName={this.props.name}    
                    handleFeatureUpdate={this.props.handleFeatureUpdate}
                />
            );
        })
        return (
            <ul className="feature__list">
                { options }
            </ul>
        );
    }
}

export default Feature__List;