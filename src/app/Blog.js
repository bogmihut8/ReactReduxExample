import React from 'react'
import BlogItem from './blog/BlogItem'
import PageHeader from './components/PageHeader'
import * as contentful from 'contentful'

class Blog extends React.Component {
    state = {
        posts: []
    }
    
    client = contentful.createClient({
        space: 'tty9skony3rj',
        accessToken: 'ed116781bb71736fabc62d5048655a12d751f8b578ceef7d58a8549dbb268566' 
    })

    componentDidMount() {
        this.fetchPosts().then(this.setPosts);
    }
    
    fetchPosts = () => this.client.getEntries()
    
    setPosts = response => {
        this.setState({
            posts: response.items
        })
    }
    
    render() {
        return (
            <div>
            <PageHeader color="is-info" title="Contentful Blog">
                As the title says, a <strong>Blog</strong> full of amazing <strong>Content</strong>
            </PageHeader>
            {
                this.state.posts.map( ({fields}, i) =>
                    <BlogItem key={i} {...fields} />
                )
            }
            </div>
        )
    }
}

export default Blog
