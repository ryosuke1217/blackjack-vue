<template>
  <v-expansion-panel>
    <v-expansion-panel-content
      v-for="(line,i) in headlines"
      :key="i"
    >
      <div slot="header">{{ line.head }}</div>
      <v-card>
        <v-card-text v-html=line.description></v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {
  name: 'RulePanel',
  data: () => ({
    headlines: [
      {'head': '基本ルール', 'description': 'プレイヤーとディーラーの2人対戦。<br>手札の点数の合計が21に近いほうが勝ち。<br>点数の合計が21を超えたらBustで負け。'},
      {'head': '点数', 'description': 'A は 1 または 11<br>2 ~ 10 は数値がそのまま点数 <br>絵札のJ, Q, K は 10点'},
      {'head': 'ゲームの流れ', 'description': '1. プレイヤーとディーラーがそれぞれカードを2枚づつ引く。ただしディーラーのカードは1枚が非公開。<br>2. プレイヤーは好きなだけカードを引く。ただし21を超えたらその時点でBustで負け。<br>3. ディーラーは点数が17点以上になるまで無条件でカード引き続ける。<br>4. 基本ルールにもとづき勝敗を判定する。'},
      {'head': '用語', 'description': 'Hit: カードをもう一枚引くこと。<br>Stand: カードを引くのをやめ、その時点の手札の点数で勝負すること<br>Bust: 点数が21点を超えること。'}
    ]
  })
}
</script>

<style>
</style>
