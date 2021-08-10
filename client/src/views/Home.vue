<template>
  <div class="container">
    <div v-if="projects.length">
      <div v-for="project in projects" :key="project.id">
        <SingleProject :project="project" @delete="handleDelete"/>
      </div>
    </div>
  </div>
</template>

<script>
import SingleProject from "@/components/projects/SingleProject";

export default {
  name: "Home",
  components: {
    SingleProject,
  },
  data() {
    return {
      projects: [],
    };
  },
  mounted() {
    fetch(process.env.VUE_APP_API_URL)
      .then((res) => res.json())
      .then((data) => (this.projects = data))
      .catch((err) => console.log(err.message));
  },
  methods: {
    handleDelete(id) {
      this.projects = this.projects.filter((project) => {
        return project.id !== id;
      })
    }
  }
};
</script>

<style></style>
