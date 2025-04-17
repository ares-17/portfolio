<script setup>
import { ref, onMounted, watchEffect } from 'vue'
import { useData } from 'vitepress'

const { isDark } = useData()
const darkClass = ref(false)

onMounted(() => {
  watchEffect(() => {
    darkClass.value = isDark.value
  })
})
</script>

<template>
    <section class="hero-intro">
        <div class="content">
            <h1>
                <span class="name clip">Alessandro</span><br />
                <span class="headline" :class="{ 'dark-theme': darkClass }">
                    Building bridges<br />between code and<br />infrastructure
                </span>
            </h1>
            <p class="roles" v-bind:class="{ 'dark-theme': !!isDark }">
                DevOps <span class="divider">|</span>
                Home Lab Architect <span class="divider">|</span>
                AI Tinkerer
            </p>
            <div class="buttons">
                <a href="https://www.linkedin.com/in/alessandro-schiavo-50630b183/" target="_blank"
                    class="btn linkedin">LinkedIn</a>
                <a href="https://github.com/ares-17" target="_blank" class="btn github">View GitHub</a>
            </div>
        </div>
    </section>
</template>

<style scoped>
.hero-intro {
    color: #fff;
    display: flex;
    justify-content: left;
    text-align: left;
}

.content {
    max-width: 100%;
    width: 100%;
}

.name {
    color: var(--vp-home-hero-name-color);
    font-weight: 600;
    font-size: clamp(2rem, 6vw, 3.5rem);
    line-height: 1.1;
    white-space: pre-wrap;
}

.clip {
    background: var(--vp-home-hero-name-background);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: var(--vp-home-hero-name-color);
}

.headline {
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 700;
    color: #4a4a4a;
    line-height: 1.2;
    margin-top: 1rem;
}

.headline.dark-theme {
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 700;
    color: #e5e5e5;
    line-height: 1.2;
    margin-top: 1rem;
}

/* RUOLI */
.roles {
    margin: 2rem 0 1.5rem;
    color: #4a4a4a;
    font-size: clamp(1.2rem, 3vw, 1.6rem);
    font-weight: 500;
}

.roles.dark-theme {
    margin: 2rem 0 1.5rem;
    color: #aaa;
    font-size: clamp(1.2rem, 3vw, 1.6rem);
    font-weight: 500;
}

.divider {
    margin: 0 0.6rem;
    color: #666;
}

/* BOTTONI */
.buttons {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

.btn {
    padding: 0.6rem 1.4rem;
    border-radius: 999px;
    font-weight: 600;
    text-decoration: none;
    display: inline-block;
    transition: background 0.2s;
    font-size: 1rem;
}

.linkedin {
    background: #3b82f6;
    color: white;
}

.linkedin:hover {
    background: #2563eb;
    color: white;
}

.github {
    background: #2e2e2e;
    color: white;
}

.github:hover {
    background: #444;
    color: white;
}
</style>