var ManagePlantSubFamily = {};

$(document).ready(function() {
    ManagePlantSubFamily.getPlantSubFamilyList();
});

ManagePlantSubFamily.getPlantSubFamilyList = function(){
    Header.showPopup('Please Wait...');
    $.ajax({
        type: "GET",
        url: config.API_ENDPOINT + "/api/plant-data/subfamily/list",
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
