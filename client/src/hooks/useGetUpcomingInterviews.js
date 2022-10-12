import { useQuery } from "react-query";
import axios from "axios";

export default function useGetUpcomingInterviews() {
  return useQuery("interviews", () => {
    return axios.get(`https://interview-scheduler-510.herokuapp.com/api/interviews/upcoming`).then((res) => res.data);
  });
}
