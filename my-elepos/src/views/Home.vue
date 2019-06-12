<template>
  <div class="hello">
    <el-row>
      <el-col :span="7" class="pos-order" id="order-list">
        <el-tabs>
          <el-tab-pane label="点餐">
            <el-table border style="width:100%" :data="goodsData">
              <el-table-column prop="goodsName" label="商品名称"></el-table-column>
              <el-table-column prop="count" label="数量"></el-table-column>
              <el-table-column prop="price" label="金额"></el-table-column>
              <el-table-column label="操作" width="90" fixed="right">
                <template scope="scope">
                  <el-button type="text" size="small" @click="goodsDel(scope.row)">删除</el-button>
                  <el-button type="text" size="small" @click="increase(scope.row)">增加</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="boxdiv">
              <p class="boxdivP">
                <small>总量：</small>
                <span v-text="allAmount+'份'">0份</span>
              </p>
              <p class="boxdivP">
                <small>总额：</small>
                <span v-text="allMoney+'元'">0元</span>
              </p>
            </div>
            <div class="close_btn">
              <el-button type="warning" round>挂起</el-button>
              <el-button type="danger" round @click="DelAll()">删除</el-button>
              <el-button type="success" round>结账</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="挂单">挂单</el-tab-pane>
          <el-tab-pane label="外卖">外卖</el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="17">
        <div class="RgoodsInfo">
          <div class="title">常用商品</div>
          <div class="RgoodsList">
            <ul @click="addOrderList(item)" v-for="(item,idx) in goodslists" :key="idx">
              <li>
                <span v-text="item.goodsName" :id="item.goodsId">辣鸡粉</span>
                <span class="o_price" v-text="'￥'+item.price+'元'">￥18元</span>
              </li>
            </ul>
          </div>
        </div>
        <el-tabs class="goodsType">
          <el-tab-pane label="汤粉">
            <div>
              <ul class="cookList">
                <li @click="addOrderList(item)" v-for="(item,idx) in goods0Pink" :key="idx">
                  <span class="foodImg">
                    <img :src="item.goodsimg" alt>
                  </span>
                  <span class="foodName" v-text="item.goodsName"></span>
                  <span class="foodPrice" v-text="'￥'+item.price+'元'"></span>
                </li>
              </ul>
            </div>
          </el-tab-pane>
          <el-tab-pane label="小吃">
            <ul class="cookList">
              <li @click="addOrderList(item)" v-for="(item,idx) in goods1Pink" :key="idx">
                <span class="foodImg">
                  <img :src="item.goodsimg" alt>
                </span>
                <span class="foodName" v-text="item.goodsName"></span>
                <span class="foodPrice" v-text="'￥'+item.price+'元'"></span>
              </li>
            </ul>
          </el-tab-pane>
          <el-tab-pane label="套饭">
            <ul class="cookList">
              <li @click="addOrderList(item)" v-for="(item,idx) in goods2Pink" :key="idx">
                <span class="foodImg">
                  <img :src="item.goodsimg" alt>
                </span>
                <span class="foodName" v-text="item.goodsName"></span>
                <span class="foodPrice" v-text="'￥'+item.price+'元'"></span>
              </li>
            </ul>
          </el-tab-pane>
          <el-tab-pane label="炒粉">
            <ul class="cookList">
              <li @click="addOrderList(item)" v-for="(item,idx) in goods3Pink" :key="idx">
                <span class="foodImg">
                  <img :src="item.goodsimg" alt>
                </span>
                <span class="foodName" v-text="item.goodsName"></span>
                <span class="foodPrice" v-text="'￥'+item.price+'元'"></span>
              </li>
            </ul>
          </el-tab-pane>
          <el-tab-pane label="汤类">
            <ul class="cookList">
              <li @click="addOrderList(item)" v-for="(item,idx) in goods4Pink" :key="idx">
                <span class="foodImg">
                  <img :src="item.goodsimg" alt>
                </span>
                <span class="foodName" v-text="item.goodsName"></span>
                <span class="foodPrice" v-text="'￥'+item.price+'元'"></span>
              </li>
            </ul>
          </el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col>产品栏</el-col>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "hello",
  data() {
    return {
      goodsData: [],
      goodslists: [],
      goods0Pink: [],
      goods1Pink: [],
      goods2Pink: [],
      goods3Pink: [],
      goods4Pink: [],
      allMoney:0,
      allAmount:0
    };
  },
  created() {
    axios
      .get(
        "https://easy-mock.com/mock/5cff49e145cab05d0c26a969/example/Ordersystem"
      )
      .then(reponse => {
        this.goodslists = reponse.data.goodslists;
        this.goods0Pink = reponse.data.goods0Pink;
        this.goods1Pink = reponse.data.goods1Pink;
        this.goods2Pink = reponse.data.goods2Pink;
        this.goods3Pink = reponse.data.goods3Pink;
        this.goods4Pink = reponse.data.goods4Pink;
      })
      .catch(error => {
        alert("草！竟然报错！找张丰裕解决！");
      });
  },
  mounted() {
    var orderH = document.body.clientHeight;
    document.getElementById("order-list").style.height = orderH + "px";
    document.getElementById("order-list").style.paddingLeft = 5 + "px";
  },
  methods: {
    addOrderList(goods) {
      this.allMoney = 0;
      this.allAmount = 0;
      let isHave = false;
      for (let i = 0; i < this.goodsData.length; i++) {
        if (this.goodsData[i].goodsId == goods.goodsId) {
          isHave = true;
        }
      }
      if (isHave) {
        let arr = this.goodsData.filter(a => a.goodsId == goods.goodsId);
        arr[0].count++;
        arr[0].price = arr[0].count * goods.price;

      } else {
        let newGoods = {
          goodsId: goods.goodsId,
          goodsName: goods.goodsName,
          price: goods.price,
          count: 1
        };
        this.goodsData.push(newGoods);
      }
      this.goodsData.forEach((item)=>{
        this.allMoney += item.price;
        this.allAmount += item.count;
      })
    },
    increase(res){
      let i = res.count;
      let a = res.price / i;
      res.count ++;
      res.price = res.count * a;
      this.getAllMoney();
    },
    goodsDel(res){
      if(res.count == 1){
        this.goodsData = this.goodsData.filter(a=>a.goodsId != res.goodsId);
        this.getAllMoney();
      }else{
        console.log(res);
        let i = res.count;
        let a = res.price / i;
        res.count --;
        res.price = res.count * a;
        this.getAllMoney();
      }
    },
    getAllMoney(){
      this.allMoney = 0;
      this.allAmount = 0;
      this.goodsData.forEach((item)=>{
        this.allMoney += item.price;
        this.allAmount += item.count;
      })
    },
    DelAll(){
      this.goodsData = [];
      this.getAllMoney();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pos-order {
  border-right: 1px solid #ccc;
}
.close_btn {
  margin-top: 15px;
  text-align: center;
}
.title {
  height: 20px;
  border-bottom: 1px solid #d3dce6;
  background-color: #f9fafc;
  padding: 10px;
  text-align: left;
}
.RgoodsList ul li {
  list-style: none;
  float: left;
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  background: #fff;
  width: 140px;
  font-size: 15px;
  position: relative;
}
.o_price {
  color: #58bc58;
  position: absolute;
  right: 10px;
}
.goodsType {
  clear: both;
  margin-left: 5px;
}
.cookList li {
  list-style: none;
  width: 25%;
  border: 1px solid #e5e9f2;
  height: auot;
  overflow: hidden;
  background-color: #fff;
  padding: 2px;
  float: left;
  margin: 2px;
  position: relative;
}
.cookList li span {
  display: block;
  float: left;
}
.foodImg {
  width: 40%;
  height: 90px;
}
.foodImg img {
  width: 130%;
  height: 90px;
}
.foodName {
  font-size: 15px;
  padding-left: 10px;
  color: brown;
  position: absolute;
  top: 10px;
  right: 15px;
}
.foodPrice {
  font-size: 16px;
  padding-left: 10px;
  padding-top: 10px;
  position: absolute;
  right: 25px;
  bottom: 25px;
}
.boxdiv {
  height: auto;
  overflow: hidden;
  border-top: 1px solid #d3dce6;
  background: #d3dce6;
  text-align: center;
}
.boxdivP{
  width:50%;
  float:left;
  color:deeppink;
}
</style>
