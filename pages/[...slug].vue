<template>
  <article class="prose min-w-full">
    <ContentDoc v-slot="{ doc: post }">
      <h1 class="title">{{ post.title }}</h1>
      <ContentRenderer :value="post" class="content" />
    </ContentDoc>
  </article>
</template>
