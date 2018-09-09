var app = new Vue({
    el: '#app',
    data: {
        errors: [],
        name: '',
        url: '',
        email: '',
        inquiry: ''
    },
    methods: {
        checkForm: function(e){
            this.errors = [];

            if(!this.name){
                this.errors.push("お名前は必須です。");   
            }

            if(!this.validUrl(this.url)) {
                this.errors.push("無効なURLです。");
            }

            if(!this.email){
                this.errors.push("メールアドレスは必須です。");
            } else if (!this.validEmail(this.email)) {
                this.errors.push("無効なメールアドレスです。");
            }

            if(!this.inquiry){
                this.errors.push("お問い合わせ内容は必須です。");   
            }
            
            //エラーがあれば、処理を中断する
            if(!this.errors.length){
                // return true;
                e.preventDefault();
            }else{
                e.preventDefault();
            }
        },
        validEmail: function (email) {
            let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return pattern.test(email);
        },
        validUrl: function (url) {
            let pattern = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
            return pattern.test(url);
        }
    }
})