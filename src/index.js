const init = () => {
    //1. select the form element

    const form = document.querySelector('form')

    //2. add event listener
    form.addEventListener('submit', (e) => {
        e.preventDefault()

    const input = document.getElementById('searchByID')
        
    //a. show data on screen because submit was clicked
        const h4 = document.querySelector('#movieDetails h4')
        const pTag = document.querySelector('#movieDetails p')
        

        fetch(`http://localhost:3000/movies/${input.value}`)
        .then((resp) => resp.json()) // javascript comment notation
        
        //b. somehow get data to display
        .then((data) => { 
            if (data.id) {
                console.log(data)
                h4.textContent = data.title

                pTag.textContent = data.summary
            }
            // console.log("Error: no good")
        })
        .catch((err) => {
            cosole.log("ERROR", err)

        })
    

        //c.  




    })
    
}

document.addEventListener('DOMContentLoaded', init);