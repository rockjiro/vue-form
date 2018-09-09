// ②ライブラリを使用する
Vue.use(window.vuelidate.default);
var app = new Vue({
    el: '#app',
    data: {
        errors: [],
        name: '',
        url: '',
        email: '',
        inquiry: ''
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
    }
})