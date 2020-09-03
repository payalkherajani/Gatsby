import React from 'react';
import { Layout } from 'react-mdl';
import NavigationPage from '../components/Navigation';
import '../css/customize.css'

const Contact = () => {
    return(
      <Layout>
          <NavigationPage />
          <div className="main-title">
      <p className="main-title-para">Let's Make Work Better</p>
      <p className="para-name">Ian Webster</p>
      <p className="para">I've created a toll-free phone number, 1-844-USA-0234, that will dial all your members of Congress, no matter where you are.<br></br>

Instead of having to look up 3+ phone numbers and call them separately, this single number will connect you to your representatives one after another.<br></br>

The United States is a representative democracy. If there's a policy you'd like to see changed as a US citizen, ask your senators and representatives to act.</p>
      </div>
      
      </Layout>
    )
}

export default Contact;