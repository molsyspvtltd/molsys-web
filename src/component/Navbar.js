// import React from "react";
// import { IconButton, Avatar } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
// import { Link } from "react-router-dom";
// import SearchBar from "./SearchBar";
// import BookData from "./Data.json";
// import logo from "../assets/logo.png";
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const useStyles = makeStyles((theme) => ({
//   "@global": {
//     body: {
//       backgroundColor: "#e6e6e6",
//     },
//     ul: {
//       margin: 0,
//       padding: 0,
//       listStyle: "none",
//     },
//   },
//   appBar: {
//     borderBottom: `2px solid ${theme.palette.divider}`,
//   },
//   toolbar: {
//     flexWrap: "wrap",
//   },
//   toolbarTitle: {
//     flexGrow: 1,
//   },
//   link: {
//     margin: theme.spacing(1, 1),
//   },
//   activeLink: {
//     margin: theme.spacing(1, 1.5),
//     backgroundColor: "#46c780",
//     color: "#ffffff",
//     "&:hover": {
//       color: "#252626",
//       backgroundColor: "#ffffff",
//       border: "1px solid #252626",
//     },
//   },
// }));

// function Navbar() {
//     const classes = useStyles();

//     const renderNavigationItems = () => {
//       return (
//         <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-light bg-light" style={{ marginLeft: "-50px" }}>
//           <li className="nav-item">
//             <Link className="nav-link" aria-current="page" to="/aboutUs">
//               About Us
//             </Link>
//           </li>
//           <li className="nav-item mx-2">
//             <Link className="nav-link" aria-current="page" to="/market">
//               Services
//             </Link>
//           </li>
//           <li className="nav-item mx-2">
//             <Link className="nav-link" to="/contactUs">
//               Contact Us
//             </Link>
//           </li>
//           <li className="nav-item mx-2">
//             <Link className="nav-link" to="#">
//               MolsysT
//             </Link>
//           </li>
//           <li className="nav-item mx-2">
//             <Link className="nav-link" to="/pms">
//               PMS
//             </Link>
//           </li>
//           <li className="nav-item mx-2">
//             <Link className="nav-link" to="/g-cell">
//               G-Cell
//             </Link>
//           </li>
//           <li className="nav-item mx-2">
//             <Link className="nav-link" to="/WorkshopRegistration">
//               Workshops
//             </Link>
//           </li>
//           <li className="nav-item mx-2">
//             <a className="nav-link" href="https://dnalyst.in" target="_blank" rel="noopener noreferrer">
//               Dnalyst
//             </a>
//          </li>
//         </ul>
//       );
//     };

//     return (
//       <div>
//         <nav className="navbar shadow navbar-expand-lg navbar-light bg-light fixed-top">
//           <div className="container-fluid">
//             <Link className="navbar-brand mx-5" to="/">
//               <img src={logo} height={35} width={130} />
//             </Link>
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarSupportedContent"
//               aria-controls="navbarSupportedContent"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse mx-5 px-5" id="navbarSupportedContent">
//               {renderNavigationItems()}
//               <div className="me-auto">
//               <SearchBar placeholder="Enter your Search..." data={BookData} />
//             </div>

//             </div>
//           </div>
//         </nav>
//       </div>
//     );
//   }

// export default Navbar;

// import React from "react";
// import { IconButton, Avatar } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
// import { Link } from "react-router-dom";
// import SearchBar from "./SearchBar";
// import BookData from "./Data.json";
// import logo from "../assets/logo.png";
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const useStyles = makeStyles((theme) => ({
//   "@global": {
//     body: {
//       backgroundColor: "#e6e6e6",
//     },
//     ul: {
//       margin: 0,
//       padding: 0,
//       listStyle: "none",
//     },
//   },
//   appBar: {
//     borderBottom: `2px solid ${theme.palette.divider}`,
//   },
//   toolbar: {
//     flexWrap: "wrap",
//   },
//   toolbarTitle: {
//     flexGrow: 1,
//   },
//   link: {
//     margin: theme.spacing(1, 1),
//   },
//   activeLink: {
//     margin: theme.spacing(1, 1.5),
//     backgroundColor: "#46c780",
//     color: "#ffffff",
//     "&:hover": {
//       color: "#252626",
//       backgroundColor: "#ffffff",
//       border: "1px solid #252626",
//     },
//   },
// }));

// function Navbar() {
//     const classes = useStyles();

//     const renderNavigationItems = () => {
//       return (
//         <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-light bg-light d-flex flex-wrap">
//           <li className="nav-item">
//             <Link className="nav-link" aria-current="page" to="/aboutUs">
//               About Us
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" aria-current="page" to="/market">
//               Services
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/contactUs">
//               Contact Us
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="#">
//               MolsysT
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/pms">
//               PMS
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/g-cell">
//               G-Cell
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/WorkshopRegistration">
//               Workshops
//             </Link>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="https://dnalyst.in" target="_blank" rel="noopener noreferrer">
//               Dnalyst
//             </a>
//           </li>
//         </ul>
//       );
//     };

//     return (
//       <div>
//         <nav className="navbar shadow navbar-expand-lg navbar-light bg-light fixed-top">
//           <div className="container-fluid">
//             <Link className="navbar-brand mx-lg-5 mx-2" to="/">
//               <img src={logo} height={35} width={130} alt="Logo" />
//             </Link>
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarSupportedContent"
//               aria-controls="navbarSupportedContent"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//               <div className="container-fluid d-flex flex-column flex-lg-row">
//                 <div className="w-100">
//                   {renderNavigationItems()}
//                 </div>
//                 <div className="ms-lg-auto mt-3 mt-lg-0">
//                   <SearchBar placeholder="Enter your Search..." data={BookData} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </nav>
//       </div>
//     );
//   }

// export default Navbar;
import React, { useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";

// Global navbar mobile fix
const navbarMobileStyles = `
  .navbar {
    padding: 0 !important;
    min-height: auto !important;
  }
  
  .navbar .container-fluid {
    display: flex !important;
    align-items: center !important;
    justify-content: space-between !important;
    padding: 8px 1rem !important;
    min-height: 60px;
    gap: 10px;
  }
  
  .navbar-brand {
    margin: 0 !important;
    padding: 0 !important;
    flex-shrink: 0;
    display: flex;
    align-items: center;
  }
  
  .navbar-brand img {
    height: 35px !important;
    width: auto !important;
    display: block;
  }
  
  .navbar-toggler {
    padding: 6px 10px !important;
    margin: 0 !important;
    flex-shrink: 0;
    order: 2;
  }
  
  .navbar-toggler:focus {
    box-shadow: none !important;
    outline: none !important;
  }
  
  .navbar-collapse {
    padding: 0 !important;
  }
  
  @media (max-width: 992px) {
    .navbar {
      padding: 0 !important;
    }
    
    .navbar .container-fluid {
      padding: 8px 1rem !important;
      min-height: 60px;
      display: flex !important;
    }
    
    .collapse.navbar-collapse {
      position: absolute;
      top: 60px;
      left: 0;
      right: 0;
      width: 100vw;
      background: #ffffff;
      border-top: 1px solid #e5e7eb;
      margin-top: 0 !important;
      padding: 0 !important;
    }
    
    .collapse.navbar-collapse.show {
      display: flex;
      flex-direction: column;
      padding: 15px 1rem !important;
    }
  }
`;

// Inject styles
const styleSheet = document.createElement("style");
styleSheet.textContent = navbarMobileStyles;
if (document.head) {
  document.head.appendChild(styleSheet);
}

// Professional Navbar Styles
const NavbarContainer = styled.nav`
  background: #ffffff !important;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  border-bottom: 1px solid #e5e7eb;
  padding: 0 !important;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  position: relative;

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  }
`;

const NavbarBrand = styled(Link)`
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;
  margin: 0;
  padding: 0;
  white-space: nowrap;

  &:hover {
    transform: scale(1.05);
  }

  img {
    max-height: 40px;
    width: auto;
    display: block;
  }

  @media (max-width: 992px) {
    img {
      max-height: 35px;
    }
  }
`;

const NavbarContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;
  width: 100%;
  padding: 0 20px;

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 8px;
    padding: 0;
    width: 100%;
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 5px;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 992px) {
    flex-direction: column;
    width: 100%;
    gap: 8px;
  }
`;

const NavItem = styled.li`
  position: relative;
  transition: all 0.3s ease;
`;

const NavLink = styled(Link)`
  display: inline-block;
  padding: 10px 16px;
  color: #374151 !important;
  font-weight: 500;
  font-size: 0.95rem;
  text-decoration: none;
  border-radius: 6px;
  transition: all 0.3s ease;
  position: relative;
  letter-spacing: 0.3px;

  &::after {
    content: "";
    position: absolute;
    bottom: 8px;
    left: 50%;
    width: 0;
    height: 2px;
    background: linear-gradient(135deg, #10b981 0%, #34d399 100%);
    transform: translateX(-50%);
    transition: width 0.3s ease;
  }

  &:hover {
    color: #10b981 !important;
    background: rgba(16, 185, 129, 0.08);
    transform: translateY(-2px);

    &::after {
      width: 60%;
    }
  }

  @media (max-width: 992px) {
    padding: 12px 20px;
    width: 100%;
    text-align: left;
    border-radius: 8px;

    &::after {
      display: none;
    }

    &:hover {
      background: rgba(16, 185, 129, 0.12);
    }
  }
`;

const ExternalLink = styled.a`
  display: inline-block;
  padding: 10px 16px;
  color: #374151 !important;
  font-weight: 500;
  font-size: 0.95rem;
  text-decoration: none;
  border-radius: 6px;
  transition: all 0.3s ease;
  position: relative;
  letter-spacing: 0.3px;

  &::after {
    content: "";
    position: absolute;
    bottom: 8px;
    left: 50%;
    width: 0;
    height: 2px;
    background: linear-gradient(135deg, #10b981 0%, #34d399 100%);
    transform: translateX(-50%);
    transition: width 0.3s ease;
  }

  &:hover {
    color: #10b981 !important;
    background: rgba(16, 185, 129, 0.08);
    transform: translateY(-2px);

    &::after {
      width: 60%;
    }
  }

  @media (max-width: 992px) {
    padding: 12px 20px;
    width: 100%;
    text-align: left;
    border-radius: 8px;

    &::after {
      display: none;
    }

    &:hover {
      background: rgba(16, 185, 129, 0.12);
    }
  }
`;

const Toggler = styled.button`
  border: none !important;
  background: transparent !important;
  padding: 8px 10px !important;
  transition: all 0.3s ease;
  margin: 0 !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;

  &:focus {
    box-shadow: none !important;
    outline: none !important;
  }

  &:hover {
    background: rgba(16, 185, 129, 0.08) !important;
    border-radius: 6px;
  }

  .navbar-toggler-icon {
    filter: invert(0.2);
    width: 24px;
    height: 24px;
  }
`;

function Navbar() {
  const navbarRef = useRef(null);

  const closeNavbar = () => {
    if (window.innerWidth < 992) {
      const navbarToggler = navbarRef.current.querySelector(".navbar-toggler");
      const navbarCollapse =
        navbarRef.current.querySelector(".navbar-collapse");

      if (navbarToggler && navbarCollapse.classList.contains("show")) {
        navbarToggler.click();
      }
    }
  };

  const renderNavigationItems = () => {
    return (
      <NavList>
        <NavItem>
          <NavLink to="/aboutUs" onClick={closeNavbar}>
            About Us
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/market" onClick={closeNavbar}>
            Services
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contactUs" onClick={closeNavbar}>
            Contact Us
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="#" onClick={closeNavbar}>
            MolsysT
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/pms" onClick={closeNavbar}>
            PMS
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/g-cell" onClick={closeNavbar}>
            G-Cell
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/Omicsworkshop" onClick={closeNavbar}>
            Workshops
          </NavLink>
        </NavItem>
        <NavItem>
          <ExternalLink
            href="https://dnalyst.in"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeNavbar}
          >
            Danalyst
          </ExternalLink>
        </NavItem>
      </NavList>
    );
  };

  return (
    <div ref={navbarRef}>
      <NavbarContainer className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid px-4">
          <NavbarBrand to="/" onClick={closeNavbar}>
            <img src={logo} alt="Molsys Logo" />
          </NavbarBrand>
          <Toggler
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </Toggler>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <NavbarContent>{renderNavigationItems()}</NavbarContent>
          </div>
        </div>
      </NavbarContainer>
    </div>
  );
}

export default Navbar;
