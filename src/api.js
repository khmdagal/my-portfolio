let api;

const hostAPIs = {
    "productionAPI": "https://my-portfolio-backend-production-685d.up.railway.app",
    "developmentAPI": "http://localhost:3500"
}


if(hostAPIs.productionAPI === undefined){
    api = hostAPIs.developmentAPI
} else{
    api = hostAPIs.productionAPI
}

export default api