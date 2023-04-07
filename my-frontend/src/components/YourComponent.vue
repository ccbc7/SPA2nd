// src/components/YourComponent.vue
<template>
  <!-- ボタンをクリックすると、APIリクエストを実行 -->
  <button @click="fetchData">Fetch Data</button>
</template>

<script>
import axios from 'axios';

export default {
  methods: {
    async fetchData() {
      try {
        // ここに、実際にバックエンドにリクエストを送信するコードを記述
        const response = await axios.get('http://localhost:3000/api/v1/tasks');// タスク一覧を取得するエンドポイント
        // レスポンスをコンソールに出力
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
  },
};
</script>
