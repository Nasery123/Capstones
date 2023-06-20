<template>
    <p>
        tutore home page
    </p>
    STUB TUTOR DASHBOARD PAGE -->
    <section class="container-fluid">
        <dev class="row py-2">
            <div class=" d-flex justify-content-evenly">
                <button class="btn btn-info"> Student</button>
                <button class="btn btn-success">Tutor</button>
            </div>
            <div class="d-flex justify-content-center mt-3">
                <card class="card border-light bg-dark d-flex">
                    <p>Pending requests: (requests count here)</p>
                </card>
            </div>
        </dev>
    </section>


    <!-- //NOTE - pending / upcoming request cards for tutor dashboard -->
    <section class="container-fluid">
        <div class="row py-2 justify-content-center m-1">
            <div class="card">
                <div class="d-flex pt-2">
                    <img class="img-fluid profile"
                        src="https://img.freepik.com/premium-vector/cute-photographer-cartoon-illustration-people-profession-icon-concept_138676-1899.jpg"
                        alt="">
                    <div class="flex-column">
                        <p>Student Name</p>
                        <p>School</p>
                    </div>
                </div>
                <div>
                </div>
                <div>
                    <p>subject</p>
                    <p>description</p>
                </div>
            </div>
        </div>
    </section>

    <section class="container-fluid">
        <dev class="row py-2">
            <div class="d-flex justify-content-center mt-3">
                <card class="card border-light bg-dark d-flex">
                    <p>Upcoming requests: (upcoming count here)</p>
                </card>
            </div>
        </dev>
    </section>

    <section class="container-fluid">
        <div class="row py-2 justify-content-center m-1">
            <div class="card">
                <div class="d-flex pt-2">
                    <img class="img-fluid profile"
                        src="https://img.freepik.com/premium-vector/cute-photographer-cartoon-illustration-people-profession-icon-concept_138676-1899.jpg"
                        alt="">
                    <div class="flex-column">
                        <p>Student Name</p>
                        <p>School</p>
                    </div>
                </div>
                <div>
                </div>
                <div>
                    <p>subject</p>
                    <p>description</p>
                </div>
            </div>
        </div>
    </section>
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
