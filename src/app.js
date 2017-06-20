/*window.addEventListener('load', () => {

    window.vue  = new Vue({
    el : "#app",
    name : "JsonPage",
    post:[],
    data : {
        message : "Merhaba",

        giris : true,
        username : "Ufuk"
    },
    created()   {

        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {return res.json() })
    .then((res) => {


        })




    } //Created Bitiş.
})
}); */


window.addEventListener('load', () => {
    window.vue = new Vue({

        el: "#app",
        name: "JsonTest",
        comments:[],
        data: {
            message: "Developer",
            logged: true,
            username:"Ufuk",
            isLoading : true
        },
        created(){
            fetch("src/data.json")
                .then((res) => {return res.json()})
                .then((res) => {
                this.isLoading = false;
                  this.comments = res.comments;

                })
        } //created bitiş.


    })

});
