import { useNavigate, useParams } from "react-router-dom";
import { useDeleteDataMutation, useGetAllResultQuery, useToggleVisibilityMutation } from "../queries/useCustomQuery";
import { useUserInfo } from "../zustand/useAuthStore";

const useTestResultPage = () => {
    const { userId } = useUserInfo();
    const { testid } = useParams();
    const navigate = useNavigate();

    const {
        data: userMBTIs,
        isLoading: userMBTIsLoading,
        isError: userMBTIsError,
        refetch,
    } = useGetAllResultQuery(testid, userId);

    const toggleMutation = useToggleVisibilityMutation();

    const handleToggle = (testObj) => {
        const newTestObj = { ...testObj, visibility: !testObj.visibility };
        toggleMutation.mutate({ testid: testid, testResultObj: newTestObj });
    };

    const deleteMutation = useDeleteDataMutation();

    const handleDelete = (testResultId) => {
        deleteMutation.mutate({ testid: testid, testResultId: testResultId });
    };
    const goToHome = () => {
        navigate("/");
    };
    return {
        userMBTIsLoading,
        userMBTIsError,
        refetch,
        goToHome,
        userMBTIs,
        userId,
        handleToggle,
        testid,
        handleDelete,
    };
};

export default useTestResultPage;
