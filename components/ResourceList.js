import Link from "next/link"
import ResourceLabel from "components/ResourceLabel"
import moment from "moment"

const ResourceList = ({resources}) => {
  return (
    <section className="hero ">
      <div className="hero-body">
        <div className="container">
          { 
            resources.map(resource => {
              return (
                <section key={resource.id} className="section">
                  <div className="columns is-multiline is-variable is-8">
                    <div className="column is-5">
                      <div className="content is-medium">
                        <h2 className="subtitle is-5 has-text-grey">
                          {moment(resource.createdAt).format("LLL")}
                          <ResourceLabel status={resource.status} />  
                        </h2>
                        <h1 className="title has-text-black is-3">{resource.title}</h1>
                        <p className="has-text-dark">{resource.description}</p>
                        <Link href={`/resources/${resource.id}`} className="button is-light">
                          See more
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default ResourceList;