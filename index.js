function getLog(){
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = () => {
        if(xhr.readyState == 4 ){
            console.log(xhr.responseText)
            }
    }
    xhr.open('GET',`https://reqres.in/api/users`)
    xhr.send()
}

function get(url,callback){
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = () => {
        if(xhr.readyState == 4 ){
            callback(xhr.responseText)
            }
    }
    xhr.open('GET',`https://reqres.in/api/users`)
    xhr.send()
}

