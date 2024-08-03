<template>
  <div class="min-h-screen flex flex-col">
    <header class="navbar bg-base-100">
      <h1>
        <NuxtLink to="/" class="btn btn-ghost text-xl text-primary"
          >Nuxt Blog</NuxtLink
        >
      </h1>
    </header>
    <main class="px-5 py-4 h-full flex-grow">
      <NuxtPage />
    </main>
    <footer class="footer footer-center text-base-content p-4">
      Creado con ❤️ usando Nuxt.
    </footer>
  </div>
</template>
