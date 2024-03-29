import React from "react";
import { connect } from "react-redux";

import CustonButton from "../custom-button/custom-button.component";
import { addItem } from "../../redux/cart/cart.actions";

import "./collection-item.style.scss";

const CollectionItem = ({ item, addItem }) => {
	const { name, price, imageUrl } = item;

	return (
		<div className="collection-item">
			<div
				className="image"
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			/>

			<div className="collection-footer">
				<span className="price">{name} </span>
				<span className="price">{price} </span>
			</div>
			<CustonButton onClick={() => addItem(item)} inverted>
				ADD TO CART
			</CustonButton>
		</div>
	);
};
const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item)),
});
export default connect(null, mapDispatchToProps)(CollectionItem);
