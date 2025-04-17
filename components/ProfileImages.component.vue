<script setup>

</script>

<template>
  <div class="profile-wrapper">
    <div class="profile-main">
      <img class="profile-image" src="/linkedin.webp" alt="LinkedIn Profile Picture" loading="lazy">
      <img class="badge-image" src="/github.webp" alt="GitHub Profile Badge" loading="lazy">
    </div>
  </div>
</template>

<style scoped>
:root {
  --profile-size: 200px;
  --badge-size: 10px;
  --profile-border: 3px;
}

.profile-wrapper {
  display: flex;
  justify-content: left;
  margin-top: 3rem;
}

.profile-main {
  position: relative;
  overflow: hidden;
  animation: fade-in-normal 1s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  padding: 1rem;
}

.profile-image {
  z-index: 1;
  position: relative;
  border-radius: 50%;
  border: 4px solid var(--vp-c-brand);
  width: var(--profile-size);
  height: var(--profile-size);
  box-shadow: 0 3px 12px rgba(0, 1, 1, 0.4);
}

.badge-image {
  position: absolute;
  bottom: 10px;
  right: 0px;
  width: 40px;
  height: auto;
  border-radius: 50%;
  border: 2px solid var(--vp-c-brand);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  object-fit: cover;
  z-index: 10;
}

@keyframes fade-in-normal {
  0% {
    opacity: 0;
    transform: scale(0.9);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
