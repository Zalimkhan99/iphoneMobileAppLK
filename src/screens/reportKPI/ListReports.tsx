import React, {Component} from 'react';
import { Text, View} from 'react-native';
import {NavigationScreenProp} from "react-navigation";
import AsyncStorage from "@react-native-community/async-storage";
import API from "../../utilities/Authorization/API";
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

import reportKPIStyle from "../../res/commonStyles/reportKPIStyle";
interface TodoProps {
    navigation: NavigationScreenProp<string>;
}
interface TodoState {
    LoginUser?: string|null
    DataJSON?: any
}

export class ListReports extends React.Component<TodoProps, TodoState,{ navigation: any }> {
    constructor(props: TodoProps) {
        super(props);
        this.state = {LoginUser: '', DataJSON: []}
    }
    getUserName(){
        AsyncStorage.getItem('LoginUser').then((LoginUser)=>{
            this.setState({LoginUser:LoginUser})
        })
    }
    createURLHTTP(){
        let url:string = API("kpiuserlk/"+this.state.LoginUser);
        console.log(url)
        return url
    }
    async sendHTTPRequest(){
        await fetch(this.createURLHTTP(), {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((responseJSON) => {
                console.log(responseJSON)
                this.setState({
                    DataJSON: responseJSON
                })
                //alert(JSON.stringify(this.state.DataJSON))
            })
            .catch((error) => {
                console.log(error);
                this.sendHTTPRequest()
            })
    }

    componentDidMount(): void {
        this.getUserName()
        setTimeout(()=>{
            this.sendHTTPRequest()
        },1000)
    }
    render(): React.ReactNode {
        console.log(this.state.DataJSON)
        let elemList:any = this.state.DataJSON
        console.log(elemList);
        let listItem = elemList.map((element:any, index:any) =>(
            <View >

                <TouchableOpacity
                    style={reportKPIStyle.listReport}
                    onPress={()=>{
                        if(element.ReportKPI =="Премия с продаж + партнерские" ) this.props.navigation.navigate("Отчет KPI", );
                        else if(element.ReportKPI =="Мастера сервисного центра") this.props.navigation.navigate("Отчет KPI Сервисный центр", );
                        else if(element.ReportKPI == "Департамент снабжения ежемесячный") this.props.navigation.navigate("Отчет KPI Департамент Снабжения")
                        else alert("Будет доступен позже!")
                    }}
                >
                    <Text style={reportKPIStyle.textInReportButton} key={index}>{element.ReportKPI}</Text>
                </TouchableOpacity>
            </View>

        ))
        return (
            <View>
                <Text style={reportKPIStyle.textHeader}> Доступные отчеты:</Text>
                {listItem}
            </View>

        );
    }
}
export default ListReports
