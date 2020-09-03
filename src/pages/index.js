import React from "react"
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import NavigationPage from '../components/Navigation'
import {Card, CardText,Layout } from "react-mdl";
import '../css/customize.css'

const Home = ({data}) => {
  return(
    <Layout>
    <NavigationPage />
    <div className="main-title">
      <p className="main-title-para">Let's Make Work Better</p>
    </div>
    <div className="card-f">
    {data.allGoogleSheetLegislatorsCurrentRow.nodes.map(d=> (
     <Card key={d.id} className="main-card">
        <CardText><span><strong>Name:</strong></span>  {d.firstname+' '+ d.lastname}</CardText>
         <CardText><span><strong>Address:</strong></span>  {d.address}</CardText>
         <CardText><span><strong>Gender:</strong></span>   {d.gender}</CardText>
         <CardText><span><strong>Party:</strong></span>  {d.party}</CardText>
         <CardText><span><strong>Phone Number:</strong></span>  {d.phone}</CardText>

      </Card>
    
     
    ))}
      </div>
    
    </Layout>
  )
}

export const pageQuery = graphql`
query{
  allGoogleSheetLegislatorsCurrentRow{
   nodes{
     id
     firstname
     lastname
     gender
     address
     party
     phone
        }                              }
 }

`




export default Home;