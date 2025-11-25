import Project from './components/Project'
import Section from './components/Section'
import projects from "./lib/projects.json"

function App() {
  return (
    <div className='min-h-dvh '>
      <Section>
        <div className='flex flex-col items-center justify-center h-full w-1/4 mx-auto'>
          <h1 className='text-3xl mr-auto'>Felix Bruguera</h1>
          <h2 className='text-2xl text-black/85 ml-auto'>Full Stack Web Developer</h2>
        </div>
      </Section>
      <section id='projects'>
        <h1 className='text-4xl text-center font-bold mb-10'>My Projects</h1>
        {projects.map(project =>
          <Section>
            <Project data={project} width={project.width}/>
          </Section>
        )}
      </section>
    </div>
  )
}

export default App
