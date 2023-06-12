class Marquee {
    constructor(marqueeDisplay) {
        this.marqueeDisplay = marqueeDisplay;
    }
    load() {
        fetch("https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/quotes/nasdaq")
            .then(response => response.json())
            .then(data => {
                const myMarquee = this.marqueeDisplay;
                myMarquee.classList.add("marquee");
                for (let i = 0; i < 50; i++) {
                    //console.log(data[i].price);
                    this.marqueeDisplay.innerHTML += `<div class=marquee><span> ${data[i].symbol} ${data[i].price}$ </span></div> &nbsp`;
                    //console.log(this.marqueeDisplay);
                    //document.getElementById('marquee')
                }
            })
    }
}


// class Marquee {
//     constructor(htmlElement) {
//         this.htmlElement = htmlElement;
//     }
//         async getMarquee() {
//             const server = `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/quotes/nasdaq`
//             console.log(server);
//             const response = await fetch(server);
//             console.log(response);
//             const marqueeData = await response.json();
//             console.log(marqueeData);
//             marqueeData = [];
//             const slicedData = marqueeData.slice(0, 100);
//             // fetch(server).then((response) => {
//             //     console.log(response);
//             //     return response.json()
//             // })
//             //     .then((data) => {
//             //         console.log(data);
//             //         displayMarquee(data)
//             //         return data;
//             //     });
//         }
//         displayMarquee(data){
//           for (i = 0; i < data.length - 1; i++) {
//             this.htmlElemnt.innerHTML += `<div class=marquee><span> ${data[i].symbol} ${data[i].price}$ </span></div>`;
//           }
//         const stocksMarquee = new Marquee(document.getElementById("marqueeInfo"));
//         displayMarquee(stocksMarquee);
//           }};

