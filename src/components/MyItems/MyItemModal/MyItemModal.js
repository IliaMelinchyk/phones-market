import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import Button from "../../UI/Button/Button";

class MyItemModal extends Component {
  deleteMyItemHandler = () => {
    this.props.onItemDelete(
      this.props.item.id,
      this.props.token,
      this.props.userId,
      this.props.item.fileUrl
    );
    this.props.modalClosed();
  };
  render() {
    const {
      age,
      camera,
      description,
      email,
      height,
      width,
      memory,
      phone,
      price,
      ram,
      model,
      manufacturer,
      fileUrl,
    } = this.props.item;
    return (
      <div>
        <p>Model: {model}</p>
        <p>Manufacturer: {manufacturer}</p>
        <Button clicked={this.deleteMyItemHandler} btnType="Success">
          DELETE
        </Button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    userId: state.auth.userId,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onItemDelete: (itemId, token, userId, fileUrl) =>
      dispatch(actions.itemDelete(itemId, token, userId, fileUrl)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyItemModal);