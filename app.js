const express = require('express');
const QRCode = require('qrcode');
const os = require('os');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Fungsi ambil IP Lokal
function getLocalIP() {
    const interfaces = os.networkInterfaces();
    for (let devName in interfaces) {
        const iface = interfaces[devName];
        for (let i = 0; i < iface.length; i++) {
            const alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                return alias.address;
            }
        }
    }
    return '0.0.0.0';
}

// API untuk Generate QR
app.post('/generate', async (req, res) => {
    try {
        const { type, value, color } = req.body;
        let payload = value;

        // Logic formatting data
        if (type === 'wa') payload = `https://wa.me/${value.replace(/\D/g,'')}`;
        if (type === 'wifi') payload = `WIFI:S:${req.body.ssid};T:WPA;P:${req.body.pwd};;`;
        
        const qrImage = await QRCode.toDataURL(payload, {
            color: {
                dark: color || '#000000',
                light: '#ffffff'
            },
            margin: 2
        });
        
        res.json({ success: true, qr: qrImage });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`\n[+] SPY-QR Portal (Node.js) is LIVE!`);
    console.log(`[+] Local: http://localhost:${PORT}`);
    console.log(`[+] Network: http://${getLocalIP()}:${PORT}\n`);
});
