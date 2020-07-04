import React, { Component } from "react";

import MenuItem from "../menu-item/menu-item.component"
import Sections from "./directory.data"
import "./directory.style.scss";


class Directory extends Component {
    constructor() {
        super();

        this.state = {
            sections: Sections
        }
    }
    render() {
        return (
            <div className="directory-menu">
                {this.state.sections.map(({ id, ...otherProps }) => (
                    <MenuItem key={id} {...otherProps} />
                ))}
            </div>
        )
    }
}

export default Directory;