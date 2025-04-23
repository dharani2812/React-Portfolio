import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Projects from './components/Projects';
import HtmlProject from './components/Html-Project';
import JSProject from './components/JavaScript-Project';
import ReactProject from './components/React-Project';
import WordPressProject from './components/Wordpress-Project';
import Tools from './components/Toolss';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='skills' element={<Skills />} />
        <Route path='projects' element={<Projects />} />
        <Route path='tools' element={<Tools />} />
        <Route path='projects/html' element={<HtmlProject />} />
        <Route path='projects/javascript' element={<JSProject />} />
        <Route path='projects/react' element={<ReactProject />} />
        <Route path='projects/wordpress' element={<WordPressProject />} />
      </Route>
    </Routes>
  );
}

export default App;
