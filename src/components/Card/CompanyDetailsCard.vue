<template>
    <b-card
        class="mb-5 mt-2">
        <div class="row">
            <div class="col-md-6 col-sm-12">
                <b-card-text>
                    <div class="d-flex justify-content-center align-items-center flex-column mb-4">
                        <img :src="company.imageUrl" :alt="company.name" class="mb-4"/>
                        <h2 class="text-info">{{company.name}} </h2>
                    </div>
                    <div class="row d-flex align-items-baseline mb-2">
                        <div class="col-md-6">Website</div>
                        <div class="col-md-6 text-muted">{{company.website}}</div>
                    </div>
                    <div class="row d-flex align-items-baseline mb-2">
                        <div class="col-md-6">Industry</div>
                        <div class="col-md-6 text-muted">{{company.industry}}</div>
                    </div>
                    <div class="row d-flex align-items-baseline mb-2">
                        <div class="col-md-6">Company Size</div>
                        <div class="col-md-6 text-muted">{{company.no_of_employees}}</div>
                    </div>
                    <div class="row d-flex align-items-baseline mb-2">
                        <div class="col-md-6">Funding Status</div>
                        <div class="col-md-6 text-muted">{{company.funding_stage}}</div>
                    </div>
                </b-card-text>
            </div>
            <div class="col-md-6 col-sm-12">
                <b-card-text>
                    <h3 class="text-info">Benefits</h3>
                    <b-list-group flush>
                        <b-list-group-item>
                        </b-list-group-item>

                        <b-list-group-item>
                            <b-icon-check2-circle v-if="company.benefits.gym_membership" class="h5 mr-2 mb-0 mt-0" animation="fade"></b-icon-check2-circle>
                            <b-icon-x-circle v-if="!company.benefits.gym_membership" class="h5 mr-2 mb-0 mt-0"></b-icon-x-circle>
                            Gym Membership
                        </b-list-group-item>
                        <b-list-group-item>
                            <b-icon-check2-circle v-if="company.benefits.free_doctor_on_call" class="h5 mr-2 mb-0 mt-0" animation="fade"></b-icon-check2-circle>
                            <b-icon-x-circle v-if="!company.benefits.free_doctor_on_call" class="h5 mr-2 mb-0 mt-0"></b-icon-x-circle>
                            Free Doctor On Call
                        </b-list-group-item>
                        <b-list-group-item>
                            <b-icon-check2-circle v-if="company.benefits.flexible_work_timings" class="h5 mr-2 mb-0 mt-0" animation="fade"></b-icon-check2-circle>
                            <b-icon-x-circle v-if="!company.benefits.flexible_work_timings" class="h5 mr-2 mb-0 mt-0"></b-icon-x-circle>
                            Flexible Work Timings
                        </b-list-group-item>
                        <b-list-group-item>
                            <b-icon-check2-circle v-if="company.benefits.remote_work_friendly" class="h5 mr-2 mb-0 mt-0" animation="fade"></b-icon-check2-circle>
                            <b-icon-x-circle v-if="!company.benefits.remote_work_friendly" class="h5 mr-2 mb-0 mt-0"></b-icon-x-circle>
                            Remote Work Friendly
                        </b-list-group-item>
                        <b-list-group-item>
                            <b-icon-check2-circle v-if="company.benefits.health_insurance" class="h5 mr-2 mb-0 mt-0" animation="fade"></b-icon-check2-circle>
                            <b-icon-x-circle v-if="!company.benefits.health_insurance" class="h5 mr-2 mb-0 mt-0"></b-icon-x-circle>
                            Health Insurance
                        </b-list-group-item>
                        <b-list-group-item class="ml-5">
                            <b-icon-check2-circle v-if="company.benefits.health_insurance_data.sum_insured" class="h5 mr-2 mb-0 mt-0" animation="fade"></b-icon-check2-circle>
                            <b-icon-x-circle v-if="!company.benefits.health_insurance_data.sum_insured" class="h5 mr-2 mb-0 mt-0"></b-icon-x-circle>
                            Sum Insured
                        </b-list-group-item>
                        <b-list-group-item class="ml-5">
                            <b-icon-check2-circle v-if="company.benefits.health_insurance_data.family_covered" class="h5 mr-2 mb-0 mt-0" animation="fade"></b-icon-check2-circle>
                            <b-icon-x-circle v-if="!company.benefits.health_insurance_data.family_covered" class="h5 mr-2 mb-0 mt-0"></b-icon-x-circle>
                            Family Covered
                        </b-list-group-item>
                        <b-list-group-item class="ml-5">
                            <b-icon-check2-circle v-if="company.benefits.health_insurance_data.parents_covered" class="h5 mr-2 mb-0 mt-0" animation="fade"></b-icon-check2-circle>
                            <b-icon-x-circle v-if="!company.benefits.health_insurance_data.parents_covered" class="h5 mr-2 mb-0 mt-0"></b-icon-x-circle>
                            Parents Covered
                        </b-list-group-item>
                        <b-list-group-item class="ml-5">
                            <b-icon-check2-circle v-if="company.benefits.health_insurance_data.maternity_covered" class="h5 mr-2 mb-0 mt-0" animation="fade"></b-icon-check2-circle>
                            <b-icon-x-circle v-if="!company.benefits.health_insurance_data.maternity_covered" class="h5 mr-2 mb-0 mt-0"></b-icon-x-circle>
                            Maternity Covered
                        </b-list-group-item>

                        
                        <b-list-group-item></b-list-group-item>
                    </b-list-group>
                        
                </b-card-text>
            </div>
        </div>
        
    </b-card>
</template>

<script>
export default {
    props: ['company']
}
</script>

<style scoped>
img {
    max-height: 150px;
    max-width: 150px;
    box-shadow: 2px 2px 12px rgba(0,0,0,0.5);
    border-radius: 10px;
}
</style>


