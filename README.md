ระบบการจัดการโครงการ


คุณสมบัติ :
* การจัดการงานโดยใช้บอร์ดคัมบัง
* การจัดการงานในมุมมองตาราง
* จัดการการนัดหมาย แบบปฏิทิน
* จัดการไอเดียเสนอแนวความคิด
* จัดการงานวิเคราะห์ค้นคว้า
* จัดการแผนดำการการโครงการ
* จัดการบันทึกประจำวัน
* จัดการการทบทวนงาน
* ภาพรวมโครงการทั้งหมด
* รายงาน สรุปต่างๆ
* รองรับผู้ใช้หลายคน
* ทำ Two-Factor Authentication
* เชื่อระบบภายนอก เช่น Mattermost, Slack & Zulip
* ส่งออกข้อมูลเป็นตาราง
* จัดการที่เก็บไฟล์ ด้วย AWS S3 หรือ ที่จัดเก็บภายในระบบ
* รองรับหลายภาษา ไทย อังกฤษ อื่นๆ


### การติดตั้ง แบบปกติ ###

* Download latest release package
* Create an empty MySQL database
* Upload entire directory to your server 
* Point your domain to the `public/` directory
* Rename `config/configuration.sample.php` to `config/configuration.php`
* Fill in your database credentials (username, password, host, dbname) in `config/configuration.php`
* Navigate to `<yourdomain.com>/install`
* Follow instructions to install database and set up first user account

### การติดตั้งแบบ (นักพัฒนา) ###

* Install composer and npm
* Clone repository to your local server
* Create MySQL database
* Run composer to load php dependencies
```
composer install
```
then
```
npm install
```
to load Javascript dependencies and finally run the grunt task to create the compiled js files
```
./node_modules/grunt/bin/grunt Build-All
```
* Point your local domain to the `public/` directory
* Rename `config/configuration.sample.php` to `config/configuration.php`
* Fill in your database credentials (username, password, host, dbname) in `config/configuration.php`
* Navigate to `<localdomain>/install`
* Follow instructions to install database and user account

### การปรับปรุง ###

* Make sure to take a backup of your database and files
* Replace all files in your directory with the updated version
* If there were any database changes, the system will redirect your to `<yourdomain.com>/update`
