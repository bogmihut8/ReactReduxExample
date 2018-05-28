import React from 'react'
import PageHeader from './components/PageHeader'
import { Link } from 'react-router-dom'
import { Parallax } from 'react-parallax';

const Home = () => (
    <div>
        <PageHeader color="is-info" title="ReactRedux Website">
            Minimal and responsive website using <strong>React</strong> as the main framework, together with <strong>Redux</strong> state manager, a css framework <strong>Bulma</strong> with the content provided by <strong>Contentful</strong>  
        </PageHeader>
        
        <div className="home columns">
            <div className="column has-text-centered">
                <h2><i className="fas fa-code" style={{ marginRight: '5px' }}></i>Projects</h2>
                <p>Ne vix amet possim impedit, viderer incorrupte quo in. Sea ut falli aeterno debitis, commodo concludaturque id pri. </p>
                <Link className="button is-center is-link" to="/projects">See more</Link>
            </div>
            <div className="column has-text-centered">
                <h2><i className="far fa-address-card" style={{ marginRight: '5px' }}></i>Resume</h2>
                <p>Admodum euripidis cu vel, an cum nihil commodo habemus. Porro atqui erant nec ei. Quem odio malorum an sea.</p>
                <Link className="button is-center is-link" to="/resume">See more</Link>
            </div>
            <div className="column has-text-centered">
                <h2><i className="far fa-rss-square" style={{ marginRight: '5px' }}></i>Blog</h2>
                <p>Mel at vitae audire probatus, cu cum omnes dolores ocurreret. Nam te albucius omnesque, pri at ridens option.</p>
                <Link className="button is-center is-link" to="/blog">See more</Link>
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