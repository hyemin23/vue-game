<template>
<table>
  <tr-component v-for="rowData,index in tableData" :row-data="rowData" v-bind:key="index">

  </tr-component>
  </table>
</template>

<script>
import TrComponent from './TrComponent.vue'
export default {
  components: { TrComponent },
    props: {
        tableData : Array
    }
}
</script>

<style>

</style>