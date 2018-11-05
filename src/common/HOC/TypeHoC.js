import React, {Component} from 'react';

export default function TypeHoC(Comp, type) {
    return class TypeHoC extends Component {
        render () {
            return  <Comp
                {...this.props}
                type={type}
            />
        }
    }
}