import {StyleSheet,} from 'react-native';
const reportKPIStyle = StyleSheet.create({
    GlContainer: {
        flex: 1,
        padding: 5,
    },
    container: {
        flex: 2,
        flexDirection:'row',
        borderBottomWidth:1,
        borderBottomColor:'#C0C0C0',
    },
    borderTable:{
        flex: 3,
        borderWidth:1,
        padding:2,
    },
    textDefault:{
        textAlign:'center',
        fontStyle: 'normal',
        fontSize: 14,
    },

    greenText:{
        color:'#1BB55C',
    },
    blueText:{
        color:'#0E4DA4',
    },
    blueText1:{
        color:'#0099CC',

    },
    blackText:{
        color:'#000',
        fontWeight:'bold'
    }
    ,
    yellowText:{
        color:"#FF8C00"
    },
    purpleText:{
        color:"#cc00ff",
    },
    redText:{
        color:"#ff0000"
    },

    listReport:{
      borderBottomWidth:1,
        backgroundColor:'#ccffff',
        width:'100%',
        padding: 5,
    },
    textInReportButton:{
       // fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 18,
        textAlign: "center",
       // color:'#fff',
    },
    textHeader:{
      //  fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 18,

        //textAlign: "center",
    }




})

export default reportKPIStyle;
