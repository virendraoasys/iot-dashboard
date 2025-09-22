import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import React from 'react';
// import { ReactComponent as LogoDarkIcon } from '../../assets/images/logos/elite-dark-icon.svg';
// import LogoDarkText from '../../assets/images/logos/logo-text.png';
// import { ReactComponent as LogoWhiteIcon } from '../../assets/images/logos/elite-white-icon.svg';
// import LogoWhiteText  from '../../assets/images/logos/logo-light-text.png';
import SidebarLogo from "../../assets/iotimages/sidebar-brand-logo.svg";
import {ReactComponent as SidebarLogoDesc} from "../../assets/iotimages/sidebar-brand-logo-desc.svg";


const SidebarBrandLogo = () => {
  const isDarkMode = useSelector((state) => state.customizer.isDark);
  const toggleMiniSidebar = useSelector((state) => state.customizer.isMiniSidebar);
  const activeSidebarBg = useSelector((state) => state.customizer.sidebarBg);
  return (
    <Link to="/" className="d-flex align-items-center gap-2">
      {isDarkMode || activeSidebarBg !== 'white' ? (
        <>
          
          {toggleMiniSidebar ? '' : <img src={SidebarLogo} className="d-none d-lg-block" alt='logo-text' />}
        </>
      ) : (
        <>
          
          {toggleMiniSidebar ? '' : 
          <>
          <img src={SidebarLogo} className="d-none d-lg-block" alt='logo-text' />
          
          <SidebarLogoDesc className="d-none d-lg-block" style={{height: '20px', marginTop: '-5px'}}/>
          </>
          }
        </>
      )}
    </Link>
  );
};

export default SidebarBrandLogo;