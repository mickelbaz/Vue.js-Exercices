<template>
    <div class="container">
        <form v-if="!submitted">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->


                     <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                
                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->

                    <h1>Fill the form</h1>
                    <hr>
                    <app-full-name v-model="userData.fullName"></app-full-name>
                    <div class="form-group">
                        <label for="email">
                            Email
                        </label>
                        <input type="text" id="email" class="form-control" v-model="userData.email">
                    </div>
                    <div class="form-group">
                        <label for="password">
                            Password
                        </label>
                        <input type="password" id="password" class="form-control" v-model="userData.password">
                    </div>
                
                        <p>Do you want to store your data?</p>
                        <label for="yes">
                            <input
                                    type="radio"
                                    id="yes"
                                    value="Yes"
                                    v-model="storeData"> Yes
                        </label>
                        <label for="no">
                            <input
                                    type="radio"
                                    id="no"
                                    value="No"
                                    v-model="storeData"> No
                        </label>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <button
                            class="btn btn-primary"
                            @click.prevent="submitted = true">Submit!
                    </button>
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="submitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ userData.fullName }}</p>
                        <p>Mail: {{ userData.email }}</p>
                        <p>Password: {{ userData.password }}</p>
                        <p>Store in Database?: {{ storeData }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FullName from './FullName.vue'
    export default {
        data(){
            return{
                userData: {
                    fullName: 'Michael Elbaz',
                    email: '',
                    password: '',
                },
                storeData: 'Yes',
                submitted: false
            }
        },
        components: {
            appFullName: FullName
        }
    }
</script>

<style>
</style>
