<template>
  <div>
      <h1>{{result}}</h1>
      <form v-on:submit="onSubmitForm">
          <input type="number" ref="answer" v-model="value" placeholder="Enter a number" />
      </form>

      <div>시도 : {{}}</div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            value : '',
            result : '',
        }
    },
    methods : {
        onSubmitForm(e) {
            e.preventDefault();
        }
    },
};

</script>

<style>

</style>