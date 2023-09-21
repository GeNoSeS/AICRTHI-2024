window.onload = () => {
  const featuredSpeakers = [
    {
      src: './images/speakers-images/speaker_01.png',
      title: 'Dr. B Sadashive Gowda',
      subtitle: 'Pricipal of VidyaVardhaka College Of Engineering',
      desc: 'General Chair',
    },
    {
      src: './images/speakers-images/speaker_02.png',
      title: 'Dr. G B Krishnappa',
      subtitle: 'Dean R & D',
      desc: "General Chair",
    },
    {
      src: './images/speakers-images/speaker_03.png',
      title: 'Dr. Ravi Kumar V ',
      subtitle: 'Professor and Head, Department of IS&E',
      desc: 'Organizing Chair',
    },
    {
      src: './images/speakers-images/speaker_04.png',
      title: 'Dr. Prema N S',
      subtitle: 'Associate Professor, Department of IS&E',
      desc: 'Organizing Chair',
    },
  ];

  const generalspeaker = featuredSpeakers.map((speaker) => `
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
    const speakerDetails = document.querySelector('.speaker-details');
    speakerDetails.append(speakerElement);
  });
};