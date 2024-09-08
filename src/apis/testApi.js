import axios from "axios";

export const testInstance = axios.create({
    baseURL: "http://localhost:5000",
});

export const getAllTestResults = async (userId) => {
    const response = await testInstance.get("/testResults");
    const filteredData = response.data.filter((el) => el.userId == userId || el.visibility);
    return filteredData;
};

export const toggleTestResult = async (testObj) => {
    await testInstance.patch(`/testResults/${testObj.id}`, testObj);
};

export const deleteTestResult = async (testId) => {
    await testInstance.delete(`/testResults/${testId}`);
};
