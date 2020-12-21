const base_url = "http://localhost:3001/";

$(document).ready(() => {
 //       console.log("Hello!");

 $.post(base_url + "getList", {}, (data) => {
    console.log(data.list);

    for (let i = 0; i < data.list.length; i++) {
        addToList(data.list[i]);

    // string literal `
    //const html = `
    //    <tr>
    //        <td>${data.list[i].priority}</td>
    //        <td>${data.list[i].title}</td>
    //        <td>${data.list[i].text}</td>
    //        <td><button data-task-id="${data.list[i]._id}])>Delete</button></td>
    //    </tr>
    //`;

    //    $("#tasks tbody").append(html);

        // Update selector to avoid selecting the update button.
        $("#tasks tbody tr td button").click(function() {
            // Pass the JavaScript object that was pressed on to the jQuery selector.

            //console.log("clicked!");
            

            console.log($(this));
            //$(this).remove();
            $(this).parent().parent().attr("data-task-id");
            
            console.log(taskID);

            let actionObject = {
                id: taskID,
                action: "delete",
                data: null
            }

            $.post(base_url + "modify", actionObject, (data) => {
                $(this).parent().parent().remove();
            });

        });

    }

 });

 $("#submit").click(() => {
 //    console.log("clicked");

    let priorityNumber = $("#note-priority option:selected").attr("value");

    priorityNumber = parseInt(priorityNumber);

    let noteObject = {
        author: null,
        title: $("#note-title").val(),
        text: $("#note-text").val(),
        completed: false,
        archived: false,
        priority: priorityNumber,
        categories: null,
        timestamp: Date.now()
        }

        $("#submit").attr("disabled", "disabled");
        //$("#loading-icon").css("visibility", "visible");  
        $("#loading-icon").fadeIn(600);

        //console.log(noteObject);
        $.post(base_url + "newNote", noteObject, (data) => {
            console.log(data.saved);

            if (data.saved === true) {
                setTimeout(() => {
                    $("#submit").removeAttr("disabled");
                    //$("loading-icon").css("visibility", "hidden");
                    $("#loading-icon").fadeOut(600);
                    //$("#submit").removeAttr("disabled");
                    $("#submit-message").text("Successfully saved " + noteObject.title);
                    $("#submit-message").fadeIn(600);
                    
                    /*
                    $("#note-title").val("");
                    $("#note-text").val("");
                    $("#note-priority").val("1"); 

                    const html = `
                    <tr>
                        <td>${data.list[i].priority}</td>
                        <td>${data.list[i].title}</td>
                        <td>${data.list[i].text}</td>
                    </tr>
                `;  */
                // Add note entered through the web page.
                const html = `
                <tr>
                    <td>${noteObject.priority}</td>
                    <td>${noteObject.title}</td>
                    <td>${noteObject.text}</td>
                </tr>
                `; 

            
                    $("#tasks tbody").append(html);

                    setTimeout(() => {
                        $("#submit-message").fadeOut(600, () => {
                            $("#submit-message").text("");
                        });
                    }, 4000);
                    //}, 2000); //2000 is the wait time in miliseconds to wait for user input
                }, 2000);
            };

        });

    });


});

//Helper function **
function addToList(taskObject) {
    const html = `
            <tr data-task-id="${taskObject._id}">
                <td>${taskObject.priority}</td>
                <td>${taskObject.title}</td>
                <td>${taskObject.text}</td>
                <td><button>Delete</button></td>
                <td><img src="images/822.gif" width="22" height="22" alt="Loading Icon" /></td>
                // <td>${data.list[i].priority}</td>
                // <td>${data.list[i].title}</td>
                // <td>${data.list[i].text}</td>
                // <td><button data-task-id="${data.list[i]._id}])>Delete</button></td>

            </tr>
        `;

            $("#tasks tbody").append(html);
}

function refreshDeleteButtons() {

    // Remove any previously existing click event handlers. 
    $("#tasks tbody tr td button").off();

    // Update selector to avoid selecting the update button.
    $("#tasks tbody tr td button").click(function() {
    // Pass the JavaScript object that was pressed on to the jQuery selector.

    //console.log("clicked!");
    
        $(this).attr("disabled", "disabled");

        $(this).parent().next().children("img").fadeIn(600);

        let taskID = $(this).parent().parent().attri("data-task-id");

    // console.log($(this));
    // //$(this).remove();
    // $(this).parent().parent().attr("data-task-id");
    
    //console.log(taskID);

        let actionObject = {
            id: taskID,
            action: "delete",
            data: null
        }

        $.post(base_url + "modify", actionObject, (data) => {

            setTimeout(() => {
            // $(this).parent().parent().remove();
            $(this).parent().parent().fadeOut(600);
            }, 1200);
        });

    });
}