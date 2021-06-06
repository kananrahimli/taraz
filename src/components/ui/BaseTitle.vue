<template>
  <h1><span>{{text1}}</span> {{text2}}</h1>
</template>

<script>
export default {
    props:['text1','text2']
}
</script>

<style scoped>
    h1{
        font-weight: bold;
    }

    span{
        position: relative;
    }
    span::before{
        content: '';
        position: absolute;
        width: 100%;
        height: 4px;
        left: 0;
        bottom: 0;
        background-color: #ffe758;
    }
</style>