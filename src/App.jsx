import Project from './components/Project'
import Section from './components/Section'
import Separator from './components/Separator'
import projects from "./lib/projects.json"

function App() {
  return (
    <div className='min-h-dvh bg-zinc-800 text-white'>
      <Section>
        <div className='flex flex-col items-center justify-center gap-3 h-full w-1/4 mx-auto'>
          <h1 className='text-5xl mr-auto'>Felix Bruguera</h1>
          <h2 className='text-2xl text-white/70 ml-auto'>Full Stack Web Developer</h2>
        </div>
      </Section>
      <section id='projects'>
        <h1 className='text-4xl text-center font-bold mb-10'>My Projects</h1>
        <ul className='flex flex-wrap'>
          {projects.full.map(project =>
            <li key={project.name} className="mx-auto">
              <Section height='h-dvh/2'>
                <Project data={project} width={project.width}/>
                <Separator />
              </Section>
            </li>
          )}
          {projects.half.map(projects =>
            <li key={projects[0].name} className='mx-auto'>
              <Section height='h-dvh/2' width={'w-full'}>
                <div className="flex items-center gap-30">{projects.map(project => <Project key={project.name} data={project} width={project.width}/>)}</div>
              </Section>
              <Separator />
            </li>
          )}
        </ul>
      </section>
    </div>
  )
}

export default App
