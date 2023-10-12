window.onload = () => {
    const speakers = [
      {
        src: 'https://vvce.ac.in/wp-content/uploads/elementor/thumbs/Dr.-B-Sadashivegowda-scaled-oqt19ymj3rc2icr6hhqtruhcn2sfpnz9mmm787wu3g.jpg',
        title: 'Dr. B Sadashive Gowda',
        subtitle: 'Pricipal of VidyaVardhaka College Of Engineering',
        desc: 'General Chair',
      },
    ];
  
    const generalspeaker = speakers.map((speaker) => `
      <div class="speaker-card d-flex mb-5 align-items-center">
        <div class="speaker-img">
          <img 
          src="${speaker.src}" 
          alt="speaker"
          />
        </div>
        <div class="speaker-card-details d-flex flex-column">
          <h3 class="speaker-title">${speaker.title}</h3>
          <p class="speaker-qualification brand-color m-0">
              ${speaker.subtitle}
          </p>
          <span class="speaker-underline"></span>
          <p class="speaker-desc">
            ${speaker.desc}
           </p>
        </div>
      </div>
    `);
  
  
  
    const parser = new DOMParser();
    
    generalspeaker.forEach((projectString) => {
      const speakerElement = parser.parseFromString(projectString, 'text/html').body.firstChild;
      const speakerDetail = document.querySelector('.speaker');
      speakerDetails.append(speakerElement);
    });
  };
  