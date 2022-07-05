import Sidebar from '../../components/sidebar/Sidebar';
import NavBar from '../../components/navbar/Navbar';
import DataTable from '../../components/datatable/DataTable';
import './list.scss';

const List = () => {
  return (
    <div className='list'>
      <Sidebar />
      <div className="listContainer">
        <NavBar />
        <DataTable />
      </div>
    </div>
  )
}

export default List