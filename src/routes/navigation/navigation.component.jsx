import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as EarthLogo } from '../../assets/earthly.svg';
import './navigation.styles.scss';

const Navigation = () => {
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <EarthLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          <Link className='nav-link' to='/sign-in'>
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

//  A component must have a top level containing component so there's a component called FRAGMENT which doesnt actually render anything.
//  LINK is essentially the anchor tag
