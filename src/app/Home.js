import React from 'react'
import PageHeader from './components/PageHeader'
import { Link } from 'react-router-dom'
import { Parallax } from 'react-parallax';

const Home = () => (
    <div>
        <PageHeader color="is-info" title="React Website">
            Minimal and responsive website using <strong>React</strong> as the main framework and a css framework <strong>Bulma</strong> with the content provided by <strong>Contentful</strong>  
        </PageHeader>
        
        <div className="home columns">
            <div className="column has-text-centered">
                <h2><i className="fas fa-code" style={{ marginRight: '5px' }}></i>Projects</h2>
                <p>Ne vix amet possim impedit, viderer incorrupte quo in. Sea ut falli aeterno debitis, commodo concludaturque id pri viderer incorrupte quo in. </p>
                <p>Ne vix amet possim impedit, viderer incorrupte quo in. Sea ut falli aeterno debitis, commodo concludaturque. </p>
                <Link className="button is-center is-link" to="/projects">See more</Link>
            </div>
            <div className="column has-text-centered">
                <h2><i className="fa fa-wrench" style={{ marginRight: '5px' }}></i>Technologies</h2>
                <p>Ne vix amet possim impedit, viderer incorrupte quo in. Sea ut falli aeterno debitis, commodo concludaturque id pri viderer incorrupte quo in. </p>
                <p>Ne vix amet possim impedit, viderer incorrupte quo in. Sea ut falli aeterno debitis, commodo concludaturque. </p>
                <Link className="button is-center is-link" to="/technologies">See more</Link>
            </div>
            <div className="column has-text-centered">
                <h2><i className="fab fa-wordpress" style={{ marginRight: '5px' }}></i>Blog</h2>
                <p>Ne vix amet possim impedit, viderer incorrupte quo in. Sea ut falli aeterno debitis, commodo concludaturque id pri viderer incorrupte quo in. </p>
                <p>Ne vix amet possim impedit, viderer incorrupte quo in. Sea ut falli aeterno debitis, commodo concludaturque. </p>
                <Link className="button is-center is-link" to="/blog">See more</Link>
            </div>
            <div className="column has-text-centered">
                <h2><i className="fas fa-male" style={{ marginRight: '5px' }}></i>Contact</h2>
                <p>Ne vix amet possim impedit, viderer incorrupte quo in. Sea ut falli aeterno debitis, commodo concludaturque id pri viderer incorrupte quo in. </p>
                <p>Ne vix amet possim impedit, viderer incorrupte quo in. Sea ut falli aeterno debitis, commodo concludaturque. </p>
                <Link className="button is-center is-link" to="/contact">See more</Link>
            </div>
        </div>
        
        <div className="columns tech-icons">
            <div className="column has-text-centered">
                <i className="fab fa-html5" style={{ marginRight: '5px' }}></i>
            </div>
            <div className="column has-text-centered">
                <i className="fab fa-css3" style={{ marginRight: '5px' }}></i>
            </div>
            <div className="column has-text-centered">
                <i className="fab fa-js-square" style={{ marginRight: '5px' }}></i>
            </div>
            <div className="column has-text-centered">
                <i className="fab fa-react" style={{ marginRight: '5px' }}></i>
            </div>
            <div className="column has-text-centered">
                <i className="fab fa-vuejs" style={{ marginRight: '5px' }}></i>
            </div>
            <div className="column has-text-centered">
                <i className="fab fa-node" style={{ marginRight: '5px' }}></i>
            </div>
        </div>
        
        <div className="home tech">
            <Parallax bgImage={'https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}
              strength={500}>
              <div className="overlay">
                <div className="hero-body">
                    <div className="container" style={{ textAlign: 'center', width: '100%' }}>
                        <h1 className="title">The founders of Hewlett-Packard (HP) flipped a coin to determine whose name would come first in the company.</h1>
                        <h2 className="subtitle">Useless Fact</h2>
                    </div>
                </div>
            </div>
            </Parallax>
        </div>
    </div>
)

export default Home