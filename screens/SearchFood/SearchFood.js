import React, { Component } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import Search from './style';
import axios from 'axios';
import plus from './../../assets/img/plus.png';
import loader from './../../assets/img/loader.gif';
import { BASE_URL, AUTH_TOKEN } from './../../constants'
import { Loader } from '../../Components';
import { getFoodData } from './../../utils/api'
// import Icon from 'react-native-vector-icons/FontAwesome';


const FoodItem = ({ food_name, food_description }) => {
    console.log("food_name", food_name)
    return (
        <Search.FootItemWrapper>
            <Search.FoodContent>
                <Search.FoodName>
                    {food_name}
                </Search.FoodName>
                <Search.FoodDesc numberOfLines={1}>
                    {food_description}
                </Search.FoodDesc>
            </Search.FoodContent>
            <TouchableOpacity>
                <Search.AddIcon source={plus} />
            </TouchableOpacity>
        </Search.FootItemWrapper >
    )
}
const EmptyFood = () => (
    <Search.EmptyScreenWrapper>
        <Text style={{ color: 'gray' }}>No recently added items</Text>
    </Search.EmptyScreenWrapper>
)

class SearchFood extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            foodData: [],
            pageNo: 0,
            isFetching: false,
            access_token: ''
        }
    }

    componentDidMount() {

    }
    handleSearch = (searchText) => {
        this.setState({
            searchText,
            isFetching: true
        }, () => {
            setTimeout(() => {
                this.getFood(0);
            }, 500);
        })

    }

    getFood = (pageNo) => {
        const { searchText, foodData, access_token } = this.state;
        getFoodData(searchText, pageNo, this.props.token).then(res =>
            this.setState({
                foodData: pageNo > 0 ? [...foodData, ...res] : res,
                pageNo,
                isFetching: false
            })
        ).catch(err => console.log(err))
    }
    render() {
        const { foodData, searchText, pageNo, isFetching } = this.state;
        console.log("foodData", foodData)
        return (
            <Search.SearchWrapper>
                <Search.SearchInput>
                    <TextInput style={{ fontSize: 16 }} placeholder="Search for food" onChangeText={this.handleSearch} value={searchText} />
                </Search.SearchInput>
                <View>
                    {isFetching &&
                        <View style={{
                            height: Dimensions.get('screen').height - 20,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Loader />
                        </View>
                    }
                    <FlatList
                        data={foodData}
                        renderItem={(item, index) => <FoodItem {...item.item} />}
                        ListEmptyComponent={() => <EmptyFood />}
                        onEndReachedThreshold={0.8}
                        onEndReached={() => this.getFood(pageNo + 1)}
                    />


                </View>

            </Search.SearchWrapper >
        )
    }
}

export default SearchFood;
