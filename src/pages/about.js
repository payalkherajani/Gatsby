import React from 'react'
import NavigationPage from '../components/Navigation'
import {Layout} from 'react-mdl'
import '../css/customize.css'
const About = () => {
    return(
        <Layout>
          <NavigationPage />
          <div className="main-title">
          <p className="main-title-para">Let's Make Work Better</p>
          <p className="para">Representative democracies only work if you can represent yourself. <br></br>
            Ian Webster made it easier to do just that with one phone call. <br></br>
            Call 1-844-USA-0234 to be immediately connected to your members of Congress.</p>
          <br></br>
         
          <p className="para">
          A phone call can be a powerful tool for policy change.<br></br>
           A call is a record of your voice, and your opinion.<br></br>
            Every day, representatives get a brief of how many constituents (psst, that’s you) called, and which issues they called about.
          </p>
        
         </div>
         
        </Layout>
       

    )
}

export default About;