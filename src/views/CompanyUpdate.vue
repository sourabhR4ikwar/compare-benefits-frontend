<template>
<div>
<b-form @submit="verifyEmail" v-if="!show">
    <div class="col-md-5 col-sm-12 mx-auto">
      <b-form-group
        id="input-group-1"
        :description="error"
        label="Email address:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>
      <div class="d-flex align-items-center justify-content-center direction-column">
          <button type="submit" class="btn btn-info">Verify Email</button>
          <button type="button" @click="goBack" class="btn btn-info ml-3">
              Go Back
          </button>
      </div>
    </div>
</b-form>
<b-form @submit="onSubmit" v-if="show">
            <!-- <heading-with-link title="Company Registration" link="Submit" to="/" /> -->
    <div class="d-flex flex-wrap justify-content-center align-items-center heading-section">
      <h2 class="text-info font-weight-bold font-size-lg mb-1">Update Company</h2>
    </div>
    <div class="row">
        <div class="col-md-6 col-sm-12 mx-auto">
            <div class="image-preview d-flex justify-content-center py-5">
                <img :src="form.imageUrl" />
            </div>  
            <b-form-group
                label="Company's Name"
                label-for="companyName"
                >
                <b-form-input id="companyName" v-model="form.name" trim></b-form-input>
            </b-form-group>
            <b-form-group
                label="Image URL"
                label-for="imageUrl"
                >
                <b-form-input id="imageUrl" v-model="form.imageUrl" trim></b-form-input>
            </b-form-group>
            <b-form-group
                label="Website"
                label-for="website"
                >
                <b-form-input id="website" v-model="form.website" trim></b-form-input>
            </b-form-group>
            <b-form-group
                label="Industry"
                label-for="industry"
                >
                <b-form-input id="industry" v-model="form.industry" trim></b-form-input>
            </b-form-group>
            <b-form-group
                label="No. of Employees"
                label-for="companyName"
                >
                <b-form-select v-model="form.no_of_employees" :options="employeeOptions"></b-form-select>
            </b-form-group>
            <b-form-group
                label="Funding Stage"
                label-for="funding_stage"
                >
                <b-form-select v-model="form.funding_stage" :options="fundingStageOptions"></b-form-select>
            </b-form-group>
            
            <div class="d-flex flex-wrap justify-content-center align-items-center heading-section">
                <h4 class="text-info font-weight-bold font-size-lg mb-3 mt-5">Benefits</h4>
            </div>

            <b-form-group
                label="Gym Membership :"
                label-cols-sm="6"
                label-align-sm="right"
                class="mb-0"
            >
                <b-form-radio-group
                    class="pt-2"
                    :options="options"
                    v-model="form.benefits.gym_membership"
                ></b-form-radio-group>
            </b-form-group>
            
            <b-form-group
                label="Free Doctor On Call :"
                label-cols-sm="6"
                label-align-sm="right"
                class="mb-0"
            >
                <b-form-radio-group
                    class="pt-2"
                    :options="options"
                    v-model="form.benefits.free_doctor_on_call"
                ></b-form-radio-group>
            </b-form-group>
            
            <b-form-group
                label="Flexible Work Timings :"
                label-cols-sm="6"
                label-align-sm="right"
                class="mb-0"
            >
                <b-form-radio-group
                    class="pt-2"
                    :options="options"
                    v-model="form.benefits.flexible_work_timings"
                ></b-form-radio-group>
            </b-form-group>
            
            <b-form-group
                label="Remote Work Friendly :"
                label-cols-sm="6"
                label-align-sm="right"
                class="mb-0"
            >
                <b-form-radio-group
                    class="pt-2"
                    :options="options"
                    v-model="form.benefits.remote_work_friendly"
                ></b-form-radio-group>
            </b-form-group>
            
            <b-form-group
                label="Health Insurance :"
                label-cols-sm="6"
                label-align-sm="right"
                class="mb-0"
            >
                <b-form-radio-group
                    class="pt-2"
                    @change="updateHealthInsuranceData"
                    v-model="form.benefits.health_insurance"
                    :options="options"
                ></b-form-radio-group>
                
            </b-form-group>
            <div v-if="form.benefits.health_insurance">
                <b-form-group
                    label="Sum Insured :"
                    label-cols-sm="6"
                    label-align-sm="right"
                    class="mb-0"
                    >
                    <b-form-radio-group
                        class="pt-2"
                        v-model="form.benefits.health_insurance_data.sum_insured"
                        :options="options"
                    ></b-form-radio-group>
                </b-form-group>
                <b-form-group
                    label="Family Covered :"
                    label-cols-sm="6"
                    label-align-sm="right"
                    class="mb-0"
                    >
                    <b-form-radio-group
                        class="pt-2"
                        v-model="form.benefits.health_insurance_data.family_covered"
                        :options="options"
                    ></b-form-radio-group>
                </b-form-group>
                <b-form-group
                    label="Parents Covered :"
                    label-cols-sm="6"
                    label-align-sm="right"
                    class="mb-0"
                    >
                    <b-form-radio-group
                        class="pt-2"
                        v-model="form.benefits.health_insurance_data.parents_covered"
                        :options="options"
                    ></b-form-radio-group>
                </b-form-group>
                <b-form-group
                    label="Maternity Covered :"
                    label-cols-sm="6"
                    label-align-sm="right"
                    class="mb-0"
                    >
                    <b-form-radio-group
                        class="pt-2"
                        v-model="form.benefits.health_insurance_data.maternity_covered"
                        :options="options"
                    ></b-form-radio-group>
                </b-form-group>
            </div>
        </div>
    </div>
    <div class="d-flex justify-content-center mt-5">
        <b-button type="submit" variant="info" size="lg">UPDATE</b-button>
    </div>
    <!-- <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card> -->
</b-form>
</div>
</template>

<script>
import gql from 'graphql-tag';

export default {
    async created() {
    const ID = this.$route.params.id; 
    const response = await this.$apollo.query({
      query: gql`query GET_COMPANY($id: ID!){
                    company(id: $id){
                        _id
                        name
                        website
                        imageUrl
                        no_of_employees
                        funding_stage
                        industry
                        createdAt
                        updatedAt
                        benefits{
                            gym_membership
                            free_doctor_on_call
                            number_of_paid_leaves
                            flexible_work_timings
                            remote_work_friendly
                            health_insurance
                            health_insurance_data{
                                sum_insured
                                family_covered
                                parents_covered
                                maternity_covered
                            }
                        }
                    }
                }`,
                variables:{
                    id: ID
                }
    })
    let companyData = response.data.company;
    delete companyData.__typename;
    delete companyData.benefits.__typename;
    delete companyData.benefits.health_insurance_data.__typename;
    delete companyData._id;
    delete companyData.createdAt
    delete companyData.updatedAt
    this.form = companyData;
    // console.log(companyData);
  },
    data() {
      return {
        form: {
            name: '',
            imageUrl: 'https://via.placeholder.com/150',
            website: '',
            no_of_employees: '',
            industry: '',
            funding_stage: '',
            benefits: {
                gym_membership: false,
                free_doctor_on_call: true,
                number_of_paid_leaves: '',
                flexible_work_timings: true,
                remote_work_friendly: false,
                health_insurance: false,
                health_insurance_data: {
                    sum_insured: false,
                    family_covered: false,
                    parents_covered: false,
                    maternity_covered: false
                }
            }
        },
        options: [
            { text:'Yes', value: true},
            { text: 'No', value: false}
        ],
        employeeOptions: [
            '0-50','51-200','201-500','501-1,000','1,001-5,000','5,001-10,000','10,001+'
        ],
        fundingStageOptions: [
            'Pre-Seed','Seed','Series A','Series B','Series C','Series D','IPO','Unknown'
        ],
        show: false,
        error: '',
        email: '',
        createCompanyMutation: `mutation updateCompany($companyInput: CompanyInputData,$companyId: ID!){
            updateCompany(id: $companyId,companyInput: $companyInput){
                _id
                name
            }
        }

        `
      }
    },
    methods: {
      async onSubmit(event) {
        console.log(this.$route.params.id);
        let companyId = this.$route.params.id;
        event.preventDefault()
        let { data } = await this.$apollo.mutate({
            mutation:gql`${this.createCompanyMutation}`,
            variables:{
                companyInput: this.form,
                companyId: companyId 
            }
        });
        this.$router.push('/company/'+data.updateCompany._id);
      },
      verifyEmail(e){
          e.preventDefault();
          console.log(website);
          const emailWebsite = this.email.split('@')[1];
          const website = this.form.website;
          const index = website.indexOf(emailWebsite);
          if(index !== -1){
              this.show = true;
              return;
          }
          this.error = 'Verification failed!';
      },
      goBack(){
          this.$router.go(-1);
      },
      updateHealthInsuranceData(){
          if(!this.form.benefits.health_insurance){
              this.form.benefits.health_insurance_data.sum_insured = false;
              this.form.benefits.health_insurance_data.family_covered = false;
              this.form.benefits.health_insurance_data.parents_covered = false;
              this.form.benefits.health_insurance_data.maternity_covered = false;
          }
      }
    }
  }
</script>
<style scoped>
.image-preview img {
    max-height: 150px;
    box-shadow: 2px 2px 12px rgba(0,0,0,0.5);
    border-radius: 10px;
}
</style>