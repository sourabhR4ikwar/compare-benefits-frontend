<template>
<b-form @submit="onSubmit" v-if="show">
            <!-- <heading-with-link title="Company Registration" link="Submit" to="/" /> -->
    <div class="d-flex flex-wrap justify-content-center align-items-center heading-section">
      <h2 class="text-info font-weight-bold font-size-lg mb-1">Register Company</h2>
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
        <b-button type="submit" variant="info" size="lg">Submit Company</b-button>
    </div>
    <!-- <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card> -->
</b-form>
</template>

<script>
import gql from 'graphql-tag';

export default {
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
        show: true,
        createCompanyMutation: `mutation createCompany($companyInput: CompanyInputData,$userId: ID!){
            createCompany(companyInput: $companyInput, userId: $userId){
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
        let userId = this.$route.params.id;
        event.preventDefault()
        let { data } = await this.$apollo.mutate({
            mutation:gql`${this.createCompanyMutation}`,
            variables:{
                companyInput: this.form,
                userId: userId 
            }
        });
        this.$router.push('/company/'+data.createCompany._id);
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