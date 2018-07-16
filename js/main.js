window.onload = function(){
    //模拟数据
    var data = [
        {
            id : 1,
            text : '届辽宁省公费师范毕业生网上双选活动1',
            time : '2018/7/8'
        },
        {
            id : 2,
            text : '届辽宁省公费师范毕业生网上双选活动2',
            time : '2018/7/8'
        },
        {
            id : 3,
            text : '届辽宁省公费师范毕业生网上双选活动3',
            time : '2018/7/8'
        },
        {
            id : 4,
            text : '届辽宁省公费师范毕业生网上双选活动4',
            time : '2018/7/8'
        },
        {
            id : 5,
            text : '届辽宁省公费师范毕业生网上双选活动5',
            time : '2018/7/8'
        },
        {
            id : 6,
            text : '届辽宁省公费师范毕业生网上双选活动6',
            time : '2018/7/8'
        },
        {
            id : 7,
            text : '届辽宁省公费师范毕业生网上双选活动7',
            time : '2018/7/8'
        },
        {
            id : 8,
            text : '届辽宁省公费师范毕业生网上双选活动8',
            time : '2018/7/8'
        },
        {
            id : 9,
            text : '届辽宁省公费师范毕业生网上双选活动9',
            time : '2018/7/8'
        },
        {
            id : 10,
            text : '届辽宁省公费师范毕业生网上双选活动q',
            time : '2018/7/8'
        },
        {
            id : 11,
            text : '届辽宁省公费师范毕业生网上双选活动w',
            time : '2018/7/8'
        },
        {
            id : 12,
            text : '届辽宁省公费师范毕业生网上双选活动e',
            time : '2018/7/8'
        },{
            id : 13,
            text : '届辽宁省公费师范毕业生网上双选活动r',
            time : '2018/7/8'
        },
        {
            id : 14,
            text : '届辽宁省公费师范毕业生网上双选活动t',
            time : '2018/7/8'
        },
        {
            id : 15,
            text : '届辽宁省公费师范毕业生网上双选活动y',
            time : '2018/7/8'
        },
        {
            id : 16,
            text : '届辽宁省公费师范毕业生网上双选活动u',
            time : '2018/7/8'
        },
        {
            id : 17,
            text : '届辽宁省公费师范毕业生网上双选活动i',
            time : '2018/7/8'
        },
        {
            id : 18,
            text : '届辽宁省公费师范毕业生网上双选活动o',
            time : '2018/7/8'
        }
    ];
    //搜索
    const oSearch = document.querySelector('.search input');
    oSearch.onfocus = function(){
        this.style.width = '520px';
    }
    oSearch.onblur = function(){
        this.style.width = '450px';
    }
    //注册登录
    const login_up_in = document.querySelectorAll("#right>.login>h3>span");
    const aOff = document.querySelectorAll('[onOff=false]');
    const oOn = document.querySelector('[onOff=true]')
    
    // console.log(login_up_in)
    login_up_in[0].onclick = function(){
        aOff.forEach(ele => {
            ele.style.display = "none";
        });
        oOn.style.display = "block";
        login_up_in[0].className = 'active';
        login_up_in[1].className = '';
    }
    login_up_in[1].onclick = function(){
        aOff.forEach(ele => {
            ele.style.display = "block";
        });
        oOn.style.display = "none";
        login_up_in[0].className = '';
        login_up_in[1].className = 'active';
    }
    //第二块

    const noticeAffiche = document.querySelector('.noticeAffiche'); 
    //通知 and 招聘 更多
    const btn = noticeAffiche.querySelectorAll('h3 span');
    const ontice = noticeAffiche.querySelector('.ontice');
    const affiche = noticeAffiche.querySelector('.affiche');
    let i = 0;
    //第一次渲染 9条 数据 并设置 title
    dataLoad(ontice,data,9);
    dataLoad(affiche,data,9,true);
    //通知
    const aLi = noticeAffiche.querySelectorAll('.ontice li');
    //招聘
    const aLi2 = noticeAffiche.querySelectorAll('.affiche li');
    title(aLi);
    title(aLi2);
    function title(arr){
        for(let i =0;i<arr.length;i++){
            //aLi2[i].innerHTML = (i+1) + ".&nbsp;&nbsp;" + aLi2[i].innerHTML;
            arr[i].firstElementChild.title = arr[i].firstElementChild.innerHTML;
        }
    }
    //数据渲染
    function dataLoad(obj,data,len,yesNo=false){
        for(let i =0;i<len;i++){
            let li = document.createElement('li');
            if(yesNo){
                li.innerHTML = `
                    ${data[i].id}.&nbsp;&nbsp;
                    <a>${data[i].text}</a>
                    <span>${data[i].time}</span>
                `;
            }else{
                li.innerHTML = `
                    ${data[i].id}.&nbsp;&nbsp;
                    <a>${data[i].text}</a>
                `;
            }
            obj.querySelector('ul').appendChild(li);
        }
    }
}