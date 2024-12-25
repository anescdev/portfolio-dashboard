import CompanyItem from "@components/items/CompanyItem";
import { Company } from "@context/company/models/company.model";
import { findCompany } from "@context/company/service";
import { useEffect, useState } from "react";
import styles from "./CompanyList.module.css";

export default function CompanyList() {
    const [companies, setCompanies] = useState<Company[]>([]);

    const onDeleteItem = (companyId: number) => {
        return () => {
            setCompanies(companies => companies.filter(company => company.id !== companyId))
        }
    }
    useEffect(() => {
        findCompany(1, 25).then(companies => setCompanies([...companies]));
    }, [])

    return (
        <ul className={`${styles.companyList}`}>
            {companies.map(company => <CompanyItem 
                key={company.id} 
                id={company.id} 
                name={company.name} 
                onDelete={onDeleteItem(company.id)} />)}
        </ul>
    );
}