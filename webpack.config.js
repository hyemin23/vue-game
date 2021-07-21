module.exports = {
    // 스크립트를 하나로 합치는 파일
    entry: {
        // 하나로 합쳐지는 파일 이름 output으로 연결됨.
        app: './main.js',
    },
    // webpack의 핵심
    module: {
        rules: []
    },
    plugin: [],
    output: {
        // name : 위에서 app을 뜻함 알아서 들어옴
        filename: '[name].js',
        // 하나로 합쳐지는 파일의 경로 이름 수정 가능
        path: './dist',
    },
}
