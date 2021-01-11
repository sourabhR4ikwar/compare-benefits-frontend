<template>
  <div>
    <HeadingWithLink title="Recent Companies" link="Submit Your Company" to="/register/user" />
    <div>
      <ApolloQuery
        :query="(gql) => gql`
          ${getCompaniesQuery}
        `"
        :variables="{ currentPage: page }"
      >
        <template v-slot="{ result : { data, error, loading }}">
          <div v-if="loading"><p>Loading...</p></div>
          <div v-else-if="error">Oops! Something Went Wrong.</div>
          <div v-else-if="data">
            <div class="row">
              <b-card-group>
                <div class="col-md-4 col-sm-12 col-xs-12 mx-auto card-container" v-for="company in data.companies.companies" v-bind:key="company._id" >
                  <CompanyOverviewCard :company="company" />
                </div>
              </b-card-group>
            </div>
            <div class="d-flex justify-content-center mt-5">
              <b-pagination v-model="page" pills :total-rows="data.companies.totalCompanies"></b-pagination>
            </div>
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
import CompanyOverviewCard from '@/components/Card/CompanyOverviewCard';
import HeadingWithLink from '@/components/Heading/HeadingWithLink';

export default {
  
  data: () => ({
    page: 1,
    getCompaniesQuery: `query getCompanies($currentPage: Int!){
          companies(page:$currentPage){
            companies{
              _id
              name
              imageUrl
              website
              no_of_employees
              funding_stage
              industry
            }
            page
            totalCompanies
          }
        }`,
      
  }),
  watch:{
    page(){
      window.scrollTo(0,0);
    }
  },
  components: {
    CompanyOverviewCard,
    HeadingWithLink
  },
  
}
</script>



<style scoped>

@media (max-width: 500px){

.heading-section {
  flex-direction: column;
}
.card-container {
  box-sizing: border-box;
  max-width: 100%;
}
.card-group {
      box-sizing: border-box;
    width: 100%;
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