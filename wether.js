
async function search(a) {
    let info = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${a}&days=3`);
    let g = await info.json();



    display(g);

}

search("cairo");

var inpot = document.getElementById('findinpute');





inpot.addEventListener("keyup", function () {
    let result = inpot.value;
    if (result.length > 2) {
        search(result);
    }
    else {
        search('cairo');

    }

})


var e = document.querySelector(".rowof3div");
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function display(api) {


    var date = new Date();
    var date2 = new Date(api.forecast.forecastday[1].date)
    var date3 = new Date(api.forecast.forecastday[2].date)

    e.innerHTML = `
                <div class="col-md-4 p-0 m-0  ">

                    <div class="card cen ">
                        <div class="head d-flex justify-content-between align-items-center cen colr  ">
                            <p id="firstday" class="ps-1">${days[date.getDay()]}</p>
                            <p id="firstdate" class="pe-1">${date.getDate() + " " + monthNames[date.getMonth()]}</p>
                        </div>

                        <div class="card-body">

                                <h5 id="country" class="card-title colr"> ${api.location.name}</h5>

                            <div class="degree d-flex ">
                                <p id="firsttempreture" class="deg    ">${api.current.temp_c} </p>
                                <div class="tempr  d-flex">
                                    <p class="dg">o</p>
                                    <p class="deg">C</p>
                                    <img src="http:${api.current.condition.icon}">
                                </div>
                            </div>
                            <p class="colr">${api.current.condition.text}</p>
                            <div class="umbrella d-flex">
                                <div class="d-flex">
                                    <i class="fas fa-umbrella fs-4 pe-1"></i>
                                    <div class="d-flex pe-3 ">
                                        <p id="rain">20</p>
                                        <p>%</p>
                                    </div>
                                </div>

                                <div class="d-flex pe-3">
                                    <i class="fas fa-wind fs-4 pe-1"></i>
                                    <p id="wind">18</p>
                                    <p>km/h</p>
                                </div>


                                <div class="d-flex pe-3 ">

                                    <i class="fas fa-wind fs-4 pe-1"></i>
                                    <p id="direction">East</p>

                                </div>



                            </div>
                        </div>


                    </div>







                </div>




                <!--col-->


                <div class="col-md-4 gray colr p-0 m-0">
                    <div class="d-flex justify-content-center bg-transparent cool">
                        <p id="secondday">${days[date2.getDay()]}</p>
                    </div>
                    <div class="logo d-flex justify-content-center">
                        <img src="http:${api.forecast.forecastday[1].day.condition.icon}">
                    </div>
                    <div class=" d-flex justify-content-center pt-3 he ">
                        <p id="secondtempreture" class=" fs-1   ">${api.forecast.forecastday[1].day.maxtemp_c} </p>
                        <div class="tempr  d-flex">
                            <p class="dg fs-5">o</p>
                            <p class="fs-1">C</p>
                        </div>

                    </div>
                    <div class=" d-flex justify-content-center pt-4 ">
                        <p id="undersecondtempreture" class=" fs-5   ">${api.forecast.forecastday[1].day.mintemp_c} </p>
                        <div class="tempr  d-flex">
                            <p class="dg fs-6">o</p>


                        </div>

                    </div>

                    <div class="d-flex justify-content-center">
                        <p id="predection">${api.forecast.forecastday[1].day.condition.text}</p>
                    </div>
                </div>


                <!--col-->


                <div class="col-md-4 cen colr cool p-0 m-0">
                    <div class="d-flex justify-content-center cool">
                        <p id="thirdday">${days[date3.getDay()]}</p>
                    </div>
                    <div class="logo d-flex justify-content-center">
                       <img src="http:${api.forecast.forecastday[2].day.condition.icon}">
                    </div>
                    <div class=" d-flex justify-content-center pt-3 he ">
                        <p id="thirdtempreture" class=" fs-1   ">${api.forecast.forecastday[2].day.maxtemp_c} </p>
                        <div class="tempr  d-flex">
                            <p class="dg fs-5">o</p>
                            <p class="fs-1">C</p>
                        </div>

                    </div>
                    <div class=" d-flex justify-content-center pt-4 ">
                        <p id="underthirdtempreture" class=" fs-5   ">${api.forecast.forecastday[2].day.mintemp_c} </p>
                        <div class="tempr  d-flex">
                            <p class="dg fs-6">o</p>


                        </div>

                    </div>

                    <div class="d-flex justify-content-center">
                        <p id="predection2">${api.forecast.forecastday[2].day.condition.text}</p>
                    </div>
                </div>


                <!--col-->
`;
}







