<template>
    <div>
        <h1>Contacts aplication</h1>
        <hr>
        <router-link to="/" tag="button"
        >Back</router-link>
        <button v-on:click="backup()"
        >Undo</button>
        <div>

            <table>
                <tr
                        v-for="(el, index) in this.$store.state.allContacts[this.$route.params.id]" :key="index"
                >
                    <td>
                    <span v-on:click="attribute_edit()"
                          v-if="!attributeEdit"
                          :data-id="index"
                    >Edit</span>
                        <span v-on:click="apply_edit_attribute()"
                              v-if="attributeEdit && index == editElement"
                              :data-id="index">
                        Apply
                    </span>
                    </td>
                    <td>
                    <span v-on:click="attribute_remove()"
                          v-if="!attributeEdit"
                          :data-id="index">
                        Del
                    </span>

                    </td>
                    <td>
                        {{ index }}
                    </td>
                    <td v-if="!attributeEdit && index === editElement">
                        {{ el }}
                    </td>
                    <input v-if="attributeEdit && index == editElement"
                           v-model="new_edit_value"
                           :data-id="index"
                           style="width: 100px; height: 13px" type="text" placeholder="New value">
                    <td v-if="!attributeEdit && index !== editElement">
                        {{ el }}
                    </td>
                </tr>
                <tr>
                    <td>
                        <span v-if="!attributeAdd"
                              v-on:click="attribute_Add()"
                        >Plus</span>
                        <span   v-if="attributeAdd"
                                v-on:click="attribute_add(this)"

                        >
                        Save </span>
                    </td>
                    <td></td>
                    <td>
                        <input  v-if="attributeAdd"
                                v-model="new_attribute"
                                type="text" placeholder="Attribute..."
                                style="width: 75px">
                    </td>

                    <td>

                        <input  v-if="attributeAdd"
                                v-model="new_attribute_value"
                                type="text" placeholder="Value..."
                                style="width: 150px">
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['id'],
        methods: {
            attribute_add() {
                this.updateCopy()

                this.$store.commit('attribute_add', {
                    id: this.$route.params.id,
                    attribute: this.new_attribute,
                    attribute_value: this.new_attribute_value
                })
                this.new_attribute = ""
                this.new_attribute_value = ""

                this.attributeAdd = !this.attributeAdd
            },
            attribute_remove() {
                if (confirm(`Confirm delete?`)) {
                    this.updateCopy()
                    return this.$store.commit('attribute_remove', {
                        id: this.$route.params.id,
                        attribute: event.target.getAttribute('data-id')
                    })

                } else {
                    return false;
                }
            },
            attribute_edit() {
                this.updateCopy()
                const id = this.$route.params.id
                const data_id = event.target.getAttribute('data-id')

                this.attributeEdit = !this.attributeEdit

                this.editElement = data_id
                this.new_edit_value = this.$store.state.allContacts[id][data_id]
            },
            apply_edit_attribute() {
                const id = this.$route.params.id
                const data_id = event.target.getAttribute('data-id')
                if (confirm(`Confirm edit?`) && this.new_edit_value !== this.$store.state.allContacts[id][data_id]) {
                    console.log(1)
                    this.updateCopy()
                    this.$store.commit('attribute_edit', {
                        id: this.$route.params.id,
                        attribute: event.target.getAttribute('data-id'),
                        newValue: this.new_edit_value
                    })
                }
                    this.attributeEdit = !this.attributeEdit

            },
            attribute_Add() {
                this.attributeAdd = !this.attributeAdd
            },
            updateCopy() {
                this.$store.commit('update_copy', {
                    id: this.$route.params.id
                })
            },
            backup() {
                this.$store.commit('backup_contacts', {
                    id: this.$route.params.id
                })
            }
        },
        data() {
            return {
                attributeAdd: false,
                attributeEdit: false,
                editElement: "",
                new_attribute: "",
                new_attribute_value: "",
                new_edit_value: ""
            }
        }
    }
</script>

<style scoped>
    table {
        display: inline-block;
    }
</style>
