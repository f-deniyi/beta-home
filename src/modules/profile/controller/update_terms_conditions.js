import useUpdateManager from "../../../constants/controller_templates/put_controller_template";
import { useState, useEffect } from 'react'

export const UpdateTermsAndConditions = ({ initialType }) => {
    const [type, setType] = useState(initialType);
    const { updateCaller, isLoading, isSuccess, error } = useUpdateManager(
        type === 'general' ? `/terms/update` : `/terms/${type}/update`,
        'terms_and_conditions');
    const updateTermsAndConditionsCaller = async (details) => {
        try {
            await updateCaller(details);
        } catch (error) {
            // Handle error if necessary
            console.error("Update error:", error);
        }
    };
    useEffect(() => {
        setType(initialType);
    }, [initialType]);
    return {
        updateTermsAndConditionsCaller,
        isLoading,
        isSuccess,
        error
    };
};