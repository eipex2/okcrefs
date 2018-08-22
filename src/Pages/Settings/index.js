import React, { Component } from 'react'

import { Page } from '../../Components'

export default class Settings extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        const { history } = this.props

        return (
            <Page authenticated history={history}>Settings</Page>
        )
    }
}