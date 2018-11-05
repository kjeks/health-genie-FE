// @flow
import React, {PureComponent} from 'react';
import {Menu} from 'semantic-ui-react'

export default class MenuContainer extends PureComponent <{}> {

    render () {
        return (
            <Menu className='navigation'>
                <Menu.Item
                    name={'daily'}
                    href={'./'}
                >
                    daily plan
                </Menu.Item>
                <Menu.Item
                    name={'week'}
                    href={'./week'}
                >
                    weekly plans
                </Menu.Item>
                <Menu.Item
                    name={'profile'}
                    href={'./user'}
                >
                    profile
                </Menu.Item>
                <Menu.Item
                    name={'create meal'}
                    href={'./create'}
                >
                    Create meal
                </Menu.Item>
                <Menu.Item
                    name={'create ingredient'}
                    href={'./ingredient'}
                >
                    create ingredient
                </Menu.Item>
                <Menu.Item
                    name={'admin'}
                    href={'./admin'}
                >
                    admin
                </Menu.Item>
                <Menu.Item
                    position={'right'}
                    name={'login'}
                    href={'./login'}
                >
                    login
                </Menu.Item>
            </Menu>
        )
    }
}
