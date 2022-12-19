<template>
  {{ message }}
  <p v-for="user of listUsers">
    {{ user.title }}
  </p>
  <button type="button" @click="listTodo">
    Listar to do
  </button>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: "HelloWord",
  props: {
    message: {
      type: String,
      default: 'Sem mesagens'
    }
  },
  mounted () {
    this.listTodo()
  },

  computed:{
    ...mapGetters('user', ['listUsers'])
  },
  methods: {
    ...mapActions('user', ['listTodo']),
  }
}
</script>