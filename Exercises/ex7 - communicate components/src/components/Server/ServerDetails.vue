<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">Select Server</p>
        <p v-else>Server #{{server.id}}, status: {{server.status}}</p>
        <button @click="resetServer">Reset server</button>
    </div>

</template>

<script>

    import {serverBus} from '../../main.js'
    export default{
        data: function(){
            return{
                server: null
            }
        },
        created(){
            serverBus.$on('serverSelected', (server) =>{
                this.server = server;
            })
        },
        methods: {
            resetServer(){
                this.server.status = 'Normal'
            }
        }
    }
</script>

<style>

</style>
