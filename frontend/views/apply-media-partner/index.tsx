/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import axios from "axios";

type IMediaPartner = {
  userName: string;
  email: string;
  telegramID: string;
  twitterHandle: string;
  companyName: string;
  type: string;
  typeOfMedia: string;
  mediaHowToContribute: string;
};

const defaultUserInput = {
  userName: "",
  email: "",
  telegramID: "",
  twitterHandle: "",
  companyName: "",
  type: "media-partner",
  typeOfMedia: "",
  mediaHowToContribute: "",
};
const ApplyAsaMediaPartner = () => {
  const [userInputs, setUserInputs] = useState(defaultUserInput);
  const [dataStatus, setDataStatus] = useState({ crud: false, error: "" });
  const { crud } = dataStatus;
  const [message, setMessage] = useState("");
  const {
    userName,
    email,
    telegramID,
    twitterHandle,
    companyName,
    mediaHowToContribute,
  } = userInputs;

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUserInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const postData = async (data: IMediaPartner) => {
    const subData = { ...data, name: data.userName };
    setDataStatus(() => ({
      error: "",
      crud: true,
    }));

    try {
      const result = await axios.post("/api/participant", subData);
      setMessage(result.data.message);
      setDataStatus(() => ({
        error: "",
        crud: false,
      }));
    } catch (e: any) {
      setDataStatus(() => ({
        error: e?.response?.data?.message,
        crud: false,
      }));

      window.scroll({ top: 0, left: 0 });
    }
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    postData(userInputs);
  };

  return (
    <div className="mt-12">
      <div className="text-center">
        <h1 className="text-3xl font-semibold text-center text-gray-800">
          Media Partners' Application
        </h1>
        {!!dataStatus.error && (
          <span className="text-red-500 ">{dataStatus.error}</span>
        )}
      </div>

      <div className="p-10 mx-auto bg-white rounded-lg shadow md:w-3/4 lg:w-1/2">
        {!!!message && (
          <>
            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <label
                  htmlFor="userName"
                  className="block mb-2 font-bold text-gray-600"
                >
                  Name <span className="text-red-600">* </span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="userName"
                  onChange={handleChange}
                  placeholder="put in your full name"
                  className="w-full p-3 border border-gray-300 rounded shadow mb-"
                  value={userName}
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="twitter"
                  className="block mb-2 font-bold text-gray-600"
                >
                  Email <span className="text-red-600">*</span>{" "}
                </label>
                <input
                  type="email"
                  id="twitter"
                  name="email"
                  onChange={handleChange}
                  placeholder="Put in your name."
                  className="w-full p-3 border rounded shadow"
                  value={email}
                />
                {/* border-red-300  */}
                {/* <p className="mt-2 text-sm text-red-400">Email is required</p> */}
              </div>

              <div className="mb-5">
                <label className="block mb-2 font-bold text-gray-600">
                  Company Name{" "}
                </label>
                <input
                  type="text"
                  name="companyName"
                  placeholder="Put in your company name."
                  className="w-full p-3 border rounded shadow"
                  onChange={handleChange}
                  value={companyName}
                />
              </div>

              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
                  <div className="mb-5 ">
                    <label className="block mb-2 font-bold text-gray-600">
                      Telegram ID{" "}
                    </label>
                    <input
                      type="text"
                      name="telegramID"
                      placeholder="Put in your telegram ID"
                      className="w-full p-3 border rounded shadow"
                      onChange={handleChange}
                      value={telegramID}
                    />
                  </div>

                  <div className="mb-5">
                    <label className="block mb-2 font-bold text-gray-600">
                      Twitter Handle{" "}
                    </label>
                    <input
                      type="text"
                      name="twitterHandle"
                      placeholder="Put in your twitter handle"
                      className="w-full p-3 border rounded shadow"
                      onChange={handleChange}
                      value={twitterHandle}
                    />
                  </div>
                </div>
              </div>

              <div className="mb-5 ">
                <label className="block mb-2 font-bold text-gray-600">
                  {" "}
                  What type of media is it?
                </label>
                <div className="flex flex-wrap items-center p-3 mt-2">
                  <div className="mr-6">
                    <input
                      id="typeOfMedia-print"
                      type="radio"
                      className="form-radio"
                      name="typeOfMedia"
                      value="print"
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="typeOfMedia-print"
                      className="inline-flex items-center"
                    >
                      <span className="">Print</span>
                    </label>
                  </div>
                  <div className="mr-6">
                    <input
                      id="typeOfMedia-broadcast"
                      type="radio"
                      className="form-radio"
                      name="typeOfMedia"
                      value="broadcast"
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="typeOfMedia-broadcast"
                      className="inline-flex items-center"
                    >
                      <span className="ml-2">Broadcast</span>
                    </label>
                  </div>
                  <div className="mr-6">
                    <input
                      id="typeOfMedia-digital"
                      type="radio"
                      className="form-radio"
                      name="typeOfMedia"
                      value="digital"
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="typeOfMedia-digital"
                      className="inline-flex items-center"
                    >
                      <span className="ml-2">Digital</span>
                    </label>
                  </div>

                  <div>
                    <input
                      id="typeOfMedia-others"
                      type="radio"
                      className="form-radio"
                      name="typeOfMedia"
                      value="others"
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="typeOfMedia-others"
                      className="inline-flex items-center"
                    >
                      <span className="ml-2">Others</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="mb-5">
                <label className="block mb-2 font-bold text-gray-600">
                  How will you like to contribute?{" "}
                  <span className="text-red-600">*</span>{" "}
                </label>
                <textarea
                  name="mediaHowToContribute"
                  value={mediaHowToContribute}
                  onChange={handleChange}
                  className="block w-full p-3 mt-1 border rounded shadow form-textarea"
                  rows={2}
                  placeholder="Enter some long form content."
                ></textarea>
              </div>

              <button
                disabled={crud}
                className="block w-full p-4 font-bold text-white bg-blue-500 rounded-lg"
              >
                {crud ? "Sending..." : "Submit"}
              </button>
            </form>
          </>
        )}

        {!!message && message}
      </div>
    </div>
  );
};

export default ApplyAsaMediaPartner;
