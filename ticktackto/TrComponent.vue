<template>
<tr>
  <td-component v-for="(cellData,index) in rowData" 
  :cell-data="cellData" :cell-index="index" :row-index="rowIndex" v-bind:key="index">

  </td-component>
  </tr>
</template>

<script>
import TdComponent from "./TdComponent.vue"

export default {
    components:{
        TdComponent
    },
    props:{
        rowData : Array,
        rowIndex : Number,
    }
}
</script>

<style>

</style>