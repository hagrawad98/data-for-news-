var form = document.getElementById('myform')
form.addEventListener('submit',(event)=>{
    event.preventDefault()
    formData()
    form.reset()
})
let formData = async() =>{
    const res = await fetch('https://newsapi.org/v2/everything?q=keyword&apiKey=dd4d0ce359d544c69020d608c43725fc')
    const data = await res.json()
    console.log(data)
    if(data.error){
        document.getElementById('error').textContent = data.error
        document.getElementById('cardimg').textContent = ''
        document.getElementById('title').textContent = ''
        document.getElementById('description').textContent = ''
    }
    else{
        document.getElementById('cardimg').textContent =data.cardimg
        document.getElementById('title').textContent =data.title 
        document.getElementById('description').textContent = data.description
        document.getElementById('error').textContent = ''
    }
    }