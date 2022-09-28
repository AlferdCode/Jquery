// 获取元素
var province = document.querySelector('#province');
var city = document.querySelector('#city');
var area = document.querySelector('#area');

console.log(city_code);

// 给省份绑定数据
function bindProvince(data) {
    var html = `<option value="0">请选择...</option>`;
    data.forEach(function (v) {
        html += `<option value="${v.code}">${v.name}</option>`;
    })
    province.innerHTML = html;
}
// 绑定城市  形参provinceId省份id
function bindCity(provinceId) {
    var html = `<option value="0">请选择...</option>`;
    if (provinceId != 0) {
        // 筛选出省份。注意：数据类型是数组
        var pro = city_code.filter(function (v) {
            return v.code == provinceId;
        });
        // 循环某省中的城市。
        if (pro[0].city) {
            pro[0].city.forEach(function (v) {
                html += `<option value="${v.code}">${v.name}</option>`;
            })
        }
    }
    city.innerHTML = html;
}
// 绑定区域数据
function bindArea(provinceId, cityId) {
    var html = `<option value="0">请选择...</option>`;
    if (cityId != 0) {
        // 先取出省
        var pro = city_code.filter(function (v) {
            return v.code == provinceId;
        });
        // console.log(pro);
        // 从省里取出所有城市
        var cities = pro[0].city;
        // console.log(cities);
        // 从所有城市里面筛选一个城市。
        var city = cities.filter(function (v) {
            return v.code == cityId;
        })[0];
        // console.log(city);
        // 取出某个城市下的所有区域
        var ar = city.area;
        // console.log(ar);
        // 循环所有的区域，产生选项。
        ar.forEach(function (v) {
            html += `<option value="${v.code}">${v.name}</option>`;
        })
    }
    area.innerHTML = html;
}

// 页面第一次渲染时候，绑定省份数据。
bindProvince(city_code);
// 页面第一次渲染时候，绑定城市数据。
bindCity(0);
// 页面第一次渲染时候，绑定区域数据。
bindArea(0, 0);

// 省份发生改变时，重新绑定城市和区域。
province.addEventListener('change', function () {
    var provinceId = this.selectedOptions[0].value;
    bindCity(provinceId);
    bindArea(provinceId, 0);
});

// 城市发生改变时，重新绑定区域
city.addEventListener('change', function () {
    var provinceId = province.selectedOptions[0].value;
    var cityId = this.selectedOptions[0].value;
    bindArea(provinceId, cityId);
})