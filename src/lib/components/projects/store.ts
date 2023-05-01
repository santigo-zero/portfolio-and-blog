import { get, readable, writable } from 'svelte/store'

type ProjectCategory =
  | 'featured'
  | 'redesign/rewrite'
  | 'opensource'
  | 'fullstack'
  | 'frontend'

interface ProjectsSelector {
  name: string
  description: string
  category: ProjectCategory
  label: string
}

interface Project {
  name: string
  description: string
  category: ProjectCategory[]
  repo: URL
  link: URL
  img?: string
}

export const filterJobGroupSelector = readable<Array<ProjectsSelector>>([
  {
    category: 'featured',
    label: 'Featured',
    name: 'Featured projects',
    description:
      "Here's a selection of the most relevant projects I have for you to explore",
  },
  {
    category: 'opensource',
    label: 'Open Source',
    name: 'Open Source contributions',
    description: `As a Linux enthusiast, I'm a firm believer in FOSS, check
      out the projects I'm being part of`,
  },
  {
    category: 'fullstack',
    label: 'Full Stack',
    name: 'Full Stack projects',
    description: `This are some of the most 'complete' projects I have to date`,
  },
  {
    category: 'frontend',
    label: 'Front End',
    name: 'Front End projects',
    description: `In here you'll find rewrites with a focus on making the UI/UX of this
pages accesible to everyone`,
  },
  {
    category: 'redesign/rewrite',
    label: 'Redesign/Rewrite',
    name: 'Redesigns or Rewrites',
    description: `Rewriting a site to test my
capabilities is fun, sometimes I do a complete revamp of the site`,
  },
])

export const AllProjects = readable<Array<Project>>([
  {
    name: 'Website for zap',
    description:
      'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    category: ['featured', 'frontend', 'opensource'],
    img: '/portfolio/zap-website.webp',
    repo: new URL('https://github.com/zap-zsh/zapzsh.org/'),
    link: new URL('https://www.zapzsh.org/'),
  },
  {
    name: 'example of fullstack',
    description:
      'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    category: ['fullstack'],
    repo: new URL('https://google.com'),
    link: new URL('https://google.com'),
  },
  {
    name: 'example of opensource',
    description:
      'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    category: ['opensource'],
    repo: new URL('https://google.com'),
    link: new URL('https://google.com'),
  },
  {
    name: 'example of redesign/rewrite',
    description:
      'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    category: ['redesign/rewrite'],
    repo: new URL('https://google.com'),
    link: new URL('https://google.com'),
  },
])

export const FilteredProjects = writable(get(AllProjects))
export const currentGroupOfProjects = writable<ProjectCategory>('featured')

currentGroupOfProjects.subscribe(selectionChange => {
  FilteredProjects.update(() =>
    get(AllProjects).filter(currentProject =>
      currentProject.category.includes(selectionChange)
    )
  )
})
