const menuButton = document.querySelector('.hamburger');
const menuItems = document.querySelector('.nav-items');
const items = document.querySelectorAll('.nav-item');
const main = document.querySelector('main');

menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('active');
  menuItems.classList.toggle('show-menu');
})

items.forEach((item) => {
  item.addEventListener('click', () => {
    menuButton.classList.remove('active');
    menuItems.classList.remove('show-menu');
  });
});

// backspace effect
main.addEventListener('click', () => {
  menuItems.classList.remove('show-menu');
  menuButton.classList.remove('active');
});

const doctInfo = document.querySelectorAll('.doct');
const seeMoreButton = document.querySelector('.see-more-button');
seeMoreButton.addEventListener('click', () => {
  doctInfo.forEach((info) => {
    info.classList.toggle('hide-info');
  });
});

const doctorInfo = [
  {
    name: 'Dr Promise Okonkwo',
    prof: 'AUDIOLOGIST',
    image: '../images/gallery/Promise-Okonkwo-b.png',
    summary1: 'a Clinical Audiologist at Evercare Hospital Lekki and the Healthy Hearing Clinical Director for Special Olympics Nigeria.',
    summary2: 'He is a trained Audiologist and Speech Language Pathologis with experience in advance diagnostics, hearing and balance disorders, speech therapy, rehabilitations, and hearing amplification technologies.',
  },

  {
    name: 'Dr Vina Kapoor',
    prof: 'AUDIOLOGIST',
    image: '../images/gallery/Dr-Vina-Kapoor-1.jpg',
    summary1: 'a Clinical Audiologist at Evercare Hospital Lekki and the Healthy Hearing Clinical Director for Special Olympics Nigeria.',
    summary2: 'He is a trained Audiologist and Speech Language Pathologist with experience in advance diagnostics, hearing and balance disorders, speech therapy, rehabilitations, and hearing amplification technologies.',
  },
  {
    name: 'Dr Paul Rony',
    prof: 'CRITICAL CARE',
    image: '../images/gallery/Dr-Paul-Rony-b-cor.png',
    summary1: 'Dr Paul is an Intensivist with core specialty training in Critical Care and has more than 9 years of experience as an Intensive care doctor',
    summary2: 'Over the years, he has seen numerous surgical and medical cases and has handled a wide range of critical care issues including varying degrees of sepsis and is very knowledgeable in managing organ.',
  },
  {
    name: 'Dr Edward Jolayemi',
    prof: 'NEUROSURGEON',
    image: '../images/gallery/Dr-Edward-Jolayemi-b-cor.png',
    summary1: 'Dr. Edward Jolayemi is a Neurosurgeon with experience in a diverse range of brain and spine pathologies.',
    summary2: 'His competence spans the fields of neuro- trauma, neuro- oncology, paediatric neurosurgery, pituitary surgery, neurovascular and spine surgeries.',
  },
  {
    name: 'Dr Mirabel Nwosu',
    prof: 'CARDIOLOGIST',
    image: '../images/gallery/Dr-Mirabel-Nwosu-1.jpg',
    summary1: 'Dr. Mirabel Nwosu is a Consultant Cardiologist with valuable clinical cardiology experience including basic and advanced cardiac life support.',
    summary2: 'has completed her advanced fellowship training in interventional cardiology at Care Hospital, India during which time she performed.',
  },

  {
    name: 'Dr Basil Okoh',
    prof: 'CARDIOLOGIST',
    image: '../images/gallery/Dr-Basil-Okoh-1.jpg',
    summary1: 'Dr Okoh Basil Ewere is a Consultant Physician and Cardiologist with additional interests in Basic life support(BLS) and Advanced cardiac life support ( ACLS).',
    summary2: 'In his quest to serve humanity, he took up appointment as a cardiologist to run a cardiology clinic with over 100 patients weekly and conducted over a thousand Echocardiographies.',
  },
];
const doctorImage = document.querySelectorAll('.image');
const Name = document.querySelectorAll('.name');
const prof = document.querySelectorAll('.title');
const sumary1 = document.querySelectorAll('.summary1');
const sumary2 = document.querySelectorAll('.summary2');

for (let i = 0; i < doctorInfo.length; i += 1) {
  doctorImage[i].src = doctorInfo[i].image;
  Name[i].innerHTML = doctorInfo[i].name;
  prof[i].innerHTML = doctorInfo[i].prof;
  sumary1[i].innerHTML = doctorInfo[i].summary1;
  sumary2[i].innerHTML = doctorInfo[i].summary2;
}