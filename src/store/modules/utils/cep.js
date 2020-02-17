import axios from 'axios'

export default {
    namespaced: true,    

    state: {
        cidades: []
    },

    getters: {
        allZipCodes: (state) => state.cidades
    },

    mutations: {
        setZipCodeData: (state, allZipCodes) => (state.cidades = allZipCodes)
    },
    actions: {
        // getting the data
        async fetchZipCodeData({ commit }) {
            const response = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
            commit("setZipCodeData", response.data)      //comitar mutations
        }
    }
}
