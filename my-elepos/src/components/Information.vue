<template>
  <el-col :span="7" class="pos-order" id="order-list">
    <el-tabs>
      <el-tab-pane label="点餐">
        <el-table border style="width:100%" :data="info">
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
          <el-button type="danger" round @click="DelAll">删除</el-button>
          <el-button type="success" round>结账</el-button>
        </div>
      </el-tab-pane>
      <el-tab-pane label="挂单">挂单</el-tab-pane>
      <el-tab-pane label="外卖">外卖</el-tab-pane>
    </el-tabs>
  </el-col>
</template>
<script>
import { mapMutations, mapState } from "vuex";
export default {
  methods: {
      ...mapMutations([
          'goodsDel',
          'increase',
          'DelAll'
      ])
  },
  computed: mapState({
    info: "info",
    allMoney: "allMoney",
    allAmount: "allAmount"
  })
};
</script>
<style scoped>
.pos-order {
  border-right: 1px solid #ccc;
}
.boxdiv {
  height: auto;
  overflow: hidden;
  border-top: 1px solid #d3dce6;
  background: #d3dce6;
  text-align: center;
}
.boxdivP {
  width: 50%;
  float: left;
  color: deeppink;
}
.close_btn {
  margin-top: 15px;
  text-align: center;
}
</style>