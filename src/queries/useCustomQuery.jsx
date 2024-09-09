import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteTestResult, getAllTestResults, postMyTestResult, toggleTestResult } from "../apis/testApi";
import { useNavigate } from "react-router-dom";
import { queryKeys } from "./querykeys";

export const usePostMyTestMutation = (testid) => {
    const navigate = useNavigate();
    return useMutation({
        mutationFn: postMyTestResult,
        onSuccess: (data) => navigate(`/testresult/${testid}`, { state: data }),
        onError: (error) => console.log("error :>> ", error),
    });
};

export const useGetAllResultQuery = (testid, userId) => {
    return useQuery({
        queryKey: queryKeys.boardController.mbtis(),
        queryFn: () => getAllTestResults(testid, userId),
    });
};

export const useToggleVisibilityMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: toggleTestResult,
        onSuccess: () => queryClient.invalidateQueries(queryKeys.boardController.mbtis()),
        onError: (error) => console.log("error :>> ", error),
    });
};

export const useDeleteDataMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: deleteTestResult,
        onSuccess: () => queryClient.invalidateQueries(queryKeys.boardController.mbtis()),
        onError: (error) => console.log("error :>> ", error),
    });
};
