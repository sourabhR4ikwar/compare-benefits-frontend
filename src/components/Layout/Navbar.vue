<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand><routerLink class="navbar-brand-link" to="/">CompareBenefits</routerLink></b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item href="https://compare-benefits.herokuapp.com/graphql">Test API's</b-nav-item>
                    <b-nav-item href="https://github.com/sourabhR4ikwar/compare-benefits-frontend">Github</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style scoped>
.navbar-brand-link {
    text-decoration: none;
    color: inherit;
}
</style>