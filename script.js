let menuclick = 1;

function menuFun() {
    document.getElementById("menu-item").style.display = menuclick ? 'block' : 'none';
    menuclick = !menuclick;
}


if (window.innerWidth > 600) {
    // document.getElementById("check").innerHTML = "laptop";
    document.getElementById("nav-bar").innerHTML = `
    <table class="nav-bar-table">
        <th>
        <td style="width:50vw;"><h1>&nbsp; 🇮🇳 &nbsp;&nbsp; Indian Railways</h1></td>
        <td><a href="timetable.html">Train Timetable</a></td>
        <td><a href="">Book Ticket</a></td>
        <td><a href="">Cancel Ticket</a></td>
        <td><a href="">Live Tracking</a></td>
        </th>
    </table>`;
}
else {
    // document.getElementById("check").innerHTML = "phone";
    document.getElementById("nav-bar").innerHTML = `
    
    <table class="nav-bar-table">
        <tr>
            <td style="width:80vw"><h1>🇮🇳 &nbsp; &nbsp;Indian Railways</h1></td> 
            <td style="width:10vw" id='menu' onclick="menuFun()" ><button><h1> = </h1></button></td>
        </tr>
    </table>`;
}
