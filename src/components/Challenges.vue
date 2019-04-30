<template>
<div class=challenge>
    <b-list-group-item button>{{Challenge.desc}}</b-list-group-item>
  </div>

</template>

<script>

export default {
  name: "challenge",
  props: ["Challenge"],
  methods:{
    on_click:function(){
      this.$emit("delete_task",{item:this.item});
    }
  }

};
</script>