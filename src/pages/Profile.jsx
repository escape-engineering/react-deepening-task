import { useEffect } from "react";
import defaultProfile from "../asset/defaultProfile.png";
import useProfilePage from "../hooks/useProfilePage";

const Profile = () => {
    const {
        getProfileData,
        isUpdating,
        avatar,
        nickname,
        userId,
        toggleIsUpdating,
        updatedImgFile,
        handleUpdatedImgFile,
        updateUserInfo,
        updatedNickname,
        handleupdatedNickname,
    } = useProfilePage();

    useEffect(() => {
        getProfileData();
    }, []);
    return (
        <>
            {!isUpdating ? (
                <div className="flex flex-col justify-center items-center gap-3">
                    <img
                        className="w-[300px] h-[300px] object-fill"
                        src={avatar ? avatar : defaultProfile}
                        alt="유저 프로필 이미지"
                    />
                    <p>닉네임: {nickname}</p>
                    <p>ID: {userId}</p>
                    <button
                        className="border-solid border-[#dfdfdf] border-4 rounded-xl hover:bg-slate-200 p-1"
                        onClick={toggleIsUpdating}
                    >
                        수정하기
                    </button>
                </div>
            ) : (
                <form className="flex flex-col justify-center items-center gap-3" onSubmit={(e) => updateUserInfo(e)}>
                    {/* //TODO - 드래그드롭으로 이미지 직접넣기 */}
                    <img
                        className="w-[300px] h-[300px] object-fill"
                        src={updatedImgFile ? URL.createObjectURL(updatedImgFile) : avatar}
                    />
                    <label
                        htmlFor="userProfileInput"
                        className="px-2 w-[180px] h-[100px] border-solid border-[#dfdfdf] border-4 rounded-xl flex text-center items-center"
                    >
                        클릭, 파일 드롭으로 추가해주세요!
                    </label>
                    <input
                        type="file"
                        id="userProfileInput"
                        accept="image/jpeg,image/jpg,image/png"
                        onChange={handleUpdatedImgFile}
                        className="w-0 h-0"
                    />
                    <div className="flex flex-row gap-2 justify-center items-center">
                        <label>닉네임</label>
                        <input
                            type="text"
                            value={updatedNickname}
                            placeholder={`${nickname}`}
                            onChange={handleupdatedNickname}
                            className="h-[30px] border-solid border-[#dfdfdf] border-4 rounded-xl indent-2 py-4"
                        />
                    </div>
                    <p>ID: {userId}</p>
                    <div className="flex flex-row justify-center items-center gap-4">
                        <button
                            type="button"
                            onClick={(e) => toggleIsUpdating(e)}
                            className="border-solid border-[#dfdfdf] border-4 rounded-xl hover:bg-slate-200 p-1"
                        >
                            취소
                        </button>
                        <button
                            type="form"
                            className="border-solid border-[#dfdfdf] border-4 rounded-xl hover:bg-slate-200 p-1"
                        >
                            수정완료
                        </button>
                    </div>
                </form>
            )}
        </>
    );
};

export default Profile;
