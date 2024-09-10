import axios from "axios";

const USERDATA_SERVER_URL = import.meta.env.VITE_TESTDATA_SERVER_URL;

export const testInstance = axios.create({
    baseURL: USERDATA_SERVER_URL,
});

testInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        alert("서버연결에 실패했습니다!  잠시후 재시도해주세요!");
        return Promise.reject(error);
    }
);

export const postMyTestResult = async ({ testTitle, resultObj }) => {
    await testInstance.post(`/${testTitle}`, resultObj);
};

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
