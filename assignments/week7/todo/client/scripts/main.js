const base_url = "http://localhost:3001/";

$(document).ready(() => {
 //       console.log("Hello!");

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
                    $("#loading-icon").fadeIn(600);
                    //$("#submit").removeAttr("disabled");
                    $("#submit-message").text("Successfully saved" + noteObject.title);
                    $("#submit-message").fadeIn(600);
                    setTimeout(() => {
                        $("#submit-message").fadeIn(600, () => {
                            $("#submit-message").text("");
                        });
                    }, 4000);
                    //}, 2000); //2000 is the wait time in miliseconds to wait for user input
                }, 2000);
            };

        });

    });


});