import axios from "axios";

export const testInstance = axios.create({
    baseURL: "http://localhost:5000",
});

export const getTargetTestResults = async () => {
    const response = await testInstance.get(`/testResults`);
    return response.data;
};

export const postMyTestResult = async (result, userId) => {
    const response = await testInstance.post(`/testResults`, { userId, result, visibility: false });
    return response.data;
};

export const toggleTestResult = async (testId, testObj) => {
    const response = await testInstance.patch(`/testResults/${testId}`, testObj);
    return response.data;
};

export const deleteTestResult = async (testId) => {
    const response = await testInstance.delete(`/testResults/${testId}`);
    return response.data;
};
