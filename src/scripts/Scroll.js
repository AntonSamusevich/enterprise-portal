import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Scroll = () => {
  const { pathname, key } = useLocation();

  useEffect(() => {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
  }, [pathname, key]); 

  return null;
};

export default Scroll;
