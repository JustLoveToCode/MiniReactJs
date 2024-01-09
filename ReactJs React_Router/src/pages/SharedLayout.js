// You will need to import the Link
import {Link,Outlet} from 'react-router-dom';
import Navbar from '../components/Navbar';
import StyledNavbar from '../components/StyledNavbar';

const Home = () => {
  return (
    <>
        <StyledNavbar/>
        <Outlet/>
    </>

  );
};
export default Home;