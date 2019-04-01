<template>
    <v-app>
    <div class="pa-5">
        razbor18
        <br/>
        is test





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
    </v-app>
</template>

<script>
    import { db } from '../main'
    export default {
        name: 'HelloWorld',
        data () {
            return {
                locations: [],
                name: '',
                image: '',




            }
        },
        // firebase () {
        //     console.log(99)
        //     return {
        //     //    books: asd
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
        },

        mounted1: function(){

            // var a = db.collection('test')
            // console.log(a)

            console.log(55)
            var testRef = db.ref('test')
            testRef.once("value")
                .then(function(snapshot) {
                    console.log(snapshot)
                    // var key = snapshot.key; // "ada"
                    // var childKey = snapshot.child("name/last").key; // "last"
                });
        },

        mounted: function () {


            // db.ref().child('a/test').push({
            //     key:"asd",
            //     a:1,
            //     b:1
            // })



            // console.log(db.ref().child('a'))
            // db.ref().child('a/test')
            //     .once('value')
            //     .then(snapshot=>{
            //         console.log(snapshot)
            //         snapshot.forEach(function(childSnapshot) {
            //
            //             console.log('----------------')
            //             console.log(childSnapshot)
            //             console.log(childSnapshot.hasChildren())
            //             console.log(childSnapshot.numChildren())
            //
            //             // var key = childSnapshot.key;
            //             // var childData = childSnapshot.val();
            //             // console.log(key)
            //             // console.log(childData)
            //             console.log('----------------')
            //         });
            //         // res.forEach((doc) => {
            //         //     // console.log(doc.id)
            //         //     console.log(doc.data())
            //         // })
            //     })
            //
            //
            //













            // console.log( db.collection('test').doc('car').get().then(res=> console.log(res)))
            //console.log( db.collection('test').doc('car').collection('hi').doc('NNd4mwHjyH7OGNK2ytSb') )

            // console.log( db.collection('test').doc('mot') )

            // db.collection('test').get()
            // .then(res=> {
            //     res.forEach((doc) => {
            //     console.log(doc.id)
            //     console.log(doc.data())
            // })
            // })
            // .catch(e=>{
            //     console.log(e)
            // })

            // db.collection('test1').get()
            //     .then(res => {
            //
            //         // console.log(res.docs)
            //
            //         res.forEach((doc) => {
            //
            //             console.log('---------------------------------------------------')
            //
            //             console.log(doc.exists)
            //             console.log(doc.id)
            //             console.log(doc.metadata)
            //             console.log(doc.ref.collection(doc.id).get().then(res1=> console.log(res1)))
            //             console.log(doc.data())
            //             // console.log(doc.get())
            //             // console.log(doc.isEqual())
            //
            //             console.log('---------------------------------------------------')
            //             // let a = db.collection('test').doc(doc.id)
            //             //
            //             // console.log(a)
            //
            //             //console.log(doc.data())
            //             //console.log(doc.ref.hasChildren())
            //
            //             // console.log(doc.ref)
            //             // doc.getCollections().then(collections => {
            //             //     for (let collection of collections) {
            //             //         console.log(`Found subcollection with id: ${collection.id}`);
            //             //     }
            //             // });
            //
            //             // console.log( )
            //             //     console.log( db.collection('test').get('car').collection.length )
            //         })
            //
            //         // db.collection('test')
            //
            //         // const values = res.docs.map(el=>{
            //         //     // console.log( db.collection('test').get('/mot'))
            //         //     return { id: el.id, ...el.data()}
            //         // })
            //         // console.table(values)
            //
            //         // res.forEach((doc) => {
            //         //     const values =
            //         //     // console.log(doc.collection(doc.id))
            //         //     // console.log(doc.id, ' => ', doc.data())
            //         // })
            //         // console.log( res)
            //     })
        }
    }
</script>
