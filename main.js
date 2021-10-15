

document.addEventListener("DOMContentLoaded", () => {
    let elemB = document.getElementById("betoltes");
    elemB.addEventListener("click", (e) => {
        lekerdezes();
    });
    let elemR = document.getElementById("reset");
    elemR.addEventListener("click", (e) => {
        
    });
});

function lekerdezes() {
    let fetchEredmeny = fetch("movies.json").then((data) => {
        if (data.ok) {
            return data.json();
        } else {
            return Promise.reject(
                new Error("A szerver " + data.status + " hibát adott")
            );
        }
    })
    .then(adat => {
        adat.sort((a, b) =>{
            return b.year - a.year;});
        adat.forEach(element => {
            var ul=document.createElement('ul');
            var li=document.createElement('li');
            li.innerHTML =  "<p>" + element.title + "(" + element.year +")</p>";
            ul.appendChild(li);
            document.getElementById('lista').appendChild(ul);
        });
    })
    .catch(e => {
        console.log(e);
        let h = document.getElementById("hibauzenet").style.visibility = "visible";
        setTimeout(lekerdezes, 5000);
    })
    .finally(() => {});;
}
