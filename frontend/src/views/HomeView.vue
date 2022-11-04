<template>
  <section>
    <AppBar />
    <ProjectList />
  </section>
</template>

<script>
  import AppBar from '@/components/header/AppBar.vue'
  import ProjectList from './project/Project.vue'
  export default {
    name: 'HomeV',

    components: {
      AppBar,
      ProjectList,
    },
  }
</script>
