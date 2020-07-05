import React, { Component } from "react";

import PreviewCollection from "../../components/preview-collection/preview.collection.component";

import ShopData from "./shop.data";


class ShopPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            collections: ShopData
        }
    }
    render() {
        const { collections } = this.state;
        return (
            <div className="shop-page">
                {collections.map(({ id, ...otherProps }) => (
                    <PreviewCollection key={id} {...otherProps} />
                ))}
            </div>
        )
    }
}

export default ShopPage;