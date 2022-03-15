import React from "react";
import logo from "../../images/Artboard.svg";
import { FaEthereum } from "react-icons/fa";
// import { CgProfile } from "react-icons/cg";
// import Search from "../Search";
import {
  NavLink,
  Nav,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavHome,
  NavSearch,
  NavMobileLogo,
  NavImage,
  NavMobileBars,
  NavEthereumContainer,
  NavEthereoumText,
  NavEthereoumLogo,
  NavPageLocation,
  ProfileIcon,
  // NavSearchBtn,
} from "./NavbarElement";
// import Sidebar from "../../Components/Sidebar";

const Navbar = ({ ethTick, toggle }) => {
  const [searchName, setSearchName] = React.useState("");
  // console.log("NavBar", ethTick);

  return (
    <div>
      <Nav>
        <NavMobileLogo>
          {/* <NavImage src="https://img.lovepik.com/free-png/20210927/lovepik-cartoon-jeep-png-image_401572129_wh1200.png" /> */}
          <NavImage src={logo} />
          <NavLink to="/">
            <NavHome>ClosedLand</NavHome>
          </NavLink>
        </NavMobileLogo>
        <NavMenu>
          <NavEthereumContainer>
            <NavLink to="/chart" style={{ padding: "5px" }}>
              1 <FaEthereum className="eth"></FaEthereum>
              {" = " + ethTick + " USD"}
            </NavLink>
          </NavEthereumContainer>
          <NavSearch
            className="fa"
            placeholder="Can't Find Your NFT?"
            onChange={(event) => {
              setSearchName(event.target.value);
            }}
          />
          <NavEthereumContainer>
            <NavLink to="/explore">
              <NavPageLocation>Explore</NavPageLocation>
            </NavLink>
            <NavLink to="/stats">
              <NavPageLocation>Stats</NavPageLocation>
            </NavLink>
            <NavLink to="/aboutus">
              <NavPageLocation>About Us</NavPageLocation>
            </NavLink>
            <NavLink to="/profile">
              <ProfileIcon></ProfileIcon>
            </NavLink>
          </NavEthereumContainer>
        </NavMenu>
        <NavMobileBars>
          <Bars onClick={toggle} />
        </NavMobileBars>
        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </div>
  );
};

export default Navbar;
