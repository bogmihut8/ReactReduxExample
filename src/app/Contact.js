import React from 'react'
import PageHeader from './components/PageHeader'
import Map from './components/Map'
// import { Link } from 'react-router-dom'


class Contact extends React.Component {
    state = {
      
    }
    
    render() {
      return (
        <div>    
          <PageHeader color="is-info" title="Contact">
              If there is a page where you can get in <strong>touch</strong> with us, this is the <strong>one</strong>
           </PageHeader>
           <Map
              googleMapURL="https://maps.googleapis.com/maps/api/js?key="
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `250px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
              center={{ lat: 46.5730124, lng: 23.6468187 }}
              zoom={8}
            />
            
           <div className="columns is-mobile contact-form">
              <div className="column is-three-fifths is-offset-one-fifth">
              <h2 className="title is-2">Contact us</h2>
                <div className="field">
                  <div className="control">
                    <input className="input is-medium" type="text" placeholder="Email (test@gmail.com)" />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <input className="input is-medium" type="text" placeholder="Subject (Info about your projects)" />
                  </div>
                </div>
                <div className="field">
                  <div className="control is-medium">
                    <textarea className="textarea is-medium" placeholder="Message (Can you tell me more about your projects, please?)"></textarea>
                  </div>
                </div>
                <div className="field">
                  <div className="control is-medium">
                    <a className="button is-primary">Submit</a>
                  </div>
                </div>
              </div>
           </div>
           
            
      </div>
      )
    }

}

export default Contact

