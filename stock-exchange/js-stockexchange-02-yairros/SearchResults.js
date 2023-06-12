class SearchResults {
    constructor(resultsHtml) {
        this.resultsHtml = resultsHtml;
    }
    async renderResults(companies) {
        this.resultsHtml.innerHTML = "";
        for (let i = 0; i < companies.length - 1; i++) {
            let comapnyList = companies[i].name + " " + companies[i].symbol;
            let compInfo = await getCompanyProfile(companies[i].symbol);
            results.innerHTML += `<li style="list-style: none;"><a href="./company.html?symbol=${companies[i].symbol}" target="_blank"> <img src="${compInfo.image}" width="50" height="50" style=border-radius:50%> ${comapnyList} <span id="colorChange" class="${compInfo.changesPercentage < 0 ? "text-danger" : "text-success"}">(${compInfo.changesPercentage < 0 ? "" : "+"}${compInfo.changesPercentage}%) </span></a></li>`;
        }
    }
};

async function getCompanyProfile(symbol) {
    const response = await fetch(`https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/company/profile/${symbol}`);
    const profileData = await response.json();
    console.log(profileData.profile);
    return profileData.profile
}
