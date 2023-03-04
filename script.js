let saveBlogbut = document.getElementById('saveBlogbut');
let text1 = document.getElementById('exampleFormControlInput1');
let text2 = document.getElementById('exampleFormControlTextarea1')
let postbody = document.getElementById("postbody");
let editmodal = document.getElementById('exampleModal2');

let dataArr = [];
function datetimerformatter(data) {
    const arr = data.split(",");
    const time = arr[1].split(":");
    if (parseInt(time[0]) >= 12) {
        const tval = parseInt(time[0]) == 12 ? "12" : time[0] % 12
        return arr[0] + "  at " + tval + ":" + time[1] + " PM";
    }
    else {
        return arr[0] + "  at " + time[0] + ":" + time[1] + " AM";
    }
}
function deletedata(id) {
    dataArr = dataArr.filter((item, ind) => {
        return item.id != id;
    })
    postbody.innerHTML = dataArr.map((item, ind) => {
        return (` <div class="row me-4 ms-4 my-4 p-3 border border-dark " >
        <div class="heading my-2">
          <h1>${item.heading}</h1>
        </div>

        <div class="contents">
        ${item.post}
        </div>

        <div class="dateshower">
            <div class="my-4">
                <button type="button" id=${item.id} onclick=editdata(this.id) class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                     Edit Post
                 </button>
                   <button type="button" id=${item.id} onclick=deletedata(this.id) class="btn btn-dark">Delete Post</button>
                 </div>
        
        
                  <div >
                  ${item.text}: ${datetimerformatter(new Date().toLocaleString())}
                 </div>
        
        </div>
        </div> `)
    }).join("")

    console.log(dataArr)
}
function editsavepost(data1, data2, id) {

    console.log(data1, data2, id)
    const data = { id: id, heading: data1, post: data2, text: "Last Updated At" }
    dataArr = dataArr.map((item, ind) => {
        if (item.id == id) {
            return data;
        }
        else {
            return item;
        }
    })
    postbody.innerHTML = dataArr.map((item, ind) => {
        return (` <div class="row me-4 ms-4 my-4 p-3 border border-dark " >
        <div class="heading my-2">
          <h1>${item.heading}</h1>
        </div>

        <div class="contents">
        ${item.post}
        </div>

        <div class="dateshower">
            <div class="my-4">
                <button type="button" id=${item.id} onclick=editdata(this.id) class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                     Edit Post
                 </button>
                   <button type="button" id=${item.id} onclick=deletedata(this.id) class="btn btn-dark">Delete Post</button>
                 </div>
        
        
                  <div >
                 ${item.text}: ${datetimerformatter(new Date().toLocaleString())}
                 </div>
        
        </div>
        </div> `)
    }).join("")
    console.log(dataArr)
}



