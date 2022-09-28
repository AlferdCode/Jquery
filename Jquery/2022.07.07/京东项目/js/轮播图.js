var imgSrc = ['https://imgcps.jd.com/ling4/100019386660/5Lqs6YCJ5aW96LSn/5L2g5YC85b6X5oul5pyJ/p-5bd8253082acdd181d02fa55/5c6c6b80/cr/s/q.jpg', 'https://imgcps.jd.com/img-cubic/creative_server_cia/v2/2000366/100008646647/FocusFullshop/CkRqZnMvdDEvMjA4ODQ1LzM4LzIzMjExLzUwNzY2OC82MmJjYTY0YkVmNThhNTQ2OS84ZTE2NmVhZmM5ODhhODY4LnBuZxIJNS10eV8wXzU2MAI47ot6QhQKEHphayHmr5vnu5LnjqnlhbcQAEIRCg3np5LmnYDku7c5Ni45EAFCEAoM56uL5Y2z5oqi6LStEAJCCgoG5LyY6YCJEAdY96_rx_QC/cr/s/q.jpg', 'https://img10.360buyimg.com/pop/s1180x940_jfs/t1/181321/22/15449/44962/60fa92bfE5575ac66/447fc490be09c8c9.jpg.webp', 'https://imgcps.jd.com/ling4/100019718275/5Lqs6YCJ5aW96LSn/5L2g5YC85b6X5oul5pyJ/p-5bd8253082acdd181d02fa6d/f6dfd16f/cr/s/q.jpg', 'https://imgcps.jd.com/img-cubic/creative_server_cia/v2/2000366/100030441714/FocusFullshop/CkNqZnMvdDEvNTI0MzcvNDAvMTg5OTAvNjAyOTI2LzYyYmEwNDM4RWZmY2ZmMzNiLzBmOGRhZmMwODMxNzg3YjgucG5nEgkzLXR5XzBfNTQwAjjui3pCFAoQdml2b2lRT08gTmVvNSBTRRAAQhEKDea7oTE4MDDlh48zMDAQAUIQCgznq4vljbPmiqLotK0QAkIKCgbkvJjotKgQB1jy0Z3S9AI/cr/s/q.jpg', 'https://imgcps.jd.com/ling4/10033163727700/5Lqs6YCJ5aW96LSn/5L2g5YC85b6X5oul5pyJ/p-5bd8253082acdd181d02fa47/b05d9e61/cr/s/q.jpg', 'https://imgcps.jd.com/ling4/100017835099/5Lqs6YCJ5aW96LSn/5L2g5YC85b6X5oul5pyJ/p-5bd8253082acdd181d02fa75/90b54268/cr/s/q.jpg', 'https://imgcps.jd.com/ling4/100013964134/5Lqs6YCJ5aW96LSn/5L2g5YC85b6X5oul5pyJ/p-5bd8253082acdd181d02f9f7/c84daada/cr/s/q.jpg']

document.addEventListener('DOMContentLoaded', function () {





    //开始


var olLB = document.querySelector('.main-w-center-left ol');
var imgLB = document.querySelector('.main-w-center-left img ');
imgLB.style.width = '580px'
imgLB.style.height = '100%'
console.log(imgSrc.length);
    for (var i = 0; i < imgSrc.length; i++) {
        var minLi = document.createElement('li');
        olLB.appendChild(minLi);
    };
    imgLB.src = imgSrc[0];
    Array.from(olLB.children).forEach(function(item,index){
        item.addEventListener('mouseover',function(){
            imgLB.src  = imgSrc[index];
        });
    })
    var timer = setInterval(fn,4000);
    var flag = 0;
    function fn(){
        flag += 1;
        if(flag >= 9){
            flag = 0 ;
        }
        imgLB.src = imgSrc[flag];
    }
    //  获取图片 利用下标 改变改变图片src 
    // li的下标

    
















})