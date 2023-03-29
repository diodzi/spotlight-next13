import Header from './Header'
import StyledBoxLink from './StyledBoxLink'

const PAGELINKS: { title: string; description: string }[] = [
  {
    title: 'Experience',
    description:
      "All my past and current positions as well as a look at what technologies I'm currently using",
  },
  {
    title: 'Projects',
    description: 'A directory of all the projects that I have made public',
  },
  {
    title: 'Blog',
    description:
      "My developer blog where I talk about what I'm learning / implementing, issues I'm having, etc.",
  },
  {
    title: 'Contact',
    description: 'find me!',
  },
]

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Header />

      <section className="flex flex-col items-center p-10 pb-0">
        <h1 className="text-4xl font-bold mb-5">Hello!</h1>
        <p>
          I'm currently a freshman Computer Science student at Georgia State
          University. I want to become a software engineer, mostly focused on
          front end development and UI/UX design. This is the hub for me to
          showcase all the things I'm learning and projects I'm building.
        </p>
      </section>

      <div className="grid grid-rows-2 grid-cols-2 w-fit gap-5 p-10">
        {PAGELINKS.map(
          ({ title, description }: { title: string; description: string }) => {
            return <StyledBoxLink link={title} description={description} />
          }
        )}
      </div>
    </main>
  )
}
