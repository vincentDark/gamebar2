var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //自動生成HTML
const CleanWebpackPlugin = require('clean-webpack-plugin'); //清理 /dist 文件夹
const ExtractTextPlugin = require("extract-text-webpack-plugin"); //分離檔案出來
const webpack = require('webpack'); //使用webpack
const UglifyJSPlugin = require('uglifyjs-webpack-plugin'); //縮減代碼
const pathResolve = (p) => path.resolve(__dirname, p);

module.exports = {
    entry: {
        index: './changedate.js',
    },
    devtool: 'inline-source-map',
    output: {
        filename: '[name][hash].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
                test: /\.(css|scss|sass)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(png|svg|jpg|gif|jpeg)$/,
                use: [
                    'file-loader'
                ]
            }, {
                test: /\.html$/,
                use: [
                    'html-withimg-loader'
                ]
            }
        ]
    },
    devServer: {
        contentBase: './dist',
        hot: true,
        contentBase: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true,
            chunks: ['index']
        }),
        new webpack.HotModuleReplacementPlugin(), // 启用 HMR
        new ExtractTextPlugin({
            filename: (getPath) => {
                return getPath('[name][hash].css').replace('css/js', 'css');
            },
            allChunks: true
        }),
        new UglifyJSPlugin()
    ]
}