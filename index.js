// Mobile-menu
function menuClickedHandler() {
  const nav = document.getElementById('nav');
  nav.classList.toggle('popup');

  if (nav.classList.contains('popup')) {
    nav.addEventListener('click', menuClickedHandler);
  } else {
    nav.removeEventListener('click', menuClickedHandler);
  }
}

document.getElementById('menu').addEventListener('click', menuClickedHandler);

// Create object for work-cards/popup
const pro = [
  {
    id: 1,
    name: 'Tonic',
    summaries: { client: 'Self-Employed', role: 'Solo', year: '2022' },
    details: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
     when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    skills: ['html', 'css', 'javascripts'],
    image: 'images/SnapshootD1.jpg',
    links: ['https://henarykhuraijam.github.io/MyPortfolio/', 'https://github.com/HenaryKhuraijam/MyPortfolio'],
  },
  {
    id: 2,
    name: 'Multi-Post Stories',
    summaries: { client: 'Self-Employed', role: 'Solo', year: '2022' },
    details: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
     when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    skills: ['html', 'css', 'javascripts'],
    image: 'images/SnapshootD2.jpg',
    links: ['https://henarykhuraijam.github.io/MyPortfolio/', 'https://github.com/HenaryKhuraijam/MyPortfolio'],
  },
  {
    id: 3,
    name: 'Tonic',
    summaries: { client: 'Self-Employed', role: 'Solo', year: '2022' },
    details: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
     when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    skills: ['html', 'css', 'javascripts'],
    image: 'images/SnapshootD3.jpg',
    links: ['https://henarykhuraijam.github.io/MyPortfolio/', 'https://github.com/HenaryKhuraijam/MyPortfolio'],
  },
  {
    id: 4,
    name: 'Multi-Post Stories',
    summaries: { client: 'Self-Employed', role: 'Solo', year: '2022' },
    details: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
     when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    skills: ['html', 'css', 'javascripts'],
    image: 'images/SnapshootD4.jpg',
    links: ['https://henarykhuraijam.github.io/MyPortfolio/', 'https://github.com/HenaryKhuraijam/MyPortfolio'],
  },
];

// Add work-cards
const addProjects = () => {
  const works = document.getElementById('works');
  works.innerHTML = pro.map((work) => `<div class="cards" id="card${work.id}">
<div class="snapshoot-placeholders">
  <img class="snapshoot" src=${work.image} alt="">
</div>
<div class="projects">
  <h2 class="project-titles">${work.name}</h2>
  <ul class="inline-li project-summary">
    <li class="client">${work.summaries.client}</li>
    <li class="type">${work.summaries.role}</li>
    <li class="year">${work.summaries.year}</li>
  </ul>
  <p class="project-descriptions">
  ${work.details}
  </p>
  <ul class="inline-li">
    <li class="tags">html</li>
    <li class="tags">css</li>
    <li class="tags">javascripts</li>
  </ul>
  <button id=${work.id} class="btn" type="button">See Project</button>
  
</div>
</div>`).join('');
};

addProjects();

// Modal-card popup
const showModal = (pid) => {
  const curPro = pro[pid];
  const sec = document.createElement('section');
  sec.className = 'modal__card';
  sec.id = 'modal-card';
  sec.innerHTML = `<div class="cards" id="card1">
  <div class="topic">
  <h2 class="project-titles">${curPro.name} <img class="closebtn" id="closeButton" src="icons/cancelIconBlack.svg" alt="Cancel-Icon"></h2>
    <ul class="inline-li project-summary">
      <li class="client">${curPro.summaries.client}</li>
      <li class="type">${curPro.summaries.role}</li>
      <li class="year">${curPro.summaries.year}</li>
    </ul> 
  </div>
  
  <div class="snapshoot-placeholders modal">
    <img class="snapshoot" src=${curPro.image} alt="">
  
  </div>
  <div class="modal-discription">
    
    <p class="mobile-discription">
    ${curPro.details} 
    </p>
    
     <div class="language">
    <ul class="inline-li">
      <li class="tags">html</li>
      <li class="tags">css</li>
      <li class="tags">javascripts</li>
      <li class="tags">Ruby</li>
      <li class="tags">Bootstrap</li>
  
    </ul>
   <div class="live-btn">
    <button  class="btn" type=button"">See live <img class="live-icon" src="icons/liveIcon.svg" alt=""> </button>
    <button  class="btn" type="button">See Source <img class="live-icon" src="icons/buttonIconGitHub.svg" alt=""></button></div>
  </div>
  </div>
  </div>`;
  document.body.appendChild(sec);

  const close = document.getElementById('closeButton');
  close.addEventListener('click', () => {
    document.body.removeChild(sec);
  });
};

const cardBtnClicked = (e) => {
  e.preventDefault();
  showModal(e.target.id - 1);
};
const modalButtons = document.querySelectorAll('.cards button');
modalButtons.forEach((button) => button.addEventListener('click', cardBtnClicked));

// validateform
document.getElementById('contact-form').addEventListener('submit', (e) => {
  const errorMsg = document.getElementById('error-message');
  const arrEmail = document.getElementById('email').value;
  errorMsg.innerText = '';
  if (arrEmail !== arrEmail.toLowerCase() || arrEmail.match(/@[0-9a-z][\D\w]*?\./g) === null) {
    e.preventDefault();
    errorMsg.innerText = 'Invalid Email : Please Email should be in lowercase and contain a @ and . in it';
    errorMsg.style.color = 'red';
  }
});
