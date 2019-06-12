<template>
    <div class="row">
        <form action="">
            <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3">
                <label for="">Quote</label>
                <textarea class="form-control" name="" id="" cols="30" rows="3" v-model="quote"></textarea>
            </div>
            <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3">
                <button class="btn btn-primary" @click.prevent="createNew">
                    Add Quote
                </button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'NewQuote',
        data: () => {
            return {
                quote: ''
            }
        },
        methods: {
            createNew() {
                this.$emit('quoteAdded', this.quote);
                this.quote = '';
            }
        }
    }
</script>

<style scoped>

</style>
