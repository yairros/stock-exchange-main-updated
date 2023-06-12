class SearchForm {
    constructor(formHTML) {
        this.formHTML = formHTML;
    }

    async onSearch(companies) {
        this.formHTML.innerHTML = `<div class="input-group mb-3">
            <input type="text" id="input" class="form-control" placeholder="aa" aria-label="Recipient's username" aria-describedby="button-addon2">
            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
          </div>`;
        const btn = document.getElementById("button-addon2");
        btn.addEventListener("click", async () => {
            let search = document.getElementById("input");
            const response1 = await fetch(`https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/search?query=${search.value}&limit=10&exchange=NASDAQ`);
            const companyData = await response1.json();
            companies(companyData);
            });
        }}          


