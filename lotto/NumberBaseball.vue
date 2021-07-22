<template>
  <div>
      <h1>{{result}}</h1>
      <form @submit.prevent="onSubmitForm">
          <input type="number" ref="answer" v-model="value" placeholder="Enter a number" />
          <button type="submit">입력</button>
      </form>

      <div>시도 : {{ tries.length }}</div>
      <ul>
          <li v-for="t in tries" v-bind:key="t.try">
              <div>
              {{ t.try }}
              </div>
              <div>
                  {{ t.result }}
              </div>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    data(){
        return {
            tries:[],
            value : '',
            result : '',
        }
    },
    methods : {
        onSubmitForm() {
            this.tries.push({
                try : this.value
                ,result : '홈런'
            });
            this.value ='';
            this.$refs.answer.focus();
        }
    },
};

</script>

<style>

</style>