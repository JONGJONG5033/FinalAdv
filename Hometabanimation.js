document.addEventListener("DOMContentLoaded", () => {
    const programHeadings = document.querySelectorAll(".program-section h1, .program-section h2");
    const programCards = document.querySelectorAll(".program-section .card");
  
    const observerOptions = {
      threshold: 0.1, // Trigger when 10% of the element is visible
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active"); // Add active class when visible
          observer.unobserve(entry.target); // Stop observing after animation
        }
      });
    }, observerOptions);
  
    programHeadings.forEach((heading) => observer.observe(heading));
    programCards.forEach((card) => observer.observe(card));
  });
  