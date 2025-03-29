import { useEffect } from 'react' 
import { useSelector } from 'react-redux';

const CustomHook = (refTab = null, refList = null) => {
  const scrollTab = refTab;
  const divs = refList;
  const activeTab = useSelector(state => state.activeTab);

  useEffect(() => {
    if (scrollTab?.current && scrollTab.current.classList.contains(activeTab)) {
      scrollTab.current.scrollIntoView({ behavior: 'smooth' });
    }
    if (divs !== null && divs.current) {
      divs.current.forEach((div) => {
        div.classList.add('animation');
      });
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        divs.current.forEach((div) => {
          const offsetTop = div.getBoundingClientRect().top + scrollPosition;
          if (scrollPosition >= offsetTop - window.innerHeight / 1.5) {
            div.classList.add('active');
          } else {
            div.classList.remove('active');
          }
        });
      };
      window.addEventListener('scroll', handleScroll);
      
      // Cleanup the event listener on unmount
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [activeTab, scrollTab, divs]); // Added missing dependencies

};

export default CustomHook;
