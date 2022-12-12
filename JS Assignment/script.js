function quiz2() {
    console.clear()

    var name ="Daneen"
    console.log(`Hello ${name} Welcome to Web 3.0 Class`) 
    
}


//--------------------------------toTitleCase function
function toTitleCase(x){
    x = x.split(" ").map(([first,...rest])=>first.toLocaleUpperCase()+rest.join("").toLowerCase()).join(" ")
            return x
}

//----------------------------------------------------quiz 3
function quiz3(){
    console.clear()

    var name = "danEen zaHra"
    console.log("Upper Case---",name.toUpperCase())
    console.log("Lower Case---",name.toLowerCase())
    console.log(name.substring(0,1).toUpperCase() +name.substring(1).toLowerCase())
   
    console.log("2nd Option")
    TitleName = toTitleCase(name)
    console.log("Title  Case---",TitleName)
   
}
//-------------------------------------------------------Quiz04
function quiz4(){
    console.log('Quiad Said,"Work,work And Work"')
}
//-------------------------------------------------------Quiz 05
let preacher ="Hazart Muhammad (S.A.W)"
let qout = "No man is a true believer unless he desires for his brother that, what he desires for himself."

function quiz5(){
    console.log(`${preacher} said,"${qout}"`)
}
//-----------------------------------------------------quiz 06
const personName ='         Naved'
const quiz6=()=>{
    console.log("name",personName)
    console.log("name",personName.trim())
}
//-----------------------------------------------------quiz  07,08
function quiz7(){
    console.log(5+3)
    console.log(10-2)
    console.log(16/2)
    console.log(4*2)
}
//---------------------------------------------------quiz 09
function quiz9(){
    let favNumber = 0
    let massage = "My favorit number is ="
    console.log(massage,favNumber)
}
//-------------------------------------------------quiz10
function quiz10(){
    console.log("check script.js file")
}

//----------------------------quiz 11
function quiz11(){
    let names=["Aqeel","Owais","shahbaz","Shahzad"]
    for(let x in names){
        console.log(names[x])
    }
}

//----------------------------quiz 12
function quiz12(){
    let names=["Aqeel","Owais","shahbaz","Shahzad"]
    let greetings = "Welcome, Good Morning"
    let msg = "You are invited on part at King pizza at 9:00 pm on  this Sunday"
    for(let x in names){
        console.log(`${greetings} \t ${names[x]}`)
    }
}


//--------------------------------------------Quiz #13
function quiz13(){
    let myFav = ["Honda Bike", "Farrai Car", "Emirates Plan","Water bot"]
    let statement= "I would like to travel by"
    for(let i=0;i<myFav.length;i++){
        console.log(`${statement} \t  ${myFav[i]}`)
    }
}

//-----------------------------------quiz 14
let guests=["Aqeel","Owais","shahbaz","Shahzad"]
let msg = "You are invited on part at King pizza at 9:00 pm on  this Sunday"
function quiz14(){
    for(let x in guests){
        console.log(`${guests[x]} \t ${msg} `)
    }
}
//-------------------------------------quiz 15

function quiz15(){
   guests[0] ="Anees"
   quiz14()
}
//---------------------------------quiz16
function quiz16(){
    guests.unshift("Qasim")
    guests.splice(3,0,"Naeem")
    guests.push("waseem")
    quiz14()
}
//--------------------------------------------quiz 17
function quiz17(){
    let sorry ="Sorry the Dinner Plane changesWe will invite you next time"
    
    const x = guests.pop()
    console.log(`${x} \t ${sorry}`)
    //-----------------------------------------------------removing 2 last
    const x2= guests.pop()
    console.log(`${x2} \t ${sorry}`)

    console.log("--------------------------------------")
    quiz14()  ///----------------------to print invitations
    guests.pop()
    guests.pop()
    console.log(guests)
}
//---------------------------------------------------quiz 18
function quiz18(){

    let places= ["Makkah","Baghdad","Madinah","Paris","Falsiteen"]
    console.log(places)
    console.log("Sorted Array>>>>>",Array.from(places).sort())
    console.log(places)
    console.log("Reverse order>>>>>",Array.from(places).reverse())
    console.log(places)

}
//------------------------------------------------------quiz-19
function quiz19(){
    console.clear
    console.log("total number of guests = ",guests.length)
}
//-----------------------------------quiz 20
function quiz20(){
   let foods = ["biryani","drink", "coffe","pizza"]
   let bikes=["honda","Bentaly","Yamaha"]
    myStuffs =[foods,bikes]
   
   console.log(myStuffs)
}
//------------------------------------------------ quiz # 21

quiz21 =()=>{
let student ={
    name:"Ateeq",
    class:"web 3.0",
    city:'Lahore',
    section:'d'
}
console.log(student)
}
//------------------------22
quiz22=()=>{
    let fruits=['asad','saad','adeel',"",-1,"123"]

    console.log(fruits[8])
    fruits[8]='shakeel'
    console.log(fruits[8])
}

//-----------------------------------23
quiz23=()=>{
 let cars =['sabru','toyta','hundai','farrari','lambargini']
 
 console.log('Test 01 \n Is cars[0] == "sabru" pridict  true')
 console.log(cars[0]== 'sabru')

 console.log('Test 02 \n Is cars[0] == "hundai" pridict  false')
 console.log(cars[0]== 'hundai')

 console.log('Test 03 \n Is cars[0] == "farrari" pridict  false')
 console.log(cars[0]== 'farrai')

 console.log('Test 04 \n Is cars[1] != "sabru" pridict  true')
 console.log(cars[1]!= 'sabru')

 console.log('Test 05 \n Is cars[3] == "farrari" pridict  true')
 console.log(cars[3]== 'farrari')

 console.log('Test 06 \n Is cars[2] != "farrai" pridict  false')
 console.log(cars[1]!= 'farrai')

 console.log('Test 07 \n Is cars[4] == "lambargini" pridict  true')
 console.log(cars[4]== 'lambargini')

 console.log('Test 08 \n Is cars[4] == "sabru" pridict  false')
 console.log(cars[4]== 'sabru')

 console.log('Test 09 \n Is cars[2] == "toyota" pridict  true')
 console.log(cars[2]== 'toyota')

 console.log('Test 10 \n Is cars[4] == "sabru" pridict  false')
 console.log(cars[4]== 'sabru')

}

//-------------------------------------------------24
quiz24=()=>{
    console.log("Sting equality Test \n","Is Ahmed == ahmad \n", 'ahmad'== 'Ahmed')

    console.log("Case equality Test \n","Is JAVAID == JAVAID.toLowerCase() \n", 'JAVAID'== 'JAVAID'.toLowerCase())

    console.log("Numaric equality Test \n","Is 4 == 5 \n", 4== 5)

    console.log("greater than Test \n","Is 4 > 5 \n", 4>5)

    console.log("less than Test \n","Is 4 < 5 \n", 4<5)

    console.log("greater than  or equal to Test \n","Is 4 >= 5 \n", 4>=5)
    console.log("And   Test \n","Is 4 <5 and 5<6 \n", 4<5&& 5<6)
    console.log("OR   Test \n","Is 4 <5 or 5<6 \n", 4<5 || 5<6)

    let cars=['farrai','audi','lambergini']
    console.log(cars.indexOf('audi'))
    console.log("Check status of element in array ",cars.includes('audi'))
    console.log("Check status of element in array ",cars.includes('farrari'))
}

//============================ quiz 25
let quiz25=()=>{
    let alian_colour = 'green'
    if (alian_colour == 'green'){
        console.log("You have Earned \n \t 05 points \t")
    }
    if (alian_colour !== 'green'){
        console.log(" ")
    } 
}
let quiz26=()=>{

    let alian_colour = 'green'
    if (alian_colour == 'green'){
        console.log( 'alian_colour=',alian_colour,"\n You have Earned \n \t 05 points \t")
    }
    else{
        console.log('alian_colour=',alian_colour,"\nhave Earned \n \t 10 points \t")
    }  
    //-------------------------------------------------------------2nd version
    alian_colour = 'Blue'
    if (alian_colour == 'green'){
        console.log( 'alian_colour=',alian_colour,"\n You have Earned \n \t 05 points \t")
    }
    else{
        console.log('alian_colour=',alian_colour,"\nhave Earned \n \t 10 points \t")
    }  


}

//-----------------------------------quiz 27
let quiz27=()=>{

    let alian_colour = 'green'
    if (alian_colour == 'green'){
        console.log( 'alian_colour=',alian_colour,"\n You have Earned \n \t 05 points \t")
    }
    else if(alian_colour == 'yellow'){
        console.log('alian_colour=',alian_colour,"\nhave Earned \n \t 10 points \t")
    }  
    else if(alian_colour == 'red'){
        console.log('alian_colour=',alian_colour,"\nhave Earned \n \t 15points \t")
    } 
    else{
        console.log("colour has no points")
    }
    //-------------------------------------------------------------2nd version
     alian_colour = 'yellow'
    if (alian_colour == 'green'){
        console.log( 'alian_colour=',alian_colour,"\n You have Earned \n \t 05 points \t")
    }
    else if(alian_colour== 'yellow'){
        console.log('alian_colour=',alian_colour,"\nhave Earned \n \t 10 points \t")
    }  
    else if(alian_colour== 'red'){
        console.log('alian_colour=',alian_colour,"\nhave Earned \n \t 15points \t")
    } 
    else{
        console.log("colour has no points")
    }
//------------------------------------------------------3rd version
    alian_colour = 'red'
    if (alian_colour == 'green'){
        console.log( 'alian_colour=',alian_colour,"\n You have Earned \n \t 05 points \t")
    }
    else if(alian_colour== 'yellow'){
        console.log('alian_colour=',alian_colour,"\nhave Earned \n \t 10 points \t")
    }  
    else if(alian_colour== 'red'){
        console.log('alian_colour=',alian_colour,"\nhave Earned \n \t 15points \t")
    } 
    else{
        console.log("colour has no points")
    }
}

let quiz28=()=>{
   let age =67
   if(age<=2){
    console.log("%c Babay","background-color: pink;color:red;font-size:34px")
   }
   else if(age>2 && age <=4){
    console.log("%c toddler","background-color: yellow;color:red;font-size:34px")
   }
   else if(age>4 && age <=13){
    console.log("%c kid","background-color: blue;color:red;font-size:34px")
   }
   else if(age>13 && age <=20){
    console.log("%c teenager","background-color: green;color:red;font-size:34px")
   }
   else if(age>20 && age <=65){
    console.log("%c Adult","background-color: black;color:red;font-size:34px")
   }
   else if(age>65){
    console.log("%c Elder","background-color: white;color:blue;font-size:34px")
   }

}

let quiz29=()=>{
    let fav_fruits =['bananas','mangoes','aples']
    if(fav_fruits.includes('apple')){
        console.log("%c you really like APPLES ,font-size:12;")
    }
    if(fav_fruits.includes('mangoes')){
        console.log("%c you really like Mangoes ,font-size:12;")
    }
    if(fav_fruits.includes('bananas')){
        console.log("%c you really like BANANAS ,font-size:12;")
    }
    if(fav_fruits.includes('cheery')){
        console.log("%c you really like Cheery ,font-size:12;")
    }
    if(fav_fruits.includes('gava')){
        console.log("%c you really like Gava ,font-size:12;")
    }
}

let quiz30=()=>{
    let users =['Admin','ali','javaid','asif','junaid','akram']

    for(let i=0;i<users.length;i++){
        if(users[i]=='Admin'){
            console.log("Hello Admin Would you like to see repports")
        }
        else{
            console.log(`Hello ${users[i]} thanks for logging again`)
        }
}
}

let quiz31=()=>{
    users=['akram','aslam','asghar','afzal']
    if(users.length>0){
        console.log(` Number of users ${users.length}`)
    }
    users=[]
    console.log("users=[]",users.length)
    if(users.length==0){
        console.log(" we need some users")
    }
}

let quiz32=()=>{
    let current_users=["Adnan",'pixi','william','inzmam','waqar']
    let new_users=['Adnan','pixi','willson','naveed','aasir']
    for(x=0;x<current_users.length;x++){
        let new_element = current_users[x].toLocaleLowerCase()
        current_users.splice(x,1,new_element)   
    }
    console.log(current_users)

    for(i=0;i<new_users.length;i++){
        if(current_users.includes(new_users[i].toLowerCase())){
            console.log(new_users[i],"\t user already exist try something else")
        }
        else{
            console.log(new_users[i],"\n is Avaialble")
        }
    }
}

///-------------------quiz 33

            
 let quiz33=()=>{
    let numArray=[1,2,3,4,5,6,7,8,9]
    for(i=0;i<numArray.length;i++){
        if(numArray[i]==1){
            console.log("1st")
        }
        else if(numArray[i]==2){
            console.log("2nd")
        }
        else if(numArray[i]==3){
            console.log("3rd")
        }
        else{
            console.log("\n"+numArray[i]+"th")
        }
    }
 }

 //------------------------------quiz 34
 let quiz34=()=>{

     let fav_pizzas =['pepronni pizza','creamy pizza','BBQ pizza']
     for(i=0;i<fav_pizzas.length;i++){
         console.log(fav_pizzas[i])
        }
        //-----------------printing sentance withe name
        for(i=0;i<fav_pizzas.length;i++){
            console.log(` i like   ${fav_pizzas[i]}`)
        }
        console.log(`
        ${fav_pizzas[2]}   have the traditional taste of BBQ.Cheese make them special.
        ${fav_pizzas[1]}  has its unique taste due to a creamy falvour. and no dout ${fav_pizzas[0]} has its own 
        class in taste.\n\n
        I LOVE PIZZZZZA......
        `)
    }

    //----------------------------quiz35
    let quiz35=()=>{
        let animals = ['COW',"Buffalo","Goat"]
    
        for (let i in animals){
            console.log(animals[i])
        }
            console.log(`
            ${animals[0]} is a brown in colour.
            ${animals[1]} loves his owner.
            ${animals[2]} likes green grass `)
        const style = 'background-color: green; color: white; font-style: italic; border: 3px solid white; font-size: 2em;'
        console.log("%cAll these animals are nice;",style)

    }
//------------------------------------quiz 36
function make_Tshirt(size,msg){
    const style = 'background-color: green; color: white; font-style: italic; border: 3px solid white; font-size: 2em;'
   console.log(`%c${size}
   ${msg}`,style)
}

const quiz36  =()=>{
    
    make_Tshirt('small',"pakistan zindabad") //-------------------to call function
}
//---------------------------------------------------quiz 37
function make_Tshirt2(size= "Large",msg= "I Love Javascript"){
    const style = 'background-color: green; color: white; font-style: italic; border: 3px solid white; font-size: 2em;'
   console.log(`%c${size}
   ${msg}`,style)
}

let quiz37=()=>{
    make_Tshirt2()
    make_Tshirt2('medium')
    make_Tshirt2('small',"I love Python too")
}

//--------------------------------------------quiz 38
function describe_city (city = 'Karachi',country='Pakistan'){
console.log(`%c ${city} in ${country}`,"color: blue; font-size:16")
}

let quiz38=()=>{
    describe_city('Lahore')
    describe_city('Multan')
    describe_city('Dubai','UAE')
}

//--------------------------------------------39
function city_country(city,country) {
return (`"${city}, ${country}"`)

}

const quiz39=()=>{
    console.log(city_country('lahore','pakistan'))
    console.log(city_country('Multan','pakistan'))
    console.log(city_country('lahore','pakistan'))
}
//-------------------------------------quiz 40
function make_ablum(artist,ablumName) {
    return {
        "Arstist": artist,
        "Album Name":ablumName
    }
}
function make_ablumWithTracks(artist,ablumName,tracks=0) {
    return{
        "Arstist": artist,
        "Album Name":ablumName,
        "No. Of Tracks":tracks
    }
}
const  quiz40=()=>{
//--------------------------------------------------calling functions
console.log("Cllaing Function Make Album",
make_ablum('Nusrat','Meri Zindgi'),"\n",
make_ablum('ADnan','Tanhai'),"\n",
make_ablum('fraz','Meri  matti'),"\n",
"----------------------------------------------------",
make_ablumWithTracks('Nusrat','Meri Zindgi',45)
)
}

//----------------------------------------------------quiz 41
const magicions= [
    'samri jadoghar',
    'Bilbatoori',
    'umro ayaz'
]

function show_magicion(magic){
    for(let i=0;i<magic.length;i++){
        console.log(`${i+1}-${magic[i]}`)
    }
}
const quiz41=()=>{
    show_magicion(magicions)
}
//--------------------------------------------------42
function make_great(great,array) {
    let greatArray=[]
    for(let i=0;i<array.length;i++){
        greatArray.push('great'+array[i])
    }
    return greatArray
}
const quiz42=()=>{
    console.log('calling original list to check change in original')
    show_magicion(magicions)
}

//-------------------------------------------------------------43
const quiz43=()=>{
    new_Array=make_great('Great',magicions)
    show_magicion(magicions)
    show_magicion(new_Array)
}
//--------------------------------------------------------------44
function sandwichOrder(name,...x) {
    console.log(`
    Order Summery
    Customer: ${name}
    Items:${x} 
    `)
}
const quiz44=()=>{
    sandwichOrder('Ateeq','cheese','tamato','chicken')
    sandwichOrder('Naveed','cheese','chilis','veggies')
    sandwichOrder('Abdullah','cheese','egg','salad')
}

//-------------------------------------------------------------45
function carOrder(make,modal,...features){
    return {
        Manifacturer:make,
        Modal:modal,
        Features_Demanded:features
    }
}
const quiz45=()=>{
    console.log(carOrder('Toyota','grandi','matallicGray','prosmatic'))
}





