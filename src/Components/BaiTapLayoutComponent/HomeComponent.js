import React, { Component } from 'react'

import HeaderComponent from './HeaderComponent'
import NavigationComponent from './NavigationComponent'
import ContentComponent from './ContentComponent'
import FooterComponent from './FooterComponent'
export default class HomeComponent extends Component {




    render() {
        return (
            <div className="container-fuild">
                <div className="row">
                    <div className="col-12">
                        <HeaderComponent />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <NavigationComponent />
                    </div>
                    <div className="col-6">
                        <ContentComponent />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <FooterComponent />
                    </div>
                </div>
            </div>
        )
    }
}
