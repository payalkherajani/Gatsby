import React from 'react';
import { Layout,Header,Navigation} from 'react-mdl'
import '../css/customize.css'
import { Link } from 'gatsby'


const NavigationPage = () => {
    return (
        <Layout>
        <Header title="Legislators"className="header-nav" >
            <ul className="header-ul">
                <Navigation>
                    <li ><Link href="/">Home</Link></li>
                    <li ><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                   <li> <Link to="/info">More Info</Link></li>
                </Navigation>
                </ul>
            </Header>
       
        </Layout>
    
 

    )
}
   


export default NavigationPage;