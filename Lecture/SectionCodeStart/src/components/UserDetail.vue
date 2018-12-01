<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name: {{ userName }}</p>
        <p>User age: {{ userAge }}</p>
        <button @click="resetName">Reset name!</button>
    </div>
</template>

<script>
    export default{
        props:{
            userName:{
                type: String
            },
            userAge: Number
        },
        methods: {
            resetName(){
                this.name = 'Michael';
                this.$emit('nameWasReset', this.name)
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
