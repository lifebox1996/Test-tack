<template>
    <tr>
        <td>
            <router-link class="routerlink" :to="{name:'ContactInfo', params: {id: findId(contact)}}"
            >Info
            </router-link>
        </td>
        <td>
            <i
                    v-on:click="removeContact(findId(contact))"
            >Del</i>
        </td>
        <td
                v-for="(el, index) in contact" :key="index"
                v-if='index === "name" || index === "lastName"'
        >
            {{ el }}
        </td>
    </tr>
</template>
<script>
    export default {
        props: ['contact'],
        methods: {
            findId(contact) {
                return this.$store.state.allContacts.indexOf(contact)
            },
            removeContact(id) {
                if (confirm(`Confirm delete contact?`)) {
                    return this.$store.commit('contact_del', id)
                } else return false
            },
            router(el) {
            }
        }
    }
</script>

<style scoped>
    i:hover {

        cursor: pointer;
        color: cornflowerblue;
    }
    .routerlink {
        text-decoration: none;
        font-style: italic;
        color: #2c3e50;
    }
    .routerlink:hover {
        text-decoration: none;
        cursor: pointer;
        color: cornflowerblue;
    }
</style>
