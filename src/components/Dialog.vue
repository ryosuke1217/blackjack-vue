<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-text class="message" v-html="message">
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="dialog=false" @click="$emit('close')">close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  name: 'Dialog',
  props: ['message'],
  data: () => ({
    dialog: true
  }),
  mounted: function () {
    console.log('dialog open')
  }
}
</script>

<style>
.message {
  font-size: 5vw;
  font-family: 'Righteous', cursive;
}
</style>
