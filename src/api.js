
const hostAPIs = {
    //"productionAPI": "https://my-portfolio-backend-production-685d.up.railway.app",
    "developmentAPI": "http://localhost:3500"
};

let api;
if (!hostAPIs.productionAPI) {
    api = hostAPIs.developmentAPI
} else {
    api = hostAPIs.developmentAPI
}

export default api