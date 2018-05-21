$("button").click(function ()
{
    var total = Number($("#price span").html());
    var priceOfItem = Number($(this).siblings(".prices").attr("data_value"));
    total += priceOfItem; 
    $("#price span").html(total.toFixed(2));
    

    //increments the cart quantity everytime add to cart is clicked
    var quantity = Number($("#select span").html());
    quantity++;
    $("#select span").html(quantity);

});