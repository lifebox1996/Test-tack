<template>
  <div>
    <h1>Contacts</h1>
    <table>
      <ContactItem
              v-for="contact of this.$store.state.allContacts"
              v-bind:contact="contact"
              :key="contact.contact_id"
      />
    </table>
  </div>
</template>

<script>
  import ContactItem from './ContactItem'

  export default {
    components: {
      ContactItem
    },
    methods: {
    }
  }
</script>

<style scoped>
  table {
    display: inline;
  }
</style>
