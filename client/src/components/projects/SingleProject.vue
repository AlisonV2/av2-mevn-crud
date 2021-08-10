<template>
  <div class="project">
    <div class="actions">
      <h3 @click="showDetails = !showDetails">{{ project.title }}</h3>
      <div class="icons">
        <span @click="deleteProject" class="material-icons">delete</span>
        <router-link :to="{ name: 'EditProject', params: { id: project._id } }">
          <span class="material-icons">edit</span>
        </router-link>
      </div>
    </div>
    <div v-if="showDetails" class="details">
      <p>{{ project.preview.en }} || {{ project.preview.fr }}</p>
      <p>{{ project.description.en }} || {{ project.description.fr }}</p>
      <p>{{ project.stack }}</p>
      <p>{{ project.date.en }} || {{ project.date.fr }}</p>
      <p>{{ project.liveLink }}</p>
      <img
        :src="project.thumbnail"
        :alt="project.title"
        class="img-fluid"
        height="250"
        width="400"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectPreview",
  props: ["project"],
  data() {
    return {
      showDetails: false,
      uri: process.env.VUE_APP_API_URL + "/" + this.project._id,
    };
  },
  methods: {
    deleteProject() {
      fetch(this.uri, {
        method: "DELETE",
      })
        .then(() => this.$emit("delete", this.project._id))
        .catch((err) => console.log(err.message));
    },
  },
};
</script>

<style lang="scss">
.project {
  margin: 2rem auto;
  background: $primary;
  padding: 1rem 2rem;
  border: 1px solid $primary-lighter-50;
  border-radius: 0.5rem;
}
h3 {
  cursor: pointer;
}
.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.material-icons {
  font-size: 2rem;
  margin-left: 1rem;
  color: $primary-lighter-50;
  cursor: pointer;
}
.material-icons:hover {
  color: $accent;
}

.content-image {
  height: 25rem;
  width: 100%;
  border-radius: 0.5rem;
}

.content {
  position: relative;
  width: 90%;
  max-width: 400px;
  margin: auto;
  overflow: hidden;
}

.content .content-overlay {
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  transition: all 0.4s ease-in-out 0s;
}

.content:hover .content-overlay {
  opacity: 1;
}
.content-details {
  position: absolute;
  text-align: center;
  padding-left: 1em;
  padding-right: 1em;
  width: 100%;
  top: 50%;
  left: 50%;
  opacity: 0;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease-in-out 0s;
}

.content:hover .content-details {
  top: 50%;
  left: 50%;
  opacity: 1;
}

.content-details h3 {
  color: $light;
  font-weight: 500;
  letter-spacing: 0.15em;
  margin-bottom: 0.5em;
  text-transform: uppercase;
}

.content-details p {
  color: $light;
  font-size: 0.8em;
}

.fadeIn-top {
  top: 20%;
}
</style>
