import React from "react";

import "./preview-collection.style.scss";
import { findAllByTitle } from "@testing-library/dom";

const PreviewCollection = ({ title, items }) => (
    <div className="collection-preview">
        <h1 className="title" >{title.toUpperCase()} </h1>
        <div className="preview">
            {items.map(item => (
                <div key={item.id} >{item} </div>
            ))}
        </div>
    </div>
)


export default PreviewCollection