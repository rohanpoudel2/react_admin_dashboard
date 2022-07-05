import './widget.scss';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { AccountBalanceWalletOutlined, MonetizationOnOutlined, ShoppingCartOutlined } from '@mui/icons-material';

const Widget = ({ type }) => {

  let data;

  const amount = 2000;
  const percentage = '30%';

  switch (type) {
    case 'user': {
      data = {
        title: 'USERS',
        isMoney: false,
        link: 'See all Users',
        icon: (
          <PersonOutlineIcon className='icon' style={
            {
              color: 'crimson',
              backgroundColor: 'rgba(255,0,0,0.2)'
            }
          } />
        )
      }
      break;
    }
    case 'order': {
      data = {
        title: 'ORDERS',
        isMoney: false,
        link: 'View all Orders',
        icon: (
          <ShoppingCartOutlined className='icon' style={
            {
              color: 'goldenrod',
              backgroundColor: 'rgba(218,165,32,0.2)'
            }
          } />
        )
      }
      break;
    }
    case 'earning': {
      data = {
        title: 'EARNINGS',
        isMoney: true,
        link: 'View all EARNINGS',
        icon: (
          <MonetizationOnOutlined className='icon' style={
            {
              backgroundColor: 'rgba(0,128,0,0.2)',
              color: 'green'
            }
          } />
        )
      }
      break;
    }
    case 'balance': {
      data = {
        title: 'BALANCE',
        isMoney: true,
        link: 'See Details',
        icon: (
          <AccountBalanceWalletOutlined className='icon' style={
            {
              backgroundColor: 'rgba(128,0,128,0.2)',
              color: 'purple'
            }
          } />
        )
      }
      break;
    }

    default: {
      break;
    }
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMoney ? '$' + amount : null}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {percentage}
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widget