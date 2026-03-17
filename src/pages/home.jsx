import { Link } from 'react-router-dom';

function Home() {
  return (
    <main>
      <div class="nav-gap"></div>
      <h1>Home</h1>
      <p>Hello World</p>
      <h5><Link to="/project-1">Project-1</Link></h5>
    </main>
  );
}

export default Home;
