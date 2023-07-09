import client from '@/sanity/client'
import { toPlainText } from '@portabletext/react'
import ProjectContainer from './ProjectContainer'

async function getProjectsPageData() {
  const { pageDetail } = await client.fetch(
    `*[_type == "page" && name == "Projects"]
    {
        "pageDetail": *[_type == "pageDetail" && references(^._id)][0]{blurb}
    }[0]`
  )
  const blurb = pageDetail.blurb

  const projects = await client.fetch(
    `*[_type == "project"]{name, description, image,
        technologies[]->{logo{asset->{url}}}}`
  )

  return { blurb, projects }
}

export default async function ProjectsPage() {
  const { blurb, projects } = await getProjectsPageData()

  return (
    <div className="stack p-10 gap-5 md:px-64">
      <h1 className="text-4xl font-bold">Projects</h1>
      <p>{toPlainText(blurb)}</p>
      <div className="w-full stack gap-10 md:grid md:grid-cols-2">
        {projects.map((project: any) => {
          return (
            <ProjectContainer
              name={project.name}
              image={project.image}
              description={project.description}
              technologies={project.technologies}
            />
          )
        })}
      </div>
      <h1 className="text-2xl font-bold my-6">and more to come...</h1>
    </div>
  )
}
