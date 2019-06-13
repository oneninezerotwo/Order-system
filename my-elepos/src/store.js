import Vue from 'vue';
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex);

let uilt = {
    getAllMoney(state){
    state.allMoney = 0;
    state.allAmount = 0;
    state.info.forEach((item)=>{
        state.allMoney += item.price;
        state.allAmount += item.count;
        })
    }
}
const store = new Vuex.Store({
    state: {
        data: {},
        info: [],
        isHave: false,
        allMoney: 0,
        allAmount: 0
    },
    mutations: {
        // mutations 对仓库(state)进行数据的更新或修改，不能写异步请求
        setdata(state, reponse) {
            state.data = reponse.data;
        },
        chuandata(state, item) {
            state.allMoney = 0;
            state.allAmount = 0;
            for (let i = 0; i < state.info.length; i++) {
                if (state.info[i].goodsId == item.goodsId) {
                    state.isHave = true;
                } else {
                    state.isHave = false;
                }
            }
            if (state.isHave) {
                let arr = state.info.filter(a => a.goodsId == item.goodsId);
                arr[0].count++;
                arr[0].price = arr[0].count * item.price;

            } else {
                let newGoods = {
                    goodsId: item.goodsId,
                    goodsName: item.goodsName,
                    price: item.price,
                    count: 1
                };
                state.info.push(newGoods);
            }
            state.info.forEach((item) => {
                state.allMoney += item.price;
                state.allAmount += item.count;
            })
        },
        goodsDel(state,res){
              if(res.count == 1){
                state.info = state.info.filter(a=>a.goodsId != res.goodsId);
                uilt.getAllMoney(state);
                
              }else{
                let i = res.count;
                let a = res.price / i;
                res.count --;
                res.price = res.count * a;
                uilt.getAllMoney(state);
              }
        },
        increase(state,res){
              let i = res.count;
              let a = res.price / i;
              res.count ++;
              res.price = res.count * a;
              uilt.getAllMoney(state);
        },
        DelAll(state){
            state.info = [];
            uilt.getAllMoney(state);
        }
    },
    // 对产库数据进行修改，可以进行异步请求
    actions: {
        getdata({ commit }) {
            axios.get(
                "https://easy-mock.com/mock/5cff49e145cab05d0c26a969/example/Ordersystem"
            )
                .then(reponse => {
                    commit('setdata', reponse)
                })
                .catch(error => {
                    alert("草！竟然报错！找张丰裕解决！" + error);
                });
        },
    },
    // 获取产库数据
    getters: {
        datas(state) {
            return state.data;
        }
    }
})
export default store