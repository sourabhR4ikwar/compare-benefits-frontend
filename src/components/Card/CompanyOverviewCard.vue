<template>
    <b-card :title="company.name" :sub-title="company.industry" :img-src="company.imageUrl" :img-alt="company.name" img-top class="mb-5 text-center mx-auto custom-card">
        <b-card-text class="my-3">
            <div class="d-flex justify-content-between">
                <span>Website</span>
                <span class="website-links">
                   <b-link :href="company.website" class="card-link" >{{company.website}}</b-link>
                </span>
            </div>
            <div class="d-flex justify-content-between">
                <span>Number of Employees</span>
                <span class="text-muted">{{company.no_of_employees}}</span>
            </div>
            <div class="d-flex justify-content-between">
                <span>Funding Stage</span>
                <span class="text-muted">{{company.funding_stage}}</span>
            </div>
        </b-card-text>
        <routerLink class="btn btn-info" :to="{name:'Company', params:{id: company._id}}">View Benefits</routerLink>
    </b-card>
</template>

<script>
export default {
    props: ['company']
}
</script>

<style scoped>
.custom-card {
    min-height: 450px;
    overflow: hidden;
}
.custom-card img {
    width: 50%;
    padding: 20px;
    margin: 0 auto;
}
.card-link {
    color: #17A2B8;
}

@media (max-width: 500px){

.custom-card {
    max-width: 100%;
}
}
</style>

