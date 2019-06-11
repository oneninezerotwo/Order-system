<template>
  <div class="hello">
    <el-row>
      <el-col :span="7" class="pos-order" id="order-list">
        <el-tabs>
          <el-tab-pane label="点餐">
            <el-table>
              <el-table-column prop="goodsName" label="商品名称"></el-table-column>
              <el-table-column prop="count" label="数量"></el-table-column>
              <el-table-column prop="price" label="金额"></el-table-column>
              <el-table-column label="操作"></el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="挂单">挂单</el-tab-pane>
          <el-tab-pane label="外卖">外卖</el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col>
        产品栏
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'hello',
  mounted() {
    var orderH = document.body.clientHeight;
    document.getElementById('order-list').style.height = orderH + "px";
    document.getElementById('order-list').style.paddingLeft = 5 +"px";
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
