function tab(tabID,box){  
        $(tabID).click(function(){  
            $(tabID).removeClass('active'); //先将所有同级去掉active    
            $(box).css('display','none');   //所有同级box隐藏   
            $(this).addClass('active');   //当前li显示
            $(box).eq($(this).index()).css('display','block');  
            
        });  
    }  
    $(document).ready(function(){  
        //选项卡  
        tab("#TAB li",'.box1');
        tab("#tab001 li",'.box2');
        tab("#tab011 li",'.box3');
        tab("#tab021 li",'.box3');
        tab("#tab002 li",'.box2');  
        tab("#tab022 li",'.box3'); 
        tab("#tab003 li",'.box2'); 
        tab("#tab033 li",'.box3'); 
    });  
