<template>
  <div>
    <div>
      <ApolloQuery
        :query="(gql) => gql`
          ${getCompany}
        `"
        :variables="{ id: $route.params.id }"
      >
        <template v-slot="{ result : { data, error, loading }}">
          <div v-if="loading"><p>Loading...</p></div>
          <div v-else-if="error">Oops! Something Went Wrong.</div>
          <div v-else-if="data">
              <HeadingWithLink :title="data.company.name+' Details'" link="Edit" :to="`/company/${$route.params.id}/update`"/>
                <!-- <pre>{{data.company}}</pre> -->
              <CompanyDetailsCard :company="data.company" />
          </div>
          <div v-else>
            <div class="d-flex justify-content-center mt-5">
              <b-spinner
                variant="info"
                size="lg"
              ></b-spinner>
            </div>
          </div>
        </template>
      </ApolloQuery>
    </div>
    <!-- <div class="d-flex flex-wrap justify-content-between align-items-center heading-section">
        <h2 class="text-info font-weight-bold font-size-lg mb-5">Closest Competitors</h2>
        <routerLink class="btn btn-info btn-lg mb-5" to="/">View More</routerLink>
    </div> -->
    <HeadingWithLink title="Closest Competitors" link="View More" :to="{name:'Competitors',params:{id:this.$route.params.id}}" />

    <div>
      <ApolloQuery
        :query="(gql) => gql`
          ${getCompetitors}
        `"
        :variables="{ id: this.$route.params.id, page: page, limit: 3 }"
      >
        <template v-slot="{ result : { data, error, loading }}">
          <div v-if="loading"><p>Loading...</p></div>
          <div v-else-if="error">Oops! Something Went Wrong.</div>
          <div v-else-if="data">
            <!-- <pre>{{data}}</pre> -->
            <b-container align-v="center" class="container">
                      <div v-if="data.competitors.companies.length === 0">
                        <h3 class="text-center">No Competitors !</h3>
                      </div>
                <div class="mt-3">
                    <b-card-group  deck class="mb-3">
                        <CompanyCompareCard v-for="company in data.competitors.companies" v-bind:key="company._id" :company="company" />
                    </b-card-group>
                </div>
             </b-container>
          </div>
          <div v-else>
            <div class="d-flex justify-content-center mt-5">
              <b-spinner
                variant="info"
                size="lg"
              ></b-spinner>
            </div>
          </div>
        </template>
      </ApolloQuery>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CompanyCompareCard from '@/components/Card/CompanyCompareCard';
import HeadingWithLink from '@/components/Heading/HeadingWithLink';
import CompanyDetailsCard from '../components/Card/CompanyDetailsCard.vue';

export default {
  data: () => ({
    page: 1,
    getCompany: `query GET_COMPANY($id: ID!){
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
    getCompetitors: `query GET_COMPETITORS($id:ID!,$page: Int!,$limit: Int!){
  competitors(id: $id,page:$page,limit:$limit){
    companies{
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
    totalCompanies
    page
  }
}`,
      
  }),
  components: {
    CompanyCompareCard,
    HeadingWithLink,
    CompanyDetailsCard
  },
  
}
</script>



<style scoped>

@media (max-width: 500px){

.heading-section {
  flex-direction: column;
}

}
</style>
<style>
.b-pagination-pills .page-item .page-link{
  color: var(--info);
}
.b-pagination-pills .page-item.active .page-link{
  color: white;
  background: var(--info);
  border: var(--info);
}

</style>