<template>
  <div class="col-md-6 col-sm-12 mx-auto">
    
    <b-form @submit="onSubmit" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>
      <div class="d-flex justify-content-center">
      <b-button type="submit" variant="info" size="lg">Next</b-button>
      </div>
    </b-form>
    <!-- <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card> -->
  </div>
</template>

<script>
import gql from 'graphql-tag';
export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
        },
        show: true,
        addUserMutation: `mutation createUser($user: UserInputData){
                createUser(userInput: $user){
                    _id
                    name
                    email
                }
            }`,

      }
    },
    methods: {
      async onSubmit(event) {
        event.preventDefault()
        let { data } = await this.$apollo.mutate({
            mutation:gql`
                ${this.addUserMutation}
                `,
            variables: {
                user: this.form
            }
        });
        this.$router.push('/register/company/'+data.createUser._id);
      }
    }
  }
</script>
