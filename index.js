

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
    one.style.left = "390px"
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
    else if (counter == 21){
        values(one = document.getElementById('timeval21'))
        document.getElementById('colour21').style.zIndex = "2"
        document.getElementById('timeval21').style.backgroundColor = document.getElementById('colour21').value
        document.getElementById('text21').style.zIndex = "2"
        document.getElementById('timeval21').textContent = document.getElementById('text21').value
    }
    else if (counter == 22){
        values(one = document.getElementById('timeval22'))
        document.getElementById('colour22').style.zIndex = "2"
        document.getElementById('timeval22').style.backgroundColor = document.getElementById('colour22').value
        document.getElementById('text22').style.zIndex = "2"
        document.getElementById('timeval22').textContent = document.getElementById('text22').value
    }
    else if (counter == 23){
        values(one = document.getElementById('timeval23'))
        document.getElementById('colour23').style.zIndex = "2"
        document.getElementById('timeval23').style.backgroundColor = document.getElementById('colour23').value
        document.getElementById('text23').style.zIndex = "2"
        document.getElementById('timeval23').textContent = document.getElementById('text23').value
    }
    else if (counter == 24){
        values(one = document.getElementById('timeval24'))
        document.getElementById('colour24').style.zIndex = "2"
        document.getElementById('timeval24').style.backgroundColor = document.getElementById('colour24').value
        document.getElementById('text24').style.zIndex = "2"
        document.getElementById('timeval24').textContent = document.getElementById('text24').value
    }
    else if (counter == 25){
        values(one = document.getElementById('timeval25'))
        document.getElementById('colour25').style.zIndex = "2"
        document.getElementById('timeval25').style.backgroundColor = document.getElementById('colour25').value
        document.getElementById('text25').style.zIndex = "2"
        document.getElementById('timeval25').textContent = document.getElementById('text25').value
    }
    else if (counter == 26){
        values(one = document.getElementById('timeval26'))
        document.getElementById('colour26').style.zIndex = "2"
        document.getElementById('timeval26').style.backgroundColor = document.getElementById('colour26').value
        document.getElementById('text26').style.zIndex = "2"
        document.getElementById('timeval26').textContent = document.getElementById('text26').value
    }
    else if (counter == 27){
        values(one = document.getElementById('timeval27'))
        document.getElementById('colour27').style.zIndex = "2"
        document.getElementById('timeval27').style.backgroundColor = document.getElementById('colour27').value
        document.getElementById('text27').style.zIndex = "2"
        document.getElementById('timeval27').textContent = document.getElementById('text27').value
    }
    else if (counter == 28){
        values(one = document.getElementById('timeval28'))
        document.getElementById('colour28').style.zIndex = "2"
        document.getElementById('timeval28').style.backgroundColor = document.getElementById('colour28').value
        document.getElementById('text28').style.zIndex = "2"
        document.getElementById('timeval28').textContent = document.getElementById('text28').value
    }
    else if (counter == 29){
        values(one = document.getElementById('timeval29'))
        document.getElementById('colour29').style.zIndex = "2"
        document.getElementById('timeval29').style.backgroundColor = document.getElementById('colour29').value
        document.getElementById('text29').style.zIndex = "2"
        document.getElementById('timeval29').textContent = document.getElementById('text29').value
    }
    else if (counter == 30){
        values(one = document.getElementById('timeval30'))
        document.getElementById('colour30').style.zIndex = "2"
        document.getElementById('timeval30').style.backgroundColor = document.getElementById('colour30').value
        document.getElementById('text30').style.zIndex = "2"
        document.getElementById('timeval30').textContent = document.getElementById('text30').value
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
        length21 :document.getElementById('timeval21').style.width, day21: document.getElementById('timeval21').style.top, time21: document.getElementById('timeval21').style.left, colour21: document.getElementById('colour21').value, text21: document.getElementById('text21').value,
        length22 :document.getElementById('timeval22').style.width, day22: document.getElementById('timeval22').style.top, time22: document.getElementById('timeval22').style.left, colour22: document.getElementById('colour22').value, text22: document.getElementById('text22').value,
        length23 :document.getElementById('timeval23').style.width, day23: document.getElementById('timeval23').style.top, time23: document.getElementById('timeval23').style.left, colour23: document.getElementById('colour23').value, text23: document.getElementById('text23').value,
        length24 :document.getElementById('timeval24').style.width, day24: document.getElementById('timeval24').style.top, time24: document.getElementById('timeval24').style.left, colour24: document.getElementById('colour24').value, text24: document.getElementById('text24').value,
        length25 :document.getElementById('timeval25').style.width, day25: document.getElementById('timeval25').style.top, time25: document.getElementById('timeval25').style.left, colour25: document.getElementById('colour25').value, text25: document.getElementById('text25').value,
        length26 :document.getElementById('timeval26').style.width, day26: document.getElementById('timeval26').style.top, time26: document.getElementById('timeval26').style.left, colour26: document.getElementById('colour26').value, text26: document.getElementById('text26').value,
        length27 :document.getElementById('timeval27').style.width, day27: document.getElementById('timeval27').style.top, time27: document.getElementById('timeval27').style.left, colour27: document.getElementById('colour27').value, text27: document.getElementById('text27').value,
        length28 :document.getElementById('timeval28').style.width, day28: document.getElementById('timeval28').style.top, time28: document.getElementById('timeval28').style.left, colour28: document.getElementById('colour28').value, text28: document.getElementById('text28').value,
        length29 :document.getElementById('timeval29').style.width, day29: document.getElementById('timeval29').style.top, time29: document.getElementById('timeval29').style.left, colour29: document.getElementById('colour29').value, text29: document.getElementById('text29').value,
        length30 :document.getElementById('timeval30').style.width, day30: document.getElementById('timeval30').style.top, time30: document.getElementById('timeval30').style.left, colour30: document.getElementById('colour30').value, text30: document.getElementById('text30').value,

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

    localStorage.setItem('key121', valuez.length21)
    localStorage.setItem('key221', valuez.day21)
    localStorage.setItem('key321', valuez.time21)
    localStorage.setItem('key421', valuez.colour21)
    localStorage.setItem('key521', valuez.text21)

    localStorage.setItem('key122', valuez.length22)
    localStorage.setItem('key222', valuez.day22)
    localStorage.setItem('key322', valuez.time22)
    localStorage.setItem('key422', valuez.colour22)
    localStorage.setItem('key522', valuez.text22)

    localStorage.setItem('key123', valuez.length23)
    localStorage.setItem('key223', valuez.day23)
    localStorage.setItem('key323', valuez.time23)
    localStorage.setItem('key423', valuez.colour23)
    localStorage.setItem('key523', valuez.text23)

    localStorage.setItem('key124', valuez.length24)
    localStorage.setItem('key224', valuez.day24)
    localStorage.setItem('key324', valuez.time24)
    localStorage.setItem('key424', valuez.colour24)
    localStorage.setItem('key524', valuez.text24)

    localStorage.setItem('key125', valuez.length25)
    localStorage.setItem('key225', valuez.day25)
    localStorage.setItem('key325', valuez.time25)
    localStorage.setItem('key425', valuez.colour25)
    localStorage.setItem('key525', valuez.text25)

    localStorage.setItem('key126', valuez.length26)
    localStorage.setItem('key226', valuez.day26)
    localStorage.setItem('key326', valuez.time26)
    localStorage.setItem('key426', valuez.colour26)
    localStorage.setItem('key526', valuez.text26)

    localStorage.setItem('key127', valuez.length27)
    localStorage.setItem('key227', valuez.day27)
    localStorage.setItem('key327', valuez.time27)
    localStorage.setItem('key427', valuez.colour27)
    localStorage.setItem('key527', valuez.text27)

    localStorage.setItem('key128', valuez.length28)
    localStorage.setItem('key228', valuez.day28)
    localStorage.setItem('key328', valuez.time28)
    localStorage.setItem('key428', valuez.colour28)
    localStorage.setItem('key528', valuez.text28)

    localStorage.setItem('key129', valuez.length29)
    localStorage.setItem('key229', valuez.day29)
    localStorage.setItem('key329', valuez.time29)
    localStorage.setItem('key429', valuez.colour29)
    localStorage.setItem('key529', valuez.text29)

    localStorage.setItem('key130', valuez.length30)
    localStorage.setItem('key230', valuez.day30)
    localStorage.setItem('key330', valuez.time30)
    localStorage.setItem('key430', valuez.colour30)
    localStorage.setItem('key530', valuez.text30)
    console.log(localStorage)

        document.getElementById('errors').style.left = "320px"
        document.getElementById('errors').textContent = "the events have been saved successfully"

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

localStorage.removeItem('key113')
localStorage.removeItem('key213')
localStorage.removeItem('key313')
localStorage.removeItem('key413')
localStorage.removeItem('key513')

localStorage.removeItem('key114')
localStorage.removeItem('key214')
localStorage.removeItem('key314')
localStorage.removeItem('key414')
localStorage.removeItem('key514')

localStorage.removeItem('key115')
localStorage.removeItem('key215')
localStorage.removeItem('key315')
localStorage.removeItem('key415')
localStorage.removeItem('key515')

localStorage.removeItem('key116')
localStorage.removeItem('key216')
localStorage.removeItem('key316')
localStorage.removeItem('key416')
localStorage.removeItem('key516')

localStorage.removeItem('key117')
localStorage.removeItem('key217')
localStorage.removeItem('key317')
localStorage.removeItem('key417')
localStorage.removeItem('key517')

localStorage.removeItem('key118')
localStorage.removeItem('key218')
localStorage.removeItem('key318')
localStorage.removeItem('key418')
localStorage.removeItem('key518')

localStorage.removeItem('key119')
localStorage.removeItem('key219')
localStorage.removeItem('key319')
localStorage.removeItem('key419')
localStorage.removeItem('key519')

localStorage.removeItem('key120')
localStorage.removeItem('key220')
localStorage.removeItem('key320')
localStorage.removeItem('key420')
localStorage.removeItem('key520')

localStorage.removeItem('key121')
localStorage.removeItem('key221')
localStorage.removeItem('key321')
localStorage.removeItem('key421')
localStorage.removeItem('key521')

localStorage.removeItem('key122')
localStorage.removeItem('key222')
localStorage.removeItem('key322')
localStorage.removeItem('key422')
localStorage.removeItem('key522')

localStorage.removeItem('key123')
localStorage.removeItem('key223')
localStorage.removeItem('key323')
localStorage.removeItem('key423')
localStorage.removeItem('key523')

localStorage.removeItem('key124')
localStorage.removeItem('key224')
localStorage.removeItem('key324')
localStorage.removeItem('key424')
localStorage.removeItem('key524')

localStorage.removeItem('key125')
localStorage.removeItem('key225')
localStorage.removeItem('key325')
localStorage.removeItem('key425')
localStorage.removeItem('key525')

localStorage.removeItem('key126')
localStorage.removeItem('key226')
localStorage.removeItem('key326')
localStorage.removeItem('key426')
localStorage.removeItem('key526')

localStorage.removeItem('key127')
localStorage.removeItem('key227')
localStorage.removeItem('key327')
localStorage.removeItem('key427')
localStorage.removeItem('key527')

localStorage.removeItem('key128')
localStorage.removeItem('key228')
localStorage.removeItem('key328')
localStorage.removeItem('key428')
localStorage.removeItem('key528')

localStorage.removeItem('key129')
localStorage.removeItem('key229')
localStorage.removeItem('key329')
localStorage.removeItem('key429')
localStorage.removeItem('key529')

localStorage.removeItem('key130')
localStorage.removeItem('key230')
localStorage.removeItem('key330')
localStorage.removeItem('key430')
localStorage.removeItem('key530')
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

    document.getElementById('timeval21').style.width = localStorage.key121
    document.getElementById('timeval21').style.top = localStorage.key221
    document.getElementById('timeval21').style.left = localStorage.key321
    document.getElementById('timeval21').style.backgroundColor = localStorage.key421
    document.getElementById('timeval21').textContent = localStorage.key521
    document.getElementById('timeval21').style.height = "50px"

    document.getElementById('timeval22').style.width = localStorage.key122
    document.getElementById('timeval22').style.top = localStorage.key222
    document.getElementById('timeval22').style.left = localStorage.key322
    document.getElementById('timeval22').style.backgroundColor = localStorage.key422
    document.getElementById('timeval22').textContent = localStorage.key522
    document.getElementById('timeval22').style.height = "50px"

    document.getElementById('timeval23').style.width = localStorage.key123
    document.getElementById('timeval23').style.top = localStorage.key223
    document.getElementById('timeval23').style.left = localStorage.key323
    document.getElementById('timeval23').style.backgroundColor = localStorage.key423
    document.getElementById('timeval23').textContent = localStorage.key523
    document.getElementById('timeval23').style.height = "50px"

    document.getElementById('timeval24').style.width = localStorage.key124
    document.getElementById('timeval24').style.top = localStorage.key224
    document.getElementById('timeval24').style.left = localStorage.key324
    document.getElementById('timeval24').style.backgroundColor = localStorage.key424
    document.getElementById('timeval24').textContent = localStorage.key524
    document.getElementById('timeval24').style.height = "50px"

    document.getElementById('timeval25').style.width = localStorage.key125
    document.getElementById('timeval25').style.top = localStorage.key225
    document.getElementById('timeval25').style.left = localStorage.key325
    document.getElementById('timeval25').style.backgroundColor = localStorage.key425
    document.getElementById('timeval25').textContent = localStorage.key525
    document.getElementById('timeval25').style.height = "50px"

    document.getElementById('timeval26').style.width = localStorage.key126
    document.getElementById('timeval26').style.top = localStorage.key226
    document.getElementById('timeval26').style.left = localStorage.key326
    document.getElementById('timeval26').style.backgroundColor = localStorage.key426
    document.getElementById('timeval26').textContent = localStorage.key526
    document.getElementById('timeval26').style.height = "50px"

    document.getElementById('timeval27').style.width = localStorage.key127
    document.getElementById('timeval27').style.top = localStorage.key227
    document.getElementById('timeval27').style.left = localStorage.key327
    document.getElementById('timeval27').style.backgroundColor = localStorage.key427
    document.getElementById('timeval27').textContent = localStorage.key527
    document.getElementById('timeval27').style.height = "50px"

    document.getElementById('timeval28').style.width = localStorage.key128
    document.getElementById('timeval28').style.top = localStorage.key228
    document.getElementById('timeval28').style.left = localStorage.key328
    document.getElementById('timeval28').style.backgroundColor = localStorage.key428
    document.getElementById('timeval28').textContent = localStorage.key528
    document.getElementById('timeval28').style.height = "50px"

    document.getElementById('timeval29').style.width = localStorage.key129
    document.getElementById('timeval29').style.top = localStorage.key229
    document.getElementById('timeval29').style.left = localStorage.key329
    document.getElementById('timeval29').style.backgroundColor = localStorage.key429
    document.getElementById('timeval29').textContent = localStorage.key529
    document.getElementById('timeval29').style.height = "50px"

    document.getElementById('timeval30').style.width = localStorage.key130
    document.getElementById('timeval30').style.top = localStorage.key230
    document.getElementById('timeval30').style.left = localStorage.key330
    document.getElementById('timeval30').style.backgroundColor = localStorage.key430
    document.getElementById('timeval30').textContent = localStorage.key530
    document.getElementById('timeval30').style.height = "50px"


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
    if (document.getElementById('timeval21').style.backgroundColor == "rgb(0, 0, 0)"){
        document.getElementById('timeval21').style.width = "0px"
        document.getElementById('timeval21').style.border = "0px solid white"
    }
    if (document.getElementById('timeval22').style.backgroundColor == "rgb(0, 0, 0)"){
        document.getElementById('timeval22').style.width = "0px"
        document.getElementById('timeval22').style.border = "0px solid white"
    }
    if (document.getElementById('timeval23').style.backgroundColor == "rgb(0, 0, 0)"){
        document.getElementById('timeval23').style.width = "0px"
        document.getElementById('timeval23').style.border = "0px solid white"
    }
    if (document.getElementById('timeval24').style.backgroundColor == "rgb(0, 0, 0)"){
        document.getElementById('timeval24').style.width = "0px"
        document.getElementById('timeval24').style.border = "0px solid white"
    }
    if (document.getElementById('timeval25').style.backgroundColor == "rgb(0, 0, 0)"){
        document.getElementById('timeval25').style.width = "0px"
        document.getElementById('timeval25').style.border = "0px solid white"
    }
    if (document.getElementById('timeval26').style.backgroundColor == "rgb(0, 0, 0)"){
        document.getElementById('timeval26').style.width = "0px"
        document.getElementById('timeval26').style.border = "0px solid white"
    }
    if (document.getElementById('timeval27').style.backgroundColor == "rgb(0, 0, 0)"){
        document.getElementById('timeval27').style.width = "0px"
        document.getElementById('timeval27').style.border = "0px solid white"
    }
    if (document.getElementById('timeval28').style.backgroundColor == "rgb(0, 0, 0)"){
        document.getElementById('timeval28').style.width = "0px"
        document.getElementById('timeval28').style.border = "0px solid white"
    }
    if (document.getElementById('timeval29').style.backgroundColor == "rgb(0, 0, 0)"){
        document.getElementById('timeval29').style.width = "0px"
        document.getElementById('timeval29').style.border = "0px solid white"
    }
    if (document.getElementById('timeval30').style.backgroundColor == "rgb(0, 0, 0)"){
        document.getElementById('timeval30').style.width = "0px"
        document.getElementById('timeval30').style.border = "0px solid white"
    }
    
    if (localStorage.length == 0){
        document.getElementById('errors').style.left = "300px"
        document.getElementById('errors').textContent = "error: There are no events saved on this computer"
    }

      

    let dayinpx = day * 55  
    
    if (day == 0){
            dayinpx = 385
            console.log(dayinpx)
     }
        document.getElementById('timep').style.backgroundColor = 'red';
        document.getElementById('timep').style.top = `${dayinpx + 210}px`
     
        let timevalue = timer * 1.125;
        hourinpx = (hour - 8) * 65
        document.getElementById('timep').style.left = `${timevalue + hourinpx + 68}px`
        console.log(hourinpx)

  
  
}
