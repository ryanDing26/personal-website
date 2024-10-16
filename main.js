document.addEventListener('DOMContentLoaded', () => {
    // Fetches list of projects from projects.json and populates page with them.
    fetch('./projects.json')
      .then(response => response.json())
      .then(data => {
          const projectsContainer = document.getElementById('projects');
          data.forEach(project => {
            // Anchor tag wrapper so project image is a hyperlink
            const link = document.createElement('a');
            if (project.link != '') link.href = project.link;
            link.target = '_blank';
            link.className = 'block relative group';

            // Container to store project image
            const imageContainer = document.createElement('div');
            imageContainer.className = 'w-full h-[200px]';
            const image = document.createElement('img');
            image.src = project.image;
            image.alt = project.name;
            image.className = 'w-full h-full';
            
            // Overlay container to provide project info
            const hoverContainer = document.createElement('div');
            hoverContainer.className = 'absolute inset-0 bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-center p-2 transition-opacity duration-300';
            const name = document.createElement('h2');
            name.textContent = project.name;
            name.className = 'text-2-xl font-bold';
            const description = document.createElement('p');
            description.textContent = project.description;
            description.className = 'mt-2';

            imageContainer.appendChild(image);
            hoverContainer.appendChild(name);
            hoverContainer.appendChild(description);

            link.appendChild(imageContainer);
            link.appendChild(hoverContainer);
            projectsContainer.appendChild(link);
          });
      })
      .catch(error => console.error('Error loading projects:', error));
});