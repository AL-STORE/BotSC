const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'support',
  description: 'Support command',
  options: [
    {
      name: 'parameters',
      description: 'Parameters',
      type: 'STRING',
      required: true,
      choices: [
        { name: 'startup', value: 'startup' },
        { name: 'version', value: 'version' },
        { name: 'map', value: 'map' },
        { name: 'egg', value: 'egg' },
        { name: 'server icon', value: 'server icon' },
        { name: 'perpanjang', value: 'perpanjang' },
        { name: 'resourcepack', value: 'resourcepack' },
        { name: 'crack', value: 'crack' },
        { name: 'sftp', value: 'sftp' },
      ],
    },
  ],
  execute: async (interaction) => {
    const parameter = interaction.options.getString('parameters');

    let embed;

 const footer = {
     text: 'AL Store Team', 
     iconURL:'https://cdn.discordapp.com/attachments/1109801358149828648/1126031929792282654/image_FlJ2OsYf_1688534516702_512.jpg' 
 };

    if (parameter === 'startup') {
      embed = new MessageEmbed()
        .setTitle('Cara Mengganti Startup')
        .setDescription('Jika Kamu Ingin mengganti startup. Kamu bisa ke **custom startup** dan menambah startup seperti aikar flags')
        .setColor('#483d8b')
        .setImage('https://ibb.co/nDKjwrs')
        .setFooter({ text: footer.text, iconURL: footer.iconURL })
        .setTimestamp();
    } else if (parameter === 'version') {
      embed = new MessageEmbed()
        .setTitle('Cara Mengganti Versi')
        .setDescription('Kamu bisa ke **startup** lalu ganti versi yang kamu inginkan, dan jangan lupa untuk mengganti **javanya sesuai versi minecraftnya**. Setelah di ubah kamu **bisa ke settings untuk reinstall** servermu')
        .setImage('https://ibb.co/m4zjb4h')
        .setColor('#483d8b')
        .setFooter({ text: footer.text, iconURL: footer.iconURL })
        .setTimestamp();
    } else if (parameter === 'map') {
      embed = new MessageEmbed()
        .setTitle('Cara Ganti Map')
        .setDescription('Kamu bisa terlebih dahulu menghapus folder **world**. \nSetelah Itu kamu upload mapnya, lalu di ekstrak dan ubah namanya menjadi **world**\n\nJika sudah, kamu bisa **restart/start**')
        .addFields({ name: 'Path', value: '```https://panel.alstore.space/server/(id)/files/```'})
        .setImage('https://ibb.co/d7RMSQm')
        .setColor('#483d8b')
        .setFooter({ text: footer.text, iconURL: footer.iconURL })
        .setTimestamp();
    } else if (parameter === 'egg') {
      embed = new MessageEmbed()
        .setTitle('Cara Ganti Egg')
        .setDescription('Kamu bisa cari menu **EggChanger** di sidebar\n\nJika sudah ketemu bisa di pilih **eggs** yang mau di ganti. Setelah di ganti kamu dapat **start** servernya setelah di ganti!\n\n**Jika tidak ada eggnya bisa lapor ke staff yang online**')
        .addFields({ name: 'Path', value: '```https://panel.alstore.space/server/(id)/eggs```'})
        .setImage('https://ibb.co/JzJSNxY')
        .setColor('#483d8b')
        .setFooter({ text: footer.text, iconURL: footer.iconURL })
        .setTimestamp();
    } else if (parameter === 'server icon') {
      embed = new MessageEmbed()
        .setTitle('Cara Ubah Server Icon')
        .setDescription('Pastikan iconnya berukuran **64x64 pixels**. Kamu dapat mengubahnya di web berikut  https://www.simpleimageresizer.com \n\nJika sudah rename iconnya menjadi **server-icon.png** lalu upload ke file server')
        .setImage('https://ibb.co/gSTw3SL')
        .setColor('#483d8b')
        .setFooter({ text: footer.text, iconURL: footer.iconURL })
        .setTimestamp();
    } else if (parameter === 'perpanjang') {
      embed = new MessageEmbed()
        .setTitle('Cara Memperpanjang Server')
        .setDescription('Kamu bisa ke **My Plans/Layanan Saya**, lalu scroll ke bawah dan klick **renew plans**  untuk memperpanjang')
        .addFields({ name: 'Path', value: '```https://panel.alstore.space/billing/my-plans```'})
        .setImage('https://ibb.co/DCmkBYD')
        .setColor('#483d8b')
        .setFooter({ text: footer.text, iconURL: footer.iconURL })
        .setTimestamp();
    } else if (parameter === 'resourcepack') {
      embed = new MessageEmbed()
        .setTitle('Resource Pack Servers')
        .setDescription('kamu bisa pergi ke **files** lalu scroll ke bawah dan cari **server.properties** lalu click dan cari **resource-pack=** , dan masukan link resourcepack nya disana, untuk mendapatkannya kalian bisa upload ke google drive/mediafire buat linknya')
        .setImage('https://ibb.co/34WVhJ5')
        .addFields({ name: 'Path', value: '```https://panel.alstore.space/server/(id)/files/edit#/server.properties```'})
        .setColor('#483d8b')
        .setFooter({ text: footer.text, iconURL: footer.iconURL })
        .setTimestamp();
    } else if (parameter === 'crack') {
      embed = new MessageEmbed()
        .setTitle('Crack Server')
        .setDescription('Kamu bisa ke menu file, lalu cari dan buka file yang bernama **server.properties**. Setelah itu cari **online-mode=true**, ubah yang awalnya **true** menjadi **false**. Setelah itu tinggal di **start/restart** servernya')
        .setImage('https://ibb.co/zbR87zb')
        .addFields({ name: 'Path', value: '```https://panel.alstore.space/server/(id)/files/edit#/server.properties```'})
        .setColor('#483d8b')
        .setFooter({ text: footer.text, iconURL: footer.iconURL })
        .setTimestamp();
    } else if (parameter === 'sftp') {
      embed = new MessageEmbed()
        .setTitle('Penggunaan SFTP')
        .addFields({ name: 'Cara 1',
                     value: '- Masuk ke menu SFTP yang berada dimenu sebelah kiri \n- masukkan hostname , username , password, dan port yang sesuai dengan informasi yang diberikan pada bagian settings/pengaturan di server. tepatnya bagian **SFTP DETAILS**\n\n1. Untuk Hostname sesuaikan dengan server address tetapi hanya bagian domainnya saja, contoh : `sftp://premium4.alstore.space:2022` menjadi `premium4.alstore.space`\n2. Untuk Username, bisa tinggal copy sesuai di SFTP DETAILS\n3. Untuk Password , bisa disesuaikan dengan password akun panel Kamu\n4. Untuk Port , bisa menggunakan port `2022`'},
                   { name: 'Cara 2',
                     value: '- Kamu bisa menggunakan software SFTP seperti filezilla, winSCP, ataupun lainnya\n- Masuk ke menu settings/pengaturan di server\n- Klik pada tombol **Launch SFTP** , maka akan muncul pop up dan klik saja pada tombol yang berwarna merah. seperti `open Filezilla,WinSCP`\n- maka akan otomatis terbuka aplikasi nya, lalu kamu bisa memasukkan password sesuai dengan password akun kamu'}
                  )
        .setImage('https://ibb.co/qjK30hv')
        .setColor('#483d8b')
        .setFooter({ text: footer.text, iconURL: footer.iconURL })
        .setTimestamp();
    } else {
      embed = new MessageEmbed()
        .setTitle('Support Command - Error')
        .setDescription('Invalid parameter')
        .setColor('#FF0000')
        .setFooter('AL Store Team', footer.iconURL)
        .setTimestamp();
    }

    await interaction.reply({ embeds: [embed] }).catch(console.error);
  },
};
