document.addEventListener ('DOMContentLoaded', function () {
  const sidebar = document.getElementById ('sidebar');
  const sections = document.querySelectorAll ('section');
  const currentHash = window.location.hash;

  function setActiveLink (hash) {
    document
      .querySelectorAll ('#sidebar a')
      .forEach (a => a.classList.remove ('active'));
    const activeLink = document.querySelector (`#sidebar a[href="${hash}"]`);
    if (activeLink) activeLink.classList.add ('active');
  }

  sections.forEach ((section, index) => {
    const link = document.createElement ('a');
    link.href = `#${section.id}`;
    link.textContent = section.querySelector ('h2').textContent;

    if (index === 0 || currentHash === link.hash) {
      link.classList.add ('active');
    }

    link.addEventListener ('click', function (e) {
      e.preventDefault ();
      const targetId = this.getAttribute ('href');
      const targetElement = document.querySelector (targetId);
      targetElement.scrollIntoView ({behavior: 'smooth'});
      setActiveLink (targetId);
      history.pushState (null, null, targetId);
    });

    sidebar.appendChild (link);
  });

  let lastScrollTop = 0;
  window.addEventListener ('scroll', function () {
    let currentSection = '';
    sections.forEach (section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        currentSection = `#${section.id}`;
      }
    });
    setActiveLink (currentSection);

    // Hide sidebar on scroll for medium and small screens
    if (window.innerWidth <= 768) {
      let currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        sidebar.style.transform = 'translateX(-100%)';
      } else {
        // Scrolling up
        sidebar.style.transform = 'translateX(0)';
      }
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    } else {
      sidebar.style.transform = 'translateX(0)';
    }
  });

  // Add copy to clipboard functionality for code elements
  const codeElements = document.querySelectorAll ('pre code');
  codeElements.forEach (codeElement => {
    codeElement.addEventListener ('click', function () {
      const tempTextArea = document.createElement ('textarea');
      tempTextArea.value = this.textContent;
      document.body.appendChild (tempTextArea);
      tempTextArea.select ();
      document.execCommand ('copy');
      document.body.removeChild (tempTextArea);

      // Optional: Show a tooltip or notification that the code was copied
      alert ('Code copied to clipboard!');
    });
  });
});
