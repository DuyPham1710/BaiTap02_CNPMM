# BaiTap2 - Dual Database CRUD Application

Ứng dụng quản lý người dùng với khả năng kết nối đồng thời cả MySQL và MongoDB.

## Tính năng

- **MySQL Database**: Sử dụng Sequelize ORM
- **MongoDB Database**: Sử dụng Mongoose ODM
- **CRUD Operations**: Create, Read, Update, Delete users
- **Dual Interface**: Giao diện riêng biệt cho từng database
- **Modern UI**: Bootstrap 5 với responsive design

## Cài đặt

1. Clone repository:
```bash
git clone <repository-url>
cd BaiTap2
```

2. Cài đặt dependencies:
```bash
npm install
```

3. Cấu hình môi trường:
   - Copy `src/config/env.example` thành `.env`
   - Cập nhật thông tin kết nối database

4. Khởi động ứng dụng:
```bash
npm start
```

## Cấu hình Database

### MySQL
- Host: `DB_HOST`
- User: `DB_USER`
- Password: `DB_PASS`
- Database: `DB_NAME`

### MongoDB
- URI: `MONGO_URI`
- Format: `mongodb://localhost:27017/database_name`

## Routes

### MySQL Routes
- `GET /crud` - Form tạo user MySQL
- `POST /post-crud` - Tạo user MySQL
- `GET /get-crud` - Danh sách users MySQL
- `GET /edit-crud` - Form edit user MySQL
- `POST /put-crud` - Cập nhật user MySQL
- `GET /delete-crud` - Xóa user MySQL

### MongoDB Routes
- `GET /crud-mongo` - Form tạo user MongoDB
- `POST /post-crud-mongo` - Tạo user MongoDB
- `GET /get-crud-mongo` - Danh sách users MongoDB
- `GET /edit-crud-mongo` - Form edit user MongoDB
- `POST /put-crud-mongo` - Cập nhật user MongoDB
- `GET /delete-crud-mongo` - Xóa user MongoDB

## Cấu trúc Project

```
src/
├── config/
│   ├── configdb.js          # MySQL connection
│   ├── configMongodb.js     # MongoDB connection
│   └── viewEngine.js        # View engine configuration
├── controller/
│   └── homeController.js    # Main controller
├── models/
│   ├── index.js             # Sequelize models
│   ├── user.js              # MySQL User model
│   └── user_mongo.js        # MongoDB User model
├── services/
│   ├── CRUDService.js       # MySQL CRUD operations
│   └── CRUDMongoService.js  # MongoDB CRUD operations
├── views/
│   ├── crud.ejs             # Main CRUD form
│   ├── findAllUser.ejs      # MySQL users list
│   ├── findAllUserMongo.ejs # MongoDB users list
│   ├── editUser.ejs         # Edit MySQL user
│   └── editUserMongo.ejs    # Edit MongoDB user
└── server.js                 # Main server file
```

## Sử dụng

1. Truy cập `/crud` để xem form tạo user
2. Chọn tab MySQL hoặc MongoDB
3. Điền thông tin và submit
4. Xem danh sách users tại `/get-crud` (MySQL) hoặc `/get-crud-mongo` (MongoDB)

## Lưu ý

- Đảm bảo MySQL và MongoDB đang chạy
- Cập nhật thông tin kết nối trong file `.env`
- Ứng dụng sẽ kết nối đồng thời cả hai database khi khởi động

## Dependencies

- Express.js
- Sequelize (MySQL ORM)
- Mongoose (MongoDB ODM)
- EJS (Template engine)
- Bootstrap 5 (UI framework)
- bcrypt (Password hashing)
