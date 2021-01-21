import stocks from "@/data/stock.js"
export default {
    state: {
        stocks: []
    },
    mutations: {
        setStocks(state, stocks) {
            state.stocks = stocks
        },
        randomizeStock(state) {
            state.stocks.forEach(stock => {
                stock.price = Math.round(stock.price * (1 + Math.random() - 0.45));
            });
        }
    },
    actions: {
        buyStock({ commit }, order) {

            commit('buyStock', order);
        },
        /* Assim que método for chamado, irá pegar as ações contidas no array do arquivo stock.js, e após irá setar na
        variável stocks em state, após isso ele irá renderizar as ações a serem compradas */
        initStocks({ commit }) {

            commit('setStocks', stocks);
        },
        randomizeStock({ commit }) {
            commit('randomizeStock')
        }

    },
    getters: {
        stocks(state) {
            return state.stocks
        }
    }
}