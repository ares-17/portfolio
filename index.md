---
layout: home
title: Alessandro - DevOps & Open Source Enthusiast
hero:
  name: Alessandro
  text: Building bridges between code and infrastructure
  tagline: DevOps | Home Lab Architect | AI Tinkerer
  image:
  actions:
    - theme: brand
      text: LinkedIn
      link: https://www.linkedin.com/in/alessandro-schiavo-50630b183/
    - theme: alt
      text: View GitHub
      link: https://github.com/ares-17
---

<script setup>
import ProfileImages from './components/ProfileImages.component.vue'
</script>

<ProfileImages/>

<style>

html:not(.dark) div.VPContent:has(div.VPHome) {
  background: radial-gradient(circle at left, rgba(255, 255, 255, 1) , rgba(92, 115, 231, 0.4))
}

html.dark div.VPContent:has(div.VPHome) {
  background: radial-gradient(circle at left, #000 , rgba(92, 115, 231, 0.4))
}
  
:root {
  --profile-size: 100px;
  --profile-border: 4px;
  --vp-home-hero-name-color: rgba(92, 115, 231, 1);
}

div.VPHero.VPHomeHero{
  order: 2;
  margin-top: 0;
  padding-top: 0;
}

div.VPHome {
  display: flex;
  justify-content: left;
  flex-direction: column;
}

</style>