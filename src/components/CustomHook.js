import { useEffect } from 'react' 
import { useSelector } from 'react-redux';

const CustomHook = (refTab = null, refList = null) => {
  const scrollTab = refTab;
  const divs = refList;
  const activeTab = useSelector(state => state.activeTab);

  useEffect(() => {
    // Check if we have a valid tab reference
    if (scrollTab?.current) {
      // Extract the section's class name to compare with active tab
      const sectionClassName = scrollTab.current.className.split(' ')[0];
      
      // Log for debugging
      console.log("Active Tab:", activeTab);
      console.log("Section Class:", sectionClassName);
      
      // Check if this tab should be active (case-insensitive comparison)
      if (activeTab.toLowerCase() === sectionClassName.toLowerCase()) {
        console.log("Scrolling to section:", sectionClassName);
        scrollTab.current.scrollIntoView({ behavior: 'smooth' });
      }
    }

    // Animation logic
    if (divs !== null && divs.current) {
      divs.current.forEach((div) => {
        if (div) {
          div.classList.add('animation');
        }
      });

      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        divs.current.forEach((div) => {
          if (div) {
            const offsetTop = div.getBoundingClientRect().top + scrollPosition;
            if (scrollPosition >= offsetTop - window.innerHeight / 1.5) {
              div.classList.add('active');
            } else {
              div.classList.remove('active');
            }
          }
        });
      };

      // Trigger the scroll handler once to set initial state
      handleScroll();
      
      window.addEventListener('scroll', handleScroll);
      
      // Cleanup the event listener on unmount
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [activeTab, scrollTab, divs]);
};

export default CustomHook;