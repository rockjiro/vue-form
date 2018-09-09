// ②ライブラリを使用する
Vue.use(window.vuelidate.default);
var app = new Vue({
    el: '#app',
    data: {
        errors: [],
        name: '',
        url: '',
        email: '',
        inquiry: '',
        postReturn: []
    },
    //③validationsプロパティが有効になる
    validations: {
        // dataプロパティに存在する値と同じ名前を指定する
        name: {
            required: validators.required
        },
        url: {
            url: validators.url
        },
        email: {
            email: validators.email,
            required: validators.required
        },
        inquiry: {
            required: validators.required
        }
    },
    methods: {
      postMessage: function(){
        let params = new URLSearchParams();
            params.append('contentId', "content");
            params.append('catgoryCode', "category");
            params.append('genreCode', "genre");
            
            axios.post('/test.php', params) // => 成功時
            .then(function (response) {
                // this.postReturn = response.data;
                console.log(response.data);
            })
            .catch(function (error) { // => 失敗時
                console.log("error");
            })
      }  
    },
    mounted: function(){
        this.postMessage();
    }
})