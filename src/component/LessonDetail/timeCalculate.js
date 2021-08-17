import moment from "moment";

const restTime = endDate => {
    var startDate =moment().format('YYYY-MM-DD hh:mm:ss');
    var s = startDate.split("");
    var e = endDate.split("");
    var s_num = 0;
    var e_num = 0;
    for(var i=0;i<16;i++){
        if(i==4||i==7||i==10||i==13)continue;
        if(i<10){
            s_num += (s[i]-'0')*24*60;
            e_num += (e[i]-'0')*24*60;
        }
        if(i>10&&i<13){
            s_num += (s[i]-'0')*60;
            e_num += (e[i]-'0')*60;
        }
        if(i>13){
            s_num += s[i]-'0';
            e_num += e[i]-'0';
        }
    }
    return e_num -s_num;
}

export default restTime;