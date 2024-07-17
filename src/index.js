const express = require('express')
const { engine } = require('express-handlebars')
const morgan = require('morgan') // Middleware để ghi lại (log) các yêu cầu HTTP.
const path = require('path') //  Module tích hợp sẵn của Node.js để làm việc với đường dẫn tệp tin và thư mục.

// Khởi tạo ứng dụng Express và cấu hình cổng:
const app = express()
const port = 3000

// Cấu hình thư mục tĩnh:
app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

// HTTP logger
app.use(morgan('combined'))

// Template engine
app.engine('hbs', engine({
    extname: 'hbs' // custom đuôi file .hbs
}))

// Thiết lập Handlebars làm công cụ template mặc định.
app.set('view engine', 'hbs')

// Đặt đường dẫn đến thư mục chứa các tệp template.
app.set('views', path.join(__dirname, 'resources/views'))
console.log(path.join(__dirname, 'resources/views'))

// Định nghĩa các route (tuyến đường):
app.get('/', (req, res) => {
    res.render('home')
})

app.get('/news', (req, res) => {
    res.render('news')
})

app.get('/search', (req, res) => {
    res.render('search')
})

// Khởi động máy chủ:
app.listen(port, () => console.log(`http://localhost:${port}`))