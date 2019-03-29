<template>
    <div>
        909
        <!--{{books}}-->
        <!--<article v-for="(location, idx) in locations" :key="idx">-->
            <!--<img :src="location.image" width="300px">-->
            <!--<h1>{{ location.name }}</h1>-->
            <!--<button class="button is-small is-danger" @click="deleteLocation(location.id)">-->
                <!--Delete-->
            <!--</button>-->
        <!--</article>-->

        <!--<hr>-->

        <!--<form @submit="addLocation(name, image)">-->
            <!--<h2>Add a New Location</h2>-->
            <!--<input v-model="name" placeholder="Location Name" class="input">-->
            <!--<input v-model="image" placeholder="Location Image URL" class="input">-->
            <!--<button type="submit" class="button is-success">Add New Location</button>-->
        <!--</form>-->
    </div>
</template>

<script>

    // import { db, asd } from '../main'
    export default {
        name: 'HelloWorld',
        data () {
            return {
                locations: [],
                name: '',
                image: ''
            }
        },
        // firebase () {
        //     return {
        //         books: asd
        //     }
        // },
        // firestore () {
        //     return {
        //         locations: db.collection('locations')
        //     }
        // },
        methods: {
            // addLocation (name, image) {
            //     db.collection('locations').add({ name, image })
            // },
            // deleteLocation (id) {
            //     db.collection('locations').doc(id).delete()
            // }
        }
    }
</script>
