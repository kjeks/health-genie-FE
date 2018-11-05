import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Actions from "../Actions";
import ListItem from "../../common/list/components/ListItem";
import {contentSelector} from "../Selectors";

class DayContentList extends PureComponent <{}> {
    constructor(props) {
        super(props);
        this.props.fetchContent(this.props.type, this.props.contentIds)
    }

    render() {
        const content = this.props.content && this.props.content.map((item, index)=> {
            return <ListItem
                values={item}
                key={index}
            />
        });
        return (
            <div>
                {content.toList()}
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        content: contentSelector(state, ownProps)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchContent: (type, contentIds)=> dispatch(Actions.fetchContent(type, contentIds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DayContentList)