import ProjectHeader from '../components/ProjectHeader';
import headerImage from './project-1/header-image.png';

function Project1() {
  return (
    <>
      <div className="nav-gap"></div>
      <ProjectHeader
        label="Belinker Cloud Service"
        title="Improving the permission control for manufacturing document management system."
        date="2025.5 - 2025.6"
        tags={['User Experience', 'User Interface', 'Design System', 'UX Research']}
        meta={[
          { label: 'Role', value: 'UX / UI Designer' },
          { label: 'Members', value: ['Myself', 'Leehyun Moon', 'Yeonkyu Kim'] },
          { label: 'Company', value: 'Belinker Inc.' },
        ]}
        image={headerImage}
      />
      <main>
        <section>
          <h2 class="section-title">Belinker Cloud Service?</h2>
          <p>
            Belinker Cloud Service is a cloud-based file management system targeting small to mid-sized manufacturing companies in Korea.
          </p>
        </section>
      </main>
    </>
  );
}

export default Project1;