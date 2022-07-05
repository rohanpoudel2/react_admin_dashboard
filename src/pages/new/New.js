import './new.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import NavBar from '../../components/navbar/Navbar';
import { DriveFolderUploadOutlined } from '@mui/icons-material';
import { useState } from 'react';
import { nanoid } from 'nanoid';

const New = ({ inputs, title }) => {

  const [file, setFile] = useState('');

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <NavBar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file ? URL.createObjectURL(file) : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'} alt="img" />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor='image' style={{ cursor: 'pointer' }} className='icon'>Image:{<DriveFolderUploadOutlined />}</label>
                <input type="file" name='image' id='image' onChange={(e) => setFile(e.target.files[0])} hidden />
              </div>
              {inputs.map((data) =>
                <div className="formInput" key={nanoid()}>
                  <label>{data.label}</label>
                  <input type={data.type} placeholder={data.placeholder} />
                </div>
              )}
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New