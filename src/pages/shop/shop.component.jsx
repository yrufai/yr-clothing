import React, { Component } from "react";

import ShopData from "./shop.data";

class ShopPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            collections: ShopData
        }
    }
    render() {
        return <div> Shop Page</div>
    }
}

export default ShopPage;