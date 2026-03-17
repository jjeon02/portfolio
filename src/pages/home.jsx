import WorkCard from '../components/WorkCard';

const projects = [
  {
    title: 'Belinker Cloud Service',
    from: 'From Work',
    tags: ['UX/UI'],
    description: 'Improving the access control for manufacturing document management system.',
    image: '',
    link: '/project-1',
  },
  {
    title: 'ai.sell',
    from: 'School Project',
    tags: ['UX/UI'],
    description: 'An A.I. tool that provides better B2B sales experience for B2B sellers',
    image: '',
    link: '/project-2',
  },
    {
    title: 'Making NJ Transit Accessible',
    from: 'School Project',
    tags: ['Accessible UI'],
    description: 'Accessible UI design for NJ Transit application.',
    image: '',
    link: '/project-3',
  },
  {
    title: 'PNY Website Design',
    from: 'From Work',
    tags: ['Web Design'],
    description: 'Designing official website for PNY Technologies.',
    image: '',
    link: '/project-4',
  },
];

function Home() {
  return (
    <main>
      <div className="nav-gap"></div>
      <section>
        <h1>Hi! I'm a UX/UI Designer</h1>
        <p>My name is Jueun Jeon, and I design both what we see and <span class="grey-text">don't see</span> on the screen.</p>
      </section>
      <section>
        <h1 className="section-title">FEATURED WORKS</h1>
        <div className="work-list">
            {projects.map(project => (
              <WorkCard key={project.title} {...project} />
            ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
