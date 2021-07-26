<template>
  <v-row>
    <v-col cols="12"> <h1>cart</h1></v-col>
    <v-col cols="12">
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Product Name</th>
              <th class="text-left">Price</th>
              <th class="text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in products" :key="item.name">
              <td>{{ item.name }}</td>
              <td>{{ item.calories }}</td>
              <td>
                <v-btn>add</v-btn>
                <v-btn>remove</v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      products: [],
    };
  },
};
</script>