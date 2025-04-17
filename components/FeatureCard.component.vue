<script setup>
defineProps({
  imgSrc: String,
  imgAlt: {
    type: String,
    default: 'Feature image'
  },
  reverse: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <div class="feature-card" :class="{ reverse }">
    <div class="feature-image">
      <img :src="imgSrc" :alt="imgAlt" loading="lazy" />
    </div>
    <div class="feature-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.feature-card {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin: 2rem 0;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.1);
}

.feature-card.reverse {
  flex-direction: row-reverse;
}

.feature-image {
  flex: 1 1 40%;
  max-height: 100%;
  overflow: hidden;
}

.feature-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.feature-content {
  flex: 1 1 60%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* Responsive layout */
@media (max-width: 768px) {
  .feature-card,
  .feature-card.reverse {
    flex-direction: column;
  }

  .feature-image {
    max-height: 250px;
    flex: none;
  }

  .feature-content {
    padding: 1.5rem;
  }
}
</style>
