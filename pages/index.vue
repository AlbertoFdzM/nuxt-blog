<template>
  <ContentList path="/posts" v-slot="{ list: posts }">
    <article v-for="post in posts" :key="post._path">
      <NuxtLink :href="post._path">
        <h2>{{ post.title }}</h2>
      </NuxtLink>
    </article>
  </ContentList>
</template>
