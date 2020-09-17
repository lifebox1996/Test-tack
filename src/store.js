import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        contact_info: false,
        allContacts: [
            {
                name: 'Andrii',
                lastName: 'Marshuk',
                phone: '+380637474576',
                email: 'lifebox@gmail.com'
            },
            {
                name: 'Ihor',
                lastName: 'Bukaha',
                phone: '+380995576123',
                email: 'Ihor1ox@gmail.com'
            },
            {
                name: 'Bohdan',
                lastName: 'Kiriluk',
                phone: '+380956485111',
                email: 'Bohdan111@gmail.com'
            }
        ],
        contact_backup: []
    },
    mutations: {
        contact_del(state, payload) {
            state.allContacts = state.allContacts.filter(contact => state.allContacts.indexOf(contact) !== payload)
        },
        contact_add(state, payload) {
            state.allContacts.push(payload)
        },
        attribute_add(state, payload) {
            state.allContacts[payload.id][payload.attribute] = payload.attribute_value
        },
        attribute_remove(state, payload) {
            Vue.delete(state.allContacts[payload.id], `${payload.attribute}`)
        },
        attribute_edit(state, payload) {
            state.allContacts[payload.id][payload.attribute] = payload.newValue


        },
        update_copy(state, payload) {
            state.contact_backup = JSON.parse(JSON.stringify(state.allContacts[payload.id]))
        },
        backup_contacts(state, payload) {
            Vue.delete(state.allContacts, `${payload.id}`)
            state.allContacts[payload.id] = JSON.parse(JSON.stringify(state.contact_backup))
        }
    },
    actions: {},
    getters: {}
})
