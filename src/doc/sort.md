# Thứ tự hoạt động của tính năng sắp xếp

1. Browser gửi request.
2. Express router định tuyến request đến controller.
3. Controller `MeController.js` xử lý request.
4. Custom query helper `sortable` trong `course.js` sắp xếp dữ liệu.
5. Truy vấn dữ liệu từ MongoDB.
6. Controller nhận dữ liệu và render view.
7. Handlebars view sử dụng helper `sortable` để tạo liên kết sắp xếp.
8. HTML được gửi về trình duyệt và hiển thị cho người dùng.
