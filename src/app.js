window.addEventListener('load', () => {
    window.vue = new Vue({
        el: "#app",
        data: {
            commentsData:[],
            message: "Developer",
            username:"Ufuk",
            isLoading : true
        },
        created(){
                fetch("src/data.json")
                    .then((res) => {return res.json()})
                    .then((res) => {
                        this.isLoading = false;
                        this.commentsData = res.comments;
                    })
        } //created bitiş.


    })

});
