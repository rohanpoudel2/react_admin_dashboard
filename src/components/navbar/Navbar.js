import './navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import { ChatBubbleOutlineOutlined, DarkModeOutlined, FullscreenOutlined, ListOutlined, NotificationsNoneOutlined } from '@mui/icons-material';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkmodeContext';

const Navbar = () => {

  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="search" placeholder='Search...' />
          <SearchIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className='icon' />
            English
          </div>
          <div className="item">
            <DarkModeOutlined className='icon' onClick={() => dispatch({ type: 'TOGGLE' })} />
          </div>
          <div className="item">
            <FullscreenOutlined className='icon' />
          </div>
          <div className="item">
            <NotificationsNoneOutlined className='icon' />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlined className='icon' />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlined className='icon' />
          </div>
          <div className="item">
            <img src="https://images.pexels.com/photos/12198368/pexels-photo-12198368.jpeg" alt="user" className='avatar' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar