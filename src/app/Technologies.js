import React from 'react'
import PageHeader from './components/PageHeader'
// import { Link } from 'react-router-dom'


class Technologies extends React.Component {
    state = {
      
    }
    
    render() {
      return (
          <div>
              <PageHeader color="is-info" title="Technologies">
                  The <strong>tools</strong> we use to make <strong>everything</strong> happen
              </PageHeader>
              <section className="section technologies">
                  <div className="container" id="headline-features">
                      <div className="columns feature is-vcentered">
                          <div className="is-offset-2 column"><i className="fab fa-html5" style={{ fontSize: '180px', color: 'white', marginTop: '30px' }}></i></div>
                          <div className="column">
                              <h3 className="feature-heading">HTML5</h3>
                              <p className="is-size-4 has-text-light">Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur</p> <a href="/technologies" className="button is-info is-outlined">
                  Find out how
                </a></div>
                          <div className="column is-1"></div>
                      </div>
                      <div className="columns feature is-vcentered">
                          <div className="column is-offset-1">
                              <h3 className="feature-heading">CSS3</h3>
                              <p className="is-size-4 has-text-light">Excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p> <a href="/technologies" className="button is-info is-outlined">
                  Learn More
                </a></div>
                          <div className="is-offset-2 column"><i className="fab fa-css3" style={{ fontSize: '180px', color: 'white', marginTop: '30px' }}></i></div>
                          <div className="column is-1"></div>
                      </div>
                      <div className="columns feature is-vcentered">
                          <div className="is-offset-2 column"><i className="fab fa-js-square" style={{ fontSize: '180px', color: 'white', marginTop: '30px' }}></i></div>
                          <div className="column">
                              <h3 className="feature-heading">JavaScript</h3>
                              <p className="is-size-4 has-text-light">Omnis voluptas assumenda est, omnis dolor repellendus. </p> <a href="/technologies" className="button is-info is-outlined">
                  Discover all features
                </a></div>
                      </div>
                      <div className="columns feature is-vcentered">
                          <div className="column is-offset-1">
                              <h3 className="feature-heading">ReactJS</h3>
                              <p className="is-size-4 has-text-light">Qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit?</p> <a href="/technologies" className="button is-info is-outlined">
                  Learn More
                </a></div>
                          <div className="is-offset-2 column"><i className="fab fa-react" style={{ fontSize: '180px', marginTop: '30px' }}></i></div>
                          <div className="column is-1"></div>
                      </div>
                      <div className="columns feature is-vcentered">
                          <div className="is-offset-2 column"><i className="fab fa-vuejs" style={{ fontSize: '180px', marginTop: '30px' }}></i></div>
                          <div className="column">
                              <h3 className="feature-heading darker">VueJS</h3>
                              <p className="is-size-4 has-text-light">Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p> <a href="/technologies" className="button is-info is-outlined darker">
                  Discover all features
                </a></div>
                      </div>
                      <div className="columns feature is-vcentered">
                          <div className="column is-offset-1">
                              <h3 className="feature-heading darker">NodeJS</h3>
                              <p className="is-size-4 has-text-light">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore.</p> <a href="/technologies" className="button is-info is-outlined darker">
                  Learn More
                </a></div>
                          <div className="is-offset-2 column"><i className="fab fa-node" style={{ fontSize: '180px', marginTop: '30px' }}></i></div>
                          <div className="column is-1"></div>
                      </div>
                  </div>
              </section>
          </div>
      )
    }

}

export default Technologies

