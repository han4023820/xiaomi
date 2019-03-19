/*
* @Author: AUSU
* @Date:   2018-08-15 17:46:06
* @Last Modified by:   AUSU
* @Last Modified time: 2018-09-02 14:48:28
*/
 // 先根据banner图片的数量调整轮播点的数量

      // 先获取所有的banner图片
      let img=document.querySelectorAll("#bannerbox img");

      // 设置img的个数等于img的长度
      let imgNum=img.length;
     
      // 获取banner点
      let bannerDian=document.querySelector("#lunbodian");
    
      for(let i=0; i<imgNum; i++){
          
        // 创建li对象盒子
        let liObj=document.createElement("li");
       
        // 用if判断当是第一张图片是，让圆点显示出来
        
        if(i==0){
          liObj.className='active';
        };
        
        // 将这个轮播点的个数追加到li盒子中
        bannerDian.appendChild(liObj);
       
      }

      // 轮播图动画      
      // 获取每一个圆点     
      let dian=document.querySelectorAll("#lunbodian li");

      // // 声明一个变量
      
      let n=0;

      // 设置一个定时器
      ding=setInterval(rightmove,3000);

      
      // 图片右向滑动，封装成一个函数
      function rightmove(){

        n++
      
        // if判断，当到达最后一张图片时，变回到第一张
      if(n>=imgNum){
        n=0;
      };

      // 用for循环，在给选中到的添加active之前，去除别的active
      for( let i=0;i<imgNum; i++){
        // 消除其他人的active类
        img[i].className=" ";
        dian[i].className=" ";
        
      }

        // 给当前选择到的图片和圆点添加类名active
        
        img[n].className="active";

        dian[n].className="active";
      }

       // 图片左侧滑动动画，并且封装成的函数leftmove
       // 
       function leftmove(){
        n--;

      // if判断，当到达最后一张图片时，变回到第一张
      if(n<0){
        n=imgNum-1;
      };

      // 用for循环，在给选中到的添加active之前，去除别的active
      for( let i=0;i<imgNum; i++){
        // 消除其他人的active类
        img[i].className=" ";
        dian[i].className=" ";
      
      }
      // 给当前选择到的图片加类名active
       img[n].className="active";

       dian[n].className="active";

       }

      //获取左侧点击按钮     
        let left=document.querySelector("#Bntleft");
        // 获取右侧点击按钮     
        let right=document.querySelector("#Bntright");
        // 绑定左侧按钮点击事件
        left.onclick=function(){

          // 调用函数
          leftmove();

        }
        // 绑定右侧按钮点击事件
        right.onclick=function(){

          // 调用函数
          rightmove();
        }


       // 鼠标移入图片时定时器停止，离开图片开始定时器
       
       // 获取经过的图片区域
       
       let bannerImgObj=document.querySelector(".bannerbox ");
        
       //绑定鼠标经过事件
       bannerImgObj.onmouseenter=function(){

        // 鼠标经过要清除计时器
        clearInterval(ding);
      
      }
      bannerImgObj.onmouseout=function(){

         // 鼠标离开时重新设定定时器
        ding=setInterval(rightmove,3000);

      }

      // 鼠标点击小点
      // for循环去遍历到所有的小点
      for(let i=0; i<dian.length; i++){
        // 绑定小点点击事件
      dian[i].onclick=function(){

        // 点击小点之前，给所有的小点图片的类去除
        for(let j=0; j<dian.length; j++){
          // 去除所有点的类名
          dian[j].className=" ";

          // 去除所有的图片类型
          img[j].className=" ";

        }

        // 点击到哪个小点，给哪个小点加active类
        this.className="active";

        // 点击到哪个小点，给其对应的图片也加上active类，让同步显示
        img[i].className="active";

        //让点击完之后的和接下来自动的定时器可以关联
        //同时改变定时器的n
        n=i;
      }
    }
      
      // 小米倒计时
      
      // 先声明并获取当前时间
      setTime(); 
      setInterval(setTime,1000);

      function setTime(){
      let nowTime=new Date;
      let nowTimeChuo=nowTime.getTime();
      // 声明一个结束时间的函数
      let futuretime=new Date;
      // 设置活动结束时间
      futuretime.setHours(24);
      futuretime.setMinutes(0);
      futuretime.setSeconds(0);

      let futureTimeChuo=futuretime.getTime();
      // 时间差的总毫秒数，除以1000
      let shijiancha=(futureTimeChuo-nowTimeChuo)/1000;
      // 计算出倒计时的具体时分秒
      let hours=Math.floor(shijiancha/60/60);
      if(hours<10){
        hours="0"+hours;
      }
      let minutes=Math.floor(shijiancha/60-hours*60);
      if(minutes<10){
        minutes="0"+minutes;
      }
      let scends=Math.floor(shijiancha-hours*60*60-minutes*60);
      if(scends<10){
        scends="0"+scends;
      }

      // 获取时分秒框
      let xiaoshi=document.querySelector("#hours");
      let fen=document.querySelector("#minutes");
      let miao=document.querySelector("#scends");
      // 将得出的时分秒分别放入各自的HTml中去显示
      xiaoshi.innerHTML=hours;
      fen.innerHTML=minutes;
      miao.innerHTML=scends;

   };




      // 小米闪购列表
      
      // 声明每一个内容块和边距的宽度
      let liWidth=239;
      //获取右侧点击按钮
      let rightBtn=document.querySelector("#right-btn");
     
      // 获取左侧点击按钮
      let leftBtn=document.querySelector("#left-btn");

      // 获取所有的内容块
      let lis=document.querySelectorAll(".list li");
      
      // 获取整个一页的内容
      let neirong=document. querySelector(".list ul");
     

      // 总内容的宽度
      neirong.style.width=(liWidth*lis.length)+"px";
     

      // 声明变量页数
      let y=0;

      // 声明每次点击移动时，移动5个内容块的宽度
      
      let mainWidth=liWidth*5;

      // 计算最大页码数,总长度除以每页长度，向上取整值  
      let maxPage=Math.ceil(liWidth*lis.length/mainWidth);
      
      // 绑定点击右键按钮事件
      rightBtn.onclick=function(){
        y++
      // 用If判断是否到达最大页数，到达的话停止页数的后翻
      if(y>=maxPage){
        y=maxPage-1;
       
      };
 
      // 如果到达最后一页时，左边键按钮的颜色要深色
      if(y==maxPage-1){

       leftBtn.className="jiantouleft  active";
      };
      rightBtn.className="jiantouright";
      neirong.style.marginLeft=y*mainWidth*-1-40+"px";
      }
      // 设置左侧按钮绑定事件
      leftBtn.onclick=function(){
        y--;
      // 用if条件判断，当n=0，左滑到第一张时不能再往左滑动
      if(y<=0){
        y=0
      // 设置当滑动到第一页时，左边按钮显示active,右边按钮不显示
      rightBtn.className="jiantouright active"
      leftBtn.className="jiantouleft"
      }

      neirong.style.marginLeft=(y*mainWidth*-1)+"px";
}

    // 推荐内容列表
    
    // 获取每一单个的内容块的宽度和边距
    let nrWidth=305;

    //获取所有的内容块
    let nrs=document.querySelectorAll(".tuijianmain li");
   
    // 获取左侧点击按钮
    let leftJt=document.querySelector(".leftjt");
    
    // 获取右侧点击按钮
    let  rightJt=document.querySelector(".rightjt")

    // 获取一整页的内容
    let ye=document.querySelector(".tuijianmain ul");

    // 页面总宽度
    let yeWith=nrWidth*nrs.length;
   
    // 获取最大页码,总长度除以每页长度向上取整值
    let MaxPage=Math.ceil(yeWith/(nrWidth*5));
    
    // 声明一个页数的变量
    let p=0;

    // 声明每一次点击移动时，移动5个内容块的宽度
    let moveWith=nrWidth*5;
    // 绑定右键的点击动作
    rightJt.onclick=function(){
      p++

    // 用if判断当超过最大页数是让他等于最大页数
    if(p>=MaxPage){
      p=MaxPage-1;  
    };
    // 当到达最后一页时，右键按钮颜色变淡，左边按钮颜色变深
    if(p==MaxPage-1){

      rightJt.className="rightjt active"
      leftJt.className="leftjt ";
    };
     // 移动整个页面向左移动
     ye.style.marginLeft=moveWith*-1+50+"px";
    }

    // 绑定左键的点击事件
    leftJt.onclick=function(){
      // 用If判断当到达第一页时
      if(p==1){
        this.className="leftjt active";
      }
      rightJt.className="rightjt "
      // 整个页面向右移动
      ye.style.marginLeft=0;
    }
  






    // top按钮制作
    
    // 获取这个top按钮
    let hui=document.querySelector("#top");

    // 声明定时器的名字
    let  guan;

    // 实时监测轮动条距离顶部的距离
    window.onscroll=function(){

    // 查看滚动条距离顶部的距离
    let height=document.documentElement.scrollTop;

    // if判断当这个滚动条距离顶部达到一定的距离时，按钮显现，否则隐藏
    if(height>=500){
      hui.style.display="block";
    }else{
      hui.style.display="none";
    }
    
    // 当到达顶部时要清除定时器
    if(height<=0){
      clearInterval(guan);

      };
    }

    // 点击回到顶部
    
    // 绑定这个按钮的点击事件
    hui.onclick=function(){

    // 在定时器开始之前要先清空定时器
    clearInterval(guan);

     guan=setInterval(function(){

    // 让滚动条回到原点
    document.documentElement.scrollTop=0;

      },10);
      
    }
  
 





 // 内容的轮播内容
 
    // 根据内容块的个数调整轮播点的个数
    
    // 获取到所有的这个里面的所有内容块
    let coins=document.querySelectorAll(".one li");
    
    // 获取右击点击按钮
    let rightbtn=document.querySelector(".onebox .rightbtn");
  

    // 单个内容块的宽度和边距的距离
    let coinWidth=310;
   
    // 获取一页的内容
    let onenr=document.querySelector(".onebox ul");

    let coinsNum=coins.length;
   
    // 整个一页的宽度是
     onenr.style.Width=(coins.lenght*coinWidth)+"px";

     // 计算最大页码
     let maxP=coinsNum*coinWidth/coinWidth;
    
    // 获取到轮播点
    let nrbannerDot=document.querySelector(".nrbannerDot");

   
    // 创建轮播点的div块
    // 用for循环内容块的个数决定轮播点的多少
    for(let i=0; i<coinsNum; i++){
         
      // 创建li
      let liObj=document.createElement("li");
      
      //用if判断。当时第一张图片时，让圆点显出来
      if(i==0){
        liObj.className="active";
      };
     
      // 将创建的li压入到轮播点中
      nrbannerDot.appendChild(liObj);

    }

     // 获取到所有的轮播小点
    let Dots=document.querySelectorAll(".nrbannerDot li");
console.log(Dots);

     // 设置变量页数
     let i=0;

     //声明每次移动一个块内容，每次移动的距离是
     let moveX=coinWidth;    

     // 设置右键点击动作
     
     rightbtn.onclick=function(){

        // 随着右键的点击，页数会加加
        i++;

       if(i>=coinsNum){

        i=coinsNum-1;
       };

        // 改变ul的margin-left值
        onenr.style.marginLeft=i*moveX*-1+"px";


       //改变轮播点的运动 

        // 用for循环把其他的轮播点的active去除掉
        for(let n=0; n<Dots.length;n++){

             Dots[n].className=" ";  
            }

        Dots[i].className="active";
        
     }


     // 获取到左侧点击按钮
     let leftbtn=document.querySelector(".onebox .leftbtn");

    // 绑定左侧按钮点击事件
     leftbtn.onclick=function(){

          i--;
      
        // 判断当到达第一页时，不能再向后移动
          
          if(i<=0){
            i=0;
          };

          // 改变ul的margin-left
          onenr.style.marginLeft=i*moveX*-1+"px";


          //改变轮播点的运动 

          // 用for循环把其他的轮播点的active去除掉
           for(let n=0; n<Dots.length;n++){

                   Dots[n].className=" ";
                 }

              // 给对应的轮播点加active类
              Dots[i].className="active";

         }


        // 点击轮播点动作
        // 用for去遍历所有的小点
        for(let j=0; j<Dots.length; j++){

          
          // 绑定小点的点击事件
          Dots[j].onclick=function(){

            // 点击小点之前，给所有的小点图片的类去除
            for(let i=0;i<Dots.length; i++){

              // 去除所有的类名
              Dots[i].className=" ";
              
            }

            // 点击到哪个小点，给哪个小点加对应的active类
            this.className="active";

            // 点击到哪个小点，给其对应的内容块加上active类，让其显示
            onenr.style.marginLeft=j*moveX*-1+"px";

          }

        }




        // 第二个内容块
        // 获取到第二个块里面的所有的内容块
        let twos=document.querySelectorAll("#two li");

        // 获取到点击右键
        let rightan=document.querySelector(".twobox .rightbtn");

        // 获取到点击左键
       let leftan=document.querySelector(".twobox .leftbtn");

        // 获取到轮播条
        let Dot=document.querySelector(".twoDot");

        let twosNum=twos.length;

        // 用for 循环去遍历内容块的个数去决定点的个数
        for(let i=0; i<twosNum; i++){


          // 建立点的div块
          let liObj=document.createElement("li");

          // 将这些建立的块追加进去轮播条
          Dot.appendChild(liObj);

          // 判断当是第一张图片时,显示出来圆点
          if(i==0){

            liObj.className="active";

            }

        };

        // 获取到所有的圆点
         let dians=document.querySelectorAll(".twoDot li");
            
         // 单个内容块的宽度和边距的距离
        let twosWidth=310;
       
        // 获取一页的内容
        let twonr=document.querySelector(".twobox ul");

        let twoNum=twos.length;
       
        // 整个一页的宽度是
         twonr.style.Width=(twos.lenght*twosWidth)+"px";

         // 计算最大页码
         let maxYe=twoNum*twosWidth/twosWidth;

         // 每次移动的距离
         let X=twosWidth;

        // 设置变量页数
        let z=0;

         //设置点击右键的绑定事件
         rightan.onclick=function(){

          z++;

          //用if判断到达最后一页时不能再移动
          if(z>=maxYe){
            z=maxYe-1;
          };

          //点击一次ul的margin-left要变化
          twonr.style.marginLeft=z*X*-1+"px";

          
          
           // 添加类名之前把其他的类名清除
           for(let i=0; i<twoNum; i++){

             dians[i].className=" ";

            
           }


          //其对应的点也加上active类名 
           dians[z].className="active";
             
     }

      //设置点击左键的绑定事件
         leftan.onclick=function(){

          z--;

          //用if判断到达第一页不能再移动
          if(z<=0){
            z=0;
          };
      
          //点击一次ul的margin-left要变化
          twonr.style.marginLeft=z*X*-1+"px";

          
           // 添加类名之前把其他的类名清除
           for(let i=0; i<twoNum; i++){

             dians[i].className=" ";
            
           }


          //其对应的点也加上active类名 
           dians[z].className="active";
             
     }

     // 设置点击小点事件
     
     // 用for循环去遍历出所有的圆点
     for(let i=0; i<dians.length; i++){

       // 绑定点击小点事件
       dians[i].onclick=function(){

        for(let j=0; j<dians.length; j++){

            dians[j].className=" ";

        }

        // 点击哪个小点给哪个小点加上类名
        this.className="active";

        // 调整这个页数对应的内容
        
        twonr.style.marginLeft=i*X*-1+"px";

       }

     }
     


     // 第三个内容块
    
        // 获取到第三个块里面的所有的内容块
        let threes=document.querySelectorAll("#three li");



        // 获取到点击右键
        let rightB=document.querySelector(".threebox .rightbtn");

        // 获取到点击左键
       let leftB=document.querySelector(".threebox .leftbtn");

        // 获取到轮播条
        let dot=document.querySelector(".threeDot");
        

        let threesNum=threes.length;
      
        // 用for 循环去遍历内容块的个数去决定点的个数
        for(let i=0; i<threesNum; i++){


          // 建立点的div块
          let liObj=document.createElement("li");

          // 将这些建立的块追加进去轮播条
          dot.appendChild(liObj);

       
          // 判断当是第一张图片时,显示出来圆点
          if(i==0){

            liObj.className="active";

            }

        };  

       
     
         // 获取到所有的圆点
         let dots=document.querySelectorAll(".threeDot li");
            
          // 单个内容块的宽度和边距的距离
        let threesWidth=310;
       
         // 获取一页的内容
        let threenr=document.querySelector(".threebox ul");

        let threeNum=threes.length;

       
       
        // 整个一页的宽度是
          threenr.style.Width=(threes.lenght*threesWidth)+"px";

          // 计算最大页码
        let maxye=threes.length*threesWidth/threesWidth;
       
         // 每次移动的距离
         let movex=threesWidth;

        // 设置变量页数
        let a=0;

          // 设置点击右键的绑定事件
         rightB.onclick=function(){

          a++;

          //用if判断到达最后一页时不能再移动
          if(a>=maxye){
            a=maxye-1;
          };

          //点击一次ul的margin-left要变化
         threenr.style.marginLeft=a*movex*-1+"px";

          
          
           // 添加类名之前把其他的类名清除
           for(let i=0; i<threeNum; i++){

             dots[i].className=" ";

            
           }


          //其对应的点也加上active类名 
           dots[a].className="active";
             
     }

      //设置点击左键的绑定事件
         leftB.onclick=function(){

          a--;

          //用if判断到达第一页不能再移动
          if(a<=0){
            a=0;
          };
      
          //点击一次ul的margin-left要变化
          threenr.style.marginLeft=a*movex*-1+"px";

          
           // 添加类名之前把其他的类名清除
           for(let i=0; i<threeNum; i++){

             dots[i].className=" ";
            
           }


          //其对应的点也加上active类名 
           dots[a].className="active";
             
     }

     // 设置点击小点事件
     
     // 用for循环去遍历出所有的圆点
     for(let i=0; i<dots.length; i++){

       // 绑定点击小点事件
       dots[i].onclick=function(){

        for(let j=0; j<dians.length; j++){

            dots[j].className=" ";

        }

        // 点击哪个小点给哪个小点加上类名
        this.className="active";

        // 调整这个页数对应的内容
        
        threenr.style.marginLeft=i*X*-1+"px";

       }
       
     }
     



     // 第四个内容块
    
        // 获取到第四个块里面的所有的内容块
        let fours=document.querySelectorAll("#four li");



        // 获取到点击右键
        let rightb=document.querySelector(".fourbox .rightbtn");
        // 获取到点击左键
       let leftb=document.querySelector(".fourbox .leftbtn");

        // 获取到轮播条
        let fourDot=document.querySelector(".fourDot");
        console.log(fourDot)

        let foursNum=fours.length;
       

        // 用for 循环去遍历内容块的个数去决定点的个数
        for(let i=0; i<foursNum; i++){


          // 建立点的div块
          let liObj=document.createElement("li");

          // 将这些建立的块追加进去轮播条
          fourDot.appendChild(liObj);

       
          // 判断当是第一张图片时,显示出来圆点
          if(i==0){

            liObj.className="active";

            }

        };  

    
     
         // 获取到所有的圆点
         let yuans=document.querySelectorAll(".fourDot li");

         console.log(yuans);
            
          // 单个内容块的宽度和边距的距离
        let foursWidth=296;
       
         // 获取一页的内容
        let fournr=document.querySelector(".fourbox ul");

        let fourNum=fours.length;

        console.log(foursNum);
       
        // 整个一页的宽度是
          fournr.style.Width=(fours.lenght*foursWidth)+"px";

          // 计算最大页码
        let maxSize=fours.length*foursWidth/foursWidth;
       
         // 每次移动的距离
         let moveY=foursWidth;

        // 设置变量页数
        let b=0;

          // 设置点击右键的绑定事件
         rightb.onclick=function(){

          b++;

          //用if判断到达最后一页时不能再移动
          if(b>=maxSize){
            b=maxSize-1;
          };

          //点击一次ul的margin-left要变化
         fournr.style.marginLeft=b*moveY*-1+"px";

          
          
           // 添加类名之前把其他的类名清除
           for(let i=0; i<threeNum; i++){

             yuans[i].className=" ";

            
           }


          //其对应的点也加上active类名 
           yuans[b].className="active";
             
     }

      //设置点击左键的绑定事件
         leftb.onclick=function(){

          b--;

          //用if判断到达第一页不能再移动
          if(b<=0){
            b=0;
          };
      
          //点击一次ul的margin-left要变化
          fournr.style.marginLeft=b*moveY*-1+"px";

          
           // 添加类名之前把其他的类名清除
           for(let i=0; i<threeNum; i++){

             yuans[i].className=" ";
            
           }


          //其对应的点也加上active类名 
           yuans[b].className="active";
             
     }

     // 设置点击小点事件
     
     // 用for循环去遍历出所有的圆点
     for(let i=0; i<yuans.length; i++){

       // 绑定点击小点事件
       yuans[i].onclick=function(){

        for(let j=0; j<yuans.length; j++){

            yuans[j].className=" ";

        }

        // 点击哪个小点给哪个小点加上类名
        this.className="active";

        // 调整这个页数对应的内容
        
        fournr.style.marginLeft=i*moveY*-1+"px";

       }
       
     }
       
          


// 小米家电选项卡

    // 先获取全部的菜单选项
    let cais=document.querySelectorAll(".textright li");

    // 获取全部的内容选项
    let neis=document.querySelectorAll(".nei li");

    // 用循环去遍历出所有的菜单
    cais.forEach(function(item,key){

      // 绑定鼠标移入事件
      item.onmouseover=function(){

        // 在建立一个循环遍历，在给每个内容加上active类之前，先去掉出去这个内容之外的所有neis的类名
        for(let i=0; i<neis.length; i++){

          neis[i].className="";
        }


        // 给对应的内容加上类名
        neis[key].className="active";

      }

    });



// 小米上部的下拉菜单

// 获取到所有的餐单
let  menus=document.querySelectorAll("#xiala li");



// 获取到这个下拉框
let xia=document.querySelector(".xiala2");
console.log(xia);


// 获取到所有的内容
let rongs=document.querySelectorAll(".xiala2 .rong");

// 设定绑定事件
// 先用循环去遍历所有的菜单
menus.forEach(function(item,key){

  // 绑定每一个的移入事件
  item.onmouseover=function(){

    console.log(item);

    // 鼠标移入当前这个菜单时对应的内容下来菜单现实
    
    // 将这个下拉框的状态现实
    xia.style.display="block";

    // 给这个下拉框添加一个动画状态
    xia.classList.add("show");

    //在现实这个对应的内容之前，先遍历所有的内容，将其他所有内容全部隐藏
    
    xia.style.height="232px";
    for(let i=0; i<rongs.length; i++){

    rongs[i].style.display="none";
    }

    rongs[key].style.display="block";

  }

  // 设定鼠标移出事件
    item.onmouseout=function(){

      // 下拉菜单隐藏
      // xia.style.display="none";

      xia.classList.add("hide");

      xia.classList.remove("show");
      xia.style.height="232px";
    }

});

// 下拉菜单经过
// 鼠标移入时
xia.onmouseover=function(){
  this.style.height="232px";
   this.classList.remove("hide");
  this.classList.remove("show");
 
}

// 鼠标移出时
xia.onmouseout=function(){
  this.classList.remove("show");
  this.classList.add("hide");
  this.style.height="0px";
}



// 视频点击下拉框
// 先获取各自的点击菜单区域
let shis=document.querySelectorAll(".shipin img");


// 获取到的视频弹出下拉框
let xiala3=document.querySelector(".xiala3");

// 获取大的透明背景
let big=document.querySelector(".xialabig");

// 获取到这个关闭按钮
let closes=document.querySelectorAll(".xiala3 .rong .cha");

console.log(closes);
// 获取到下拉框里面的所有内容
let nr=document.querySelectorAll(".xiala3 .rong");



// 设定绑定事件
// 先遍历出所有的点击菜单
shis.forEach(function(item,key){

  console.log(key);

    // 绑定每一个菜单的点击事件
    item.onclick=function(){


      big.style.display="block";
      big.classList.add("big");
      big.style.height="1000px";
      big.classList.remove("small");
      xiala3.style.display="block";
      xiala3.classList.add("shi");
      nr[key].classList.add("shi");

     //在现实这个对应的内容之前，先遍历所有的内容，将其他所有内容全部隐藏
     
    for(let i=0; i<nr.length; i++){

    nr[i].className="rong";
    }

     nr[key].className="rong active";

    }

});


// 遍历出所有的关闭按钮

// 绑定每一个关闭按钮的点击动作
closes.forEach(function(item,key){


  item.onclick=function(){

    // 关闭这个下拉大背景和下拉框
    

        xiala3.classList.add("yin");
        xiala3.style.display="none";
        big.classList.add("small");
        big.style.height="0px";
    
  }
});






        




     
     
    
    

    
      
  

  
    


   
   






 

    
    
	