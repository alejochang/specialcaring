<template>

<v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar color="teal" dark>
          <v-toolbar-title>Drug / Supplement List</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-list>
          <v-list-group
            v-for="(drugSupplement, index) in drugSupplements" :key="index"
            no-action>
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>{{ drugSupplement.name }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>{{ drugSupplement.activeIngredient }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>{{ drugSupplement.concentration }} {{ drugSupplement.unit }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>{{ drugSupplement.quantity }} {{ drugSupplement.presentation }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import DrugSupplementService from '@/services/drug-supplement.service';

export default {
  name: "DrugSupplementList",
  props: {
    msg: String
  },
  data () {
    return {
      drugSupplements: []
    }
  },
  mounted () {
    this.getDrugSupplements();
  },
  methods: {
    async getDrugSupplement () {
      if (this.drugSupplement === '') {
        return false
      }
      const response = await DrugSupplementService.getDrugSupplement({
        drugSupplement: this.drugSupplement
      })

      let responses = response.data.results

      if (responses.length === 0) {
        this.drugSupplementMeaning = 'Your drugSupplement could not be found and was not added.'
        this.drugSupplementData = ''
        return false
      }

      this.drugSupplementData = responses[0]
      this.drugSupplementMeaning = responses[0].senses[0].definition
    },
    async getDrugSupplements () {
      const drugs = await DrugSupplementService.getDrugSupplements();
      console.log(`Drugs: ${JSON.stringify(drugs)}`)
      this.drugSupplements = drugs;
    }
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
