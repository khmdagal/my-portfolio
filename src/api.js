let api;

const hostAPIs = {
    "productionAPI": "https://my-port-folio-backend.onrender.com",
    "developmentAPI": "http://localhost:3500"
}


if(hostAPIs.productionAPI === undefined){
    api = hostAPIs.developmentAPI
} else{
    api = hostAPIs.productionAPI
}

export default api