// Imports follow the format: external, shared, local
import React, {createContext, useCallback, useEffect, useState} from 'react';
import { Companies } from '../shared/payload';
import { AppState, CompanyListItem } from '../shared/types';


// Optional defaults
const appDefaults: AppState = {
    filters: [],
    setFilter: () => {},
    addCompany: () => {},
    companies: Companies,
};

// Begins
export const AppProviderContext = createContext(appDefaults);

export const AppProvider: React.FC = ({children}) => {
    const [filters, setFilter] = useState([])
    const [companies, setCompanies] = useState<CompanyListItem[]>(Companies);

    const addCompany = useCallback((newCompany: CompanyListItem) => {
        setCompanies([...companies]);
    },[])

    useEffect(() => {
      if(filters.length>0){
      let newCompanies = Companies;
    
      
      newCompanies = Companies.filter(function (el) {
        return el.requires.and.every(v => filters.includes(v))
      })
      
      let newCompanies2 =  newCompanies.filter(function (el) {
        return el.requires.or.every((el) => el.some(v => filters.includes(v))
        )
      })
 
      setCompanies(newCompanies2) }else{
        setCompanies(Companies)
      }
    }, [filters, setFilter])
  return (
    <AppProviderContext.Provider
      value={{
        filters,
        addCompany,
        setFilter,
        companies
      }}>
      {children}
    </AppProviderContext.Provider>
  );
};