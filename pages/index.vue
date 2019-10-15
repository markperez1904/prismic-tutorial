 <template>
  <div>
    <section class="container">
      <h1>{{title}}</h1>
      <h2>{{description}}</h2>

      <div class="content">
        <li>Nuxt.js</li>
        <li>Prismic.io</li>
        <li>GraphQL</li>
        <li>Apollo Client</li>
      </div>

    </section>
  </div>
</template>
 
 <script>
export default {
  data() {
    return {
      title: 'Sample Static Website',
      description:
        'This is a sample static website built with the following technologies.'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        }
      ]
    }
  }
}
</script>
 
 <style scoped>
h1 {
  font-size: 30px;
  padding-top: 0.5rem;
}

h2 {
  margin: 2rem 0;
}
</style>