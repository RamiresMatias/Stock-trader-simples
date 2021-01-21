import Vue from "vue";

/* Importamos o vue acima para fazer requisições ajax. */

export default {
    actions: {
        loadData({ commit }) {
            Vue.prototype.$http.get('data.json').then(response => {
                const data = response.data;
                /* Após fazer a requisição valida se os dados foram recebidos. Se sim,
                irá chamar a mutations e preenche-las de acordo com os stocks salvos no banco de dados */
                if (data) {
                    commit('setStocks', data.stocks);
                    commit('setPortfolio', {
                        funds: data.funds,
                        stockPortfolio: data.stockPortfolio
                    })
                }
            })
        }
    }
}