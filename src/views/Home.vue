<style scoped>
.red {
    color: red
}
</style>
<template>
    <div>
        <router-link to="/about" class="red">{{title}}</router-link>
        <input type="text" v-model="input1"/>
        <h1>{{input1}}</h1>

        <select class="form-control" v-model="region" @change="changeRegion">
            <Option :key="idx" :value="el.v" v-for="(el, idx) in options">{{el.t}}</Option>
        </select>

        <table class="table table-bordered">
            <tr :key="idx" v-for="(el, idx) in options">
                <td>{{el.v}}</td>
                <td>{{el.t}}</td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    data() {
        return {
            title: "Hello World!",
            input1: "",
            options: [
                {v: "S", t: "Seoul"},
                {v: "J", t: "Jeju"},
                {v: "B", t: "Busan"}
            ],
            region: ""
        }
    },
    watch: {
        input1() {
            console.log("watch value:", this.input1)
        }
    },
    methods: {
        changeRegion() {
            alert(this.region)
        }
    },
    beforeCreate() {
        console.log("beforeCreate")
    },
    created() {
        console.log("created")
    },
    beforeMount() {
        console.log("beforeMount")
    },
    mounted() {
        console.log("mounted")
    },
    beforeUpdate() {
        console.log("beforeUpdate")
    },
    updated() {
        console.log("updated")
    },
    beforeDestroy() {
        console.log("beforeDestroy")
    },
    destroyed() {
        console.log("destroyed")
    }
};
</script>