import '../index.css';

// Animation utility to stagger animations based on timing
export const staggerAnimations = () => {
  const animatedElements = document.querySelectorAll('.animate-fadeIn');
  
  animatedElements.forEach((element, index) => {
    // Apply staggered delay using the animation-delay-* classes
    const delayClass = `animation-delay-${index * 200}`;
    element.classList.add(delayClass);
  });
};

// Run the stagger animations function when the DOM is loaded
window.addEventListener('DOMContentLoaded', staggerAnimations);