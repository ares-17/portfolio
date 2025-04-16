---
layout: home
title: Marco Rossi - DevOps & Open Source Enthusiast
hero:
  name: Alessandro
  text: Building bridges between code and infrastructure
  tagline: DevOps | Home Lab Architect | AI Tinkerer
  image:
  actions:
    - theme: brand
      text: Download CV
      link: /cv/MarcoRossi-CV.pdf
    - theme: alt
      text: View GitHub
      link: https://github.com/ares-17
---

<style>

html:not(.dark) div.VPContent:has(div.VPHome) {
  background: radial-gradient(circle at left, rgba(255, 255, 255, 1) , rgba(92, 115, 231, 0.6))
}

html.dark div.VPContent:has(div.VPHome) {
  background: radial-gradient(circle at left, #000 , rgba(92, 115, 231, 0.6))
}
  
:root {
  /* Nuove variabili CSS personalizzate */
  --profile-size: 100px;
  --profile-border: 4px;
  --vp-home-hero-name-color: rgba(92, 115, 231, 1);
}

/* Container immagine circolare */
.profile-container {
  display: flex;
  justify-content: center;
  margin: 0 auto 2rem;
  width: var(--profile-size);
  height: var(--profile-size);
  border-radius: 50%;
  border: var(--profile-border) solid var(--vp-c-brand);
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,1,1,0.4);
}

@keyframes fade-in-normal {0% { opacity: 0; } 100% { opacity: 1;} }
.profile-container {
  animation: fade-in-normal 0.5s cubic-bezier(0.550, 0.055, 0.675, 0.190) 0ms 1 normal none; 
}

/* Immagine profilo */
.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}


div.VPHero.VPHomeHero{
  order: 2;
  margin-top: 0;
  padding-top: 0;
}

div.vp-doc.container{
  orer: 1;
  justify-content: left;
  display: flex;
  margin-top: 3rem;
}

div.VPHome {
  display: flex;
  justify-content: left;
  flex-direction: column;
}

h1 span .name.clip {
  
}
</style>

<div class="profile-container">
  <img 
    class="profile-image" 
    src="/ares-image.webp" 
    alt="Alessandro Profile Picture"
    loading="lazy"
  >
</div>