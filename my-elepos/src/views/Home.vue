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
                <template>
                    <el-button type="text" size="small">删除</el-button>
                    <el-button type="text" size="small">增加</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="close_btn">
              <el-button type="warning" round>挂起</el-button>
              <el-button type="danger" round>删除</el-button>
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
            <ul v-for="(item,idx) in goodslists" :key="idx">
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
                <li v-for="(item,idx) in goodsPink" :key="idx">
                  <span class="foodImg"><img :src="item.goodsimg" alt=""></span>
                  <span class="foodName" v-text="item.goodsName"></span>
                  <span class="foodPrice" v-text="'￥'+item.price+'元'"></span>
                </li>
              </ul>
            </div>
          </el-tab-pane>
          <el-tab-pane label="小吃">小吃</el-tab-pane>
          <el-tab-pane label="套饭">套饭</el-tab-pane>
          <el-tab-pane label="炒粉">炒粉</el-tab-pane>
          <el-tab-pane label="汤类">汤类</el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data(){
    return {
      goodsData:[{
        goodsName:'牛腩粉',
        count: 1 ,
        price: 15
      },{
        goodsName:'辣鸡粉',
        count: 1 ,
        price: 18
      },{
        goodsName:'粉皮糍',
        count: 1 ,
        price: 5
      },{
        goodsName:'烂锅粉',
        count: 1 ,
        price: 8
      }],
      goodslists:[{
        goodsName:'辣鸡粉',
        goodsId:'1',
        price:'18'
      },
      {
        goodsName:'烂锅粉',
        goodsId:'2',
        price:'8'
      },{
        goodsName:'粉皮糍',
        goodsId:'3',
        price:'5'
      },{
        goodsName:'牛腩粉',
        goodsId:'4',
        price:'15'
      },{
        goodsName:'叉烧粉',
        goodsId:'5',
        price:'14'
      },{
        goodsName:'瘦肉粉',
        goodsId:'6',
        price:'13'
      },{
        goodsName:'瘦肉菜心汤',
        goodsId:'7',
        price:'20'
      },{
        goodsName:'红烧牛肉饭',
        goodsId:'8',
        price:'22'
      },{
        goodsName:'牛欢喜',
        goodsId:'8',
        price:'30'
      },{
        goodsName:'男人加油站',
        goodsId:'9',
        price:'200'
      },{
        goodsName:'女人美容院',
        goodsId:'10',
        price:'180'
      },{
        goodsName:'嗨文',
        goodsId:'11',
        price:'0'
      },],
      goodsPink:[{
        goodsimg:'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1560320490&di=0e4f3a4ae34e4c2dd7f6246a8f907112&src=http://pic2.cxtuku.com/00/00/94/b12128744d3d.jpg',
        goodsName:'牛腩粉',
        goodsId:'1',
        price:'15'
      },{
        goodsimg:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2313767746,1616788130&fm=26&gp=0.jpg',
        goodsName:'瘦肉粉',
        goodsId:'2',
        price:'13'
      },{
        goodsimg:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560928015&di=acad0c3bce43554543a331954c9fe01b&imgtype=jpg&er=1&src=http%3A%2F%2Fqcloud.dpfile.com%2Fpc%2Fhuoxcz2JElf_gtcFa916I8tFu1MF2MZFNFTEuPA2JVuViAhwi3EnjQ1hCPpfw-X0TYGVDmosZWTLal1WbWRW3A.jpg',
        goodsName:'叉烧粉',
        goodsId:'3',
        price:'14'
      },{
        goodsimg:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2807696486,3760737423&fm=26&gp=0.jpg',
        goodsName:'辣鸡粉',
        goodsId:'4',
        price:'18'
      }]
    }
  },
  mounted() {
    var orderH = document.body.clientHeight;
    document.getElementById('order-list').style.height = orderH + "px";
    document.getElementById('order-list').style.paddingLeft = 5 +"px";
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pos-order{
  border-right:1px solid #ccc;
}
.close_btn{
  margin-top:15px;
  text-align: center
}
.title{
  height: 20px;
  border-bottom: 1px solid #D3DCE6;
  background-color: #F9FAFC;
  padding: 10px;
  text-align: left;
}
.RgoodsList ul li{
  list-style: none;
  float:left;
  border: 1px solid #ccc;
  padding: 10px;
  margin:10px;
  background: #fff;
  width: 140px;
  font-size: 15px;
  position: relative
}
.o_price{
  color:#58bc58;
  position: absolute;
  right:10px;
}
.goodsType{
  clear:both;
  margin-left:5px;
}
.cookList li{
  list-style: none;
  width: 25%;
  border: 1px solid #E5E9F2;
  height: auot;
  overflow: hidden;
  background-color: #fff;
  padding: 2px;
  float: left;
  margin:2px;
  position: relative;
}
.cookList li span{
  display: block;
  float:left;
}
.foodImg{
  width:40%;
  height:90px
}
.foodImg img{
  width:130%;
  height:90px
}
.foodName{
  font-size: 18px;
  padding-left: 10px;
  color:brown;
  position: absolute;
  top:10px;
  right:20px;
}
.foodPrice{
  font-size: 16px;
  padding-left: 10px;
  padding-top: 10px;
  position:absolute;
  right:25px;
  bottom:25px;
}
</style>
