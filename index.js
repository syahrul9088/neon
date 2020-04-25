const fetch = require('node-fetch');
const { URLSearchParams } = require('url');
const readline = require("readline-sync");
var randomize = require('randomatic')
var random = require('random-name')

const functionRegist = (username, email, reff) => new Promise((resolve, reject) => {
    const params = new URLSearchParams;
    params.append('email', email);
    params.append('referalId', username);
    params.append('refered_by', reff);

       fetch('https://bitfineon.com/class/ajax/main.php', { 
        method: 'POST', 
        body: params,
        headers: {
            'Host': 'bitfineon.com',
            'Connection': 'keep-alive',
            'Content-Length': 70,
            'Accept': 'application/json, text/javascript, */*; q=0.01',
            'X-Requested-With': 'XMLHttpRequest',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.122 Safari/537.36',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Origin': 'https://bitfineon.com',
            'Sec-Fetch-Site': 'same-origin',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Dest': 'empty',
            'Referer': 'https://bitfineon.com/?ref=saykhulss',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'en-US,en;q=0.9'
           }
       })
       .then(res => res.json())
       .then(result => {
           resolve(result);
       })
       .catch(err => reject(err))
   });

(async () => {
    const reff = readline.question("[?] Reff code: ")
    const jumlah = readline.question("[?] Jumlah reff: ")
    console.log("")
    for (var i = 0; i < jumlah; i++){
    try {
        const nama = random.first()
        const rand = randomize('0', 5)
        const username = `${nama}${rand}`
        const email = `${username}@gmail.com`
        const regist = await functionRegist(username, email, reff)
        console.log(`[!] Email: ${email}`)
        if (regist.response == 3){
            console.log('[+] Berhasil\n')
        } else {
            console.log('[!] Gagal!\n')
        }
    } catch (e) {
          console.log(e)
     }
    }
})()
