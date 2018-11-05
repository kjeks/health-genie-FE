import React, {PureComponent} from "react";
import {connect} from 'react-redux';
import ListActions from "../list/ListActions";

export default function (Comp) {
    class ListFetchHoC extends PureComponent {
        constructor (props) {
            super(props);
            this.props.fetch(this.props.type, this.props.dayPlanId || "");
        }
        render() {
            return (
                <Comp{...this.props}/>
            )
        }
    }
    function mapStateToProps (state) {
        return {}
    }
    function mapDispatchToProps (dispatch) {
        return {
            fetch: (type, dayPlanId)=> dispatch(ListActions.fetchList(type, dayPlanId))
        }
    }
    return connect(mapStateToProps, mapDispatchToProps)(ListFetchHoC);
}
