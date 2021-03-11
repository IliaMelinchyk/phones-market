import React, { Component } from "react";
import classes from "./MarketItem.module.scss";
import { AiFillDollarCircle, AiFillCamera } from "react-icons/ai";
import { IoMdResize, IoIosPhonePortrait, IoIosHammer } from "react-icons/io";
import { CgSmartphoneRam } from "react-icons/cg";
import { BiMemoryCard } from "react-icons/bi";
import { GiSandsOfTime } from "react-icons/gi";
class MarketItem extends Component {
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
    } = this.props.item;
    const date = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: false,
    }).format(this.props.item.date);
    return (
      <li className={classes.ListElement}>
        {/* <FcPhoneAndroid
          className={classes.CenterAbs}
          style={{ fontSize: "500px", zIndex: "1" }}
        /> */}
        <ul className={classes.Characteristics}>
          <li className={classes.MainInfo}>
            <IoIosPhonePortrait style={{ transform: "rotate(45deg)" }} />
            <p>Model: </p>
            <p>{model}</p>
          </li>
          <li className={classes.MainInfo}>
            <IoIosHammer />
            <p>Manufacturer: </p>
            <p>{manufacturer}</p>
          </li>
          <li className={classes.MainInfo}>
            <GiSandsOfTime />
            <p>Age of a phone: </p>
            <p>{age}</p>
          </li>
          <li className={classes.Memory}>
            <BiMemoryCard />
            <p>Memory storage capacity: </p>
            <p>{memory}</p>
          </li>
          <li className={classes.Memory}>
            <CgSmartphoneRam />
            <p>RAM: </p>
            <p>{ram}</p>
          </li>
          <li className={classes.Resolution}>
            <IoMdResize />
            <p>Display resolution: </p>
            <p>
              {height}x{width} px
            </p>
          </li>
          <li className={classes.Resolution}>
            <AiFillCamera />
            <p>Camera's resolution: </p>
            <p>{camera} MP</p>
          </li>
          <li className={classes.Price}>
            <p>Price: </p>
            <p>
              <AiFillDollarCircle />
              {price} $
            </p>
          </li>
        </ul>
        <button onClick={() => this.props.clicked(this.props.item)}>
          FULL INFO
        </button>
      </li>
    );
  }
}

export default MarketItem;
