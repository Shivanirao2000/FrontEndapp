import React, { Component } from 'react';
import LOGO from '../iconComponents/Logo';
import View from 'react';

export default class Logoview extends Component {
    render() {
        return (
            <div>
               <View style={{width:100,height:100,backgroundColor:'white',borderRadius:50}}>
                   <LOGO/>
                   </View> 
            </div>
        )
    }
}
