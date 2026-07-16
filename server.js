// 1. เรียกใช้งาน Module http
const http = require('http');

// 2. กำหนด Port
const port = process.env.PORT || 3000;

// 3. สร้าง Server
const server = http.createServer((req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    res.end(`
<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>My Web Server</title>

<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Segoe UI',Tahoma,sans-serif;
}

body{
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background:linear-gradient(135deg,#4facfe,#00f2fe);
}

.card{
    background:#fff;
    width:420px;
    padding:40px;
    border-radius:20px;
    box-shadow:0 15px 35px rgba(0,0,0,.2);
    text-align:center;
    animation:fadeIn .8s ease;
}

.avatar{
    width:100px;
    height:100px;
    border-radius:50%;
    background:#4facfe;
    color:#fff;
    font-size:42px;
    font-weight:bold;
    display:flex;
    justify-content:center;
    align-items:center;
    margin:0 auto 20px;
}

h1{
    color:#333;
    font-size:28px;
    margin-bottom:10px;
}

h2{
    color:#4facfe;
    margin-bottom:20px;
}

.info{
    text-align:left;
    margin-top:20px;
    line-height:2;
    font-size:17px;
}

.status{
    margin-top:25px;
    padding:12px;
    background:#d4edda;
    color:#155724;
    border-radius:10px;
    font-weight:bold;
}

.footer{
    margin-top:20px;
    color:#888;
    font-size:14px;
}

@keyframes fadeIn{
    from{
        opacity:0;
        transform:translateY(30px);
    }
    to{
        opacity:1;
        transform:translateY(0);
    }
}
</style>

</head>
<body>

<div class="card">

<div class="avatar">SP</div>

<h1>🚀 My Web Server</h1>

<h2>ยินดีต้อนรับ</h2>

<div class="info">
<b>👩‍🎓 ชื่อ:</b> นางสาวศรินทร์ พันธุ์ชา<br>
<b>🆔 รหัสนักศึกษา:</b> 69319010176<br>
<b>💻 สาขา:</b> เทคโนโลยีสารสนเทศ (IT)<br>
<b>🌐 Server:</b> Node.js + Railway
</div>

<div class="status">
✅ เครื่องแม่ข่ายทำงานปกติบน Railway
</div>

<div class="footer">
© 2026 Chonburi Technology College
</div>

</div>

</body>
</html>
`);
});

// 4. เปิด Server
server.listen(port, () => {
    console.log(`Server is running! เครื่องแม่ข่ายเปิดทำงานแล้วที่ช่องทาง: ${port}`);
});
