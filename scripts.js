let count = 0 
let title = document.querySelector('.title')
let btn = document.querySelector('#btn')
let btn2 = document.querySelector('.btn2')


function check (){
    if (count >0){
        title.style.color= 'black'
       }else{
        title.style.color= "red"
       }
}

function increment(){
    count=count +1
    title.textContent=`html ${count}`

    check()
}

increment()

btn.addEventListener('click' ,increment)

function decrement (){
    count=count -1
    console.log(count)
    title.textContent=`html ${count}`
    console.log(count)
    check()
}

btn2.addEventListener('click',decrement)


