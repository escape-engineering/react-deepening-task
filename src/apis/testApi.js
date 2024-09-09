import axios from "axios";

export const testInstance = axios.create({
    baseURL: "http://localhost:5000",
});

export const getAllTestResults = async (testid, userId) => {
    const response = await testInstance.get(`/${testid}`);
    const filteredData = response.data.filter((el) => el.userId == userId || el.visibility);
    return filteredData;
};

export const toggleTestResult = async ({ testid, testResultObj }) => {
    await testInstance.patch(`/${testid}/${testResultObj.id}`, testResultObj);
};

export const deleteTestResult = async ({ testid, testResultId }) => {
    await testInstance.delete(`/${testid}/${testResultId}`);
};
