<template>
    <transition>
        <!-- slot 指的是一个插槽 -->
        <slot></slot>
    </transition>
</template>

<script>
export default {
    name:"Fade"
}

</script>

<style lang="stylus" scoped>
    .v-enter,.v-leave-top
        opacity 0
    .v-enter-active, .v-leave-active
        transition opacity .5s
</style>