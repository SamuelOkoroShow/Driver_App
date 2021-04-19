// Imports follow the format: external, shared, local
import React, {useContext, useEffect, useMemo, useState} from 'react'
import styled from 'styled-components/native'
// RecycledList needed for large data outputs
import {RecyclerListView, DataProvider, LayoutProvider} from 'recyclerlistview';
import Icon from 'react-native-vector-icons/Ionicons';
import { Dimensions } from 'react-native';

import { bdazzled, forgra, oxford, platinum, shadow_blue } from '../shared/colors'
import { Add, Body, Container, H1 } from '../shared/styles';
import { AppProviderContext } from '../global';
import { CompanyListItem } from '../shared/types';
import { appartment, bike, car2, car3,car4, car5,flat, garage, house,liability, massage, motorcycle, motorInsurance, propertyInsurance, scooter, storage, drivers } from '../shared/constraints';
const constraints = [appartment, bike, car2, car3, car4, car5, drivers, flat, garage, house, liability, massage, motorcycle, motorInsurance, propertyInsurance, scooter, storage ]


const {width} = Dimensions.get('window');


const CompanyViewItem = styled.View`
    height: 130px;
    width: 100%;
    border-bottom-width: 1px;
    justify-content: center;
    border-color: ${shadow_blue};
    padding-left: 10px;
    padding-right: 10px;
`

const FilterRow = styled.View`
    flex-direction: row;
    align-items: center;
    height: 70px;
    border-bottom-width: 1px;
    border-color: ${bdazzled};
`
const ConstraintList = styled.FlatList`

`
const ActiveFilter = styled.TouchableOpacity`
    height: 70px;
    background-color:${bdazzled};
    padding: 0px 20px 0px 20px;
    justify-content:center;

`
const InActiveFilter = styled.TouchableOpacity`
    height: 70px;
    background-color:${oxford};
    padding: 0px 20px 0px 20px;
    justify-content:center;

`
const Overlay = styled.View`
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: ${forgra};
`

const defaultFilters = [bike, drivers]


const JobBoard:React.FC = () => {
    const appState = useContext(AppProviderContext);
    // Data provider needed for recycledList.
    const dataProvider = useMemo(
        () =>
          new DataProvider((r1: any, r2: any) => {
            return r1 !== r2;
          }),
        [],
      );
    const [recycledData, setRecycledData] = useState<any>(
        dataProvider.cloneWithRows([]),
      );
    const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false); 
    
    useEffect(() => {
        setRecycledData(
            dataProvider.cloneWithRows([
              ...appState.companies
            ]))
    }, [appState.companies])

    const _renderItem = (type: any, data: CompanyListItem) => (<CompanyViewItem>
        <H1>{data.name}</H1>
        {(data.requires.or.length === 0)?(
               <Body>(none)</Body>
            ):null
        }
        <Body>{data.requires.or.map((val, index) => {

            
            return `(${val.map((el, index) => {
                if(index >= val.length-1){
                    return el
                }
                return `${el} or `
            }).join(' ')})`})
            }</Body>
        <Body>{data.requires.and.map((val) => {return val }).join(', ')}</Body>
    </CompanyViewItem>)
    

    const _renderConstraints = (data) => {
        if(appState.filters.includes(data.item)){ 
            function removeFilter(item) {
                var remover: String[] = []
                remover = appState.filters.filter(val => val !== item);
                appState.setFilter(remover);
            }
            return(<ActiveFilter key={data.item} onPress={() => removeFilter(data.item)}>
                <Body>{data.item}</Body>
            </ActiveFilter>)
        }
        return(<InActiveFilter key={data.item} onPress={() => appState.setFilter([...appState.filters, data.item])}>
            <Body>{data.item}</Body>
        </InActiveFilter>)
    }

const _layoutProvider = new LayoutProvider(
    () => 80,
    (type: any, dim: {height: number; width: number}) => {
      dim.height = 130;
      dim.width = width;
    },
  );
    
    return (
        <Container>
            <FilterRow>
                <Add
                    onPress={() => {setIsFilterOpen(true); (appState.filters.length<1)?appState.setFilter(defaultFilters):null}}
                >
                    <Icon
                        name = "add"
                        color= {platinum}
                        size = {30}
                    />
                </Add>
                <Add
                    onPress={() => appState.setFilter(defaultFilters)}
                >
                    <Body>Apply Filters</Body>
                </Add>
                <Add
                    onPress={() => appState.setFilter([])}
                >
                    <Body>Show All</Body>
                </Add>
            </FilterRow>
            <RecyclerListView
                dataProvider={recycledData}
                rowRenderer={_renderItem}
                layoutProvider={_layoutProvider}
            />
            {isFilterOpen? (<Overlay>
                <Add onPress={() => setIsFilterOpen(false)}>
                    <Icon
                        name = "close"
                        color= {platinum}
                        size = {30}
                    />
                </Add>
                <ConstraintList 
                    data = {constraints}
                    renderItem = {_renderConstraints}
                    keyExtractor={(item, index) => index.toString()}
                />
            </Overlay>):null}
        </Container>
    )
}

export default JobBoard
