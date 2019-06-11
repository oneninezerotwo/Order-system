<template>
    <div class="left-nav">
        <ul>
            <li>
                <i class="icon iconfont icon-shouyin"></i>
                <div>收银</div>
            </li>
            <li>
                <i class="icon iconfont icon-dianpu"></i>
                <div>店铺</div>
            </li>
            <li>
                <i class="icon iconfont icon-icon-test"></i>
                <div>商品</div>
            </li>
            <li>
                <i class="icon iconfont icon-Member"></i>
                <div>会员</div>
            </li>
            <li>
                <i class="icon iconfont icon-count"></i>
                <div>统计</div>
            </li>
            <li>
                <i class="icon iconfont icon-shezhi"></i>
                <div>设置</div>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
export default {
};
</script>
<style scoped>
.left-nav{
    color: #fff;
    font-size: 10px;
    height: 100%;
    background-color: #1D8CE0;
    float: left;
    width: 5%
}
.iconfont{
    font-size: 24px
}
.left-nav ul{
    padding: 0px;
    margin: 0px
}
.left-nav li{
    list-style: none;
    text-align: center;
    border-bottom: 1px solid #58bc58;
    padding: 10px;
}
</style>
