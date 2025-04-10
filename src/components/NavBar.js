import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { changeTabActive } from '../redux/actions';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = ({activeTab}) => {
  // Change 'Contact' to 'Contacts' to match the section class name
  const [listNav] = useState(["Home", "Skills", "Projects", "Contacts"]);
  const dispatch = useDispatch();
  
  const changeTab = (value) => {
    dispatch(changeTabActive(value));
    toggleNav();
  }
  
  const [statusNav, setStatusNav] = useState('');
  
  const toggleNav = () => {
    setStatusNav(statusNav === 'active' ? '' : 'active');
  }
  
  return (
    <header>
      <div className="logo">
        <img src="/logo.png" alt="" /> Portfolio
      </div>
      <nav className={statusNav}>
        {
          listNav.map(value => (
            <span 
              key={value} 
              className={activeTab === value ? 'active': ''}
              onClick={() => changeTab(value)}
            >
              {value}
            </span>
          ))
        }
      </nav>
      <div className="icon-bar" onClick={toggleNav}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  activeTab: state.activeTab
});

export default connect(mapStateToProps, { changeTabActive })(NavBar);