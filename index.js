var input = document.getElementById('task');
var taskId =0;
var addButton = document.getElementById('add');
var checkboxes = document.querySelectorAll('input[type="checkbox"]');
var taskList = document.getElementById('tasks');
var text = document.getElementsByTagName('text');
var main = document.getElementsByClassName('main')[0];
document.getElementById('All').style.color="black";

// Adding a task to the list from input list
addButton.addEventListener('click',function()
{
    var content = input.value;
    if(content=='')
    alert('Text can not be empty');
    else{
    input.value='';
    taskId +=1;
    document.getElementsByTagName('span')[0].textContent++;
    const li = document.createElement('li');
    li.id= taskId;
    li.innerHTML= `
    <input type="checkbox" id="${"task"+taskId}">
                     <label for="${"task"+taskId}">${content}</label>
                   <button class="delete" data-id="${taskId}">⤫</button>
        `
    taskList.appendChild(li);
    }
});


// usage of all the delete buttons 
main.addEventListener('click', function(event){
    var target = event.target;
   
    if(target.className.includes('delete'))
    {
        const id = target.dataset.id;
        let deleteli = document.getElementById(id);
        deleteli.remove();
        document.getElementsByTagName('span')[0].textContent--;

    }
    else if(target.id=="ClearComp")                // for the button clear all the completed task
    {
let checkboxes = document.querySelectorAll('input[type="checkbox"]');

        checkboxes.forEach(element => {
            if(element.checked)
            {
                let deleteli = document.getElementById(element.id.substring(4));
                deleteli.remove();
                document.getElementsByTagName('span')[0].textContent--;
            }
        });
    }
    else if(target.id=="CompleteALL")             // button to complete all the tasks 
    {
        let checkboxes = document.querySelectorAll('input[type="checkbox"]');

        checkboxes.forEach(element => {
            element.checked = true;
        });
    }
    else if(target.id=="All")                    // button to show all tasks 
    {

        let checkboxes = document.querySelectorAll('input[type="checkbox"]');

        checkboxes.forEach(element =>{
            document.getElementById('All').style.color="black";

            document.getElementById('Complete').style.color="lightgray";
            document.getElementById('uncomplete').style.color="lightgray";
            let visibile = document.getElementById(element.id.substring(4));
            visibile.style.display = "block";
            text[0].style.display ="inline";

        });
    }else if(target.id=="uncomplete")            // button to show all the uncompleted tasks
    {
        let checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(element => {
            document.getElementById('Complete').style.color="lightgray";
            document.getElementById('All').style.color="lightgray";
            document.getElementById('uncomplete').style.color="black";
            if(element.checked)
            {
                let hide= document.getElementById(element.id.substring(4));
                hide.style.display="none";
                text[0].style.display ="none";
            }
            else{
                let hide= document.getElementById(element.id.substring(4));
                hide.style.display="block";
            }

        });
    }else if(target.id=="Complete")             // button to show all the completed task
    {

        let checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(element => {
            document.getElementById('Complete').style.color="black";
            document.getElementById('All').style.color="lightgray";
            document.getElementById('uncomplete').style.color="lightgray";
            if(!element.checked)
            {
                let hide= document.getElementById(element.id.substring(4));
                hide.style.display="none";
                text[0].style.display ="none";

            }else{
                let hide= document.getElementById(element.id.substring(4));
                hide.style.display="block";
            }
        });
    }

})

