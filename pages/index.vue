<template>
  <section class="grid grid-cols-[1fr_min(570px,100%)_1fr]">
    <ContentList path="/posts" v-slot="{ list: posts }">
      <article
        v-for="post in posts"
        :key="post._path"
        class="col-start-2 col-span-1 mb-4"
      >
        <NuxtLink :to="post._path" class="card bg-base-100">
          <div class="card-body">
            <h2 class="card-title">{{ post.title }}</h2>
            <p>{{ post.description }}</p>
          </div>
        </NuxtLink>
      </article>
    </ContentList>
  </section>
</template>
