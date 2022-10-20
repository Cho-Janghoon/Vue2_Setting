<template>
    <div>
        <h4>{{ title }}</h4>
        <input type="password" v-model="inputValue" @input="inputWatch" />
        <div>미리보기: {{ inputValue }}</div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            title: "Hello World!",
            inputValue: ""
        };
    },
    watch: {},
    methods: {
        inputWatch: function (e) {
            console.log(e.target.value);
        }
    },
    beforeCreate() {},
    created() {},
    beforeMount() {},
    mounted() {},
    beforeUpdate() {},
    updated() {},
    beforeDestroy() {},
    destroyed() {}
};
</script>

<style scoped></style>
