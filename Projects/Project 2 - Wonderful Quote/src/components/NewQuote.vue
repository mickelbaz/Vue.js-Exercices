<template>
    <div class="row">
        <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
            <label>Quote</label>
            <textarea class="form-control" name="" id="" rows="3" v-model="quote" @keydown.enter.prevent="createNew"></textarea>
        </div>
        <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
            <button class="btn btn-primary" @click.prevent="createNew">Add quote</button>
        </div>
    </div>
</template>

<script>
import Quote from './Quote.vue';

export default {
    data: function(){
        return{
            quote: ''
        };
    },
    methods: {
        createNew(){
            this.$emit('quoteAdded', this.quote);
            this.quote = '';
        }
    }
}
</script>

<style>

</style>