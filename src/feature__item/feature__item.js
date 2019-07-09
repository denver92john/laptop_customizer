import React from 'react';
import './feature__item.css';

class Feature__Item extends React.Component {
    render() {
        return (
            <li className="feature__item">
                <div
                    className={this.props.featureClass}
                    onClick={e => this.props.handleFeatureUpdate(this.props.featureName, this.props.item)} 
                >
                    {this.props.item.name} - 
                    ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(this.props.item.cost) })
                </div>
            </li>
        );
    }
}

export default Feature__Item;