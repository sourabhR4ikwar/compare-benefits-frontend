<template>
    <div>
        <HeadingWithLink title="Closest Competitors" link="Go Back to Details" :to="{name: 'Company', params:{id:this.$route.params.id}}" />
        <ApolloQuery
            :query="(gql) => gql`
            ${getCompetitors}
            `"
            :variables="{ id: this.$route.params.id, page: page, limit: 6 }"
        >
            <template v-slot="{ result : { data, error, loading }}">
            <div v-if="loading"><p>Loading...</p></div>
            <div v-else-if="error">Oops! Something Went Wrong.</div>
            <div v-else-if="data">
                <!-- <pre>{{data}}</pre> -->
                <div class="mt-3">
                    <div class="row">
                        <b-card-group  deck>
                            <div class="col-md-4" v-for="company in data.competitors.companies" v-bind:key="company._id">
                                <CompanyCompareCard  :company="company" />
                            </div>
                        </b-card-group>
                    </div>
                </div>
                <div class="d-flex justify-content-center mt-5">
                    <b-pagination v-model="page" pills :total-rows="data.competitors.totalCompanies" size="lg"></b-pagination>
                </div>
            </div>
            <div v-else>No Results</div>
            </template>
        </ApolloQuery>
    </div>
</template>

<script>
import HeadingWithLink from '@/components/Heading/HeadingWithLink';
import CompanyCompareCard from '@/components/Card/CompanyCompareCard';

export default {
 data: () => ({
    page: 1,
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
    HeadingWithLink
  },
  
}

</script>

<style>

</style>