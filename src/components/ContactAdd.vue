<template>
  <div>
    <form>
      <input v-model="contact_name" type="text" placeholder="Name...">
      <input v-model="contact_lastName" type="text" placeholder="Last name...">
      <input v-model="contact_phone" type="text" placeholder="+380662233555">
      <button type="button" @click="addContact()">Add</button>
    </form>
  </div>
</template>

<script>
  export default {
    methods: {
      addContact() {
        this.$store.commit('contact_add', {
          name: this.contact_name,
          lastName: this.contact_lastName,
          phone: this.contact_phone
        }
        )
        this.contact_lastName = this.contact_phone = this.contact_name = ""
      },
    },
    data() {
      return {
        contact_name: "",
        contact_lastName: "",
        contact_phone: "",
      }
    },
    components: {}
  }
</script>
