import React from 'react';
import { Layout } from 'react-mdl';
import NavigationPage from '../components/Navigation';
import '../css/customize.css'

const Info = () => {
    return (
        <Layout>
            <NavigationPage />
            <div className="main-title">
      <p className="main-title-para">Let's Make Work Better</p>
    </div>
        </Layout>
    )
}

export default Info;