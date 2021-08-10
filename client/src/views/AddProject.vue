<template>
  <div class="row">
    <div class="col-10">
      <form ref="project" @submit.prevent="handleSubmit">
        <div>
          <label for="title">Title</label>
          <input
            type="text"
            class="form-control"
            id="title"
            placeholder="Title"
            v-model="title"
          />
        </div>
        <div>
          <label for="previewEn">Preview (EN)</label>
          <input
            type="text"
            class="form-control"
            id="previewEn"
            placeholder="Preview (EN)"
            v-model="preview.en"
          />
        </div>
        <div>
          <label for="previewFR">Preview (FR)</label>
          <input
            type="text"
            class="form-control"
            id="previewFr"
            placeholder="Preview (FR)"
            v-model="preview.fr"
          />
        </div>
        <div>
          <label for="descriptionEn">Description (EN)</label>
          <textarea
            class="form-control"
            id="descriptionEn"
            placeholder="Description (EN)"
            v-model="description.en"
          />
        </div>
        <div>
          <label for="descriptionFr">Description (FR)</label>
          <textarea
            class="form-control"
            id="descriptionFr"
            placeholder="Description (FR)"
            v-model="description.fr"
          />
        </div>
        <div>
          <label for="dateEn">Date (EN)</label>
          <input
            type="text"
            class="form-control"
            id="dateEn"
            placeholder="Date (FR)"
            v-model="date.en"
          />
        </div>
        <div>
          <label for="dateFr">Date (FR)</label>
          <input
            type="text"
            class="form-control"
            id="dateFr"
            placeholder="Date (FR)"
            v-model="date.fr"
          />
        </div>
        <div>
          <label for="Stack">Stack</label>
          <input
            type="text"
            class="form-control"
            id="stack"
            placeholder="Stack"
            v-model="stack"
          />
        </div>
        <div>
          <label for="Stack">Live Link</label>
          <input
            type="text"
            class="form-control"
            id="liveLink"
            placeholder="liveLink"
            v-model="liveLink"
          />
        </div>
        <div>
          <label for="thumbnail">Thumbnail</label>
          <input
            type="text"
            class="form-control"
            id="thumbnail"
            placeholder="thumbnail"
            v-model="thumbnail"
          />
        </div>
        <div class="button-group">
          <AppButton>
            Save
          </AppButton>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      uri: process.env.VUE_APP_API_URL,
      title: "",
      preview: {
        en: "",
        fr: "",
      },
      description: {
        en: "",
        fr: "",
      },
      date: {
        en: "",
        fr: "",
      },
      stack: "",
      liveLink: "",
      thumbnail: "",
    };
  },
  methods: {
    handleSubmit() {
      fetch(this.uri, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: this.title,
          preview: {
            en: this.preview.en,
            fr: this.preview.fr,
          },
          description: {
            en: this.description.en,
            fr: this.description.fr,
          },
          date: {
            en: this.date.en,
            fr: this.date.fr,
          },
          stack: this.stack,
          liveLink: this.liveLink,
          thumbnail: this.thumbnail,
        }),
      })
        .then(() => {
          this.$router.push("/");
        })
        .catch((err) => console.log(err));
  }
  },
};
</script>
