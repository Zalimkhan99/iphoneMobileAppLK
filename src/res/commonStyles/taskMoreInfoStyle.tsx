import {StyleSheet,} from 'react-native';
const taskInfo = StyleSheet.create({
    container: {
        flex: 1,
    },
    globalBlockMoreTaskInfo:{
        borderWidth: 1,
        borderColor:'#fff',
        backgroundColor: '#fff',
        width:340,
        margin :10,
        color:'black',
    },

    blocksInTasks:{
        flexDirection:'row',
        justifyContent:"space-between",
    },

    statusAndNumberTask:{

    },
    taskName:{
        borderColor:'silver',
        borderBottomWidth:1,
        borderTopWidth:1,
        marginBottom:5,
    },
    customerAndExecutor:{
        color:'silver',
    },
    blockTaskPeriodOfExecution:{
        flexDirection:'row',
        justifyContent:"space-between",
    },
    PeriodOfExecution:{
        marginTop:6,
    },
    infoTaskAppointment:{
        marginTop:6,
    },
    infoTaskPrioritet:{
        marginTop:6,
    },

    infoTaskHourse:{
        marginTop:6,
    },

    commentsBlock:{
        padding:10,
    },
    comments:{
        fontSize: 14,
        //fontFamily: 'Inter',
    },
    commentsUsers:{
        fontSize: 12,
        color:'#666666',
        //fontFamily: 'Inter',
    },
    commentsHead:{
        fontSize: 14,
        fontWeight: '600',
        //fontFamily: 'Inter',
        marginBottom:20,
    },


    strStyleTaskDescriptoin:{
        fontSize: 14,
        padding:5,
        borderTopWidth: 1,
        borderBottomWidth: 1,
       // fontFamily: 'Inter',
        borderColor:'#666666',
        marginBottom:10,
    },
    sendMessageStyle :{
        borderWidth: 1,
        width:290,
        marginBottom:5,
        borderColor:'#666666',
    },
    buttonSendComment:{
        backgroundColor:'green',
        width:290,
        height:30,
    },
    textInButtonSend:{
        top:6,
        //fontFamily: 'Inter',
        textAlign:'center',
        color:'#fff'
    }

})
export default taskInfo;
