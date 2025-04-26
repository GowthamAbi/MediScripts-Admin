import { children } from 'react'
import Navbar from './Components/Header/Navbar';

const Layout= ({children}) => {
    return (
        <div>
            <Navbar/>
            {children}
        </div>
    );
}

export default Layout;