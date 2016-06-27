function addItem() {
    //check if the targeting is working
    //alert("I've just activated the addItem() function");

    //get the value of the input box
    var itemValue = $('#addItemValue').val();

    //check if the logic makes sense -> make sure that you get the value you are adding in the html
    //alert(itemValue);

    //validate input
    if (itemValue.length === 0) {
        alert('Must enter a value');
    }

    //if the input is valid ....
    else {
        //dynamicaly create one row inside the shopping list
        var row = $('<li><span class="list">' + itemValue + '</span></li>');

        //add each row to the previous ones
        $('.item-list-lines').append(row);

        //empty the input box after submit by resetting the value
        $('#addItemValue').val('');
    }
}

$(document).ready(function(){

});
