export default {
    state: {
        funds: 11000,
        stocks: []
    },
    mutations: {
        /* Método para comprar ações */
        buyStock(state, { stockId, stockQuantity, stockPrice }) {

            const record = state.stocks.find(element => element.id == stockId);
            /* Caso a ação já exista no portfólio ele irá aumentar a quantidade comprada */
            if (record) {
                record.quantity += stockQuantity;
            } else {

                /* Caso nunca tenha comprado a ação, ela será adicionada no portfólio */

                state.stocks.push({
                    id: stockId,
                    quantity: stockQuantity,
                    price: stockPrice,
                });
            }
            state.funds -= stockPrice * stockQuantity;
        },
        /* Métodos para vender as ações */
        sellStock(state, { stockId, stockQuantity, stockPrice }) {
            const record = state.stocks.find(element => element.id == stockId);
            if (record.quantity > stockQuantity) {
                record.quantity -= stockQuantity;
            } else {
                state.stocks.splice(state.stocks.indexOf(record), 1)
            }
            state.funds += stockPrice * stockQuantity;
        },
        randomizeStock(state) {
            state.stocks.forEach(stock => {
                stock.price = Math.round(stock.price * (1 + Math.random() - 0.45));
            });
        },
        setPortfolio(state, portfolio) {
            state.funds = portfolio.funds;
            state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : [];
        }
    },
    actions: {
        sellStock({ commit }, order) {
            commit('sellStock', order);
        },
        randomizeStock({ commit }) {
            commit('randomizeStock')
        }
    },
    getters: {
        stockPortfolio(state, getters) {
            return state.stocks.map(item => {

                /* Utilizando o getters de outro módulo para pegar todos as ações cadastradas.
                No caso o getters de stock */
                const record = getters.stocks.find(element => element.id == item.id)

                return {
                    id: item.id,
                    quantity: item.quantity,
                    name: record.name,
                    price: item.price,
                }
            })
        },
        funds(state) {
            return state.funds;
        }
    }
}