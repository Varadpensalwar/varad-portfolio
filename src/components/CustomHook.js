import { useEffect } from 'react' 
import { useSelector } from 'react-redux';

const CustomHook = (refTab = null, refList = null) => {
  const scrollTab = refTab;
  const divs = refList;
  const activeTab = useSelector(state => state.activeTab);

  useEffect(() => {
    // Check if the active tab matches the current component's name (lowercase)
    const componentClass = scrollTab.current.className;
    const activeTabLower = activeTab.toLowerCase();
    
    if(componentClass === activeTabLower){
      const componentNode = scrollTab.current;
      componentNode.scrollIntoView({ behavior: 'smooth' });
    }
    
    if(divs !== null){
      divs.current.forEach((div) => {
        div.classList.add('animation');
      });
      
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        divs.current.forEach((div) => {
          const offsetTop = div.getBoundingClientRect().top + scrollPosition;
          if (scrollPosition >= offsetTop - (window.innerHeight / (1.5))) {
            div.classList.add('active');
          } else {
            div.classList.remove('active');
          }
        });
      }
      
      // Initial check for elements already in view on component mount
      handleScroll();
      
      window.addEventListener('scroll', handleScroll);
      
      // Clean up event listener on unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [activeTab, scrollTab, divs])
}

export default CustomHook