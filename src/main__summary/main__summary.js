import React from 'react';
import './main__summary.css';

class Main__Summary extends React.Component {
    render() {
        const summaryOption = Object.keys(this.props.selected).map(key => {
            return (
                <div className="summary__option" key={key}>
                    <div className="summary__option__label">{key}</div>
                    <div className="summary__option__value">{this.props.selected[key].name}</div>
                    <div className="summary__option__cost">
                        { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(this.props.selected[key].cost) }
                    </div>
                </div>
            );
        })

        const summaryTotal = Object.keys(this.props.selected)
            .reduce((acc, curr) => acc + this.props.selected[curr].cost, 0);

        return (
            <section className="main__summary">
                <h3>NEW GREENLEAF 2018</h3>
                {summaryOption}
                <div className="summary__total">
                    <div className="summary__total__label"></div>
                    <div className="summary__total__value">
                        { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(summaryTotal) }
                    </div>
                </div>
            </section>
        );
    }
}

export default Main__Summary;