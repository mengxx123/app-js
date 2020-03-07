// yunser app，为所有类型的前端应用提供统一的 API
// 确保所有的代码都是框架无关的

(function (window) {

    const app = {
        version: '1.0.02',
        name: '',
        env: 'dev2',
        config: {},
        data: {},
        router: {
            push(url) {
                window.history.pushState({name: 'history'}, null, url)
                window.history.forward(1)
            },
            listen(callback) {
                window.addEventListener('popstate', e => {
                    callback && callback()
                    // console.log('popstate', e)
                    // updateApp()
        //             isTrusted: true
        // state: null
        // type: "popstate"
                    // console.log('popstate', {
                    //     location: location.href,
                    //     state: e.state
                    // })
                }, false)
            }
        },
        ui: {},
        init() {
            console.log('init')
        },
    }

    app.ui = {
        alert(text) {
            window.alert(text)
        }
    }

    // class App {
        
    // }
    
    window.yunser = {
        app,
    }
})(window)
