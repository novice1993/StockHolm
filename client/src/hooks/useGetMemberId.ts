import { useSelector } from "react-redux";
import { useQuery } from "react-query";
import { StateProps } from "../models/stateProps";
import axios from "axios";

const url = "http://ec2-3-34-137-99.ap-northeast-2.compute.amazonaws.com:8080/members";

const useGetMemberId = () => {
  const islogin = useSelector((state: StateProps) => state.login);
  const login = islogin === 1;

  const { data, isLoading, isError } = useQuery("memberId", getMemberId, {
    enabled: login,
    staleTime: Infinity,
    cacheTime: Infinity,
  });

  return { memberId: data, memberIdLoading: isLoading, memberIdError: isError };
};

export default useGetMemberId;

const getMemberId = async () => {
  const accessToken = localStorage.getItem("accessToken");

  const options = {
    headers: {
      Authorization: `${accessToken}`,
      "Content-Type": "application/json",
    },
  };

  const respone = await axios.get(url, options);
  const memberId = await respone.data.memberId;
  return memberId;
};
