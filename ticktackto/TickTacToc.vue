<template>
  <table-component v-bind="tableData"/>
</template>

<script>
import TableComponent from "./TableComponent"
import TableComponent from './TableComponent.vue'
export default {
  components: {
       TableComponent 
  },data(){
    return {
        tableData: [
            ['','',''],
            ['','',''],
            ['','','']
        ]
    }
 }
}
</script>

<style>

</style>