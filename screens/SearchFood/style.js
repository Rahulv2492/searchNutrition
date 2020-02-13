import styled from 'styled-components/native';
import { View, Text, TextInput, FlatList, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';

const Search = {
    SearchWrapper: styled.View`
        align-items:center
    `,
    SearchInput: styled.View`
        height:40px;
        width:90%;
        border-radius:5;
        background-color:#ededed;
        padding-horizontal:20px;
        justify-content:center;
    `,
    EmptyScreenWrapper: styled.View`
        height: ${Dimensions.get('screen').height - 200};
        justify-content: center
    `,
    FootItemWrapper: styled.View`
        flex-direction: row;
        justify-content: space-between;
        padding-vertical: 20;
        border-bottom-width: ${StyleSheet.hairlineWidth};
        border-bottom-color: gray;
        width: 90%;
        align-self: center
    `,
    FoodContent: styled.View`
        width:90%
    `,
    FoodName: styled.Text`
        font-weight:bold
    `,
    FoodDesc: styled.Text`
        font-size: 12;
        color: gray;
        margin-top: 4
    `,
    AddIcon: styled.Image`
        height: 25;
        width: 25 
`
}


export default Search;