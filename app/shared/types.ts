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