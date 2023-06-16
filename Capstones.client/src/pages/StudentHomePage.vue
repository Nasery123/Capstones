<template>
    <p>
        students home page
    </p>
    <!-- NOTE student DASHBOARD  -->
    <div class="container-fluid ">
        <div class="row ">
            <div class="col-12">
                <div class="d-flex justify-content-evenly">
                    <div>
                        <button class="btn btn-primary">STUDENT</button>
                    </div>
                    <div class="btn btn-primary">TUTOR</div>
                </div>
            </div>
        </div>
        <div class="row justify-content-center py-3">
            <card class="card py-3 ">
                <div class="">
                    <div clas="col-12 justify-content-center align-items-center">

                        <h4>Search For Tutor:</h4>
                        <div class="row ">
                            <div class="justify-content-center">
                                <div class="col-12 py-1">
                                    <input type="text" placeholder="Subject">
                                </div>
                                <div class="row">
                                    <div class="col-12 py-1">
                                        <input type="text" placeholder="level of Subject">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="text-end">
                            <button class="btn btn-primary">Search</button>
                        </div>
                    </div>
                </div>
            </card>
        </div>
    </div>
    upcoming sessions cards
    <div class="row justify-content-center text-light">
        Upcoming sessions:
        <div class="row justify-content-center">
            <div class="col-md-3 col-12 card bg-light elevation-3 text-start">

                <div class="d-flex justify-content-start">
                    <img class="img-fluid profile"
                        src="https://img.freepik.com/premium-vector/cute-photographer-cartoon-illustration-people-profession-icon-concept_138676-1899.jpg"
                        alt="">
                    <p class="pt-4 ps-2">this guy</p>

                </div>



                <div class="">
                    Math/ level 100/Date(july/s/2026)
                </div>
                <div class="description">
                    Note: session description
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    setup() {
        return {}
    }
}
</script>


<style lang="scss" scoped>
</style>
