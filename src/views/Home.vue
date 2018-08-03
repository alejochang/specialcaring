<template>
  <div class="home">
    <img src="../assets/logo.png">
    <DrugSupplementList/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DrugSupplementList from '@/components/DrugSupplementList.vue'; // @ is an alias to /src

@Component({
  components: {
    DrugSupplementList,
  },
})
export default class Home extends Vue {}
</script>
