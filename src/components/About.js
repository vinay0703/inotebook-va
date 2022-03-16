import React, {useEffect, useContext} from 'react';
import noteContext from '../context/notes/noteContext';

const About = () =>{
  const a = useContext(noteContext);
  useEffect(() => {
    a.update();
  }, [])
  
  return (
    <div>This is About {a.state.name} and in class {a.state.class}</div>
  )
}

export default About;