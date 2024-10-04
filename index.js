

const timeselect1 = document.getElementById('timeselect1');
const timeselect2 = document.getElementById('timeselect2');
const mainbox = document.getElementsByClassName('mainbox');
const search = document.getElementById('search');
const test = document.getElementById('test');
const dateselect = document.getElementById('dateselect');
const timevals = document.getElementsByClassName('timevals');
const colours = document.getElementsByClassName('colours')
const texts = document.getElementsByClassName('texts')

let filehandle;

const date = new Date();
let day = date.getDay();

const time = new Date();
let timer = time.getMinutes();

const time2 = new Date();
let hour = time2.getHours();

let counter = 1;

    function values(){
    var x = timeselect1.value;
    var y = timeselect2.value;

    var day = dateselect.value;

    if (y - x <= 0){
        one.style.width = "0px"
        one.style.height = "0px"
    }

   if (y - x == 1) {
     one.style.width = "62.5px"
     one.style.height = "50px"
     one.style.top = "1000px"
     
    
}
if (y - x == 2) {
     one.style.width = "129px"
     one.style.height = "50px"
    
}
if (y - x == 3) {
     one.style.width = "192.5px"
     one.style.height = "50px"
    
}
if (y - x == 4) {
     one.style.width = "260px"
     one.style.height = "50px"
    
}
if (y - x == 5) {
     one.style.width = "327.5px"
     one.style.height = "50px"
    
}
if (y - x == 6) {
     one.style.width = "390px"
     one.style.height = "50px"
    
}
if (y - x == 7) {
     one.style.width = "457.5px"
     one.style.height = "50px"
    
}
if (y - x == 8) {
     one.style.width = "520px"
     one.style.height = "50px"
    
}
if (y - x == 9) {
     one.style.width = "582.5px"
     one.style.height = "50px"
    
}
if (y - x == 10) {
     one.style.width = "650px"
     one.style.height = "50px"
    
}
if (y - x == 11) {
     one.style.width = "707.5px"
     one.style.height = "50px"
    
}
if (y - x == 12) {
     one.style.width = "780px"
     one.style.height = "50px"
    
}
if (y - x == 13) {
     one.style.width = "842.5px"
     one.style.height = "50px"
    
}
if (y - x == 14) {
     one.style.width = "910px"
     one.style.height = "50px"
    
}
if (x == 9){
    one.style.left = "132.5px"
}
if (x == 10){
    one.style.left = "193px"
}
if (x == 11){
    one.style.left = "257.5px"
}
if (x == 12){
    one.style.left = "324px"
}
if (x == 13){
    one.style.left = "387.5px"
}
if (x == 14){
    one.style.left = "455px"
}
if (x == 15){
    one.style.left = "517.5px"
}
if (x == 16){
    one.style.left = "585px"
}
if (x == 17){
    one.style.left = "647.5px"
}
if (x == 18){
    one.style.left = "712.5px"
}
if (x == 19){
    one.style.left = "777.5px"
}
if (x == 20){
    one.style.left = "844px"
}
if (x == 21){
    one.style.left = "907.5px"
}


if (day == "1"){
    one.style.top = "260px"
}
if (day == "2"){
    one.style.top = "315px"
}
if (day == "3"){
    one.style.top = "370px"
}
if (day == "4"){
    one.style.top = "425px"
}
if (day == "5"){
    one.style.top = "480px"
}
if (day == "6"){
    one.style.top = "535px"
}
if (day == "7"){
    one.style.top = "590px"
}

    }

function enter(){
    if (timeselect2.value > 8){
        timeselect1.value = 8
        timeselect2.value = 8
        dateselect.value = 1  
    }
 
    counter = counter + 1;
    console.log(counter);
}

function gettime(){
    if (counter == 1){
        values(one = document.getElementById('timeval'))
        document.getElementById('colour').style.zIndex = "2"
        document.getElementById('timeval').style.backgroundColor = document.getElementById('colour').value
        document.getElementById('text').style.zIndex = "2"
        document.getElementById('timeval').textContent = document.getElementById('text').value
    }
    else if (counter == 2){
        values(one = document.getElementById('timeval2'))
        document.getElementById('colour2').style.zIndex = "2"
        document.getElementById('timeval2').style.backgroundColor = document.getElementById('colour2').value
        document.getElementById('text2').style.zIndex = "2"
        document.getElementById('timeval2').textContent = document.getElementById('text2').value
    }
    else if (counter == 3){
        values(one = document.getElementById('timeval3'))
        document.getElementById('colour3').style.zIndex = "2"
        document.getElementById('timeval3').style.backgroundColor = document.getElementById('colour3').value
        document.getElementById('text3').style.zIndex = "2"
        document.getElementById('timeval3').textContent = document.getElementById('text3').value
    }
    else if (counter == 4){
        values(one = document.getElementById('timeval4'))
        document.getElementById('colour4').style.zIndex = "2"
        document.getElementById('timeval4').style.backgroundColor = document.getElementById('colour4').value
        document.getElementById('text4').style.zIndex = "2"
        document.getElementById('timeval4').textContent = document.getElementById('text4').value
    }
    else if (counter == 5){
        values(one = document.getElementById('timeval5'))
        document.getElementById('colour5').style.zIndex = "2"
        document.getElementById('timeval5').style.backgroundColor = document.getElementById('colour5').value
        document.getElementById('text5').style.zIndex = "2"
        document.getElementById('timeval5').textContent = document.getElementById('text5').value
    }
    else if (counter == 6){
        values(one = document.getElementById('timeval6'))
        document.getElementById('colour6').style.zIndex = "2"
        document.getElementById('timeval6').style.backgroundColor = document.getElementById('colour6').value
        document.getElementById('text6').style.zIndex = "2"
        document.getElementById('timeval6').textContent = document.getElementById('text6').value
    }
    else if (counter == 7){
        values(one = document.getElementById('timeval7'))
        document.getElementById('colour7').style.zIndex = "2"
        document.getElementById('timeval7').style.backgroundColor = document.getElementById('colour7').value
        document.getElementById('text7').style.zIndex = "2"
        document.getElementById('timeval7').textContent = document.getElementById('text7').value
    }
    else if (counter == 8){
        values(one = document.getElementById('timeval8'))
        document.getElementById('colour8').style.zIndex = "2"
        document.getElementById('timeval8').style.backgroundColor = document.getElementById('colour8').value
        document.getElementById('text8').style.zIndex = "2"
        document.getElementById('timeval8').textContent = document.getElementById('text8').value
    }
    else if (counter == 9){
        values(one = document.getElementById('timeval9'))
        document.getElementById('colour9').style.zIndex = "2"
        document.getElementById('timeval9').style.backgroundColor = document.getElementById('colour9').value
        document.getElementById('text9').style.zIndex = "2"
        document.getElementById('timeval9').textContent = document.getElementById('text9').value
    }
    else if (counter == 10){
        values(one = document.getElementById('timeval10'))
        document.getElementById('colour10').style.zIndex = "2"
        document.getElementById('timeval10').style.backgroundColor = document.getElementById('colour10').value
        document.getElementById('text10').style.zIndex = "2"
        document.getElementById('timeval10').textContent = document.getElementById('text10').value
    }
    else if (counter == 11){
        values(one = document.getElementById('timeval11'))
        document.getElementById('colour11').style.zIndex = "2"
        document.getElementById('timeval11').style.backgroundColor = document.getElementById('colour11').value
        document.getElementById('text11').style.zIndex = "2"
        document.getElementById('timeval11').textContent = document.getElementById('text11').value
    }
    else if (counter == 12){
        values(one = document.getElementById('timeval12'))
        document.getElementById('colour12').style.zIndex = "2"
        document.getElementById('timeval12').style.backgroundColor = document.getElementById('colour12').value
        document.getElementById('text12').style.zIndex = "2"
        document.getElementById('timeval12').textContent = document.getElementById('text12').value
    }
    else if (counter == 13){
        values(one = document.getElementById('timeval13'))
        document.getElementById('colour13').style.zIndex = "2"
        document.getElementById('timeval13').style.backgroundColor = document.getElementById('colour13').value
        document.getElementById('text13').style.zIndex = "2"
        document.getElementById('timeval13').textContent = document.getElementById('text13').value
    }
    else if (counter == 14){
        values(one = document.getElementById('timeval14'))
        document.getElementById('colour14').style.zIndex = "2"
        document.getElementById('timeval14').style.backgroundColor = document.getElementById('colour14').value
        document.getElementById('text14').style.zIndex = "2"
        document.getElementById('timeval14').textContent = document.getElementById('text14').value
    }
    else if (counter == 15){
        values(one = document.getElementById('timeval15'))
        document.getElementById('colour15').style.zIndex = "2"
        document.getElementById('timeval15').style.backgroundColor = document.getElementById('colour15').value
        document.getElementById('text15').style.zIndex = "2"
        document.getElementById('timeval15').textContent = document.getElementById('text15').value
    }
    else if (counter == 16){
        values(one = document.getElementById('timeval16'))
        document.getElementById('colour16').style.zIndex = "2"
        document.getElementById('timeval16').style.backgroundColor = document.getElementById('colour16').value
        document.getElementById('text16').style.zIndex = "2"
        document.getElementById('timeval16').textContent = document.getElementById('text16').value
    }
    else if (counter == 17){
        values(one = document.getElementById('timeval17'))
        document.getElementById('colour17').style.zIndex = "2"
        document.getElementById('timeval17').style.backgroundColor = document.getElementById('colour17').value
        document.getElementById('text17').style.zIndex = "2"
        document.getElementById('timeval17').textContent = document.getElementById('text17').value
    }
    else if (counter == 18){
        values(one = document.getElementById('timeval18'))
        document.getElementById('colour18').style.zIndex = "2"
        document.getElementById('timeval18').style.backgroundColor = document.getElementById('colour18').value
        document.getElementById('text18').style.zIndex = "2"
        document.getElementById('timeval18').textContent = document.getElementById('text18').value
    }
    else if (counter == 19){
        values(one = document.getElementById('timeval19'))
        document.getElementById('colour19').style.zIndex = "2"
        document.getElementById('timeval19').style.backgroundColor = document.getElementById('colour19').value
        document.getElementById('text19').style.zIndex = "2"
        document.getElementById('timeval19').textContent = document.getElementById('text19').value
    }
    else if (counter == 20){
        values(one = document.getElementById('timeval20'))
        document.getElementById('colour20').style.zIndex = "2"
        document.getElementById('timeval20').style.backgroundColor = document.getElementById('colour20').value
        document.getElementById('text20').style.zIndex = "2"
        document.getElementById('timeval20').textContent = document.getElementById('text20').value
    }
    else {
        values();
    }
}

function makeconst(){
    const valuez = {length1 :document.getElementById('timeval').style.width, day1: document.getElementById('timeval').style.top, time1: document.getElementById('timeval').style.left, colour1: document.getElementById('colour').value, text1: document.getElementById('text').value,
        length2 :document.getElementById('timeval2').style.width, day2: document.getElementById('timeval2').style.top, time2: document.getElementById('timeval2').style.left, colour2: document.getElementById('colour2').value, text2: document.getElementById('text2').value,
        length3 :document.getElementById('timeval3').style.width, day3: document.getElementById('timeval3').style.top, time3: document.getElementById('timeval3').style.left, colour3: document.getElementById('colour3').value, text3: document.getElementById('text3').value,
        length4 :document.getElementById('timeval4').style.width, day4: document.getElementById('timeval4').style.top, time4: document.getElementById('timeval4').style.left, colour4: document.getElementById('colour4').value, text4: document.getElementById('text4').value,
        length5 :document.getElementById('timeval5').style.width, day5: document.getElementById('timeval5').style.top, time5: document.getElementById('timeval5').style.left, colour5: document.getElementById('colour5').value, text5: document.getElementById('text5').value,
        length6 :document.getElementById('timeval6').style.width, day6: document.getElementById('timeval6').style.top, time6: document.getElementById('timeval6').style.left, colour6: document.getElementById('colour6').value, text6: document.getElementById('text6').value,
        length7 :document.getElementById('timeval7').style.width, day7: document.getElementById('timeval7').style.top, time7: document.getElementById('timeval7').style.left, colour7: document.getElementById('colour7').value, text7: document.getElementById('text7').value,
        length8 :document.getElementById('timeval8').style.width, day8: document.getElementById('timeval8').style.top, time8: document.getElementById('timeval8').style.left, colour8: document.getElementById('colour8').value, text8: document.getElementById('text8').value,
        length9 :document.getElementById('timeval9').style.width, day9: document.getElementById('timeval9').style.top, time9: document.getElementById('timeval9').style.left, colour9: document.getElementById('colour9').value, text9: document.getElementById('text9').value,
        length10 :document.getElementById('timeval10').style.width, day10: document.getElementById('timeval10').style.top, time10: document.getElementById('timeval10').style.left, colour10: document.getElementById('colour10').value, text10: document.getElementById('text10').value,
        length11 :document.getElementById('timeval11').style.width, day11: document.getElementById('timeval11').style.top, time11: document.getElementById('timeval11').style.left, colour11: document.getElementById('colour11').value, text11: document.getElementById('text11').value,
        length12 :document.getElementById('timeval12').style.width, day12: document.getElementById('timeval12').style.top, time12: document.getElementById('timeval12').style.left, colour12: document.getElementById('colour12').value, text12: document.getElementById('text12').value,
        length13 :document.getElementById('timeval13').style.width, day13: document.getElementById('timeval13').style.top, time13: document.getElementById('timeval13').style.left, colour13: document.getElementById('colour13').value, text13: document.getElementById('text13').value,
        length14 :document.getElementById('timeval14').style.width, day14: document.getElementById('timeval14').style.top, time14: document.getElementById('timeval14').style.left, colour14: document.getElementById('colour14').value, text14: document.getElementById('text14').value,
        length15 :document.getElementById('timeval15').style.width, day15: document.getElementById('timeval15').style.top, time15: document.getElementById('timeval15').style.left, colour15: document.getElementById('colour15').value, text15: document.getElementById('text15').value,
        length16 :document.getElementById('timeval16').style.width, day16: document.getElementById('timeval16').style.top, time16: document.getElementById('timeval16').style.left, colour16: document.getElementById('colour16').value, text16: document.getElementById('text16').value,
        length17 :document.getElementById('timeval17').style.width, day17: document.getElementById('timeval17').style.top, time17: document.getElementById('timeval17').style.left, colour17: document.getElementById('colour17').value, text17: document.getElementById('text17').value,
        length18 :document.getElementById('timeval18').style.width, day18: document.getElementById('timeval18').style.top, time18: document.getElementById('timeval18').style.left, colour18: document.getElementById('colour18').value, text18: document.getElementById('text18').value,
        length19 :document.getElementById('timeval19').style.width, day19: document.getElementById('timeval19').style.top, time19: document.getElementById('timeval19').style.left, colour19: document.getElementById('colour19').value, text19: document.getElementById('text19').value,
        length20 :document.getElementById('timeval20').style.width, day20: document.getElementById('timeval20').style.top, time20: document.getElementById('timeval20').style.left, colour20: document.getElementById('colour20').value, text20: document.getElementById('text20').value,

    };
    localStorage.setItem('key1', valuez.length1)
    localStorage.setItem('key2', valuez.day1)
    localStorage.setItem('key3', valuez.time1)
    localStorage.setItem('key4', valuez.colour1)
    localStorage.setItem('key5', valuez.text1)

    localStorage.setItem('key12', valuez.length2)
    localStorage.setItem('key22', valuez.day2)
    localStorage.setItem('key32', valuez.time2)
    localStorage.setItem('key42', valuez.colour2)
    localStorage.setItem('key52', valuez.text2)

    localStorage.setItem('key13', valuez.length3)
    localStorage.setItem('key23', valuez.day3)
    localStorage.setItem('key33', valuez.time3)
    localStorage.setItem('key43', valuez.colour3)
    localStorage.setItem('key53', valuez.text3)

    localStorage.setItem('key14', valuez.length4)
    localStorage.setItem('key24', valuez.day4)
    localStorage.setItem('key34', valuez.time4)
    localStorage.setItem('key44', valuez.colour4)
    localStorage.setItem('key54', valuez.text4)

    localStorage.setItem('key15', valuez.length5)
    localStorage.setItem('key25', valuez.day5)
    localStorage.setItem('key35', valuez.time5)
    localStorage.setItem('key45', valuez.colour5)
    localStorage.setItem('key55', valuez.text5)

    localStorage.setItem('key16', valuez.length6)
    localStorage.setItem('key26', valuez.day6)
    localStorage.setItem('key36', valuez.time6)
    localStorage.setItem('key46', valuez.colour6)
    localStorage.setItem('key56', valuez.text6)

    localStorage.setItem('key17', valuez.length7)
    localStorage.setItem('key27', valuez.day7)
    localStorage.setItem('key37', valuez.time7)
    localStorage.setItem('key47', valuez.colour7)
    localStorage.setItem('key57', valuez.text7)

    localStorage.setItem('key18', valuez.length8)
    localStorage.setItem('key28', valuez.day8)
    localStorage.setItem('key38', valuez.time8)
    localStorage.setItem('key48', valuez.colour8)
    localStorage.setItem('key58', valuez.text8)

    localStorage.setItem('key19', valuez.length9)
    localStorage.setItem('key29', valuez.day9)
    localStorage.setItem('key39', valuez.time9)
    localStorage.setItem('key49', valuez.colour9)
    localStorage.setItem('key59', valuez.text9)

    localStorage.setItem('key110', valuez.length10)
    localStorage.setItem('key210', valuez.day10)
    localStorage.setItem('key310', valuez.time10)
    localStorage.setItem('key410', valuez.colour10)
    localStorage.setItem('key510', valuez.text10)

    localStorage.setItem('key111', valuez.length11)
    localStorage.setItem('key211', valuez.day11)
    localStorage.setItem('key311', valuez.time11)
    localStorage.setItem('key411', valuez.colour11)
    localStorage.setItem('key511', valuez.text11)

    localStorage.setItem('key112', valuez.length12)
    localStorage.setItem('key212', valuez.day12)
    localStorage.setItem('key312', valuez.time12)
    localStorage.setItem('key412', valuez.colour12)
    localStorage.setItem('key512', valuez.text12)

    localStorage.setItem('key113', valuez.length13)
    localStorage.setItem('key213', valuez.day13)
    localStorage.setItem('key313', valuez.time13)
    localStorage.setItem('key413', valuez.colour13)
    localStorage.setItem('key513', valuez.text13)

    localStorage.setItem('key114', valuez.length14)
    localStorage.setItem('key214', valuez.day14)
    localStorage.setItem('key314', valuez.time14)
    localStorage.setItem('key414', valuez.colour14)
    localStorage.setItem('key514', valuez.text14)

    localStorage.setItem('key115', valuez.length15)
    localStorage.setItem('key215', valuez.day15)
    localStorage.setItem('key315', valuez.time15)
    localStorage.setItem('key415', valuez.colour15)
    localStorage.setItem('key515', valuez.text15)

    localStorage.setItem('key116', valuez.length16)
    localStorage.setItem('key216', valuez.day16)
    localStorage.setItem('key316', valuez.time16)
    localStorage.setItem('key416', valuez.colour16)
    localStorage.setItem('key516', valuez.text16)

    localStorage.setItem('key117', valuez.length17)
    localStorage.setItem('key217', valuez.day17)
    localStorage.setItem('key317', valuez.time17)
    localStorage.setItem('key417', valuez.colour17)
    localStorage.setItem('key517', valuez.text17)

    localStorage.setItem('key118', valuez.length18)
    localStorage.setItem('key218', valuez.day18)
    localStorage.setItem('key318', valuez.time18)
    localStorage.setItem('key418', valuez.colour18)
    localStorage.setItem('key518', valuez.text18)

    localStorage.setItem('key119', valuez.length19)
    localStorage.setItem('key219', valuez.day19)
    localStorage.setItem('key319', valuez.time19)
    localStorage.setItem('key419', valuez.colour19)
    localStorage.setItem('key519', valuez.text19)

    localStorage.setItem('key120', valuez.length20)
    localStorage.setItem('key220', valuez.day20)
    localStorage.setItem('key320', valuez.time20)
    localStorage.setItem('key420', valuez.colour20)
    localStorage.setItem('key520', valuez.text20)
    console.log(localStorage)

        document.getElementById('errors').style.left = "320px"
        document.getElementById('errors').textContent = "the events have been saved successfully"

}

function getconst(){
localStorage.getItem('key1') 
localStorage.getItem('key2') 
localStorage.getItem('key3') 
localStorage.getItem('key4') 
localStorage.getItem('key5') 

localStorage.getItem('key12') 
localStorage.getItem('key22') 
localStorage.getItem('key32') 
localStorage.getItem('key42') 
localStorage.getItem('key52') 

localStorage.getItem('key13') 
localStorage.getItem('key23') 
localStorage.getItem('key33') 
localStorage.getItem('key43') 
localStorage.getItem('key53') 

localStorage.getItem('key14') 
localStorage.getItem('key24') 
localStorage.getItem('key34') 
localStorage.getItem('key44') 
localStorage.getItem('key54') 

localStorage.getItem('key15') 
localStorage.getItem('key25') 
localStorage.getItem('key35') 
localStorage.getItem('key45') 
localStorage.getItem('key55') 

localStorage.getItem('key16') 
localStorage.getItem('key26') 
localStorage.getItem('key36') 
localStorage.getItem('key46') 
localStorage.getItem('key56') 

localStorage.getItem('key17') 
localStorage.getItem('key27') 
localStorage.getItem('key37') 
localStorage.getItem('key47') 
localStorage.getItem('key57') 

localStorage.getItem('key18')
localStorage.getItem('key28')
localStorage.getItem('key38')
localStorage.getItem('key48')
localStorage.getItem('key58')

localStorage.getItem('key19')
localStorage.getItem('key29')
localStorage.getItem('key39')
localStorage.getItem('key49')
localStorage.getItem('key59')

localStorage.getItem('key110')
localStorage.getItem('key210')
localStorage.getItem('key310')
localStorage.getItem('key410')
localStorage.getItem('key510')

localStorage.getItem('key111')
localStorage.getItem('key211')
localStorage.getItem('key311')
localStorage.getItem('key411')
localStorage.getItem('key511')

localStorage.getItem('key112')
localStorage.getItem('key212')
localStorage.getItem('key312')
localStorage.getItem('key412')
localStorage.getItem('key512')

    
    console.log(localStorage)
}

function removeconst(){
    localStorage.removeItem('key1') 
localStorage.removeItem('key2') 
localStorage.removeItem('key3') 
localStorage.removeItem('key4') 
localStorage.removeItem('key5') 

localStorage.removeItem('key12') 
localStorage.removeItem('key22') 
localStorage.removeItem('key32') 
localStorage.removeItem('key42') 
localStorage.removeItem('key52') 

localStorage.removeItem('key13') 
localStorage.removeItem('key23') 
localStorage.removeItem('key33') 
localStorage.removeItem('key43') 
localStorage.removeItem('key53') 

localStorage.removeItem('key14') 
localStorage.removeItem('key24') 
localStorage.removeItem('key34') 
localStorage.removeItem('key44') 
localStorage.removeItem('key54') 

localStorage.removeItem('key15') 
localStorage.removeItem('key25') 
localStorage.removeItem('key35') 
localStorage.removeItem('key45') 
localStorage.removeItem('key55') 

localStorage.removeItem('key16') 
localStorage.removeItem('key26') 
localStorage.removeItem('key36') 
localStorage.removeItem('key46') 
localStorage.removeItem('key56') 

localStorage.removeItem('key17') 
localStorage.removeItem('key27') 
localStorage.removeItem('key37') 
localStorage.removeItem('key47') 
localStorage.removeItem('key57') 

localStorage.removeItem('key18')
localStorage.removeItem('key28')
localStorage.removeItem('key38')
localStorage.removeItem('key48')
localStorage.removeItem('key58')

localStorage.removeItem('key19')
localStorage.removeItem('key29')
localStorage.removeItem('key39')
localStorage.removeItem('key49')
localStorage.removeItem('key59')

localStorage.removeItem('key110')
localStorage.removeItem('key210')
localStorage.removeItem('key310')
localStorage.removeItem('key410')
localStorage.removeItem('key510')

localStorage.removeItem('key111')
localStorage.removeItem('key211')
localStorage.removeItem('key311')
localStorage.removeItem('key411')
localStorage.removeItem('key511')

localStorage.removeItem('key112')
localStorage.removeItem('key212')
localStorage.removeItem('key312')
localStorage.removeItem('key412')
localStorage.removeItem('key512')
    console.log(localStorage)

}

function perform(){
 
    document.getElementById('timeval').style.width = localStorage.key1
    document.getElementById('timeval').style.top = localStorage.key2
    document.getElementById('timeval').style.left = localStorage.key3
    document.getElementById('timeval').style.backgroundColor = localStorage.key4
    document.getElementById('timeval').textContent = localStorage.key5
    document.getElementById('timeval').style.height = '50px'

    document.getElementById('timeval2').style.width = localStorage.key12
    document.getElementById('timeval2').style.top = localStorage.key22
    document.getElementById('timeval2').style.left = localStorage.key32
    document.getElementById('timeval2').style.backgroundColor = localStorage.key42
    document.getElementById('timeval2').textContent = localStorage.key52
    document.getElementById('timeval2').style.height = "50px"
    
    document.getElementById('timeval3').style.width = localStorage.key13
    document.getElementById('timeval3').style.top = localStorage.key23
    document.getElementById('timeval3').style.left = localStorage.key33
    document.getElementById('timeval3').style.backgroundColor = localStorage.key43
    document.getElementById('timeval3').textContent = localStorage.key53
    document.getElementById('timeval3').style.height = "50px"

    document.getElementById('timeval4').style.width = localStorage.key14
    document.getElementById('timeval4').style.top = localStorage.key24
    document.getElementById('timeval4').style.left = localStorage.key34
    document.getElementById('timeval4').style.backgroundColor = localStorage.key44
    document.getElementById('timeval4').textContent = localStorage.key54
    document.getElementById('timeval4').style.height = "50px"

    document.getElementById('timeval5').style.width = localStorage.key15
    document.getElementById('timeval5').style.top = localStorage.key25
    document.getElementById('timeval5').style.left = localStorage.key35
    document.getElementById('timeval5').style.backgroundColor = localStorage.key45
    document.getElementById('timeval5').textContent = localStorage.key55
    document.getElementById('timeval5').style.height = "50px"

    document.getElementById('timeval6').style.width = localStorage.key16
    document.getElementById('timeval6').style.top = localStorage.key26
    document.getElementById('timeval6').style.left = localStorage.key36
    document.getElementById('timeval6').style.backgroundColor = localStorage.key46
    document.getElementById('timeval6').textContent = localStorage.key56
    document.getElementById('timeval6').style.height = "50px"

    document.getElementById('timeval7').style.width = localStorage.key17
    document.getElementById('timeval7').style.top = localStorage.key27
    document.getElementById('timeval7').style.left = localStorage.key37
    document.getElementById('timeval7').style.backgroundColor = localStorage.key47
    document.getElementById('timeval7').textContent = localStorage.key57
    document.getElementById('timeval7').style.height = "50px"

    document.getElementById('timeval8').style.width = localStorage.key18
    document.getElementById('timeval8').style.top = localStorage.key28
    document.getElementById('timeval8').style.left = localStorage.key38
    document.getElementById('timeval8').style.backgroundColor = localStorage.key48
    document.getElementById('timeval8').textContent = localStorage.key58
    document.getElementById('timeval8').style.height = "50px"

    document.getElementById('timeval9').style.width = localStorage.key19
    document.getElementById('timeval9').style.top = localStorage.key29
    document.getElementById('timeval9').style.left = localStorage.key39
    document.getElementById('timeval9').style.backgroundColor = localStorage.key49
    document.getElementById('timeval9').textContent = localStorage.key59
    document.getElementById('timeval9').style.height = "50px"

    document.getElementById('timeval10').style.width = localStorage.key110
    document.getElementById('timeval10').style.top = localStorage.key210
    document.getElementById('timeval10').style.left = localStorage.key310
    document.getElementById('timeval10').style.backgroundColor = localStorage.key410
    document.getElementById('timeval10').textContent = localStorage.key510
    document.getElementById('timeval10').style.height = "50px"

    document.getElementById('timeval11').style.width = localStorage.key111
    document.getElementById('timeval11').style.top = localStorage.key211
    document.getElementById('timeval11').style.left = localStorage.key311
    document.getElementById('timeval11').style.backgroundColor = localStorage.key411
    document.getElementById('timeval11').textContent = localStorage.key511
    document.getElementById('timeval11').style.height = "50px"

    document.getElementById('timeval12').style.width = localStorage.key112
    document.getElementById('timeval12').style.top = localStorage.key212
    document.getElementById('timeval12').style.left = localStorage.key312
    document.getElementById('timeval12').style.backgroundColor = localStorage.key412
    document.getElementById('timeval12').textContent = localStorage.key512
    document.getElementById('timeval12').style.height = "50px"

    document.getElementById('timeval13').style.width = localStorage.key113
    document.getElementById('timeval13').style.top = localStorage.key213
    document.getElementById('timeval13').style.left = localStorage.key313
    document.getElementById('timeval13').style.backgroundColor = localStorage.key413
    document.getElementById('timeval13').textContent = localStorage.key513
    document.getElementById('timeval13').style.height = "50px"

    document.getElementById('timeval14').style.width = localStorage.key114
    document.getElementById('timeval14').style.top = localStorage.key214
    document.getElementById('timeval14').style.left = localStorage.key314
    document.getElementById('timeval14').style.backgroundColor = localStorage.key414
    document.getElementById('timeval14').textContent = localStorage.key514
    document.getElementById('timeval14').style.height = "50px"

    document.getElementById('timeval15').style.width = localStorage.key115
    document.getElementById('timeval15').style.top = localStorage.key215
    document.getElementById('timeval15').style.left = localStorage.key315
    document.getElementById('timeval15').style.backgroundColor = localStorage.key415
    document.getElementById('timeval15').textContent = localStorage.key515
    document.getElementById('timeval15').style.height = "50px"

    document.getElementById('timeval16').style.width = localStorage.key116
    document.getElementById('timeval16').style.top = localStorage.key216
    document.getElementById('timeval16').style.left = localStorage.key316
    document.getElementById('timeval16').style.backgroundColor = localStorage.key416
    document.getElementById('timeval16').textContent = localStorage.key516
    document.getElementById('timeval16').style.height = "50px"

    document.getElementById('timeval17').style.width = localStorage.key117
    document.getElementById('timeval17').style.top = localStorage.key217
    document.getElementById('timeval17').style.left = localStorage.key317
    document.getElementById('timeval17').style.backgroundColor = localStorage.key417
    document.getElementById('timeval17').textContent = localStorage.key517
    document.getElementById('timeval17').style.height = "50px"

    document.getElementById('timeval18').style.width = localStorage.key118
    document.getElementById('timeval18').style.top = localStorage.key218
    document.getElementById('timeval18').style.left = localStorage.key318
    document.getElementById('timeval18').style.backgroundColor = localStorage.key418
    document.getElementById('timeval18').textContent = localStorage.key518
    document.getElementById('timeval18').style.height = "50px"

    document.getElementById('timeval19').style.width = localStorage.key119
    document.getElementById('timeval19').style.top = localStorage.key219
    document.getElementById('timeval19').style.left = localStorage.key319
    document.getElementById('timeval19').style.backgroundColor = localStorage.key419
    document.getElementById('timeval19').textContent = localStorage.key519
    document.getElementById('timeval19').style.height = "50px"

    document.getElementById('timeval20').style.width = localStorage.key120
    document.getElementById('timeval20').style.top = localStorage.key220
    document.getElementById('timeval20').style.left = localStorage.key320
    document.getElementById('timeval20').style.backgroundColor = localStorage.key420
    document.getElementById('timeval20').textContent = localStorage.key520
    document.getElementById('timeval20').style.height = "50px"


    if (document.getElementById('timeval').style.backgroundColor == "rgb(0, 0, 0)"){
        document.getElementById('timeval').style.width = "0px"
        document.getElementById('timeval').style.border = "0px solid white"
    }
    if (document.getElementById('timeval2').style.backgroundColor == "rgb(0, 0, 0)"){
        document.getElementById('timeval2').style.width = "0px"
        document.getElementById('timeval2').style.border = "0px solid white"
    }
    if (document.getElementById('timeval3').style.backgroundColor == "rgb(0, 0, 0)"){
        document.getElementById('timeval3').style.width = "0px"
        document.getElementById('timeval3').style.border = "0px solid white"
    }
    if (document.getElementById('timeval4').style.backgroundColor == "rgb(0, 0, 0)"){
        document.getElementById('timeval4').style.width = "0px"
        document.getElementById('timeval4').style.border = "0px solid white"
    }
    if (document.getElementById('timeval5').style.backgroundColor == "rgb(0, 0, 0)"){
        document.getElementById('timeval5').style.width = "0px"
        document.getElementById('timeval5').style.border = "0px solid white"
    }
    if (document.getElementById('timeval6').style.backgroundColor == "rgb(0, 0, 0)"){
        document.getElementById('timeval6').style.width = "0px"
        document.getElementById('timeval6').style.border = "0px solid white"
    }
    if (document.getElementById('timeval7').style.backgroundColor == "rgb(0, 0, 0)"){
        document.getElementById('timeval7').style.width = "0px"
        document.getElementById('timeval7').style.border = "0px solid white"
    }
    if (document.getElementById('timeval8').style.backgroundColor == "rgb(0, 0, 0)"){
        document.getElementById('timeval8').style.width = "0px"
        document.getElementById('timeval8').style.border = "0px solid white"
    }
    if (document.getElementById('timeval9').style.backgroundColor == "rgb(0, 0, 0)"){
        document.getElementById('timeval9').style.width = "0px"
        document.getElementById('timeval9').style.border = "0px solid white"
    }
    if (document.getElementById('timeval10').style.backgroundColor == "rgb(0, 0, 0)"){
        document.getElementById('timeval10').style.width = "0px"
        document.getElementById('timeval10').style.border = "0px solid white"
    }
    if (document.getElementById('timeval11').style.backgroundColor == "rgb(0, 0, 0)"){
        document.getElementById('timeval11').style.width = "0px"
        document.getElementById('timeval11').style.border = "0px solid white"
    }
    if (document.getElementById('timeval12').style.backgroundColor == "rgb(0, 0, 0)"){
        document.getElementById('timeval12').style.width = "0px"
        document.getElementById('timeval12').style.border = "0px solid white"
    }
    if (document.getElementById('timeval13').style.backgroundColor == "rgb(0, 0, 0)"){
        document.getElementById('timeval13').style.width = "0px"
        document.getElementById('timeval13').style.border = "0px solid white"
    }
    if (document.getElementById('timeval14').style.backgroundColor == "rgb(0, 0, 0)"){
        document.getElementById('timeval14').style.width = "0px"
        document.getElementById('timeval14').style.border = "0px solid white"
    }
    if (document.getElementById('timeval15').style.backgroundColor == "rgb(0, 0, 0)"){
        document.getElementById('timeval15').style.width = "0px"
        document.getElementById('timeval15').style.border = "0px solid white"
    }
    if (document.getElementById('timeval16').style.backgroundColor == "rgb(0, 0, 0)"){
        document.getElementById('timeval16').style.width = "0px"
        document.getElementById('timeval16').style.border = "0px solid white"
    }
    if (document.getElementById('timeval17').style.backgroundColor == "rgb(0, 0, 0)"){
        document.getElementById('timeval17').style.width = "0px"
        document.getElementById('timeval17').style.border = "0px solid white"
    }
    if (document.getElementById('timeval18').style.backgroundColor == "rgb(0, 0, 0)"){
        document.getElementById('timeval18').style.width = "0px"
        document.getElementById('timeval18').style.border = "0px solid white"
    }
    if (document.getElementById('timeval19').style.backgroundColor == "rgb(0, 0, 0)"){
        document.getElementById('timeval19').style.width = "0px"
        document.getElementById('timeval19').style.border = "0px solid white"
    }
    if (document.getElementById('timeval20').style.backgroundColor == "rgb(0, 0, 0)"){
        document.getElementById('timeval20').style.width = "0px"
        document.getElementById('timeval20').style.border = "0px solid white"
    }
    
    if (localStorage.length == 0){
        document.getElementById('errors').style.left = "300px"
        document.getElementById('errors').textContent = "error: There are no events saved on this computer"
    }

        let dayinpx = day * 55
        document.getElementById('timep').style.backgroundColor = 'red';
        document.getElementById('timep').style.top = `${dayinpx + 210}px`
    
        let timevalue = timer * 1.125;
        hourinpx = (hour - 8) * 65
        document.getElementById('timep').style.left = `${timevalue + hourinpx + 68}px`
        console.log(hourinpx)

  
  
}
