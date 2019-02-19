import React from 'react'
import PageHeader from './components/PageHeader'
import ProjectTile from './projects/ProjectTile'
// import { Link } from 'react-router-dom'


class Projects extends React.Component {
    state = {
      projects: []
    }
    
    render() {
      return (
        <div>    
          <PageHeader color="is-info" title="Projects">
              Take a look at our <strong>projects</strong> as we build and develop the <strong>future</strong>
           </PageHeader>
          <div className="projects tile is-ancestor">
            <div className="tile is-vertical is-8">
            
              <div className="tile">
              
                <div className="tile is-parent is-vertical">
                  <ProjectTile className="tile is-child notification is-primary" title="ProductHunt" subtitle="A platform and community that helps people discover new tech products and engage with their team." />
                  <ProjectTile className="tile is-child notification is-warning" title="Groupon" subtitle="Social network that connected users who wanted to rally behind a specific cause." />
                </div>
                
                <div className="tile is-parent">
                  <ProjectTile className="tile is-child notification is-info" title="Twitter" subtitle="Twitter was once a tiny side project created by podcasting platform Odeo during a company hackathon. It was nothing but an outlet for a few employees, and although CEO Ev Williams supported it, investors and the press couldn't care less." />
                </div>
                
              </div>
              
              <div className="tile is-parent">
                <ProjectTile className="tile is-child notification is-danger" title="Craigslist" subtitle="Former IBM employee Craig Newmark created an email list for local events to help him meet people (Craig's list, get it?)." />
              </div>
              
            </div>
            
            <div className="tile is-parent">
              <ProjectTile className="tile is-child notification is-success" title="Unsplash" subtitle="What do you do with photos left over from a photoshoot for your startup's landing page? Build the Web's best depository for royalty free photos, of course. When Canadian startup Crew hired a professional photographer for a shoot, they got more than they could use. But rather than let those photos disappear on a hard drive, they threw them up on a site and gave them away for free. One viral HackerNews post later, and the photos had been downloaded over 50,000 times." />
            </div>
            
          </div>
      </div>
      )
    }

}

export default Projects

