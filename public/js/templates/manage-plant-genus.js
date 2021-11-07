var ManagePlantGenus = {};

$(document).ready(function() {
    ManagePlantGenus.getPlantGenusList();
});

ManagePlantGenus.getPlantGenusList = function(){
    Header.showPopup('Please Wait...');
    $.ajax({
        type: "GET",
        url: config.API_ENDPOINT + "/api/plant-data/genus/list",
        success: function (response) {
            console.log(response)
            if(response.responseData.code == 200){
                Header.closePopup();
              
               
            }else{
                Header.closePopup();
                Header.showWarningWithRedirect(response.responseData.description);
            }
        }
    });
   

}
