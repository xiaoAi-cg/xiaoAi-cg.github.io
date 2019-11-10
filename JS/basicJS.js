/**右导航栏按钮点击事件
 * 第一个按钮：图片切换功能（教学模式&考核模式）
 * 第二个按钮：任务详情
 * 第三个按钮：暂存
 * 第四个按钮：退出该房间
 */
window.onload = function(){
    var button1 = document.getElementById('mode_bt');
    var button2 = document.getElementById('assignment_bt');
    var button3 = document.getElementById('pause_bt');
    var button4 = document.getElementById('exit_bt');
    var onOff = true; //控制图片切换

    button1.onclick = function(){
        if(onOff){
            button1.src = 'Resources/right_bar10.png';
            onOff = false;
        }else{
            button1.src = 'Resources/right_bar1.png';
            onOff = true;
        }
    };
	
	button2.onclick=function(){
		var pop=document.getElementsByClassName('rectangle');
        pop[0].setAttribute('class', 'rectangle show');
		
		document.getElementById('pop_close_bt').onclick=function(){
			pop[0].setAttribute('class', 'rectangle');
		};
	};
	
	button3.onclick=function(){
		//暂存进度
	};
	
	button4.onclick=function(){
		//退出平台
	};
};

function map_prompt(){
   //小地图弹出窗口内容
}

/**点击右下角提示按钮屏幕正上方显示信息提示框，间隔一段时间后自动消失
 * @param message 提示信息(根据题库中内容进行设置)
 * @param time 消失时间
 */

function info_prompt(message,time)
{
	 $('<div>')
        .appendTo('body')
        .addClass('alert alert-info')
        .html(message)
        .show()
        .delay(time)
        .fadeOut();
}

/* 点击下拉菜单中选择项更改房间名称*/
function changeRoomName(){
        var room1 = document.getElementById('room1');
	    var room2 = document.getElementById('room2');
        var room3 = document.getElementById('room3');
	    var room4 = document.getElementById('room4');
        var room5 = document.getElementById('room5');
	    var room6 = document.getElementById('room6');
        var room7 = document.getElementById('room7');
	    var room8 = document.getElementById('room8');
        var span = document.getElementById('roomName');
        var roomName = ['涉密工作机构','涉密人员教育','涉密计算机机房','计算机网络','文印室','涉密文件印刷','绝密级文件','核心秘密文件'];
	
        room1.onclick=function(){
			span.innerHTML=roomName[0];
		};
        room2.onclick=function(){
			span.innerHTML=roomName[1];
		};
        room3.onclick=function(){
			span.innerHTML=roomName[2];
		};
        room4.onclick=function(){
			span.innerHTML=roomName[3];
		};
        room5.onclick=function(){
			span.innerHTML=roomName[4];
		};
        room6.onclick=function(){
			span.innerHTML=roomName[5];
		};
        room7.onclick=function(){
			span.innerHTML=roomName[6];
		};
        room8.onclick=function(){
			span.innerHTML=roomName[7];
		};
    }