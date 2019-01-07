import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

class AdminList extends PureComponent <{}> {
    render () {
        return (
            <div>
                test
            </div>
        )
    }
}

function mapStateToProps (state, ownProps) {
    return {

    }
}
function mapDispatchToProps (dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminList);
