import React, { useState} from "react";
import { NAVDATA, SUBNAVDATA} from "../Common/Constant";
import _map from "lodash/map";

import { Wrapper } from "../Assets/Style/NavbarStyle";

function Navbar() {
  const [activeNav, setActiveNav] = useState(1);
  
  const onClickHandler = (id) => {
    setActiveNav(id);
  };

  return (
    <Wrapper>
      <div className="styles_navbar-container___J5lD styles_navbar-container--sticky-banner__WvEqZ">
        <div className="styles_navbar__wrapper__4nKdi">
          <div className="styles_navbar__wrapper-container__Sfd2O">
            <div className="styles_navbar__menu-left__asjWb">
              <ul className="styles_navbar__categories__5Kb1x">
                {_map(NAVDATA, (items, key) => (
                  <li
                    className={
                      activeNav === items.id
                        ? "styles_navbar__category__vyhXk styles_navbar__category--active__bgYDc"
                        : "styles_navbar__category__vyhXk"
                    }
                    onClick={() => onClickHandler(items.id)}
                  >
                    <a className="styles_navbar__category-link__qJCp5" href="/#">
                      {items.name}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="hamburger-icon">
              <i class="fa fa-bars" aria-hidden="true"></i>
              </div>
            </div>
            <div className="styles_navbar__menu-center__s5G9T">
              <h3>EVERLANE</h3>
            </div>
            <div className="styles_navbar__menu-right__X5oNX">
              <i
                className="fa fa-search styles_navbar__link-wrapper__wqU1z"
                aria-hidden="true"
              ></i>
              <i
                className="fa fa-user-o styles_navbar__link-wrapper__wqU1z"
                aria-hidden="true"
              ></i>
              <i
                className="fa fa-shopping-cart styles_navbar__link-wrapper__wqU1z"
                aria-hidden="true"
              ></i>
            </div>
          </div>
        </div>
        <div className="styles_desktop-nav__container__hdeHi">
          <nav>
            <ul className="styles_desktop-nav__categories__lYRm8">
              {_map(SUBNAVDATA, (items, key) => (
                <li className="styles_desktop-nav__category__jAku0">
                    <a className="styles_desktop-nav__category-link__4mmiI" href="/#">
                      {items.name}
                    </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </Wrapper>
  );
}

export default Navbar;
