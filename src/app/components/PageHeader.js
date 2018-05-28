import React from 'react'
import BackgroundUrl from './../../resources/bg-blog-header.jpg'

const PageHeader = (props) => (
    <section className={`hero $(props.color)`} style={{ backgroundImage: `url('${BackgroundUrl}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="hero-body">
            <div className="container" style={{ textAlign: 'center' }}>
                <h1 className="title">{props.title}</h1>
                <h2 className="subtitle">{props.children}</h2>
            </div>
        </div>
    </section>
)

export default PageHeader