import './App.css';
import './index.css';
import Image from './components/Image';
import SkillList from './components/SkillList';
import Intro from './components/Intro';


function App() {
  return (
    <div className='card'>
      <Image/>
     <div className='data'>
     <Intro />
    <SkillList/>
     </div>
    </div>
  );
}

export default App;