import React from 'react';
import './FeatureList.css';
import FeatureItem from '../FeatureItem/FeatureItem';

class FeatureList extends React.Component {
    render() {
        const options = this.props.options.map((item, index) => {
            const selectedClass = item.name === this.props.selected[this.props.name].name ? 'feature__selected' : '';
            const featureClass = 'feature__option ' + selectedClass;
            return (
                <FeatureItem 
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

export default FeatureList;