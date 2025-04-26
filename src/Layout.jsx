import { Children } from 'react'
import Navbar from '../components/Navbar.jsx';

const Layout= ({children}) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
}

export default Layout;