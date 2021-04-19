export interface OrOperations{
    
}

export interface ConstraintOperations {
    or: String[][],
    and: String[]
}

export interface CompanyListItem {
    name: String;
    requires: ConstraintOperations
}

export interface AppState {
    filters: String[],
    addCompany: (value: CompanyListItem) => void,
    setFilter: (value: string[]) => void,
    companies: CompanyListItem[]
}

export interface Filters {

}