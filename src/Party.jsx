import React from "react";
class Party extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return(
            <>
                {/* eslint-disable-next-line react/prop-types */}
                <div className="text-left">{this.props.partyName}</div>
                {/* eslint-disable-next-line react/prop-types */}
                <div>{this.props.partyPopularity}%</div>
                {/* eslint-disable-next-line react/prop-types */}
                <div>{this.props.partySeats}</div>
            </>
        )
    }
}

export default Party;