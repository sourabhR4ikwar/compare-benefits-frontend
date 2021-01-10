<template>
    <b-card
        border-variant="info"
        :header="company.industry"
        header-bg-variant="info"
        header-text-variant="white"
        align="center"
        :title="company.name"
        tag="article"
        style="max-width: 350px;"
        class="mb-5 mt-2">
        <br />
        <b-card-text>
            <div class="mb-3">
                <img :src="company.imageUrl" :alt="company.name"/>
            </div>
            <a :href="company.website">{{company.website}}</a>
        </b-card-text>
        <b-list-group flush>
            <b-list-group-item></b-list-group-item>
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
            <b-list-group-item></b-list-group-item>
        </b-list-group>
        <br />
        <routerLink class="btn btn-info" :to="{name: 'Company', params: { id: company._id }}">View Details</routerLink>
        <br />
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
    box-shadow: 2px 2px 12px rgba(0,0,0,0.5);
    border-radius: 10px;
}
</style>
