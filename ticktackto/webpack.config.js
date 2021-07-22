const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

module.exports = {
    // 개발할 때
    mode: 'development',

    // 개발할 때 eval 사용하면 웹팩이 build하는 속도가 빨라짐.
    // 배포시에는 hidden-source-map 사용
    devtool: 'eval',
    
    resolve: {
        // import시 .vue같은 확장자 제거 가능
        extensions:['.js','.vue']
    },

    // 스크립트를 하나로 합치는 파일
    entry: {
        // 하나로 합쳐지는 파일 이름 output으로 연결됨.
        app: path.join(__dirname, 'main.js'),
    },
    // webpack의 핵심
    // 희안한 곳 나오면 로더들이 대신처리
    module: {
        // js 파일들을 어떻게 처리할건지 정의하는 곳
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
        },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader'
                    , 'css-loader'
                ]
            }],
    },
    // output이 나오기전에 한 번 더 가공해주는 느낌 
    // 후처리 해준다는 느낌
    plugins: [new VueLoaderPlugin()],
    output: {
        // name : 위에서 app을 뜻함 알아서 들어옴
        filename: '[name].js',
        // 하나로 합쳐지는 파일의 경로 이름 수정 가능
        path: path.join(__dirname, 'dist'),
        // webpack dev server용 옵션 메모리 상에 만듬 실제 dist app.js 안 만듬
        publicPath: '/dist'

    },
}
