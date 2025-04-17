---
layout: home
title: Alessandro - DevOps & Open Source Enthusiast
---

<script setup>
import ProfileImages from './components/ProfileImages.component.vue'
import FeatureCard from './components/FeatureCard.component.vue'
import HeroIntro from './components/HeroIntro.component.vue'
</script>

<ProfileImages/>
<HeroIntro />
<FeatureCard imgSrc="trasport-image-card.webp" imgAlt="Fast Development">
  <h2>Freight Transport Data 🚌</h2>
  <p>Il progetto è frutto di uno studio delle caratteristiche dei dati geospaziali e temporali raccolti del flusso stradale su alcune delle città del territorio olandese.
    Le funzionalità come ricerca e analisi dati sono raccolte in unico Jupyter Notebook che sfrutta appieno le capacità offerte da Neo4J e MongoDB.</p>
  <a href="https://github.com/ares-17/freight-transport-data" target="_blank">Visita su Github ➜</a>
</FeatureCard>

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

div.VPFeatures.VPHomeFeatures{
  order: 3;
}

div.feature-card{
  order: 0;
}

.vp-doc h2 {
    border: none;
    padding-top: 0;
}

</style>