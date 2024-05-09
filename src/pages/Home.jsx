import React from 'react';
import logo from '../assets/bionet-logo.png'
import headimg from '../assets/header.gif'
import '../styles/home.css'
import { Link } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import Accordion from '../components/Accordion';

function Home() {
    return (
        <div className='home'>
            <div className="home-navbar w-100 d-flex align-items-center justify-content-around pt-2 pb-2">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="menu d-flex align-items-center justify-content-center gap-5">
                    <a className='text-decoration-none text-black fw-medium' href="!#">Bosh sahifa</a>
                    <a className='text-decoration-none text-black fw-medium' href="!#">Yangiliklar</a>
                    <a className='text-decoration-none text-black fw-medium' href="!#">Bionet haqida</a>
                    <a className='text-decoration-none text-black fw-medium' href="!#">Videodarslar</a>
                    <a className='text-decoration-none text-black fw-medium' href="!#">Biz bilan aloqa</a>
                </div>
            </div>
            <div className="main">
                <img src={headimg} alt="" className="w-100" />
                <div className="body d-flex w-100">
                    <div className="main-left">
                        <div className="title pt-2 pb-2 text-center">
                            <h3 className='m-0'>MAKTAB</h3>
                        </div>
                        <div className="regions d-flex flex-column w-100">
                            <div className="region">
                                <Accordion name={'Buxoro viloyati'} id={'collapseOne'}/>
                            </div>
                            <div className="region">
                                <Accordion name={'Namangan viloyati'} id={'collapseTwo'}/>
                            </div>
                            <div className="region">
                                <Accordion name={'Navoiy viloyati'} id={'collapseThree'}/>
                            </div>
                            <div className="region">
                                <Accordion name={'Andijon viloyati'} id={'collapseFour'}/>
                            </div>
                            <div className="region">
                                <Accordion name={'Toshkent viloyati'} id={'collapseFive'}/>
                            </div>
                            <div className="region">
                                <Accordion name={'Toshkent shaxri'} id={'collapseSix'}/>
                            </div>
                            <div className="region">
                                <Accordion name={'Farg`ona viloyati'} id={'collapseSeven'}/>
                            </div>
                            <div className="region">
                                <Accordion name={'Xorazm viloyati'} id={'collapseEight'}/>
                            </div>
                            <div className="region">
                                <Accordion name={'Qoraqalpog`iston Respublikasi'} id={'collapseNine'}/>
                            </div>
                            <div className="region">
                                <Accordion name={'Samarqand viloyati'} id={'collapseTen'}/>
                            </div>
                            <div className="region">
                                <Accordion name={'Sirdaryo viloyati'} id={'collapseEleven'}/>
                            </div>
                            <div className="region">
                                <Accordion name={'Jizzax viloyati'} id={'collapseJiz'}/>
                            </div>
                            <div className="region">
                                <Accordion name={'Qashqadaryo viloyati'} id={'collapseQash'}/>
                            </div>
                            <div className="region">
                                <Accordion name={'Surxondaryo viloyati'} id={'collapseSur'}/>
                            </div>
                            <div className="region">
                                <Accordion name={'Vazirlik'} id={'collapseVaz'}/>
                            </div>
                            
                            <div className="administration pt-2 pb-2 bg-danger">
                                <div className="title pt-2 pb-2 text-center">
                                    <h3 className='m-0'>XOKIMIYAT</h3>
                                </div>
                            </div>
                            <div className="region">
                                <Accordion name={'Buxoro viloyati'} id={'collapseBux'}/>
                            </div>
                            <div className="administration pt-2 pb-2 bg-danger">
                                <div className="title pt-2 pb-2 text-center">
                                    <h3 className='m-0'>OLIY TA'LIM</h3>
                                </div>
                            </div>
                            <div className="region">
                                <Accordion name={'TMI'} id={'collapseTmi'}/>
                            </div>
                        </div>
                    </div>
                    <div className="medium text-center p-3">
                        <div className="about">
                            <h3>Bionet bu qanday kompaniya ?</h3>
                            <p className='text-start'><b>Bionet</b> – bu ta’lim tizimi, sog’liqni saqlash tizimi va boshqa sohalar uchun turli xildagi dasturlar yaratuvchi jamoa. Jamoa 2015-yilda Buxoro shaxrida tashkil  topdi. Qisqa fursatlarda jamoa o’zining Biometrik loyihasini yaratdi va uni Buxoro viloyati va Andijon viloyatiga kasb-hunar kollejlari va akademik litseylariga o’rnatdi. Jamoa bundan tashqari yana bir necha muvaffaqiyatli loyihalar muallifi hamdir.</p>
                        </div>
                        <div className="service">
                            <h3>Bionet kompaniyasi quyidagi xizmatlarni amalga oshiradi.</h3>
                            <ul className='text-start'>
                                <li>Barmoq izi va Yuz tuzulishiga asoslangan Biometrik elektron nazorat tizimi</li>
                                <li>Web saytlar yaratish. Ta’lim sohasi, deputatlar, davlat tashkilotlari, firma va korxonalar tashkilotlar uchun turli xildagi web saytlar yaratib berish</li>
                                <li>Dasturiy ta’minot. Aniq bir Texnik topshiriq asosida tashkilotlar uchun dasturlar yaratib berish.</li>
                                <li>Tizimlarni avtomatlashtirish</li>
                                <li>Billing tizimlari yaratish</li>
                                <li>Davlat tashkilotlari o’rtasida ma’lumot almashishning yangi CLOUD bosqichida tezkor va xavfsiz ma’lumot almashish tizimi yaratish(Internet orqali tashkilotlarni birlashtirish)</li>
                            </ul>
                        </div>
                        <div className="bio-system">
                            <h3>Biometrik tizim asosiy komponentlari </h3>
                            <ul className='text-start'>
                                <li>Elektron davomat tizimi. Bunda o’quvchi ta’lim muassasasiga kelgan paytida eshik oldida o’rnatilgan apparatga barmoq izini tekkizib ketishi kifoya. 1-1.5 sekundda 1ta o’quvchini o’tkazish tezligiga ega. Bu esa 15-20 minutda 1000ta o’quvchi kiradi deganidir…..</li>
                                <li>Elektron dars jadvali tizimi. Bunda ta’lim muassasasi mas’ul xodimlari tomonidan kiritib qo’yiladigan dars jadvali. Dars jadvali kiritish jarayonida tizim aynan o’sha soatda guruhda dars yo’qligini, o’qituvchiga dars yo’qligini, dars soatlar soni tugamaganligini tekshiradi va parallel darslar bo’lmasigini maksimum ta’minlaydi. Bundan tashqari tizimda sur’at va maxraj haftalar funksiyasi ham mavjud. O’qituvchilar bazasi electron kadr tizimidan olinadi</li>
                                <li>Elektron jurnal tizimi. Elektron dars jadvali orqali qaysidir guruhga dars qo’yilgandan so’ng ushbu tizim o’sha guruhga baho qo’yishga ruxsat beradi. Bunda xuddi sinf qog’oz jurnali kabi o’quvchilar tablitsa ko’rinishida turadi va oldida baho qo’yish uchun soha mavjud bo’ladi. Agarda talaba apparatga barmoq bosmagan bo’lsa ya’ni kelmagan holatda soxta baho qo’yishga ruxsat bermaydi. Har bir o’qituvchi o’z login paroli bilan telefonidagi dasturdan yoki kompyuterdan kirib ko’rganida bugungi dars jadvali ko’rinib turadi.</li>
                                <li>Elektron kadrlar bo’limi tizimi. Bunda muassasaning kadrlar bo’limi mutahasisi barcha kadrlar haqidagi ma’lumotni electron ob’ektivka ko’rinishida kiritadi. Bu esa o’z navbatida tizimdan istalgan payt o’sha o’qituvchi qaysi ta’lim muassasasida qaysi lavozimda ishlayotganini oson izlab toppish imkonini beradi. Elektron jurnalga ham aynan shu tizim orqali qo’shilgan o’qituvchilarga kirishga ruxsat beriladi.</li>
                                <li>Elektron ishga joylashtirish – kasb-hunar kollejlari va maktablarning 10-11-sinfni o’qiyotganlar uchun  tizim. Bunda bitiruvchining barcha ma’lumotlari yagona onlayn baza qilinadi. Bunda <br />
                                    1. Bitiruvchi haqida ma’lumot <br />
                                    2. Bitiruvchining kredit olgan yoki olmaganligi haqida ma’lumot <br />
                                    3. Bitiruvchining ishga joylashgan yoki joylashmaganligi haqida ma’lumot <br />
                                    4. Ta’lim muassasasidagi barcha kreditchilar, bitiruvchilar va ishga joylashganlarning umumiy statistikasi.</li>
                                <li>Masofadan o’qitish tizimi – Biz bilamizki ko’pchilik yoshlar uyda qolganida, darsga kelmay qolganida yoki kasal bo’lganida darsni o’zlashtirolmay qoladi va uyida internetda turli xildagi bekorchi narsalarga kiradi. Bionet shularni hisobga olgan holda masofadan o’qitish tizimini ham ishlab chiqmoqda. Tizim sentabrdan BETA versiyada ish boshlaydi</li>
                            </ul>
                        </div>
                        <div className="system">
                            <h3>Tizim qayerlarga o’rnatilishi mumkin?</h3>
                            <ul className="text-start">
                                <li>Kasb-hunar kollejlari va akademik litseylarga</li>
                                <li>Maktablarga</li>
                                <li>Oliy ta’lim muassasalariga</li>
                                <li>Xarbiy bilim yurtlariga</li>
                                <li>Korxona va tashkilotlarga</li>
                            </ul>
                            <a className='text-decoration-none mt-4 ms-4 fw-bold' href="https://bionet.uz/files/BIONET%20Elektron%20nazorat%20tizimi%20haqida%20qisqacha.pptx">Prezentatsiya.pptx</a>
                        </div>
                    </div>
                    <div className="main-right">
                        <div className="title pt-2 pb-2 text-center">
                            <h3 className='m-0'>KOLLEJ</h3>
                        </div>
                        <div className="regions d-flex flex-column w-100">
                        <div className="region">
                                <Accordion name={'Buxoro viloyati'} id={'collapseBir'}/>
                            </div>
                            <div className="region">
                                <Accordion name={'Namangan viloyati'} id={'collapseIkki'}/>
                            </div>
                            <div className="region">
                                <Accordion name={'Navoiy viloyati'} id={'collapseUch'}/>
                            </div>
                            <div className="region">
                                <Accordion name={'Andijon viloyati'} id={'collapseTort'}/>
                            </div>
                            <div className="region">
                                <Accordion name={'Toshkent viloyati'} id={'collapseBesh'}/>
                            </div>
                            <div className="region">
                                <Accordion name={'Toshkent shaxri'} id={'collapseOlti'}/>
                            </div>
                            <div className="region">
                                <Accordion name={'Farg`ona viloyati'} id={'collapseYetti'}/>
                            </div>
                            <div className="region">
                                <Accordion name={'Xorazm viloyati'} id={'collapseSakkiz'}/>
                            </div>
                            <div className="region">
                                <Accordion name={'Qoraqalpog`iston Respublikasi'} id={'collapseToqqiz'}/>
                            </div>
                            <div className="region">
                                <Accordion name={'Samarqand viloyati'} id={'collapseOn'}/>
                            </div>
                            <div className="region">
                                <Accordion name={'Sirdaryo viloyati'} id={'collapseOnbir'}/>
                            </div>
                            <div className="region">
                                <Accordion name={'Jizzax viloyati'} id={'collapseOnikki'}/>
                            </div>
                            <div className="region">
                                <Accordion name={'Qashqadaryo viloyati'} id={'collapseOnuch'}/>
                            </div>
                            <div className="region">
                                <Accordion name={'Surxondaryo viloyati'} id={'collapseOntort'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;