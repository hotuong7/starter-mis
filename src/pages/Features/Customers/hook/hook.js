import version1 from '../components/formVersion/version1';
import version2 from '../components/formVersion/version2';
import data from '../services/form_fields.json';
import dataCustomer from '../services/customer.json';

export function useItem({id}) {
    const initFields = () => {
        console.log(id)
        const customer = dataCustomer.find((d) => d.id === id);
        const version = data.find((d) => !d.to || (d.from <= customer.created_at && d.to >= customer.created_at));
        if (version.version === 1) {
            return version1(customer);
        }
        return version2(customer);
    };
    return { initFields }
}