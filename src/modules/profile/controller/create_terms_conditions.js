import usePostManager from "../../../constants/controller_templates/post_controller_template";
import { useState, useEffect } from 'react'

const CreateTermsAndCondtionsManager = ({ initialType }) => {
    const [type, setType] = useState(initialType);
    const { postCaller, isLoading, isSuccess, error, data } = usePostManager(
        type === 'general' ? `/terms/create` : `/terms/${type}/create`
        ,
        ["terms_and_conditions"]
    );
    const createTermsAndCondtionsController = async (details) => {
        try {
            await postCaller(details);
        } catch (error) {
            // Handle error if necessary
            console.error("post error:", error);
        }
    };
    useEffect(() => {
        setType(initialType);
    }, [initialType]);

    return {
        createTermsAndCondtionsController,
        data,
        isLoading,
        isSuccess,
        error,
    };
};
export default CreateTermsAndCondtionsManager;