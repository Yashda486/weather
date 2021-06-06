const day=()=>{
    var weekday=new Array(7);
    weekday[0]="Sun";
    weekday[1]="Mon";
    weekday[2]="Tue";
    weekday[3]="Wed";
    weekday[4]="Thu";
    weekday[5]="Fri";
    weekday[6]="Sat";
    var d=new Date();
    let a=weekday[d.getDay()].toUpperCase();
    return a;
}
var date=()=>{
    let date =new Date();
    var month=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"]
    var m=month[date.getMonth()].toUpperCase();
    var n=date.getDate();
    return n+" "+m;
}
var time=()=>{
    let date=new Date();
    let f=date.toLocaleTimeString();
    return f;
}
var change=(a)=>{
    if(a>=21){
        return <i class="fas fa-sun fa-2x" style={{color:"orangered"}}></i>;
    }
    else if(a<21 && a>=13){
        return  <i class="fas fa-cloud-rain fa-2x" style={{color:"darkblue"}}></i>;
   
    }
    else {
        return <i class="fas fa-cloud-showers-heavy fa-2x" style={{color:"aquamarine"}}></i>;
        
    }    }


export {day,date,time,change};
