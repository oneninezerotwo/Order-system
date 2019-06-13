<template>
  <div class="hello">
    <el-row>
      <Information/>
      <el-col :span="17">
        <div class="RgoodsInfo">
          <div class="title">常用商品</div>
          <div class="RgoodsList" >
            <ul  v-for="(item,idx) in datas.goodslists" :key="idx">
              <li @click="chuandata(item)">
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
                <li   @click="chuandata(item)" v-for="(item,idx) in datas.goods0Pink" :key="idx">
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
              <li  @click="chuandata(item)" v-for="(item,idx) in datas.goods1Pink" :key="idx">
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
              <li  @click="chuandata(item)" v-for="(item,idx) in datas.goods2Pink" :key="idx">
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
              <li  @click="chuandata(item)" v-for="(item,idx) in datas.goods3Pink" :key="idx">
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
              <li  @click="chuandata(item)" v-for="(item,idx) in datas.goods4Pink" :key="idx">
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
import Information from '../components/Information.vue'
// mapGetters获取数据
// mapMutations获取方法
import { mapActions,mapMutations,mapGetters } from 'vuex'
// import axios from "axios";
export default {
  name: "hello",
  components: {
    Information
  },
  created() {
    // 生命周期执行获取仓库数据方法
    this.getdata();
  },
  computed: {
    // 获取仓库数据
    ...mapGetters([
      'datas'
    ]),
    
  },
  mounted() {
    var orderH = document.body.clientHeight;
    document.getElementById("order-list").style.height = orderH + "px";
    document.getElementById("order-list").style.paddingLeft = 5 + "px";
  },
  methods: {
    // 获取仓库方法
    ...mapActions([
      'getdata'
    ]),
    ...mapMutations([
      'chuandata'
    ])
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
