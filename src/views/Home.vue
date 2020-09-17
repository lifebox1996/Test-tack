<template>
  <div>
    <h1>Contacts aplication</h1>
    <hr>
    <ContactAdd
            id="ContactAdd"
    />
    <ContactList
            id="ContactList"
    />
  </div>
</template>

<script>
  import ContactAdd from '../components/ContactAdd'
  import ContactList from '../components/ContactList'

  export default {
    methods: {

      infoContact(id) {

      },
      addContact() {
      }
    },
    components: {
      ContactList,
      ContactAdd
    }
  }
</script>
